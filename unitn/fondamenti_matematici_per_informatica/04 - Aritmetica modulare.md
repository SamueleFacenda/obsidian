Def. 11.1. Fissiamo $n\in\Bbb Z$. Dati $a,b\in\Bbb Z$, diciamo che a è congruo a b modulo n, in simboli $a\equiv b(mod. n)$, se $n|(a-b)$.
- $a\equiv a(mod.n)$: riflessiva
- $a\equiv b\pmod n\implies b\equiv a\pmod n$: simmetrica
- $a\equiv b\pmod n,b\equiv c\pmod n\implies a\equiv c\pmod n$: transitiva

### Passaggio al quoziente (insiemistica)
Sia X un insieme non vuoto e sia R una relazione binaria su X cioè $\mathcal R\subset X\times X$. $\mathcal R$ si dice relazione di equivalenza su X se possiede le seguenti proprietà:
- riflessiva
- simmetrica
- transitiva

Sia $x\in X$. Definiamo la classe di equivalenza di X rispetto alla relazione di equivalenza R su X o equivalentemente classi di R equivalenza di x in X come segue:
$$[x]_{\mathcal R}:= \{y\in X|y\mathcal R x\}$$
L'insieme quoziente $X/\mathcal R$ di X modulo $\mathcal R$ è definito come segue:
$$X/\mathcal R:=\{[x]_{\mathcal R}\in2^X|x\in X\}$$
La classe di congruenza di $\sim n$ (modulo n) viene indicata con $[x]_n$
L'insieme quoziente si indica come $\Bbb Z/n\Bbb Z$.


## Teorema cinese del resto
Siano $n,m>0$ e $a,b\in\Bbb Z$. Consideriamo $\begin{cases}x\equiv a\pmod n\\x\equiv b\pmod m \end{cases}$ 