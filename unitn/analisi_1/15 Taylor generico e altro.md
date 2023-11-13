Con $x_0\ne 0$
Sia f una funzione, sotto opportune ipotesi si ha che esiste un unico polinomio $P_n$ di grado $\le n$ tale che 
$$ f(x_0+h)=P_n(h)+o(h^n)\quad h\to 0$$
Inoltre vale la formula
$$P_n(h)=f(x_0)+\frac{f'(x_0)}{1!}h+\frac{f''(x_0)}{2!}h^2+\dots+\frac{f^{(n)}(x_0)}{n!}h^n$$

## Teorema esistenza degli zeri
$f[a,b]\to\Bbb R$ sia una funzione continua.
Supponiamo che f(a)f(b)<0 (ossia segni discordi)
Allora esiste almeno un punto $c\in (a,b)$ tale che f(c)=0

Oss.
- la continuità è fondamentale
- è fondamentale avere a che fare con numeri reali

Questo è valido anche traslato verticalmente (e.g. esiste un $\lambda$ se f(a)<$\lambda$<f(b)) 

## Studio locale di funzioni
Capire come è fatto il grafico di una funzione nelle vicinanze di un dato punto $x_0$
#### Teorema monotonia 1
Supponiamo che $f'(x_0)>0$. Allora esiste $\delta>0$ tale che:
- $f(x)>f(x_0)\qquad \forall x\in(x_0,x_0+\delta]$
- $f(x)<f(x_0)\qquad \forall x\in[x_0-\delta,x_0)$
E idem per <0

## Punti stazionari
Dove la derivata è 0
Possibilità:
- minimo locale/relativo (minore prima maggiore dopo)
- massimo locale/relativo (maggiore prima minore dopo)
- flesso a tangente orizzontale ascendente (maggiore prima e dopo)
- flesso a tangente orizzontale decrescente (minore prima e dopo)
- segni non definiti

Per capire la configurazione uso il criterio delle derivate successive
Prendo la derivata k-esima (quella che in $x_0$ non è più zero), analizzo il suo valore in $x_0$ per capire la situazione in cui mi trovo (k pari: val >0 minimo, val <0 massimo. k dispari: val>0 flesso ascendente, val<0 flesso discendente)

Con Taylor trovo che $$\frac{f^{(k)}(x_0)}{k!}=\frac{f(x_0+h)-f(x_0)}{h^k}\qquad h\to0$$
Visto che sto studiando il segno il k! non mi importa più di tanto 
Così capisco che analizzando il segno della derivata k-esima e nei casi $h\in(0,\delta]$ e $h\in[-\delta,0)$ (h prima e dopo $x_0$) trovo che la il valore della funzione è maggiore/minore prima/dopo $x_0$.

### Traduzione del criterio
Nelle immediate vicinanze di un punto stazionario la funzione f si comporta come il primo termine non nullo e costante del suo sviluppo di Taylor.
without sacrificing its appearance.

## Teorema di Weierstrass
Sia $f:[a,b]\to\Bbb R$ continua
Allora $max\{f(x):x\in[a,b]\}$ e $min\{f(x):x\in[a,b]\}$ esistono sempre

### Ricerca punti max/min
3 categorie:
- punti stazionari interni
- punti singolari interni
- punti del bordo

## Teorema di Rolle
f continua e derivabile in un intervallo chiuso e limitato (\[a,b\])
f(a)=f(b)
Esiste almeno in valore $c\in(a,b)$ per cui f'(c)=0

## Teorema di Cauchy
Siano $f:[a,b]\to\Bbb R,\; g:[a,b]\to\Bbb R$, continue e derivabili in (a,b)
Allora esiste almeno un punto $c\in(a,b)$ tale che $(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)$
Inoltre se $g'(x)\ne0\quad \forall x\in(a,b)$
ho $\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(c)}{g'(c)}$

## Teorema di Lagrage
Sempre la funzione definita, continua e derivabile in a,b
Allora esiste almeno un punto $c\in(a,b)$ tale che $f(b)-f(a)=(b-a)f'(c)$

## Teorema monotonia 2
Se f è continua e derivabile in a-b. Se f è debolmente crescente/decrescente f'(x)>0/<0 e viceversa. 