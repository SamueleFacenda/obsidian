### 1
Come so che $\lim_{n\to+\infty}{2^n}=+\infty$? Devo dimostrare che $2^n\ge n$ (teorema del confronto a due) definitivamente.
Per n>1
$a^n=(1+(a-1))^n\ge 1+n(a-1)$, per la disuguaglianza di Bernulli ($(1+x)^n\ge1+nx\quad\forall x>-1$)
Quindi so che il limite per $+\infty$ di qualunque $a^n$ con a maggiore di 1 è $+\infty$

### 2
$$\lim_{n\to+\infty}{(\frac 2 3 )^n}=\lim_{n\to+\infty}{\frac 1 {(\frac 2 3)^n}}=\frac 1 {+\infty} = 0$$
### 3
$\lim_{n\to+\infty}{n!}=+\infty$
Per dimostrarlo possiamo usare che $n!\ge 2^n$ e si dimostra per induzione.
### 4
$$\lim_{n\to+\infty}{\sqrt[n] 2}=\lim_{n\to+\infty}{2^{\frac 1 n}}=2^0=1$$
Per dimostrarlo rigorosamente, usiamo la disuguaglianza di Bernulli
Uso $x=\frac 1 n$ : $$\left(1+\frac 1 n\right)^n\ge 1+n\cdot \frac 1 n=1+1=2$$
Quindi prendo ora la radice n-esima in entrambi i membri e memore della stretta crescenza della radice n-esima ottengo 
$$\left(1+\frac 1 n\right)\ge2^{\frac 1 n}\ge 1$$