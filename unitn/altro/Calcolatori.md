
## Arm

r13 stack pointer
r14 link register
r15 program counter + flags (segno resto overflow equals)
### Convenzioni di chiamata
r0-3 non preservati
r4-11 sullo stack
ritorno su r0 e r1
a volte r9 non preservato
### Indirizzamento
pre index e post index, (aggiorno e leggo o leggo e aggiorno), scrivo sul registro base (writeback) con "!"
pre: \[rb, \#i, \<shift>]  (lo shift è lsl \#n) 
post:\[rb] ,\#i
Ovviamente il post indexed fa sempre la writeback.

### Misc
Tutte le operazioni ammettono un prefisso condizionale
Le flags sono aggiornate solo da specifiche operazioni come la cmp