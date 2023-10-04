#### Distanza tra rette parallele
$d(r,r^1)=d(P,Q)=||\overrightarrow{PQ}||$ 
P=$r\cap \pi$
Q=$r^1\cap \pi$
con $\pi\bot r,r^1$
#### Distanza tra rette sghembe
Ho un segmento perpendicolare sia alla retta r che alla retta r$^1$
$d(r,r^1)=d(P,Q)=||\overrightarrow{PQ}||$
con $P\in r,Q\in r^1$
$\overrightarrow{PQ}\bot r,r^1$
##### esempio
$r:\begin{cases}x=2+t\\y=t\\z=t-1\end{cases}(t\in\Bbb R)\quad r^1:\begin{cases}x-z=1\\y+3z=-1\end{cases}$
##### Modo 1
$P=(2+t,t,1-t)\in r$
$r^1=\begin{cases}x=1+s\\y=-1-3s\\z=s\end{cases}$
$Q=(1+s,-1-3s,s)\in r^1$
$\overrightarrow{PQ}=(-1+s-t,-1-3s-t,-1+s+t)\bot r,r^1\iff$
$\vec R=(1,1,-1)$  vettore direzione della prima retta r
$\vec {V^1}=(1,-3,1)$ vettore direzione della seconda retta
Sono perpendicolari se il prodotto scalare è nullo
$\iff \overrightarrow{PQ}\cdot \vec V=0,\quad\overrightarrow{PQ}\cdot\vec{V^1}=0$
$\overrightarrow{PQ}\cdot\vec V=-1+s-t-1-3s-t+1-s-t$
$\overrightarrow{PQ}\cdot\vec{V^1}=-1+s-t+3+9s+3t-1+s+t$
$\begin{cases}-3t-3s-1=0\\3t+11s+1=0\end{cases}$
$s=0, t=-\frac 1 3$
Trovo i punti e calcolo la norma
##### Modo 2
C'è un solo piano che contiene r$^1$ ed è parallelo ad r.
$d(r,r^1)=d(d,\pi)=d(P_0,\pi)\quad\forall P_0\in r$
Dobbiamo trovare il piano $\pi$ contenete r$^1$ e parallelo ad r (tecnica dei fasci di piani)
$r^1:\begin{cases}x-z-1=0\\y+3z+1=0\end{cases}$

$\lambda(x-z-1)+\mu(y+3z+1)=0$ Se $\lambda$ e $\mu$ non sono entrambi nulli, questa equazione rappresenta un piano contenente r$^1$
$\pi\parallel r\iff\vec n\perp\vec v$ 
$\vec n=(\lambda,\mu,-\lambda+3\mu)$ normale a $\pi$
$\vec n\cdot\vec v=0=\lambda+\mu+\lambda-3\mu=2\lambda-2\mu\Rightarrow\lambda=\mu$
$\lambda=1=\mu$ (a piacere, non nulli)
$\pi:x+y+2z=0$ (sostituendo sopra lambda e mu)
$d(r,r^1)=d(P_0,\pi)=d((2,0,1),\pi)=