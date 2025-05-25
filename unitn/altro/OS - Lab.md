## make
> `make <target1> <target2> ...`

Makefile:
```
bin.out: main.o lib.o
	gcc main.o lib.o -o bin.out
main.o: main.c
	gcc -c main.c -o main.o
lib.o: lib.c
	gcc -c lib.c -o lib.o
# comment
	<- tab
	@echo no output here
# target rimosso dopo esecuzione
.INTERMEDIATE: t1 t2
# target intermedi mantenuti
.SECONDARY: t1 t2
# phony doesn't check file existence
.PHONY:
# generic target
%.s: %.c
# variables, EVERY is evaluated every time
ONCE:=hello $(LATER) 
EVERY=hello $(LATER) 
LATER=world
# make var=value
# $(eval LATER += world) $(shell pwd) $(wildcard *.o)
$ $@ is target, $^ is dependencies, $< is first dependency
```
## files
