
## Equazioni differenziali ordinarie (EDO)

è un'equazione in cui l'incognita è una funzione. La funzione deve soddisfare una relazione che coinvolge 
la funzione stessa e un pò delle sue derivate.

La chiameremo u.

Oss. anche l'insieme di definizione di u è tra le incognite del problema, L'insieme di arrivo è sempre $\Bbb R$.

Def. Si dice ORDINE di una EDO il massimo ordine di derivazione
che compare nella relazione.

In termini (molto) astratti, una EDO di ordine k è una relazine della forma
$\Phi (u^{(k)},u^{(k-1)},\dots,u'(t),u(t),t)$

Def. Una EDO si dice autonoma se la variabile indipendente t compare solo come argomento dei u e sue derivate.
Altrimenti è detta non autonoma.

Vedremo solo quelle:
- ordinarie, 1° ordine, in forma normale e a variabili separabili
- lineari: u e le sue derivate compaiono di 1° grado e non all'interno di funzioni.


## A variabili separabili

Mi riduco nella forma f(u) = g(t)
Integro a destra e a sinistra
trovo la funzione


## Tempo di vita
Si dice tempo di vita (life span) della soluzione (nel futuro) il SUP dell'intervallo massimale di esistenza

Se è $+\infty$ allora si dice che è globale nel futuro
Se è finito allora si dice che muore al tempo T, con due casi:
- se $\lim_{t\to T^-}u(t)=+\infty$ allora si dice che ha un blow-up al tempo t
- negli altri casi la soluzione esce dalla zona in cui il membro di destra dell'EDO è definito, si dice che a un
BREAK-DOWN

## Lineari omogenee
Sono nella forma $a_n(t)u^{(n)}+\dots+a_0(t)u = 0$

Teorema generale: l'insieme delle soluzioni di una EDO lineare ed omogenea di grado n è uno spazio vettoriale di dimensioni n.
La soluzione generale si scrive come combinazione lineare nella forma:
$u(t)=c_1u_1(t)+\dots+c_nu_n(t)\qquad c_1,c_2,\dots,c_n\in\Bbb R$

Per le EDO lineari omogenee l'intervallo massimale di esistenza è il più grande intervallo che contiene il tempo iniziale
$t_0$ e dove sono definiti tutti i coefficienti $a_j(t)$
Trovo il polinomio associato, trovo le radici, le mie u sono $e^{x_it}$ con $x_i$ radici del polinomio
Se una radice ha molteplicità due, sarà $(c_1+c_2t)e^{x_it}$
