Matrici equivalenti alle operazioni elementari:
1. $\underset{m\times m}{S_{ij}}\,\underset{m\times n}{A}$  si ottiene moltiplicando A a sinistra per la matrice identica con le righe i  e j invertite.
2. $D_i(c)\,A$ si ottiene moltiplicando A a sinistra per una matrice quadrata n x n che è quella identica a cui cambio il valore 1 all'i-esima riga con c. 
3. $E_{ij}(c)\,A$ si ottiene moltiplicando A a sinistra per la matrice identica con c alla posizione i j (riga colonna).
Le matrici elementari $S_{ij}, D_i(c)(c\ne0)\,e\,E_{ij}(c)(c\in\Bbb R)$ sono invertibili.
inverse:
1. $S_{ij}^{-1}=S_{ij}$
2. $D_i(c)^{-1}=D_i(\frac 1 c)$
3. $E_{ij}(c)^{-1}=E_{ij}(-c)$

Proposizione: 
Sia $A\in M_{m,n}(\Bbb R)$ allora esiste $P\in M_m(\Bbb R)$ invertibile, tale che $PA=S$ a scalini.
Se m=n e S=rref(A) =$I_n$, allora la  matrice A è invertibile e $A^{-1}=P$
Quindi se $rgA=n\Rightarrow A$  è invertibile.

Teorema: se A è invertibile $\implies$ il sistema Ax=b ha un'unica soluzione
A è invertibile $\iff$ rgA=n

## Metodo per il calcolo dell'inversa
$\underset{n\times2n}{(A\,I_n)}\to rref(A\,I_n)=(I_n\,B)$
$rref(A\,I_n)=(I_n\,B)=\underset{n\times n}P(A\,I_n)=\underset{n\times2n}{(PA\quad P)}=(I_n\;A^-1)$

Def. uno spazio vettoriale V su un campo K è un gruppo commutativo (V,+)su cui è definita una moltiplicazione per valore $(k,v)\in\Bbb K\times V\to kv\in V$ tale che 
1. $(k_1+k_2)v=k_1v+k_2v\qquad\forall k_1,k_2\in\Bbb K,\forall v\in V$
2. $k(v_1+v_2)=kv_1+kv_2\qquad\forall k\in\Bbb K,\forall v_1,v_2\in V$
3. $(k_1k_2)v=k_1(k_2v)=k_2(k_1v)\qquad\forall k_1,k_2\in\Bbb K,\forall v\in B$
4. $1v=v\qquad\forall v\in V$

### Sottospazio vettoriale
Def. Sia V uno spazio vettoriale su $\Bbb K$. Un sottoinsieme non vuoto W di V è detto sottospazio vettoriale di V se:
- $w_1+w_2\in W\qquad\forall w_\,w_2\in W$
- $\forall k\in\Bbb K,\forall w\in W,kw\in W$
Si dice che W è chiuso rispetto alle operazioni.
Oss. ogni sottospazio di V è uno spazio vettoriale.