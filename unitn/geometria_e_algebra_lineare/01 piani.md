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
$|\overrightarrow{U}|^2=U_1^2+U_2^2+U_3^2=(V_1-W_1)^2+(V_2+W_2)^2+(V_3+W_3)^2$
$=|\overrightarrow{V}|^2+|\overrightarrow{W}|^2-2(V_1W_1+V_2W_2+V_3W_3)$
$|\overrightarrow{U}|^2=(|\overrightarrow{W}|\sin{\theta})^2+(|\overrightarrow{V}|-|\overrightarrow{W}|\cos{\theta})^2$
$=|\overrightarrow{V}|^2+|\overrightarrow{W}|^2-2|\overrightarrow{V}||\overrightarrow{W}|\cos{\theta}$
$|\overrightarrow{V}||\overrightarrow{W}|\cos{\theta}=V_1W_1+V_2W_2+V_3W_3$
$\cos{\theta}=\frac{\overrightarrow{V}\cdot\overrightarrow{W}}{|\overrightarrow{V}||\overrightarrow{W}|}$
con $\overrightarrow{V}\cdot\overrightarrow{W}=V_1W_1+V_2W_2+V_3W_3$

Osservazione:
$\overrightarrow{V}\bot\overrightarrow{W}\iff \overrightarrow{V} \cdot \overrightarrow{W}=0$
