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
### streams
`FILE *fopen(const char* filename, const char* mode);`
mode: r, w, r+ (read and write), w+ (read and write create or overwrite), a, a+ (read and write at end)
`int fclose (FILE)`
read
```
int fgetc(FILE *stream)
char *fgets(char *str, int n, FILE *stream)
int fscanf(FILE *stream, const char *format, ...)
int feof(FILE *stream) // eof reached
void rewind(FILE *stream)
```
write
```
int fputc(int char, FILE *stream)
int fputs(const char *str, FILE *stream)
int fprintf(FILE *stream, const char *format, ...)
int fflush(FILE *stream)
```
### file descriptors
`int open(const char *pathname, int flags[, mode_t mode]);`
flags: O_RDONLY, O_WRONLY, O_RDWR almeno uno, O_CREAT e O_EXCL, O_APPEND, O_TRUNC
mode: S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXU, S_IRGRP, …, S_IROTH
`int close(int fd);`
leggere e scriverew:
```
ssize_t read (int fd, void *buf, size_t count);
ssize_t write(int fd, const void *buf, size_t count);
off_t lseek(int fd, off_t offset, int whence);
// whence: SEEK_SET inizio file, SEEK_CUR current pos, SEEK_END
```
STDIN_FILENO, STDOUT_FILENO, STDERR_FILENO per standard streams
`fprintf(stream, format, etc.)` funziona su file descriptors. 
## syscalls
```
time(time_t*) // seconds since epoch begin
char* ctime(time_t*) // format time

long random()
void srandom(uint seed)

int chdir(char* path) // cd
char* getwd(NULL, 0)

int remove(char* path)
int creat(char* path, mode_t)

int dup(int oldfd); // duplica fd
int dup2(int oldfd, int newfd); //close newfd if open
```
