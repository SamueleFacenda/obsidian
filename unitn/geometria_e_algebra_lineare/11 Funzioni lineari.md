Uso delle matrici moltiplicate come funzioni lineari
Chiamo $T_A$ la funzione $\Bbb R^n\to\Bbb R^m$ con $\underset{m\times n}A$ : $T_A(x)=Ax$
$T_A$ è lineare: $T_A(a_1v_1+a_2v_2)=a_1T_A(v_1)+a_2T_A(v_2)$
Parto da una n-upla, "assemblo" una m-upla con le regole date da ogni riga di a.
Il prodotto matriciale non aveva molto senso di essere definito così, adesso invece sappiamo che è la combinazione di funzioni, e la sua definizione viene proprio da qui.

$T_{AB}=T_A\circ T_B,\qquad T_{AA^{-1}}=T_{I_n}=id_{\Bbb R^n}$
Inoltre, se la matrice è invertibile, la funzione sarà invertibile.

Perché chiamiamo le funzioni (e non solo) lineare. In inglese line è retta. Una funzione da $\Bbb R^2$ a $\Bbb R^2$, se la applichiamo a una retta, rimarrà una retta. Idem nello spazio.

## Funzioni bilineari
$V,V'$ spazi vettoriali su $\Bbb K$
Una funzione $T:V\to V'$ è detta lineare con la stessa definizione di sopra.
V' è il codominio di T, che è diverso dall'immagine di T(Im(T)), che è l'insieme 
