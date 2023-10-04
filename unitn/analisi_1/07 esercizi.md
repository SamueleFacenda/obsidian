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
Supponiamo che sia $a_n>0$ definitivamente. Supponiamo che $\lim_{n\to+\infty}{\frac{a_n+1}{a_n}}=l\in\overline{\Bbb R}$ . Allora la conclusione è la stessa del criterio della radice
### Criterio rapporto $\Rightarrow$ radice
Supponiamo che sia $a_n>0$ definitivamente. Supponiamo che $\lim_{n\to+\infty}{\frac{a_n+1}{a_n}}=l\in\overline{\Bbb R}$
Allora $\lim_{n\to+\infty}{\sqrt[n]{a_n}}=l$ (stesso l di prima)
### Criterio De L'Hopital per successioni
Supponiamo dh avere 2 successioni $a_n$ e $b_n$. Supponiamo che $b_n$ sia strettamente crescente con $b_n>0$ e che $\lim_{n\to+\infty}{b_n}=+\infty$ Allora 
$$\lim_{n\to+\infty}{\frac{a_{n+1}-a_n}{b_{n+1}-b_n}}=\lim_{n\to+\infty}{\frac{a_n}{b_n}}$$
### Dimostrazione criterio della radice
caso 1. Supponiamo che $\sqrt[n]{a_n}\to l>1$. Supponiamo che $l\in\Bbb R$
Per i risultati dei termini nella permanenza del segno io so che almeno definitivamente ho che $\sqrt[n]{a_n}\ge\frac{1+l}2$
Ora almeno la potenza n-esima in entrambi i membri conservando la disuguaglianza per la stretta crescenza e ottengo $a_n\ge\left(\frac{1+l} 2\right)^n$
caso 2. Supponiamo che $\sqrt[n]{a_n}\to l<1$. Supponiamo che $l\in\Bbb R$
Per permanenza del segno definitivamente vale $\sqrt[n]{a_n}\le\frac{l+1}2$. 