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

Teorema: se A è invertibile $\Rightarrow$ il sistema Ax=b ha un'unica soluzione
