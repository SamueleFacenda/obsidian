$f:A\to\Bbb R\quad A\subseteq\Bbb R$ sia derivabile, sotto opportune ipotesi definisco la funzione derivata di f come $A\ni x\to f'(x)\in\Bbb R$ allora posso definire la sua derivata, $f''(x)\quad f^{(2)}(x) \frac{d^2f}{dx^2}\quad \ddot f$ 
$f''(x)\overset{def}= (f'(x))'$. Per iterazione definiamo, sotto opportune ipotesi, $f^{(k)}(x)=(f^{(k-1)}(x))'$

### Teorema di de l'Hopital
Siano f e g due funzioni e sia $x_0\in\overline{\Bbb R}$
Supponiamo di voler calcolare $\lim_x\to x_0 \frac{f(x)}{g(x)}$
Supponiamo che:
- siano derivabili per un po' di volte, g(x) sia diversa da 0 in un intorno di $x_0$
- il limite sia una formula indeterminate del tipo $\frac00\quad\frac{\pm\infty}{\pm\infty}$
- esiste il limite $\lim_{x\to x_0}{\frac{f'(x)}{g'(x)}}=\ell\in\overline{\Bbb R}$
  Allora $\lim_{x\to x_0}\frac{f(x)}{g}