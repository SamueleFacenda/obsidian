
## Tecnica dell'o-piccolo
Siano f e g due funzioni e sia $x_0\in\overline{\Bbb R}$ pensato come punto in cui fare i limiti.
Def più formale: Diremo che f(x) è o-piccolo di g(x) per $x\to x_0$ e si scrive
$$ f(x)=o(g(x))\qquad x\to x_0$$
se esiste una funzione $\omega(x)$ tale che 
1. $f(x)=g(x)\cdot\omega(x)$
2. $\lim_{x\to x_o}\omega(x)=0$

Def quasi equivalente: Supponiamo che $g(x)\ne 0$ in un intervallo centrato in $x_0$ tranne al più in $x_0$ stesso. Allora $\omega(x)=\frac{f(x)}{g(x)}$ quindi $\lim_{x\to x_0}\frac{f(x)}{g(x)}=0$ 

### Proprietà algebriche di o-piccolo
$f_1(x)+f_2(x)=o(g(x))\qquad x\to x_o\qquad(o(g)+o(g)=o(g))$
$f_1(x)-f_2(x)=o(g(x))\qquad x\to x_o\qquad (o(g)-o(g)=o(g))$
$cf(x)=o(g(x))\qquad x\to x_o$
$f_1(x)\cdot f_2(x)=o(g^2(x))\qquad x\to x_0$

### Transitività di o-piccolo
Supp. $f(x)=o(g(x))\qquad x\to x_o\qquad\qquad g(x)=o(h(x))\qquad x\to x_0$
$f(x)=o(h(x))\qquad \to x_0$
Supp. di sapere che $f(x)=o(g_1(x)+g_2(x))\qquad x\to x_0$
$f(x)=o(g_1(x))+o(g_2(x))\qquad x\to x_0$
Supp. di sapere che $f(x)=o(cg(x))\qquad x\to x_0$
$f(x)=o(g(x))\qquad x\to x_0$

## Sviluppi del primo ordine
Tutto valido per $x\to0$
$\sin x = x+o(x)$
$\arctan x = x+o(x)$
$\tan x = x+o(x)$
$\arcsin x = x+o(x)$
$\cos x=1+o(x)$
$\cos x = 1 -\frac{x^2}2 +o(x^2)$
$e^x=1+x+o(x)$
$\log(1+x)=x+o(x)$