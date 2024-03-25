### La divisione euclidea
Teorema (esistenza e unicità del quoziente e del resto della divisione euclidea).
Siano $n,m\in\Bbb Z\;t.c.\;m\ne0$. Allora $\exists!q,r\in\Bbb Z\;t.c. n=qm+r, 0\le r< |m|$. Si dice che q è il quoziente della divisione di n per m e r è il resto. Inoltre $q,r\in \Bbb N$ se $n,m\in\Bbb N$.

## Naturali in base $b\ge2$
Sia $b\in\Bbb N$. Diciamo che un numero $n\in\Bbb N$ è rappresentabile in base b se
$$\exists k\in\Bbb N\;e\; \varepsilon_0\varepsilon_1,\dots,\varepsilon_k\in I_b\; t.c.\; n=\varepsilon_0b^0+\varepsilon_1b^1+\dots+\varepsilon_kb^k=\sum_{i=0}^k\varepsilon_ib^i$$
Posso usare una successione con $i\in\Bbb N$ sempre e avrà $\varepsilon_i=0$ definitivamente.

Teorema 8.4(scrittura dei naturali in base arbitraria $\ge2$ ).
Sia $b\in\Bbb N\;t..\;b\ge2$. Allora ogni numero naturale $n\in\Bbb N$ si può rappresentare in base b in modo unico.

## Divisibilità
Siano $n,m\in\Bbb Z$. Diciamo che n è un divisore di , o, equivalentemente, che m è un multiplo di n, se $\exists k\in\Bbb Z\;t.c.\;nk=m$. In questo, scriveremo $n|m$ che si legge "n divide m". Scriveremo che $n\nmid m$ "n non divide m" se $n|m$ è falsa.

Proprietà:
- $\forall n\in\Bbb Z, n\mid0$
- $\forall n\in\Bbb Z\setminus\{0\}, 0\nmid n$
- $\forall n\in\Bbb Z, 1\mid n, -1\mid n, n\mid n, -n\mid n$ 

Prop 9.3. Siano $n,m,q\in \Bbb Z$. Allora valgono:
- $n\mid m,m\mid q\implies n\mid q$
- $n\mid m,m\mid m\implies n=m\;oppure\;n=-m$

## Massimo comune divisore (gcd)
Siano $n,m\in\Bbb Z$ non entrambi nulli. Si dice che $d\in\Bbb N$ è un Massimo Comun Divisore, in breve MCD, di/tra n e m se ha le seguenti proprietà:
- $d>0$
- $d\mid n$ e $d\mid m$.
- Se $c\in\Bbb Z\;t.c.\;c\mid n$ e $c\mid m$, allora $c\mid d$.
Prop 9.6. con le stesse premesse, se esiste un MCD tra n e m allora è unico. Ovvero se $\exists d,d'\in N\;t.c.$ valgono le proprietà sopra per entrambi, allora $d=d'$.
Notaz. Se $\exists$ MCD tra n e m non entrambi nulli, allora è ! e lo indicheremo con (n,m).

### Lemma utile
Siano $n,m,c\in\Bbb Z$ t.c. $c\mid n,c\mid m$. Scegliamo arbitrariamente $x,y\in\Bbb Z$. Allora $c\mid(xn+ym)$. 