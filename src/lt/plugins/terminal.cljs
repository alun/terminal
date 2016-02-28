(ns lt.plugins.terminal
  "Implements terminal within lighttable on top of butterfly terminal"
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.objs.browser :as browser])
  (:require-macros [lt.macros :refer [defui behavior]]))


(declare butterfly-server)

;;*********************************************************
;; Special terminal browser (no nav bar)
;;*********************************************************

(object/object* ::terminal-browser
                :name "Terminal"
                :tags #{:terminal-browser}
                :url "about:blank"
                :init (fn [this]
                        (if-let [url (:addr @butterfly-server)]
                          (do
                            (println "Navigating to" url)
                            (js/setTimeout #(object/raise this :navigate! url) 0))
                          (do
                            (object/raise butterfly-server :start)))
                        [:div#browser
                         (let [elem (browser/webview this)
                               style (.-style elem)]
                           (set! (.-bottom style) 0)
                           elem)]))


;;*********************************************************
;; Butterfly server background python process
;;*********************************************************

(object/object* ::butterfly-server
                :name "butterfly server"
                :tags #{:butterfly-server}
                :init (fn [this]))

(behavior ::start-server
          :triggers #{:start}
          :reaction (fn [this]
                      (println "Starting new butterfly server instance")
                      (proc/exec {:obj this
                                  :command "butterfly.server.py --unsecure --port=0 --login=False"})))

(behavior ::stop-server
          :triggers #{:close}
          :reaction (fn [this]
                      (object/assoc-in! this [:addr] nil)
                      (proc/kill-all (:procs @this))))

(behavior ::restart-server
          :triggers #{:proc.exit}
          :reaction (fn [this]
                      (when-not (-> @this :addr nil?)
                        (println "Restaring butterfly server")
                        (object/raise this :start))))

(behavior ::capture-butterfly-address
          :triggers #{:proc.error}
          :reaction (fn [this out]
                      (if-not (= (type out) js/String)
                        (let [out (.decode (js/TextDecoder. "utf-8") out)
                              addr (re-find #"http://localhost:\d+/" out)]
                          (object/assoc-in! this [:addr] addr)
                          (println "Butterfly has started on" addr)
                          (doseq [obj (object/by-tag :terminal-browser)]
                            (println "Navigating to", addr)
                            (object/raise obj :navigate! addr)))
                        (doseq [t (object/by-tag :terminal-browser)]
                          (object/raise t :close)))))

(behavior ::stop-server-on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (println "Terminal closed" (:lt.object/id @this))
                      (object/destroy! this)
                      (let [browsers (object/by-tag :terminal-browser)]
                        (when (nil? (seq browsers))
                          (object/raise butterfly-server :close)))))

(defonce butterfly-server (object/create ::butterfly-server))

(cmd/command {:command :terminal.new
              :desc "Terminal: new"
              :exec (fn []
                      (let [terminal-browser (object/create ::terminal-browser)]
                        (tabs/add-or-focus! terminal-browser)))})
