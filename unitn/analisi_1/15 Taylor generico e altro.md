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
#### Teorema monodromia 1
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

Con Taylor trovo che $$