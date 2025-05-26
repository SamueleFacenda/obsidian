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

>[!NOTE]
>con `access` controllo attributi su file, come l'esistenza. Con `remove` o `unlink` elimino i files.
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

int chown(const char *pathname, uid_t owner, gid_t group) 
int fchown(int fd, uid_t owner, gid_t group) 
int chmod(const char *pathname, mode_t mode) 
int fchmod(int fd, mode_t mode)

exec(char* path): execl argument list, v vector of arguments, p uses PATH, e passes env list. e.g.
int execlp (const char *file, const char * arg0,…,argn,NULL)

int system(char* cmd)
```

## fork
```
pid_t getpid()
pid_t getppid()
pid_t fork()
pid_t wait (int *status) // wait any children status
pid_t waitpid(pid_t pid, int *status, int options)

int setpgid(pid_t pid, pid_t pgid);
pid_t getpgid(pid_t pid);
```
## signals
```
int kill(pid_t pid, int sig) // signal 0 checks existence
uint alarm(uint seconds);

int sigemptyset(sigset_t *set);
int sigfillset(sigset_t *set);
int sigaddset(sigset_t *set, int signo);
int sigdelset(sigset_t *set, int signo);
int sigprocmask(int how, const sigset_t *set, sigset_t *oldset);
// how: SIG_BLOCK or SIG_UNBLOCK or SIG_SETMASK
int sigpending(sigset_t *set);

int sigaction(int signum, const struct sigaction *act, struct sigaction *oldact);
int sigqueue(pid_t pid, int sig, const union sigval value);

int pause(); 
int sigsuspend(const sigset_t *mask);
```
## errors
```
char *strerror(int errnum) // errno to str
void perror(const char *str) // print "str:strerror(errno)"
```
## pipes
anonime:
```
int pipe(int pipefd[2]); // reand and write fd's
int fcntl(int fd, F_SETFL, O_NONBLOCK); // non blocking pipe
```
fifo:
```
// open da un solo lato è bloccante
int mkfifo(const char *pathname, mode_t mode);
```
## message queues
`IPC_PRIVATE` come key crea una coda privata in un gruppo di processi.
```
key_t ftok(const char *path, int id) // generate unique key from path and num
int msgget(key_t key, int msgflg) // crea coda, flags: 0666 | IPC_CREAT | IPC_EXC
int msgsnd(int msqid, const void *msgp, size_t msgsz, int msgflg);
ssize_t msgrcv(int msqid,void *msgp,size_t msgsz,long msgtyp,int msgflg)

// cmd: IPC_STAT, IPC_SET, IPC_RMID, IPC_INFO, MSG_INFO, MSG_STAT
int msgctl(int msqid, int cmd, struct msqid_ds *buf);
```

>[!NOTE]
>`ipcs -q` per vedere le code da cli, `ipcrm --all=msg` per svuotarle.
## threads
```
int pthread_create( pthread_t *thread, const pthread_attr_t *attr, void *(*start_routine)(void *), void *arg );

```

>[!warning]
>compilare con `-pthread`
