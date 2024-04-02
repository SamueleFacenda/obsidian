
Degenere: assume valore 1 per un certo input e 0 per gli altri
Discreta: può assumere solo un numero finito o numerabile di valori

Oss. X discreta $\iff$ $F_x$ è discontinua e costante a tratti

Continua: $F_x$ è continua
Miste: tutte le altre

Def. Sia X una variabile aleatoria discreta. Chiamiamo densità discreta oppure funzione di massa di probabilità (PMF)
$$\varphi_x:\Bbb R\to[0,1]\qquad \varphi_x(y)=\Bbb P(x=y)$$
Chiamiamo supporti di X o di $\varphi_x$ l'insieme $\mathcal R_x$ dei valori assunti da X

Prop. Se X è una variabile aleatoria discreta e $Y=aX+b\quad a\ne 0,b\in\Bbb R$. Allora 
- $\varphi_Y(y)=\varphi_X(\frac{y-b}a)\qquad \forall y\in\Bbb R$
- $a>0\quad F_Y(y)=F_X(\frac{y-b}a)$
- $a>0\quad F_Y(y)=1-F_X(\frac{y-b}a)+\varphi_X(\frac{y-b}a)$


### Bernulliane
X v.a. discreta si dice bernulliana di parametro p con $p\in[0,1]$ se 
$$PMF\quad \varphi_x(x)=\begin{cases}p\quad x>1\\1-p\quad x=0\\0\quad altrimenti\end{cases}$$
oppure
$$CDF\qquad F_x(x)=\begin{cases}0\quad x<0\\1-p\quad 0\le x<1\\1\quad 1\le x\end{cases}$$
## Vettori aleatori (discreti)
Se ho due variabili aleatorie X e Y su $(\Omega, \mathscr F, \Bbb P)$
Si chiama coppia di v.a. o v.a. doppia o vettore aleatorio di dimensione 2 la funzione 
$$V:\Omega\to\Bbb R^2\quad V(\omega)=(X(\omega),Y(\omega))$$

## Indipendenza
$$\varphi_{x,y}(x,y)=\varphi_x(x)\varphi_y(y)$$

## Binomiali
Def. X v.a. discreta è una binomiale di parametri $n\in\Bbb N\setminus\{0\}$ e $p\in [0,1]$ se è la somma di n v.a. di Bernulli indipendenti di parametro p. Scriviamo $X\sim bin(n,p)$
$\varphi_s(x)=\binom nx p^n (1-p)^{n-x}$
