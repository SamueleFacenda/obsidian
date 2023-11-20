integrali:
- come si indicano
- significato geometrico
- come si definiscono
- come si calcolano

## Notazione
1. zona di integrazione: intervallo $[a,b]\in\Bbb R$, quindi un insieme limitato
2. funzione integrale: $f:[a,b]\to\Bbb R$ limitata, ossia esiste $M\in\Bbb R$ t.c. $|f(x)|\le M \forall x \in [a,b]$
$$\int_a^bf(x)\,dx$$

Notazione estesa: per definizione si pone
$\int_a^af(x)\,dx=0$
$\int_b^af(x)\,dx=-\int_a^bf(x)\,dx$


## Significato geometrico
$\int_a^bf(x)\,dx=$ è un numero reale che rappresenta l'area con segno delle parti di piano comprese tra il grafico di f(x) e l'asse delle ascisse. Le zone in cui la funzione ha valori positivi contribuiscono con segno positivo, dove ha valori negativi con segno negativo.

Faccio le due sommatorie di Rieman, divido in sottointervalli e sommo le arree dei rettangoli con base la larghezza del sottointervallo e come altezza il massimo/minimo della funzione nel sottointervallo. Uno è l'integrale superiore (quello dei massimi), l'altro inferiore.

Teorema: l'integrale superiore è sempre maggiore o uguale di quello inferiore.

Def: si dice che f è integrabile secondo Riem