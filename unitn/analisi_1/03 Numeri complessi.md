
Tre modi di presentazione:
- Forma cartesiana
- Forma Trigonometrica
- Forma esponenziale

## Forma cartesiana
$z\in \Bbb{C}$
$z=x+iy\;\;x,y\in\Bbb{R}$
i = unita' immaginaria tale che $i^2=-1$
x = parte reale di z = $\Bbb{Re}(z) = R(z)$
y = parte immaginaria di z = $\Bbb{Im}(z) = I(z)$

### Rappresentazione cartesiana
Piano di Argand-Gauss o solo Gauss
Il solito piano cartesiano, con la parte reale (rappr. cartesiana) sull'asse x e quella immaginaria sulle y

### Operazioni algebriche tra numeri complessi

Somma e differenza sono semplici, sommo le parti reali e le parti immaginarie

Prodotto: 
z w = (a+bi)(c+di)
= ac + adi + bci + bdi ^2^
zw = ac-bd + (ab+bc)i

Elemento neutro somma: equivalente in C di 0, che e' $0\in\Bbb{C} \;\;\; 0=0+0i$
$z\pm 0=0$
Opposto nella somma: $\forall z \in \Bbb{C} \exists w \in \Bbb{C} \;t.c.\, z+w=0$
quindi per $z=a+bi\Rightarrow w=-1-bi \Rightarrow -z$
E' l'opposto di z rispetto all'origine

Somma e differenza in C seguono la regola del parallelogramma

### Reciproco 
in C:
$\frac{1}{z}=\frac{1}{a+bi}=\frac{1}{a+bi}\frac{a-bi}{a-bi}=\frac{a-bi}{a^2+b^2}$

### Coniugato

Si definisce coniugato di z il numero complesso con stessa parte reale e opposta parte immaginaria: $\bar z$

### Modulo

Si definisce per z:
$|z|=\sqrt{a^2+b^2}$

### Considerazioni
$z\cdot \bar z = (a+bi)(a-bi)=a^2+b^2=|z|^2$
$\frac{1}{i}=-i$

Osservazioni:
$\frac{1}{z}=\bar z \;\;\forall z \in \Bbb C \;\; t.c. \;\; |z|=1$
Nel piano di Gauss-Argand e' la circonferenza con centro in 0 e raggio 1.

## Rappresentazione trigonometrica
Si usano le coordinate polari nel piano. Ogni coppia e' individuata dalla coppia ($\rho , \theta$  ) dove il primo rappresenta la distanza dal punto all'origine e $\theta$ e' l'angolo che identifica la posizione del punto rispetto all'asse delle reale e preso in senso antiorario

Formule di passaggio: $a=\rho \cos \theta \;\; b=\rho \sin \theta$
Al contrario: $\rho=|z|=\sqrt{a^2+b^2}$ e $\theta$ lo leggo nel disegno oppure $\frac b a =\frac{\sin\theta}{\cos\theta}=\tan \theta$

Scrivere un numero in forma trigonometrica significa scrivere che $$ z = a +bi=\rho \cos \theta + \rho \sin \theta i = \rho (\cos \theta + i \sin \theta)$$
Il coniugato ha semplicemente il segno invertito di isin.

### Prodotto in forma trigonometrica
$w=\pi (\cos \varphi +i\sin \varphi)$
$$z\cdot w=\theta\pi(\cos{\theta + \varphi}+i\sin(\theta + \varphi))$$
Reciproco:
$\frac 1 z = \frac{\bar z}{|z|^2} = \frac 1 \rho (\cos \theta -i\sin\theta)$
Invertire il modulo e il segno di $\theta$
#### Prodotto
$$\frac z w = z \cdot \frac 1 w = \frac \rho \pi (\cos(\theta-\varphi)+i\sin(\theta-\varphi))$$
Divido i moduli, sottraggo gli angoli

## Proprietà del coniugato

$\overline{z+w}=\bar z + \bar w$
$\bar{\bar z}=z$
$|\bar z| = |z|$
$\overline{\frac 1 z}= \frac 1 z$
$|z\cdot w|=|z|\cdot|w|$

## Forma esponenziale

$z=\rho e^{i\theta}=\rho(\cos \theta + i \sin\theta)$
Questa rappresentazione e' molto utile in alcune manipolazione algebriche, ad esempio nei prodotti
$zw=\rho\pi e^{i(\theta+\varphi)}$
$\frac z w =\frac \rho \pi e^{i(\theta -\varphi)}$
$\frac i z = \frac 1 \rho e^{-i\theta}$
$\bar z = \rho e^{-i\theta}$

## Potenze n-esime in C
$z^n=(a+bi)^n$
Meglio usare la forma trigonometrica.
$z\cdot z=\rho^2(\cos(2\theta)+i\sin(2\theta))$
In generale $z^n=\rho^n(\cos(n\theta)+i\sin(n\theta))$
oppure $z^n=\rho^n e^{in\theta}$
Oss: $z=\cos \theta + i\sin\theta\;\;(\rho =1)$
Trovo le formule della trigonometria
1' modo $z^2=\cos(2\theta)+i\sin(2\theta)$
2' modo $z^2=(\cos\theta + i\sin\theta)^2=\cos^2 \theta +2\cos\theta i\sin\theta -\sin^2\theta$
allora
$\cos(2\theta)=\cos^2\theta-\sin^2\theta$
$\sin(2\theta)...

Esercizio per casa
Scrivere in forma esponenziale z=e, z=-5, $z=(1+i)^{20}$,z=$(\sqrt 3 -i)^{-20}$


Dimostrazione per induzione:
$z^n=(a+bi)^n$
Meglio usare la forma trigonometrica.
$z\cdot z=\rho^2(\cos(2\theta)+i\sin(2\theta))$
passo induttivo:
ipotesi: $z^n=\rho^n(\cos(n\theta)+i\sin(n\theta))$
tesi: $z^{n+1}=\rho^{n+1}(\cos((n+1)\theta)+i\sin((n+1)\theta))$
dimostrazione:
$$z^{n+1}=\rho(\cos \theta + i\sin \theta)\cdot \rho(\cos \theta + i\sin \theta)\cdot\\rho(\cos \theta + i\sin \theta)...n+1$$

$$=\rho^n(\cos(n\theta)+i\sin(n\theta))\rho(\cos \theta + i\sin \theta)$$
$$=\rho^{n+1}(\cos \theta + i\sin \theta)(\cos(n\theta)+i\sin(n\theta))$$




## Radici di un numero complesso

Dato un numero complesso $w_0\in\Bbb C$ e un numero intero $n\ge z$ si dicono radici n-esime di $w_0$ i numeri $z\in \Bbb C$ tali che $z^n=w_0$

Se $w_0\ne 0 \Rightarrow$ l'eq $z^n=w_0$ ha sempre n soluzioni complesse e distinte
Queste soluzioni rappresentano i vertici di un n-agono regolare

Come si calcolano le radici? Lavoriamo sulla rappresentazione euleriana.
$w_0=\rho_0 e^{i\theta_0}$ (rho e theta sono finiti)
e $z=\rho e^{i\theta}$ (tho e theta sono incognite)
allora ho $z^n=w_0 \iff \rho^ne^{in\theta}=\theta_0e^{i\theta_0}$
$\iff \rho^n = \rho_0 \;\; e \;\; in\theta=i\theta_0+2k\pi\;\; k\in \Bbb Z$
Rho0 e' positivo e reale, quindi trovo facilmente $\rho$: $\rho = \sqrt[n]{\rho_0}$
$\theta = \frac {\theta_0} n + k\frac {2\pi} n$
Le uniche soluzioni rilevanti per theta sono quelle in cui k=0,1,2...,n-1

Esercizio
$z^3=8i=8e^{i\frac \pi 2}$
$\rho=\sqrt[3]8=2$
$\theta=\frac \pi 6 + \frac {2k\pi} 3$
Sostituisco k=0,1,2
$k=0\;\;\theta=\frac \pi 6$
$k=1\;\;\theta=\frac {5\pi} 6$
$k=2\;\;\theta=\frac {3\pi} 2$


## Polinomi con numeri complessi
$P(x)=a_nx^n+a_{n-1}x^{n-1}+...+a_1x^1+a_0$
Dove $a_k\;\;k=0,1,2,...,n$ sono i coefficienti del polinomio $\in \Bbb R\;\;o\;\; \Bbb C$ con la variante x pensata come reale o complessa.

Def. Un numero complesso $\alpha\in \Bbb C$ si dice radice del polinomio P(x) se $P(\alpha)=0$
Teorema di Ruffini Se $\alpha \in \Bbb C$ e' radice di P(x) allora P(x) e' divisibile per (x-$\alpha$) ossia esiste il polinomio Q(x) t.c. Q(x)(x-$\alpha$)=P(x)

Divisione polinomi
Dati due polinomi A(x) e B(x) esistono sempre 2 polinomi Q(x) e R(x) tali che A(x)=B(x)Q(x)+R(x) -> resto

Fatto 1: Ogni polinomio di grado n puo' avere al massimo n radici

Def. Molteplicit' di una redice
Sia $\alpha$ radice di P(x), si definisce MOLTEPLICITA' di $\alpha$ il piu' grande naturale m tale che P(x) e' divisibile per $(x-\alpha)^m$ 

Fatto 2: Teorema fondamentale dell'algebra
Un polinomio di grado n ha esattamente n radici complesse eventualmente contate con le rispettive molteplicita'
Conseguenza: ogni polinomio puo' essere fattorizzato in prodotti di n monomi (polinomio di grado 1 a coefficienti complessi)
