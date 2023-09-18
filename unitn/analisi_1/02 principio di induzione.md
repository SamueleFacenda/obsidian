## Principio di induzione
>Il principio di induzione riguarda proprieta dei numeri naturali $N$.
>Sia $P_n$ una proprieta' che riguarda N, ossia un'affermazione che contiene al suo interno un paramentro n E N e che a seconda del valore di n, puo assere vera o falsa

Supponiamo che
$P_0$ sia vera
Se $P_n$ e' vera => $P_{n+1}$ e' vera
Allora $P_n$ e' sempre vera 
$\forall n \in N$

### Variante possibile
Supponiamo che
- $P_{50}$ sia vera
- $P_n$ vera => $P_{n+1}$ vera
Allora $P_n$ e' vera $\forall n \ge 50$

### Variante piu pericolosa
Supponiamo
- $P_0$ sia vera
- $\forall n \ge 3$ si ha se $P_n$ e' vera => $P_{n+1}$ e' vera

Esempi
1. 1+2+3+4...+n = $\frac{n(n+1)}{2}$ 
passo base: $1=n \; 1=\frac{1\times 2}{2}$
passo induttivo: 
- Ipotesi 1+2+3+4...+n=$\frac{n(n+1)}{2}$
- tesi: 1+2+3+4...+n+1=$\frac{(n+1)(n+2)}{2}$
dimostrazione: 
1+2+3+4...+n+1=1+2+3+4...+n+1
uso ipotesi

$$= \frac{n(n+1)}{2}+n+1 $$
$$= \frac{n(n+1) + 2n + 2}{2} = \frac{n(n+1)+2(n+1)}{2}$$
$$= \frac{(n+1)(n+2)}{2}$$

esempio 2
Dimostrare che $1+a+a^2+a^3+...+a^n = \frac{a^{n+1}-1}{a-1} \;\; a\not=1 \; \forall n \in N$
passo base
n = 0 , 1 = $\frac{a-1}{a-1} = 1$
passo induttivo
- ipotesi: $1+a+a^2+a^3+...+a^n = \frac{a^{n+1}-1}{a-1}$ 
- tesi: $1+a+a^2+a^3+...+a^n = \frac{a^{n+2}-1}{a-1}$
$$1+a+a^1...+a^{n+1}=1+a+a^1...+a^{n+1} $$
$$ = \frac{a^{n+1}-1}{a-1} + a^{n+1} $$
$$ = \frac{a^{n+1}-1+a^{n+2}-a^{n+2}}{a-1} = \frac{a^{n+2}-1}{a-1} $$


Esempio 3:
Dimostrare che $n+7<n \forall n \in N$
passo induttivo:
ipotesi $n+7<n$
tesi $n+8<n+1$
dimostrazione: $n+8=n+7+1 < n+1$
uso ipotesi per n+7

Esempio 4:
Dimostrare che $1^2 +2^2+3^2 ... + n^2= \frac{n(n+1)(2n+1)}{6} \forall n \ge 1$
passo base
n = 0, $\frac{1(1+1)(2+1)}{6}=1=1^2$
passo induttivo:
ipotesi: $1^2 +2^2+3^2 ... + n^2= \frac{n(n+1)(2n+1)}{6}$
tesi: $1^2 +2^2+3^2 ... + (n+1)^2= \frac{(n+1)(n+2)(2n+3)}{6}$
dimostrazione:
$1^2 +2^2+3^2 ... + (n+1)^2= \frac{n(n+1)(2n+1)}{6} + (n+1)^2$
$\left[\frac{n(2n+1)}{6} + (n+1)\right](n+1)$
$\frac{2n^2+7n+6}{6}(n+1)$
$\frac{(n+2)(2n+3)}{6}(n+1)$

Esempio 5:
DImostrare che $2^n\ge n \forall n \in N$
passo base
n = 0, $1 \ge 0$
passo induttivo:
ipotesi: $2^n \ge n$
tesi: $2^{n+1} \ge n+1$
dimotrazione:
$2^{n+1} = 2 \times 2^n \ge 2 \times n \ge n+1$
uso ipotesi al primo $\ge$
La speranza e' che $2n\ge n+1$ ma questo e' vero <=> (se e solo se) $n\ge1$
Quindi siamo nella situazione in cui la $P_0$ e' vera ma la speranza ci dice che la tesi e' verificata solo per $n\ge 1$
Pero' devo verificare che $P_1$ sia vera
Secondo passo base: n=1, $2\ge 1$

Esempio 6:
Determinare per quali valori di N si ha che $4^n \ge 2^n+3^n$
Proviamo un po' di casi
n=0, $1\ge 1+1$ falso
n=1, $4\ge 3+2$ falso
n=2, $16\ge 9 + 4$ vero
n=3, $64 \ge 27 + 8$ vero
congettura: vera per $n\ge2$
Provo a dimostrare per induzione
passo base:
n=2, $16\ge 9 + 4$ 
passo induttivo
ipotesi:
$4^n\ge2^n+3^n$
tesi:
$4^{n+1}\ge2^{n+1}+3^{n+1}$
dimostrazione:
$4^{n+1}= 4 \times 4^n \ge 4(2^n+3^n) = 4\times 2^n + 4\times3^n$
$2\times 2^n + 3\times3^n = 2^{n+1}+3^{n+1}$
faccio l'ultimo passaggio perche' moltiplico per numeri piu' piccoli, quindi posso nella disequazione.

Fattoriale:
definizione 0!=1

Esempio 7:
Determinare per quali numeri naturali e' vera $n! \ge 2^n$
n=0, $1\ge1$ vera
n=1, $1\ge2$ falsa
n=2, $2\ge4$ falsa
n=3, $6\ge8$ falsa
n=4, $24\ge16$ vero
n=5, $120\ge32$ vero
Congettura: $n!\ge 2^n \forall n\ge4 \text{e per } n=0$
passo base:
n=4, $24\ge16$ vero
passo induttivo:
ipotesi: $n!\ge 2^n $
tesi: $(n+1)!\ge 2^{n+1}$
$(n+1)!= (n+1)n! \ge (n+1)2^n \ge 2\times2^n = 2^{n+1}$
Speranza $n+1\ge2$ , ma questa e' vera per $n\ge1$


### Disuguaglianza di Bernulli


$(1+x)^n \ge 1+nx \;\; \forall n \in \Bbb{N}$

passo base:
n=0, $1\ge 1+0$ vera
passo induttivo:
ipotesi: $(1+x)^n \ge 1+nx$
tesi: $(1+x)^{n+1} \ge 1+(n+1)x$

dimostrazione:
$(1+x)^{n+1}=(1+x)(1+x)^n\ge (1+x)(1+nx)=1+nx+x+nx^2$
$=1+(n+1)x+nx^2 \ge 1+(n+1)x$

E' implicito che ho usato una delle proprieta' dell'ordinamento ossia moltiplico per 1+x e lascio invariata la disuguaglianza se $1+x\ge0 \iff x\ge -1$

Quindi:
$(1+x)^n \ge 1+nx \;\; \forall n \in \Bbb{N} \;\; x>-1$
