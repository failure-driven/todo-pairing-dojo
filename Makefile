PROJECT := todo-pairing-dojo

default: build

.PHONY: build demo1 demo2

build: 
	bin/full-build

demo1:
	git checkout .
	git checkout demo/failing-due-to-order

demo2:
	git checkout .
	git checkout demo/no-delete

