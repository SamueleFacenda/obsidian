Definizione: un poliomio  P(x) nella variabile x a coefficienti nel campo $\Bbb{K}$ (=R,C) e di grado n e' un'espressione algebrica del tipo
$P(x)=a_0 + a_1x^1 = ... + a_nx^n$
$a^n \ne 0$ 
deg(P) = grado del polinomio

P(x)=0 deg(P)=$-\infty$

Polinomio neutro e polinomio nullo

Teorema: $P_1(x), P_2(x) \;\; deg(P_1)=n, deg(P_2)=m, n\ge m$
$P_2(x)\ne 0 \text{ Esistono Q(x) e R(x) } deg(R) < m \text{ t.c.}$
$P_1(x)=Q(x)P_2(x)+R(x)$

Definizione: se due polinomi soddisfano le ipotesi del teorema e R(x) = 0, diremo che il primo e' divisibile per il secondo

Teorema: $P_2(x)=x-c, c \in \Bbb{K}, P_1\text{ e' divisibile per }P_2 \text{ se e solo se } P_1(c)=0$
Dimostrazione
$$ P_1(x)=(x-c)Q(x) $$
$$P_1(c)=(c-c)Q(c) = 0 \Rightarrow P_1(c)=0$$
$\Leftarrow$
$$P_1(x)=Q(x)(x-c)+R(x) \;\; deg(r)<1\;\; R(x)-r_0$$
$$P_1(c)=0 \;\;\;\;\; 0=P_1(c)=Q(c)(c-c)+r_0 \Rightarrow0\Rightarrow r_0$$
Teorema: $P(x), \, deg(P)=n$ , P(x) ammette al massimo n radici distinte
Proof:
caso base= n=0. P(x)=$a_0 \;\; a_0\ne 0$
P(x) non ammette radici
passo induttivo:
ipotesi: Q(x), deg(Q) = n, Q ammette al massimo n radici distinte
P(x)m deg(P)=n+1, P puo' non ammettere radici, oppure ammette almeno una radice $a\in \Bbb{K}$ P(x)=(x-a)Q(x). Q(x) ha grado n.

### Ruffini :(

P1 e P2, sono polinomi
non lo scrivo
l'ultimo termine che mi rimane e' il resto
Moltiplico ogni volta per la radice del polinomio 2.


### Fattorizzazione dei polinomi
Definizione, $P(x),\,\, deg(P)=n\ge 1$; P e' irriducibile se non esiste un polinomio D(x) di grado m, 0<m\<n che divide esattamente P

Teorema: Se K=R, gli unici polinomi irriducibili sono i polinomi di grado 1 e i polinomi di grado 2 con discriminante negativo. 
Discriminante: $\Delta = a_1^2 -4a_0a_2$

Per fattorizzare un polinomio, cerchiamo le radici. 
P(x) un polinomio i cui coefficienti sono numeri interi. Le radici intere, se esistono, sono da cercarsi fra i sottomultipli interi del termine noto $a_0$