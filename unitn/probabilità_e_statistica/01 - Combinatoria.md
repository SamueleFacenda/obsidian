Tutti i casi sono equiprobabili.
$$probabilità: \frac{casi \;favorevoli}{casi \;totali}$$
### 3 principi fondamentali della combinatoria
#### 1° principio
A: insieme e $\{E_i\}^n_{i=1}$ partizione di A
Allora $$\#A = \# E_1+\# E2+\dots+\# E_n=\sum_{i=1}^n E_1$$
Nota: partizione di A: $E_i\cap E_j=\varnothing, \bigcup_{i=1}^nE_i=A$ 
Nota: \# = cardinalità

Def. A, B insiemi - Il prodotto cartesiano A x B è l'insieme delle coppie ordinate del tipo
$$(a, b)\quad a\in A, b\in B$$
#### 2° principio
A, B insiemi
Allora $\#(A\times B)=\#A \cdot \#B$

Proposizione: $\{A_i\}_{i=1}^n$  famiglia finita di insiemi, $\#(A_1\times A_2 \times\dots\times A_n)=\prod_{i=1}^n \#A_i$ 
#### 3° principio
A, B insiemi
$\implies \#(A\cup B)=\#A+\#B-\#(A\cap B)$

Generalizzazione
$A_1, A_2,\dots,A_n$ insiemi
$$\#(\bigcup_{i=1}^nA_i)=\sum_{i=1}^n\#A_i-\sum_{i<j}^n\#(A_i\cap A_j)+\sum_{izjzk}^n\#(A_i\cap A_j\cap A_n)+\dots+(-1)^{n+1}\#(\bigcap_{i=1}^nA_i)$$

### Permutazioni e anagrammi
A insieme di n elementi
Permutazioni: modi di disporre in file gli elementi di A
Faccio il fattoriale per trovare il numero di permutazioni.

Regola generale:
A insieme di n elementi di m tipi diversi. ($m\le n$)
Ciascun tipo $i\in\{i,dots,m\}$ è presente $k_i$ volte.
Quindi gli anagrammi di A sono $$\frac{n!}{\prod_{i=1}^mk_i!}$$
### Disposizioni
Se del mio insieme A volessi mettere in fila $k\le n$ elementi, in quanti modi potrei fare?
$$\frac{n!}{(n-k)!}=\binom{n}{k}$$


