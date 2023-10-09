$f:\Bbb R\to\Bbb R$ o più in generale $f:A\to\Bbb R\; A\subseteq\Bbb R$
vogliamo definire $\lim_{x\to x_0}{f(x)}\;\;x_0\in\overline{\Bbb R}$

possibili limiti di f(x)
1. $\ell\in\Bbb R$: $\forall\varepsilon>0\,\exists\,K\in\Bbb R$ t.c. $\ell-\varepsilon\le f(x)\le\ell+\varepsilon\,\forall x\ge K$
2. $+\infty$: $\forall M\in\Bbb R\,\exists\,K\in\Bbb R$ t.c. $f(x)\ge M \,\forall x\ge K$
3. $-\infty$: $\forall M\in\Bbb R\,\exists\,K\in\Bbb R$ t.c. $f(x)\le M \,\forall x\ge K$
4. non esiste: nessuna delle precedenti funziona
Varianti di 1: 
- Si dice che $\lim_{x\to+\infty}{f(x)}=\ell^+\qquad \ell<f(x)\le\ell+\varepsilon$
- Si dice che $\lim_{x\to+\infty}{f(x)}=\ell^-\qquad \ell-\varepsilon\le f(x)<\ell$ 

definizioni speculari per i limiti a $-\infty$

$\lim_{x\to\_0}f(x)\quad x_0\in\Bbb R$
1. $\ell\in\Bbb R$: 
2. $+\infty$: $\forall M>0\,\exists\,\delta>0$ t.c. $f(x)\ge M \quad\forall x\in[x_0-\delta,x_0+\delta]\backslash\{x_0\}$
3. $-\infty$: $\forall M>0\,\exists\,\delta>0$ t.c. $f(x)\le M \quad\forall x\in[x_0-\delta,x_0+\delta]\backslash\{x_0\}$

### Strumenti
- teoremi algebrici
- teoremi di confronto a 2 e a 3
- radici e rapporto (non si usano)
- continuità
- cambi di variabili
- limiti notevoli
- confronto ordini di infinito

#### Continuità
Una funzione si dice continua in ogni punto $x_0\in\Bbb R$ se $\lim_{x\to x_0}f(x)=f(x_0)$
Le funzioni elementari dove sono definite sono continue

### Limiti notevoli
$\lim_{x\to0}{\frac{\sin x}x}=1$
$\lim_{x\to+\infty}(1+\frac1x)^x=e$
$\lim_{x\to 0}\frac{(1-\cos x)}{x^2}=\frac 1 2$
... lezione 9/10
$\lim_{x\to0}\frac{a^x-1}x=\log a$
$\lim_{x\to0^+}x\log x=0$

### Cambio delle variabili
Es. $\lim_{x\to0}\frac{\sin x^2}{x^2}=\left[\frac00\right]$
Pongo $y=x^2. Quando $x\to0$ si ha che $y\to0$, quindi il limite diventa
$\lim_{y\to0}\frac{\sin y}y=1$ (limite notevole)