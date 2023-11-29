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

## Definizione

Faccio le due sommatorie di Rieman, divido in sottointervalli e sommo le arree dei rettangoli con base la larghezza del sottointervallo e come altezza il massimo/minimo della funzione nel sottointervallo. Uno è l'integrale superiore (quello dei massimi), l'altro inferiore.

Teorema: l'integrale superiore è sempre maggiore o uguale di quello inferiore.

Def: si dice che f è integrabile secondo Rieman nell'intervallo \[a,b\] se l'integrale superiore coincide con quello inferiore. Se questo accade, allora definisco l'integrale in \[a,b\] come l'integrale superiore.

Teorema: sia ha che la funzione è integrabile nei seguenti casi:
1. se la funzione è monotona
2. se la funzione è continua
3. se la funzione è continua a tratti, ossia continua ovunque tranne un insieme finito di punti
### Proprietà degli integrali

$\int_a^bf(x)+g(x)\,dx=\int_a^bf(x)\,dx+\int_a^bg(x)\,dx$
$\int_a^b\lambda f(x)\,dx=\lambda\int_a^bf(x)\, dx$
(applicazione lineare)

$\int_a^bf(x)\,dx=\int_a^cf(x)\,dx+\int_c^bf(x)\,dx$
oss: vale la stessa formula anche con c all'esterno dell'intervallo \[a,b\]

### Criterio di integrabilità
Una funzione $f:[a,b]\to\Bbb R$ è integrabile secondo Rieman in \[a,b\] se e solo se $\forall\epsilon >0$ esistono due funzioni semplici $\varphi$ e $\psi$ in \[a,b\] tali che:
1. $\varphi(x)\le f(x)\le \psi(x)\qquad \forall x\in[a,b]$
2. $\int_a^b\psi(x)-\varphi(x)\le\epsilon$

Inoltre posso supporre $\varphi$ e $\psi$ abbiano le stesse suddivisioni di \[a,b\]

## Calcoli
Def: sia $f:[a,b]\to\Bbb R$ continua
Si dice che $F:[a,b]\to\Bbb R$ è una primitiva di f se $F'(x)=f(x)\forall x\in[a,b]$
oss: non è unica

### Tecnica di calcolo degli integrali
Sia F una qualunque primitiva di f in \[a,b\]. Allora per ogni intervallo $[c,d]\subseteq[a,b]$ si ha che 
$$\int_c^df(x)\,dx=F(d)-F(c)=[F(x)]_c^d$$
### Teorema fondamentale del calcolo integrale
La funzione integrale è una primitiva di f in \[a,b\] ossia
$$\Phi'(x)=f(x)\qquad \forall\, x\in[a,b]$$

## Come si calcolano
tecniche:
- primitive elementari
- integrazione per sostituzione
- integrazione per parti
- integrazione funzioni razionali
- sostituzioni razionalizzate

### Primitive elementari
$\int 1\,dx=x$
$\int e^x\,dx=e^x$
$\int \cos x\,dx=\sin x$
$\int \sin x\,dx=-\cos x$
$\int x^k\,dx=\frac 1 {k+1}x^{k+1}$
$\int \cosh x\,dx=\sinh x$
$\int \sinh x\,dx=-\cosh x$
$\int a^x\,dx=\frac1{\log a}a^x$
$\int \frac1{1+x^2}\,dx=\arctan x$
$\int \frac1x\,dx=\log x$   solo per x>0
$\int\frac1{a+x^2}\, dx=\frac1{\sqrt a}\arctan {\frac x{\sqrt a}}\qquad\forall\,a>0$


Non metto $c$ perché è inutile, per il calcolo esplicito non mi serve, per determinare l'insieme delle primitive non è sempre sufficiente.

### Tecnica di integrazione per sostituzione
o del cambiamento della variabile

$$\int_a^bH'(x)\,dx=[H(x)]_a^b$$
Usiamo questa formula ponendo $H(x)=F(G(x))$ in cui F(x) è primitiva di f(x) e G(x) è primitiva di g(x).
Considero la primitiva di H: $H'(x)=(F(G(x)))'=F'(G(x))\cdot G'(x)=f(G(x))g(x)$ quindi
$$\int_a^bH'(x)\,dx=\int_a^bf(G(x))\cdot g(x)\,dx$$
Ora
$$[H(x)]_a^b=[F(G(x))]_a^b=F(G(b))-G(G(a))=[F(x)]_{G(a)}^{G(b)}$$
$$\int_a^bf(G(x))\cdot g(x)\,dx=\int_{G(a)}^{G(b)}f(x)\,dx$$
### Tecnica dell'integrazione per parti

$$\int_a^b F(x)g(x)\, dx=[F(x)G(x)]_a^b-\int_a^b f(x)G(x)\, dx$$
## Integrazione di funzioni razionali
Funzione razionale $=\frac{polinomio}{polinomio}=\frac{P(x)}{Q(x)}$
Procedure per determinare le primitive di una funzione razionale:
- divisione
- fattorizzazione
- sistema lineare algebrico
- integrazione finale

#### 1. Divisione
Il grado del polinomio al numeratore deve essere maggiore o uguale di quello al denominatore, quindi posso dividere.
Ottengo il risultato sommato al resto fratto il numeratore precedente.
#### 2. Fattorizzazione
Scompongo il denominatore in fattori elementari
#### 3. Sistema lineare
Scrivo la frazione come somma di polinomi con al numeratore un fattore del numeratore. Per trovare i denominatori pongo come incognite i numeratori e risolvo il sistema.
metodo dell'A e B ,cioè.
Se il denominatore ha grado >1: $\frac{Ax+B}{x^2+1}$, uso più incognite (un numero uguale al grado del numeratore)

Se ho la molteplicità:
faccio la somma con incognite senza molteplicità e aggiungo un termine con al numeratore il prodotto di tutti i termini con molteplicità ridotta di uno, derivata. Al numeratore sempre un numero di incognite con grado ridotto di uno rispetto al numeratore
#### 4. Integrazione
- $\frac{A}{x-\alpha}\Rightarrow A\log|x-\alpha|$
- $\frac d{dx}(\cos E)=\frac{f'(x)}{f(x)}\Rightarrow \cos E$
- $\frac {Ax+B}{ax^2+bx+c}\qquad \Delta >0$

Se ho $\int\frac{Ax+b}{x^2+C}\,dx$ faccio $A\int\frac x{x^+C}\,dx+B\int\frac1{x^2+C}\,dx$
$=\frac A2\log(x^2+C)+\frac B{\sqrt C}\arctan({\frac x{\sqrt C}})$
Uso l'arcotangente per ricondurmi sotto a $f(x)^2+1$, se sopra ho una costante
Qualunque Ax+B può diventare sopra la derivata di quello sotto, tipo f'(x)+C, divido in due integrali, il primo con il logaritmo e il secondo con l'arcotangente.

Trovare la formula generale per $\int\frac {Ax+B}{x^2+bx+c}\,dx$

### Sostituzioni razionalizzanti
- funzioni razionali $e^x$
- radici n-esime di cose di 1° grado
- radici quadrate di cose di 2° grado
- sostituzioni trigonometriche

#### Formule parametriche per sinx e cosx
$$\sin x=\frac{2t}{1+t^2}\qquad
\cos x=\frac{1-t^2}{1+t^2}\qquad
t=\tan{\frac x 2}$$
