Uso delle matrici moltiplicate come funzioni lineari
Chiamo $T_A$ la funzione $\Bbb R^n\to\Bbb R^m$ con $\underset{m\times n}A$ : $T_A(x)=Ax$
$T_A$ è lineare: $T_A(a_1v_1+a_2v_2)=a_1T_A(v_1)+a_2T_A(v_2)$
Parto da una n-upla, "assemblo" una m-upla con le regole date da ogni riga di a.
Il prodotto matriciale non aveva molto senso di essere definito così, adesso invece sappiamo che è la combinazione di funzioni, e la sua definizione viene proprio da qui.

$T_{AB}=T_A\circ T_B,\qquad T_{AA^{-1}}=T_{I_n}=id_{\Bbb R^n}$
Inoltre, se la matrice è invertibile, la funzione sarà invertibile.

Perché chiamiamo le funzioni (e non solo) lineare. In inglese line è retta. Una funzione da $\Bbb R^2$ a $\Bbb R^2$, se la applichiamo a una retta, rimarrà una retta. Idem nello spazio.

## Funzioni lineari
$V,V'$ spazi vettoriali su $\Bbb K$
Una funzione $T:V\to V'$ è detta lineare con la stessa definizione di sopra.
V' è il codominio di T, che è diverso dall'immagine di T(Im(T)), che è l'insieme degli elementi realmente presenti nei risultati della funzione da V.

Def.
Sempre T da V a V' lineare.
Il nucleo di T è N(T) (oppure kerT, kernel di T):
$N(T)=\{v\in V|T(v)=0\}$

T è iniettiva $\iff$ T è suriettiva, e quindi invertibile.

### Cambiamenti di base
V,B B' basi, $B=\{v_1,\dots,v_n\},B'=\{v_1',\dots,v_n'\}$
La matrice $P=[p_ij]$ le cui colonne sono date dalle coordinate dei vettori $v_j$ rispetto a $B'$ è detta matrice di transizione da B a B'.
Quindi $v_j=\sum_{i=1}^np_{ij}v_j'\qquad\forall\,j=1,\dots,n$

Le matrici di transizione sono una l'inversa dell'altra

Teorema, con t funzione lineare da V a V, B e B' basi di v,
Se $A=M_B(T)\;\; e \;\; A'=M_{B'}(T)$ allora $A'=PAP^{-1}$

### Autovalori e autovettori
def. $A\in M_n(\Bbb K)$. Uno scalare $\lambda\in\Bbb K$ è detto autovalore di A se esiste $x\in\Bbb K^n$, non nullo, tale che $Ax=\lambda x$
(x è detto autovettore di A con autovalore $\lambda$)
def. sia $T:V\to V$ endomorfismo. Uno scalare $\lambda \in\Bbb K$ è autovalore di T se $\exists v \in V,v\ne 0$ tale che $T(v)=\lambda v$ (v è autovettore di T con autovalore $\lambda$)

## Base ortonormale
Def. sia $U\subset\Bbb R^n$ sottospazio, Una base $B=\{u_1,\dots,u_n\}$ è detta base ortonormale (ON) se 
$$ u_i\cdot u_j=\begin{cases}
0\qquad se\; i\ne j\\
1\qquad se\;i=j
\end{cases}$$
A uno a uno sono ortogonali e hanno norma 1.


## Teorema spettrale
spettro: insieme degli autovalori
Enunciato: se A è una matrice reale, simmetrica, allora A è diagonalizzabile e esiste una base ortonormale di $\Bbb R^n$ formata da autovettori di A.
Quindi se A è simmetrica allora ha n autovalori reali.