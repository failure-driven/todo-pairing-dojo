PROJECT := todo-pairing-dojo

default: build

.PHONY: build master demo1 demo2

build: 
	bin/full-build

master:
	git checkout .
	git checkout master

demo1:
	git checkout .
	git checkout demo/failing-due-to-order

demo2:
	git checkout .
	git checkout demo/no-delete

