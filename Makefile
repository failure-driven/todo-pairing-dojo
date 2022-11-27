PROJECT := todo-pairing-dojo

default: build

.PHONY: build master 1 2 lol n

build: 
	bin/full-build

master:
	git checkout .
	git clean -fd
	git checkout master

1:
	git checkout .
	git clean -fd
	git checkout demo/failing-due-to-order

2:
	git checkout .
	git clean -fd
	git checkout demo/no-delete

lol:
	ls -lrt ~/.lolcommits/todo-pairing-dojo | tail -1 | awk '{printf sprintf("<img style=\"height: 100vh; display: block; margin: auto;\" src=\"/Users/michael/.lolcommits/todo-pairing-dojo/%s\">", $$9)}' > ~/lolcommits.html && open ~/lolcommits.html

# n for notifications
n:
	bin/notifications.rb

