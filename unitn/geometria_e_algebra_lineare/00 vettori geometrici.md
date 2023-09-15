$\Bbb{R}^2=\Bbb{R}\times \Bbb{R}=\{(a,b)|a,b \in \Bbb{R}\}$
$R^3=R\times R \times R=\{(a,b,c)|a,b,c \in R\}$


## somma: 
$(a_1,b_1)+(a_2,b_2)=(a_1+a_2,b_1+b_2)$
idem per le terne
prodotto per scalare: $k\in R \;\;(a,b)\times k=(a\times k,b \times k)$
idem per le terne

piano: fissiamo un riferimento cartesiano

Dati due punti A,B del piano, il vettore geometrico definito da questi due punti $\overrightarrow{AB}=(x_b-x_a,y_b-y_a) \in R^2$
Dove $A = (x_a, y_a) e B=(x_b,y_b)$

Idem per quelli spaziali, le terne hanno anche z.

Due vettori coincidono se sono paralleli, hanno stessa lunghezza e verso (sono lati opposti di un parallelogramma)

Per definizione i vettori geometrici sono liberi

### Operazioni con i vettori:
Somma di vettori geometrici
$\overrightarrow{AB} + \overrightarrow{CD} = (x_b-x_a+x_d-x_c,y_b-y_a+y_d-y_c) \in R^2$
Oss: 
$\overrightarrow{AB} + \overrightarrow{BC} = (x_c-x_a,y_c-y_a)$
Interpretazione geometrica di questo: due vettori contigui, la somma unisce l'inizio e la fine
Proseguo e scopro la regola del parallelogramma, se sommo due vettori con stesso punto iniziale, la somma e' la diagonale del parallelogramma che creano.
$\overrightarrow{AB}+\overrightarrow{AA^1}=\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$
Dove C e' il punto mancante del parallelogramma

Nello spazio e' uguale, ho solo una componente in piu'. Funziona bene perche' il parallelogramma si fa uguale in un piano

### Proprieta' della somma
1. associativa
$(\overrightarrow{AB}+\overrightarrow{CD})+\overrightarrow{EF}=\overrightarrow{AB}+(\overrightarrow{BC}+\overrightarrow{EF})$
Funziona perche' deriva dalla somma algebrica, che ha questa poprieta'

2. commutativa
$\overrightarrow{AB}+\overrightarrow{CD}=\overrightarrow{CD}+\overrightarrow{AB}$
### Elemento neutro
$\overrightarrow{0}$ (vettore nullo): $\overrightarrow{AB} + \overrightarrow{0} = \overrightarrow{0} + \overrightarrow{AB} = \overrightarrow{AB}$
$\overrightarrow{0} = \overrightarrow{AA} (\forall \text{ punto A})$
### Vettore opposto
Per ogni vettore $\overrightarrow{AB}$ esiste un vettore opposto tale che $\overrightarrow{AB} + (-\overrightarrow{AB}) = \overrightarrow{0}$   (e al contrario)
$-\overrightarrow{AB}=\overrightarrow{BA}=\overrightarrow{AB^I}$
Dove $B^I$ e' il simmetrico di B rispetto ad A
### Gruppi e altre cose
$V^2=\{\overrightarrow{AB}|A,B \text{  parti del piano}\}$
e' un gruppo commutativo (abeliano) rispetto alla somma.
Idem per $V^3$, e' un gruppo commutativo rispetto alla somma (parti dello spazio)

## Moltiplicazione per scalare
$t\in R, \overrightarrow{AB} \in V^2$
$t\overrightarrow{AB}=(t(x_b-x_a),t(y_b-y_a)) \in R^2$
se t>0, $A\ne B$ :
Posso disegnare una retta su cui giace il vettore $\overrightarrow{AB}$ . Posso sulla retta scegliere un terzo punto $B^I$ tale che $|\overrightarrow{AB}|t=\overrightarrow{AB^I}$
ho $\overrightarrow{AB^I}=t\overrightarrow{AB}$

$t\overrightarrow{AB} = \overrightarrow{0}$ se t=0 oppure A=B
Tre punti $A,B,B^I$ sono allienati <=> (se e solo se)
$\exists t \in R$ tale che $t\overrightarrow{AB}=\overrightarrow{AB^I}$

Ancora una volta e' uguale nello spazio

### Rette nel piano
Retta r passante per $P_1\ne P_2$
$\overrightarrow{P_1P_2}\ne \overrightarrow{0}$  e' un vettore direzione della retta r

Quindi $P\in r \iff \exists t \in \Bbb{R} \text{ tale che } \overrightarrow{P_1P}=t\overrightarrow{P_1P_2}$
eq. parametrica vettoriale di r

### Rette nel piano
e' sempre uguale, con tre componenti

### Equazione cartesiana di una retta nel piano

ax + by = c, con (a,b) $\ne$ (0,0)
Si ottiene eliminando t dalle equazioni parametriche

### Equazione cartesiana di una retta nello spazio
Eliminando t ottengo due equazioni sotto sistema
ax+by+cz=d
$a^Ix+b^Iy+c^Iz=d^I$
Sono lienari in x,y,z (equazioni cartesiane di r), definiscono l'intersezione di due piani