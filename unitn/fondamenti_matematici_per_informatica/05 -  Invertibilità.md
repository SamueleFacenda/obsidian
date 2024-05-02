 $(\Bbb Z, +, \cdot)\quad 1\cdot a=a\cdot 1=a\forall a\in\Bbb Z$ 1 è l'elemento neutro
Dato $x\in\Bbb Z$, x si dice invertibile in $\Bbb Z$ se $\exists y\in\Bbb Z$ t.c. $x\cdot y=1$

Siano $a,n\in\Bbb Z,n>0$.
Def. Diciamo che a è invertibile modulo n in $\Bbb Z$ oppure $[a]_n$ è invertibile in $\Bbb Z/_{n\Bbb Z}$ se $\exists x\in\Bbb Z\text{ t.c. }ax\equiv 1\pmod d$, equivalentemente se $\exists x\in\Bbb Z\text{ t.c. }[a]_n[x]_n=[1]_n$ in $\Bbb Z/_{n\Bbb Z}$

### Eulero
Definiamo la funzione $\phi :\Bbb n\setminus\{0\} \to\Bbb N$ detta $\phi$ di Eulero, ponendo:
$$\phi(n):=|\{a\in\Bbb Z| 1\le a\le n,(a,n)=1\}|$$

- $\phi$ è moltiplicativa sulle coppie coprimi.
- $n=p_1\cdot p_2\dots p_n\implies \phi(n)=$ calcolo a catena


lemma 13.4
Dati $\alpha,\beta\in(\Bbb Z/_{n\Bbb Z})^*$, valgono:
- $\alpha\beta\in(\Bbb Z/_{n\Bbb Z})^*$
- $(\alpha\beta)^{-1}=\alpha^{-1}\beta^{-1}$
- $(\alpha^{-1})^{-1}=\alpha$
- $\alpha^{-1}\in(\Bbb Z/_{n\Bbb Z})^*$
