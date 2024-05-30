
## Arm

r13 stack pointer
r14 link register
r15 program counter + flags (segno resto overflow equals)
### Convenzioni di chiamata
r0-3 non preservati (argomenti)
r4-11 sullo stack
ritorno su r0 e r1
a volte r9 non preservato
### Indirizzamento
pre index e post index, (aggiorno e leggo o leggo e aggiorno), scrivo sul registro base (writeback) con "!"
pre: \[rb, \#i, \<shift>]  (lo shift è lsl \#n) 
post:\[rb] ,\#i
Ovviamente il post indexed fa sempre la writeback.

Solo sull'ultimo argomento delle istruzioni.
### Misc
Tutte le operazioni ammettono un prefisso condizionale
Le flags sono aggiornate solo da specifiche operazioni come la cmp

### Load - Store multiple
ldm\<mode> r \[!], registers
mode:
- increment after
- increment before
- decrement after
- decrement before
O full/empty ascending/descending
Con "!" r viene modificato di conseguenza. Per after before si intende che la prima cella viene saltata o no.
La lista di registri si scrive con: \<r0 -r7> ad esempio

## Intel x86
Registri:
- r{a-d}x
- rsi rdi (source and destination index)
- rbp rsp (base and stack pointers)
- r{8-15}
Con eax accedo a 32 bit a rax (e al posto della r), senza lettera prima sono a 16 bit.
rip registro special (return instruction pointer).
\+ flags

### Convenzioni di chiamata
6 argomenti: rdi rsi rdx rdx r8 r9
2 ritorno: rax rdx

### Sintassi
Principalmente istruzioni a 2 operandi, il secondo è la destinazione.
Costanti con dollaro.
Posso accedere direttamente in memoria con `<displ> (<base reg>, <index reg>, <scale>)`
Displacement è un immediato sommato all'indirizzo.



## Processore

Aluop, i due bit dell'alu. 0 per la somma (sd e ld), 1 per la sottrazione (beq), 10 per funz7 (operazioni tipo R)