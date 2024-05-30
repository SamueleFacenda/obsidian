> o regressione lineare

Ho una coppia di variabili aleatorie e estraggo delle misurazioni.
Cerco una funzione che mi permetta di prevedere il valore di una sapendo l'altra.

$$0\le \frac{\Bbb Var (\Bbb E(Y|X))}{\Bbb Var (Y)}\le 1$$
$R^2$ coefficiente di determinazione.

#### Modello di regressione semplice
$$(Y|X=x)\sim N(\alpha+\beta x,\sigma^2)$$
Ipotesi di Omoschedasticità (che tutte le x abbiano stessa varianza).

$$(Y|X=x)=\alpha +\beta x + \epsilon\qquad \epsilon\sim N(0,\sigma^2)$$
(modello segnale + rumore)

### Minimi quadrati nel modello lineare semplice
$y_i=\alpha+\beta x_i+\epsilon_i\qquad \epsilon_i(\alpha,\beta)=y_i-(\alpha+\beta x_i)$
$(\hat\alpha,\hat\beta)=argmin_{\alpha,\beta}\sum_{i=1}^n\epsilon_i(\alpha,\beta)^2$

Derivo e ottengo
$$\hat\alpha = \bar y -\hat\beta\bar x$$	$$\hat\beta = \frac{\frac 1n\sum_{i=1}^n(y_i-\bar y)(x_i-\bar x)}{\frac 1n\sum_{i=1}^n(x_i-\bar x)^2}$$
Con la massima verosimiglianza ottengo lo stesso risultato.