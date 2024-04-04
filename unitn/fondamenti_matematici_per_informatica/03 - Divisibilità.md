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

Teorema 9.8.
Siano $n,m\in \Bbb Z$ non entrambi nulli. Allora $\exists!$ MCD tra n e m.

Corollario 9.8.
Siano $n,m\in\Bbb Z$ non entrambi nulli. Allora $(n,m)=xn+ym$ per qualche $x,y\in\Bbb Z$.

$(n,m)=(|n|,|m|)=max\{c\in\Bbb Z|c\mid n\;e\;c\mid m\}$
$(n,0)=n$
se $d:=(n,m)\implies (\frac nd,\frac md)=1$

## Algoritmo di Euclide
Siano $m,n\in \Bbb Z$ non entrambi nulli. Vogliamo calcolare $(m,n)$ utilizzando la prop 9.13 e anche $(n,0)=|n|\forall n\in \Bbb Z\setminus\{0\}$. Poiché $(n,m)=(m,n)$, possiamo sempre supporre che $m\ge n> 0$. 

algoritmo:
$m=q_1\cdot n+r_1$
$n=q_2\cdot r_1+r_2$
$r_1=q_3\cdot r_2+r_3$
$r_2=q_4\cdot r_3+r_4$
$\dots$
$r_{n-2}=q_n+r_{n-1}+0$
$(n,m)=r_{n-1}$

sostituzione a ritroso:
Riscrivo tutte le uguaglianze nella forma $r_n=r_{n-2}-q_n\cdot r_{n-1}$.
Poi sostituisco gli $r_{n-1}$ con usando l'uguaglianza sopra ($r_{n-1}=\dots$), mantenendo sempre le moltiplicazioni esplicite (non faccio i conti), e procedo fino alla prima uguaglianza, fino ad ottenere $x\cdot m+y\cdot n=(m,n)$.

## Minimo comune multiplo
Dati $n,m\in\Bbb Z$ e $M\in\Bbb Z\,t.c.\, M\ge 0$, diciamo che M è un minimo comune multiplo tra n e m se
- $n|M$ e $m|M$
- Se $c\in\Bbb Z$ è t.c. $n|c$ e $m|c$, allora $M|c$
Usiamo $[n,m]$ per indicare il MCM di n e m.
$[n,m]=\frac{n\cdot m}{(n,m)}$
