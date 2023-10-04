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
1 per il teorema dei 2 carabinieri.
### 5
$\lim_{n\to+\infty}{\frac{\sin n} n}=0$
$$\frac {-1} n \le \frac {\sin n} n \le \frac 1 n$$
Successione che va a 0: infinitesima

## Criteri per successioni reali
1. criterio della radice
2. criterio del rapporto
3. criterio del rapporto $\Rightarrow$ radice
4. L'Hopital per successioni
### Criterio della radice
Supponiamo che $a_n\ge0$ almeno definitivamente. Supponiamo che esista $\lim_{n\to+\infty}{\sqrt[n]{a_n}}=l\in\overline{\Bbb R}$
Allora:
- se l>1 si ha che $a_n\to+\infty$
- se l<1 si ha che $a_n\to0$
- se l=1 allora il criterio non fornisce informazioni
### Criterio rapporto
Suppo