
### Media e Varianza

La media di una variabile aleatoria (o valore atteso o speranza) è lineare. 
La varianza è invariata per traslazione ma $\mbox{Var}[aX]=a^2\mbox{Var}[X]$.
La varianza è la media dei quadrati degli scarti dalla media.

$Var[X+Y]=Var[X]+Var[y]$

Chiamiamo deviazione standard di una v.a. X $\sigma_X=\sqrt{p(1-p)}$


### Disuguaglianza di Chebychev
X v.a., $Var[x]<+\infty$ 
Allora $\forall a>0$
$$\Bbb P(|x-\Bbb E[x]| \ge a)\le \frac{Var[x]}{a^2}$$
### Covarianza e Correlazione
X,Y v.a. Chiamiamo covarianza di X e Y il numero 
$$Cov[X,Y]=\Bbb E[(X-\Bbb E[X])(Y-\Bbb E[Y])]$$
Se $Cov[X,Y]=0$ diciamo che X e Y sono scorrelate.

$Var[X+Y]=Var[X]+Var[Y]+2Cov[X,Y]$
$Cov[aX+bY,Z]=aCov[X,Z]+bCov[Y,Z]$


Def. $\vec X=(X_1,\dots,X_n)$ vettore aleatorio chiamiamo matrice di covarianza la matrice
$$\Sigma_{ij}=Cov[X_i,X_j]\qquad i,j=1,\dots,n$$

Def. Chiamiamo correlazione di X,Y il numero 
$$\rho (X,Y)=corr[X,Y]=\frac{Cov[X,Y]}{\sqrt{Var[X]Var[Y]}}$$
$\rho (X,Y)=1\implies X=aY+b\quad a>0$
$\rho (X,Y)=-1\implies X=aY+b\quad a<0$

### Speranza di v.a. continue
Chiamiamo valore atteso oppure speranza oppure media di X v.a. continua il numero 
$$\Bbb E[X]=\int_{-\infty}^{+\infty}xf_x(x)\, dx$$
Se l'integrale non esiste o vale $\pm\infty$ la speranza non è definita.

Teo. X v.a. cont. $Y=g(x)$. Allora $\Bbb E[Y]=\int_{-\infty}^{+\infty}g(x)f_x(x)\,dx$

Inoltre
- $\Bbb E[aX+Y+b]=a\Bbb E[X]+\Bbb E[Y]+b\qquad\forall a,b\in\Bbb R$
- $X\ge 0\implies\Bbb E[X]\ge 0,\quad\Bbb E[X]=0\iff x\equiv 0$


### Varianza continua
$$Var[X]:=\Bbb E[(X-\Bbb E[X])^2]=\Bbb E[X]-(\Bbb E[X])^2$$
Le proprietà sono le medesime della varianza di v.a. discrete.
