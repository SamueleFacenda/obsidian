nome $\ne$ oggetto denotabile
### Interpreter and compiler
Interpreter: Scritto nel linguaggio $LO.$ Eseguito su $MO_{LO}$ che capisce programmi scritti in $L$.
Traduce da $L$ a $LO$ istruzione per istruzione.
Compiler: Traduce da $LO$ a $L$, il compilatore non è necessariamente scritto in $LO$. Il compilatore può essere eseguito su $MA\ne MO_{LO}$

Solitamente però c'è un Intermediate Abstract Language: $MI$ con linguaggio $LI$. Il programma $L$ è compilato in $LI$ che viene interpretato da $MI$.

### Gestione della memoria
Allocazione dinamica con stack o heap.
Dynamic chain: insieme di collegamenti tra record dinamici.

Heap: ho una linked list di blocchi liberi, inizialmente lineare di blocco in blocco. Quando alloco tolgo blocchi dall'inizio, quando dealloco riaggiungo blocchi in cima. Ogni blocco punta a un altro blocco.
Posso avere blocchi di dimensione fissa o variabile. É importante evitare la frammentazione interna (elemento piccolo con blocco più grande) e quella esterna (lo spazio disponibile c'è ma non è contiguo).

### Espressioni e comandi
>Expr: Syntactic entities whose evaluation either produces a value or does not terminate (undefined expression)

>Cmd: a syntactic entity whose evaluation does not necessarily return a value but can have a side effect

binding policy $\ne$ scoping policy
