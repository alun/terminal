# Lighttable terminal plugin

Implemets several routines on top of [Butterfly](https://github.com/paradoxxxzero/butterfly)
so you need to have it on your path first

## Installation

Install via LT plugin manager, use Cmd+T to open a new tab with terminal. This will start background butterfly server if required.

There is "Terminal: New" command also availiable for that.

## TODO

This is very initial version, there are some bugs and missing featrues.

* prevent terminal from reconnecion when moving a tab
* forward focus to terminal when open terminal, when switching to other app and then to LT, 
  when switching between tabs
* make ssh agent work, currently ssh agent is disconnected 
* enable autologin and open terminal in the current workspace dir
* add ability to select color schemes
* add ability to set motd message
