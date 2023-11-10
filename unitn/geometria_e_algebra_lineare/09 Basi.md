## Teorema della base (in $\Bbb R^n$)
Ogni base di $\Bbb R^n$ contiene n vettori

## Interpolazione polinomiale
$(x_1,y_y),\dots,(x_n,y_n)$  n punti con $x_i$ distinti
$p(x)\in\Bbb R[x]$ tale che $p(x_i)=y_i$
$V=\Bbb R_{n-1}[x]$   B base di Lagrange
$B=\{f_1,\dots,f_n\}$
$$f_i(x)=\prod_{j=1\;j\ne i}^n\frac{x-x_j}{x_i-x_j}$$ (il polinomio i-esimo vale 1 in $x_i$ e 0 in $x_j$, $j\ne i$)
$p(x)=\sum_{i=1}^ny_if_i(x)\quad \in\Bbb R_{n-1}[x]$
