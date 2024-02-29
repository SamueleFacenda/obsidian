Intenderemo come primitivi i concetti di insieme ed elemento.
La nozione di appartenenza può essere messa a fondamento di tutta la teoria degli insiemi.
Scriveremo $x\in A$ per intendere x appartiene ad A. Equivalente a $A\ni x$.
$x\notin A$ per non appartenenza.
Oss. Un insieme può essere un elemento. Un elemento non può essere considerato un inseme.
La proprietà fondamentale che si richiede per poter parlare di un insieme è la seguente: ogni volta che prendo un elemento x dobbiamo essere sempre in grado di stabilire se x appartiene o meno all'insieme assegnato.
Paradosso di Russell
### Assioma 1.1 Estensionalità
Dati due insiemi A e B, vale: $A=B \iff (\forall x:x\in A\iff x\in B)$
Oss. $\exists!$ (esiste unico) l'insieme $\varnothing$ privo di elementi.
### Definizione 1.5
Siano X e Y due insiemi. Scriveremo:
$X\subset Y$ oppure $Y\supset X$ se $(\forall x: x\in X \implies x \in Y)$
Allora si dice che X è un sottoinsieme di Y.

Inoltre se $X\subset Y$ e $X\ne Y$ si dice che X è un sottoinsieme proprio di Y e si scrive $X\subsetneq Y$.
### Assioma 1.6 Di separazione
Sia X un insieme. Supponiamo che a ogni $x\in X$ sia associata un'affermazione $P(x)$. Allora $\{x|x\in X, P(x)\;vera\}=\{x\in X|P(x)\}$ è un insieme. 

## Operazioni tra insiemi

Siano X e Y due insiemi, definiamo:
- $X\cup Y = \{x|x\in X\;o\; x\in Y\}\rightarrow$ unione
- $X\cap Y=\{x|x\in X\; e \; x\in Y\}\rightarrow$ intersezione
- $X\setminus Y=\{x|x\in X\; e \; x\notin Y\}\rightarrow$ differenza
- $X\times Y=\{(x,y)|x\in X,y\in Y\}\rightarrow$ prodotto cartesiano

Con (x,y) si intende una coppia ordinata, x e y sono i suoi componenti, è un concetto primitivo.
Il complementare è la differenza tra X e Y se Y è completamente contenuto in X. Si dice $Y^c=\mathcal C_x(Y)=X\setminus Y$

### Unione e intersezione arbitraria
Supponiamo di avere un insieme non vuoto I e, $\forall i\in I$, un insieme $X_i$. Indichiamo questi dati con $\{X_i\}\in I$
Definiamo l'unione $$\bigcup_{i\in I} X_i:=\{x|x\in X_i\text{ per qualche }i\in I\}=\{x|\exists i\in I,x\in X_i\}$$
Ugualmente l'intersezione $$\bigcap_{i\in I}X_i:=\{x|x\in X_i,\forall i\in I\}$$
## Relazioni e funzioni
Def. 1.9 Siano X e Y due insieme. Un sottoinsieme $\mathcal R$ di $X\times Y$ si dice relazione tra X e Y. Dati $x\in X$ e $y\in Y$, diciamo che $x\mathcal R y$ (legge, x è in R-relazione con y) se $(x,y)\in\mathcal R$.

Def. 1.10 Siano X e Y due insiemi e sia f una relazione tra X e Y, cioè $f\subset X\times Y$. Diciamo che f è una funzione (o applicazione o mappa) da X in Y se $$\forall x\in X, \exists!y\in Y\;t.c.\;(x,y)\in f$$
Se f è una funzione, allora si indica $f:X\to Y$,  X è il dominio e Y il codominio.
### Funzione come Legge
Siano X e Y due insiemi non vuoti. Una funzione f (come legge) da X in Y , che indichiamo con $f_{(legge)}:X\to Y$, è una legge (intesa come concetto primitivo) che ad ogni elemento x di X associa un unico elemento y di Y

Def. Dati X e Y due insiemi eventualmente vuoti, indichiamo con $Y^X$ l'insieme  di tutte le funzioni (di tipo relazione) da X in Y.

Oss. Dato un insieme A, esiste l'insieme delle parti di A, che indicheremo con $\mathcal O(A)$ oppure $2^A$ i cui elementi sono tutti e soli i sottoinsiemi che si possono estrarre da A. 

Oss. Siano X e Y due insieme eventualmente vuoti. Allora vale
$$Y^X=\{f\in2^{X\times Y}|\forall x\in X,\exists!y\in Y\, t.c.\, (x,y)\in f\}$$
Def. Siano X, Y e Z tre insiemi e siano $f:X\to Y$ e $g:Y\to Z$ due funzioni. Definiamo la composizione di f e g come la seguente:
$$g\circ f:X\to Z\; t.c\; (g\circ f)(x):=g(f(x))$$
"f composta g"

Def. Sia $f:X\to Y$ una funzione. Dato il sottoinsieme A di X, definiamo l'immagine di A tramite f come $f(A):=\{f(x)\in Y|x\in A\}$  "f di A".  