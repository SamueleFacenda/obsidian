## Teorema di ricorsione
- X insieme non vuoto
- $h:\Bbb N \times X\to X$ funzione
- $c\in X$
Tesi: $\exists!f:\Bbb N\to X$ t.c. $f(0):=c$ , $f(succ(n))=h(n, f(n))\forall n\in \Bbb N$

### Ordinamento parziale e totale
Sia X un inseme non vuoto e R una relazione binaria su X, cioè $R\subset X\times X$, diciamo che $\le$ è un ordinamento parziale di X se
1. $x\le x\forall x\in X$ (riflessiva)
2. $\forall x,y\in X, (x\le y)\, \, (y\le x) \implies x=y$ (antisimmetrica)
3. $\forall x,y, z\in X, x\le y, y\le z\implies x\le y$ (transitiva)
Se in più vale $\forall x, y\in X, x\le y$ oppure $y\le x$ (tricotomia) allora si parla di ordinamento totale.

Teorema: principio di induzione "shiftato" di prima forma.

### Insiemi finiti e loro cardinalità
Per ogni $n\in\Bbb N \setminus \{0\}$, indichiamo con $I_n:=\{0,1,\dots,n-1\}$
Inoltre $I_0=\varnothing$
Def. Dato un insieme X, diciamo che X è FINITO se $\exists n\in \Bbb N$ t.c. $X\sim I_n$. Se X non è finito allora si dice infinito.

Teorema. (Lemma dei cassetti)
Siano X e Y due insiemi e siano $n,m\in\Bbb N$ t.c. $X\sim I_n$ e $Y\sim I_m$, n<m.
Allora $\nexists$ una funzione iniettiva $f:Y\to X$.


Prop 4.4. Sia X un insieme finito e sia Y un suo sottoinsieme. Allora Y è finito e $|Y|\le|X|$.

### Buon ordinamento
Def. Sia X un insieme e $\le$ un ordinamento (parziale) su X. Scegliamo un sottoinsieme A di X e sia $z\in A$. Si dice che z è minimo di A (in $(X,\le)$) se $z\le x\forall x\in A$. In questo scriveremo $z=min(A)$
Oss. Se un minimo esiste allora è unico.

Def 7.3. Sia X un insieme e sia $\le$ un ordinamento totale su X. Se ogni sottoinsieme non vuoto A di X allora A ammette il minimo, si dice che $(X,\le)$ è ben ordinato.

## Principio di ricorsione di $2^a$ forma
Sia $\{P(n)\}_{n\in\Bbb N}$ una famiglia di proposizioni indicizzata su $\Bbb N$. Supponiamo che valgano le seguenti proprietà:
1. (base induzione) P(0) è vera
2. (passo induttivo) $\forall n>0, (P(k)\text{ vera } \forall k\in\Bbb N, 0\le k<n)\implies P(n)\;vera\;$
Allora $P(n)\text{ è vera }\forall n\in\Bbb N$.

### La divisione euclidea
Teorema (esistenza e unicità del quoziente e del resto della divisione euclidea).
Siano $n,m\in\Bbb Z\;t.c.\;m\ne0$. Allora $\exists!q,r\in\Bbb Z\;t.c. n=qm+r, 0\le r< |m|$. Si dice che q è il quoziente della divisione di n per m e r è il resto. Inoltre $q,r\in \Bbb N$ se $n,m\in\Bbb N$.

## Naturali in base $b\ge2$
Sia $b\in\Bbb N$. Diciamo che un numero $n\in\Bbb N$ è rappresentabile in base b se
$$\exists k\in\Bbb N\;e\; \mathcal E_0,\mathcal E_1,\dots,\mathcal E_k\in I_b$ t.c. $n=\mathcal E_0b^0+\mathcal E_1b^1+\dots+\mathcal E_kb^k=\sum_{i=0}^k\mathcal E_ib^i$$
