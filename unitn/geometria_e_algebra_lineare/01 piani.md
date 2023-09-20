Piano $\pi$ per P1, P2, P3 punti non allineati
$\overrightarrow{P_1P_2}, \overrightarrow{P_1P_3}$ non nulli (giacitura del piano)
Scelgo le rette passanti per i due vettori, traccio i segmenti paralleli alle rette passanti per un altro punto, ottengo un piano (classico disegno a parallelogramma)
Chiamo $P_I \,e\,P_II$ gli altri due vertici del parallelogramma
$\overrightarrow{P_1P} = \overrightarrow{P_1P_I} + \overrightarrow{P_1P_II}$
$=s\overrightarrow{P_1P_2} + t\overrightarrow{P_1P_3}$
Con $s,t\in \Bbb{R}$, questa e' una combinazione lineare dei due vettori iniziali, per ottenere un punto nel piano.
L'ultima e' l'equazione parametrica vettoriale del piano $\pi$
$$\begin{cases} 
x-x_1=s(x_2-x_1)+t(x_3-x_1)\\
y-y_1=s(y_2-x_1)+t(y_3-y_1)\\
z-z_1=s(z_2-z_1)+t(z_3-x_1)\\ 
\end{cases}
$$
$$(s,t\in \Bbb{R})$$

Eliminando s e t si ottiene un'equazione carteriana di $\pi$
ax+by+cz=d $(a,b,c)\ne 0$

Se i vettori sono proporzionali, allora i punti sono allineati e non puo' essere un piano (infiniti piani)

Esplicito l'equazione parametrica per x,y,z per ottenenre l'equazione cartesiana

### Lunghezza di un vettore geometrico

Definizione: se $\overrightarrow{V}\in V^2$ oppure $\overrightarrow{V}\in V^3$
allora la lunghezza di $\overrightarrow{V}$
$|\overrightarrow{V}| =|\overrightarrow{AB}|$ se $\overrightarrow{V}=\overrightarrow{AB}$

Se il riferimento cartesiano e' ortogonale allora, se $\overrightarrow{V}=(V_1,V_2)\in V^2$,
$|\overrightarrow{V}|=\sqrt{V_1^2+V_2^2}\ge 0$ (pitagora)
Idem per lo spazio
$|\overrightarrow{V}|=\sqrt{V_1^2+V_2^2+V_3^2}$

### Angolo tra vettori geometrici

Siano $\overrightarrow{V}=(V_1,V_2,V_3),\overrightarrow{W}=(W_1,W_2,W_3)\in V^3$ non nulli
L'angolo (convesso) tra i vettori $\overrightarrow{V}$ e $\overrightarrow{W}$ e' $\theta \in [0, \pi]$ definiti tra i due segmenti$\overrightarrow{P_1P_2} \, e\, \overrightarrow{P_1,P_2}$ rispettivamente

Chiamo $\overrightarrow{U}$ il vettore che va dalla fine di $\overrightarrow{V}$ alla fine di $\overrightarrow{W}$, che corrisponde a $\overrightarrow{V}-\overrightarrow{W}$
$|\overrightarrow{U}|^2=U_1^2+U_2^2+U_3^2=(V_1-W_1)^2+(V_2-W_2)^2+(V_3-W_3)^2$
$=|\overrightarrow{V}|^2+|\overrightarrow{W}|^2-2(V_1W_1+V_2W_2+V_3W_3)$
$|\overrightarrow{U}|^2=(|\overrightarrow{W}|\sin{\theta})^2+(|\overrightarrow{V}|-|\overrightarrow{W}|\cos{\theta})^2$
$=|\overrightarrow{V}|^2+|\overrightarrow{W}|^2-2|\overrightarrow{V}||\overrightarrow{W}|\cos{\theta}$
$|\overrightarrow{V}||\overrightarrow{W}|\cos{\theta}=V_1W_1+V_2W_2+V_3W_3$
$\cos{\theta}=\frac{\overrightarrow{V}\cdot\overrightarrow{W}}{|\overrightarrow{V}||\overrightarrow{W}|}$
con $\overrightarrow{V}\cdot\overrightarrow{W}=V_1W_1+V_2W_2+V_3W_3$ (prodotto scalare tra vettori geometrici)

Osservazione:
$\overrightarrow{V}\bot\overrightarrow{W}\iff \overrightarrow{V} \cdot \overrightarrow{W}=0$

Osservazioni sul prodotto scalare:
E' bilineare
$(\overrightarrow{V}+\overrightarrow{W})\cdot \overrightarrow{U}=\overrightarrow{V}\cdot\overrightarrow{U}+\overrightarrow{W}\cdot\overrightarrow{U}$
DIstributiva a destra e sinistra
$k\in\Bbb{R}\,\, (k\overrightarrow{V})\cdot\overrightarrow{W}=\overrightarrow{V}\cdot(k\overrightarrow{W})=k(\overrightarrow{V}\cdot\overrightarrow{W})$
Proprieta' commutativa
$\overrightarrow{V}\cdot\overrightarrow{V}=|\overrightarrow{V}|^2$

Osservazione: retta nel piano
r: ax+by=c
Siano $P_1\ne P_2$ in r:
$\begin{cases}ax_1+by_1=c\\ax_2+b_2=c\end{cases}$
a(x_2-x_1)+b(y_2-y_2)=0   Seconda equazione meno la prima
Sia $\overrightarrow{n}=(a,b)$  rettore normale di r
$\Rightarrow\overrightarrow{n}\cdot\overrightarrow{P_1P_2}=0$ (cioe' e' ortogonale ad r)

Osservazione: piano $\pi$ di eq. cartasiana
ax+by+cz=d
Se $P_1,P_2\in \Bbb{R} \Rightarrow$
$\begin{cases}ax_1+by_1+cy_1=d\\ ax_2by_2+cz_2=d\end{cases}$
$a(x_2-x_1)+b(y_2-y_1)+c(z_2-z_1)=0$
$\overrightarrow{n}\cdot\overrightarrow{P_1P_2}=0$
$\Rightarrow\overrightarrow{n}=(a,b,c)$ e' ortogonalead ogni rettore $\overrightarrow{P_1P_2}$ della giaciture del primo, cioe' e' ortogomale a $\pi$
$\overrightarrow{n}$ rettore normale di $\pi$

### Aree e volumi
Siano $\overrightarrow{V}=(V_1,V_2)\,e\,\overrightarrow{W}=(W_1,W_2)\in V^2$

Area parallelogrammo:
$A^2=|\overrightarrow{V}|^2(|\overrightarrow{W}|\sin{\theta})^2=|\overrightarrow{V}|^2|\overrightarrow{W}|^2(1-\cos^2 \theta)$
$=|\overrightarrow{V}|^2|\overrightarrow{W}|^2-(\overrightarrow{V}\cdot\overrightarrow{W})^2$
$=(V_1^2+V_2^2)(W_1^2+W_2^2)-(V_1W_1+V_1W_2)^2$
$(V_1W_2-V_2W_1)^2$

$\Rightarrow A=|V_1W_2-V_2W_1|$

Se $\overrightarrow{V},\overrightarrow{W}\in R^3$
$A^2=(V_1W_2-V_2W_1)^2+(V_1W_3-V_3W_1)^2+(V_2W_3-V_3W_2)^2$


### Prodotto vettoriale
$\overrightarrow{V}\times\overrightarrow{W}=(V_2W_3-V_3W_2,V_3W_1-V_1W_3,V_1W_2-V_2W_1)\in V^3$
$A=|\overrightarrow{V}\times\overrightarrow{W}|$

Proprietà del prodotto vettoriale:
- $A=|\overrightarrow{V}\times\overrightarrow{W}|$ area del parallelogramma
- $\overrightarrow{V}\times\overrightarrow{W}=-\overrightarrow{V}\times\overrightarrow{W}$ (anticommutativo)
- $\overrightarrow{V}\times\overrightarrow{W}=0\iff \overrightarrow{V}=\overrightarrow{0}\text{ oppure }\overrightarrow{W}=\overrightarrow{0}$ oppure i due vettori sono proporzionali(paralleli)
- $\overrightarrow{V}\times\overrightarrow{W}$ e' ortogonale a $\overrightarrow{V}$ e $\overrightarrow{W}$
- Il verso di $\overrightarrow{V}\times\overrightarrow{W}$ e\ quello determinato dalla regola della mano destra (o della vite destrorsa)
- Il volume del parallelepipedo definito da tre vettori $\overrightarrow{U},\overrightarrow{V}, \overrightarrow{W}\in V^3$ e' uguale a $V=|\overrightarrow{U}\cdot(\overrightarrow{V}\times\overrightarrow{W})|$ 
OSS 
- $\Rightarrow$ il segno di $\overrightarrow{V}_1\overrightarrow{W}_2-\overrightarrow{V}_2\overrightarrow{W}_1$ dipende dall'orientazione di $\{\overrightarrow{V},\overrightarrow{W}\}$ per vettori nel piano. Il segno dipende da fatto che abbiano un angolo antiorario(+) o orario(-) (da V a W). 
- Nello spazio con una terna di vettori: la terna e' orientata positivamente ("mano destra") $\iff \overrightarrow{U}\cdot(\overrightarrow{V}\times\overrightarrow{W}) >0$ . All'opposto e' orientata negativamente.