PROJECT := todo-pairing-dojo

default: build

.PHONY: build master 1 2

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

