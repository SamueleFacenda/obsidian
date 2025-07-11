### Principi
1. Lo stato di moto di un corpo non varia se non per azione di un agente esterno.
2. $\vec F=m\vec a$ oppure $\vec a =\frac{\vec F}m$ 
3. $\vec F_{1\to2}=-\vec F_{2\to1}$ , principio di azione reazione
$m$: massa inerziale, $[M]$, Kg.
$\vec p=m\vec v$: quantità di moto

$$\vec F=\frac{d\vec p}{dt}$$
Kg m/s^2 = N (Newton) 
$\vec F_{1\to c}+\vec F_{2\to c}+\dots+\vec F_{n\to c}=\vec R$ risultante delle forze.

$\vec N$ è la reazione vincolare, la forza opposta a un vincolo (e.g. la forza dal pavimento su un corpo).

### Forze
$\vec F_p=m\vec g$, forza peso
$\vec F_{el}=-K(\vec x-\vec x_{eq})$, forza elastica e punto di equilibrio con costante elastica
Attrito radente statico  e dinamico:
$\vec F_{Att,S}=-\mu_s|\vec N|\hat d$
$\vec F_{Att,D}=-\mu_d |\vec N|\hat v$

Legge di gravitazione universale:
$$\vec F_{1\to2}=-G\frac{q_{G,1}\cdot q_{G,2}}{r_{12}^2}\hat r_{12}$$
>$\vec F_{1\to2}=-G\frac{m_1m_2}{r_{12}^2}\hat r_{12}$

Forze fondamentali:
- gravitazione
- elettromagnetismo
- interazione debole
- interazione forte
### Casi ricorrenti
#### Attriti
$|\vec A_{s,max}|=\mu_s|\vec N|$
è una speciale forma di reazione vincolare.
$|A_{s,max}|=\mu_sN_n$
$|\vec A_d|=-\mu_d|\vec N_n|\hat v$
#### Piano inclinato
$\theta$: angolo del piano inclinato rispetto all'orizzontale
##### Stasi
$$\begin{cases}-P\cos\theta+N_n=0\\ P\sin\theta-A_s=0 \end{cases}$$
##### Discesa frenata
$$\begin{cases}-P\cos\theta+N_n=0\\ P\sin\theta-A_d=ma_x\end{cases}$$
>$A_s=P_{\parallel}\qquad N_n=P_\bot$ 

### Lavoro
$$W=\int_{percorso\;\gamma}\vec F\cdot d\vec\ell$$
Si misura in Joule (J): $[W]=[E]=[F\cdot L]=[M\frac {L^2}{T^2}]$ 
Lavoro motore e lavoro frenante
### Energia cinetica
$$E_K=\frac 12mv^2$$
Teorema forze vive
#### Forze conservativa
$$\vec F | W_{F,i\to f}=\int_i^f\vec F,d\vec s \text{ non dipende dal percorso ma solo dai suoi estremi}$$
Oppure
$$\oint\vec F\cdot d\vec s=W_{F,i\to i}=0$$
$$W_{F,i\to f(I)}=W_{F,i\to f(II)}$$
O ancora
$$W_{F,i\to f}=\mathscr F(P_f)-\mathscr F(P_i)$$
> N.B. Ammette una primitiva (non torna indietro)

#### Energia potenziale
$$U(P)=-\mathscr F(P)$$

| $\vec F$      | U               |
| ------------- | --------------- |
| $-mg\hat z$   | $mgz$           |
| $-Kx^2\hat x$ | $\frac 12 Kx^2$ |
### Teorema di conservazione dell'energia meccanica
$W_{R,i\to f}=E_{K,f}-E_{K,i}$
$\vec R=\vec R_{cons.}+\vec R_{n. cons.}$
$W_{R_{cons.},i\to f}+W_{R_{n. cons.},i\to f}=E_{K,f}-E_{K,i}$
$W_{R_{n. cons.},i\to f}=E_{K,f}-E_{K,i} +U_f-U_i$
$$\Delta E_K+\Delta U=W_{R,N.C.}$$
$$E=E_K+U\text{ energia meccanica}$$
$$E_f-E_i=W_{R,N.C.}$$
### Potenza
Potenza media:
$$\bar P=\frac W{\Delta t}$$
$$P=\frac {dW}{dt}\qquad[P]=[\frac ET]=[FV]=1W=1\frac Js$$
### Urti
Si conserva la quantità di moto ($m\vec v$).

#### Centro di massa
$$\vec X_{CM}=\sum_{i=0}^N\frac{m_i}M\vec x_i$$
$$\vec v_{CM}=\sum_{i=1}^N\frac{m_i}M\vec v_i$$
$$E'_{K,TOT}=E_{K,TOT}-\frac 12M\vec v_{CM}^2$$
#### Urti elastici
L'energia cinetica si conserva
#### Urti anelastici
L'energia cinetica non si conserva.

#### Teorema del moto del centro di massa
$\vec R_i=m_i\vec a_i$
$\sum_{i=1}^n\vec R_i=\sum _{i=1}^nm_i\vec a_i$
