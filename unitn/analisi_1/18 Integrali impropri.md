Un integrale è improprio se, o la zona di integrazione non è limitata, o la funzione integranda non è limitata.

## Integrali impropri mono-problema
#### Con $b\to\infty$

Faccio il limite per $b\to\infty$, come un limite normale
idem con a
#### Con $f(x)\to \infty$ in a
$$\int_a^b f(x)\, dx=\lim_{\varepsilon \to 0^+}\int_{a+\varepsilon}^b f(x)\,dx$$
idem con b infinita
## Integrali impropri poli-problema
Riduco tutto a una somma di integrali mono-problema

## Tecniche plus
Non sempre riusciamo a trovare una primitiva e quindi a determinare la convergenza o divergenza di un integrale.
### Con f(x)>0
tecniche:
- confronto
- confronto asintotico:
  - casi standandard
  - casi limite

### Con segno qualunque
tecniche:
- assoluta integrabilità
- integrazione per parti

### Criterio del confronto
So che la mia funzione, essendo positive, o diverge a $+\infty$ o converge a $\ell>0$. Supponiamo che $0\le f(x)\le g(x)$ per ogni $x\in I$ zona di integrazione, allora posso confrontarle a $+\infty$.

### Criterio del confronto asintotico
Integrale di f(x) e integrale di g(x) in I. Supponiamo che $f(x)\le 0$ e g(x)>0 su tutto I e
$\lim_{x\to x_0}\frac{f(x)}{g(x)}=\ell \ne 0 \ne +\infty$
allora i 2 integrali hanno lo stesso comportamento, ossia il primo converge se anche il secondo converge.