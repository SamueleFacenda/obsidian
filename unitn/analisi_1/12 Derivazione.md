
$f:\Bbb R \to \Bbb R\qquad x_0\in\Bbb R\quad h\ne 0$
Rapporto incrementale: si definisce rapporto incrementale la quantità $$\frac{f(x_0+h)-f(x_0)}h$$
Si dice che la funzione f è derivabile nel punto $x_0$ se esiste finito il limite $$\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}h$$
Molte notazioni equivalenti:
$f'(x)$
$\frac{df}{df}(x_o)$
$f^{(1)}(x_0)$
$\dot f(x_0)$

Significato geometrico della derivata: quando $h\to0$ si ha
- il punto Q tende al punto P (i due punti $x_0$ e $x_0+h$)
- la retta secante passante per P  e Q tende alla retta tangente al grafico di f in P

Definizione: si dice che f è differenziabile in $x_0$ se esiste un numero $\alpha\in\Bbb R$ tale che
$f(x_0+h)=f(x_0)+\alpha h+o(h)\quad h\to0$

Teorema: la funzione $f:\Bbb R\to\Bbb R$ è differenziabile in $x_0$ se e solo se f è derivabile in $x_0$. In tal caso $\alpha =f'(x_0)$

Teorema: se f è derivabile in $x_0$ allora f è continua in $x_0$

### Derivate di funzioni elementari
- (costante)'=0
- $(x^k)'=kx^{k-1}$
- $(e^x)'=e^x$
- $(a^x)'=a^x\log a$
- $(\log x)'=\frac1x$
- $(\sin x)'=\cos x$
- $(\cos x)'=-\sin x$
- $(\arcsin x)'=\frac1{\sqrt{1-x^2}}$
- $(\arccos x)'=-\frac1{\sqrt{1-x^2}}$
- $(\arctan x)'=\frac1{1+x^2}$
- $(x^\alpha)'=\alpha x^{\alpha -1}\quad \alpha\in\Bbb R\backslash[0]$
- $(\tan x)'=\frac1{\cos^2x}=1+\tan^2x$

$(f\pm g)'=f'\pm g'$
$(cf)'=cf'\quad c\in\Bbb R$
$(f\cdot g)'=f'g+fg'$
$(\frac1f)'=-\frac{f'}{f^2}$
$(\frac fg)'=\frac{f'g-fg'}{g^2}$
$(f(g))'=f'(g)+g'$


