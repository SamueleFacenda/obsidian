$$n=2\quad\begin{bmatrix}a&b\\c&d\end{bmatrix}\quad D=det A = ad-bc$$
$D\ne 0 \iff A$ è invertibile $\iff rg A = 2$
Def.
Sia $A\in M_n(\Bbb K)$. Se n=1, $det A = det [a_n] = a_n$
Se n>1, $$det A=\sum_{i=1}^n a_{i1}a_{i1}', \text{ con }a_{i1}'=(-1)^{j+1}det (A_{i1})$$
con $A_{i1}$ la matrice ottenuta da A cancellando la i-esima riga e la $1^a$ colonna.
$a_{i1}'$ è il complemento algebrico di $a_{i1}$

Il determinante di una matrice a scalini è il prodotto degli elementi sulla diagonale principale.
(notare che se rgA=n allora è il prodotto dei pivot, in caso contrario c'è uno zero nel prodotto e risulta quindi 0, non invertibile, che sappiamo anche perchè il suo rango è minore di n)
## Proprietà
- se B è ottenuta da A scambiando due righe $\implies det B = -det A$
- se B è ottenuta da A moltiplicando una riga di A per $c\in\Bbb K$ allora $det A = c\times det A$
- Se B è ottenuta da A sommando a una riga di A un'altra riga moltiplicata per c, allora $det B = det A$
- se A ha due righe uguali $\implies detA = 0$
- se A ha una riga nulla $\implies detA=0$
- se A è una matrice $n\times n\;e\;k\in\Bbb K,\; det(Ak)=k^ndetA$

inoltre $det (EA)=(det E)(det A) \;\forall \text{ matrice elementare }E$
$\implies det(E_k,\dots,E_1A)=(detE_k)\dots(detE_1)(det A)$
Se $S=E_k\dots E_1A$
$\implies det S=(det E_1)\dots(detE_k)(detA)$

- $det A\ne0 \iff rgA=n$

Es.
$$det\begin{bmatrix}-3&1&1&0\\-1&2&0&-2\\0&0&2&2\\2&0&4&2\end{bmatrix}=
2\cdot 2\cdot det\begin{bmatrix}-3&1&1&0\\-1&2&0&-2\\0&0&1&1\\1&0&2&1\end{bmatrix}
=-4det\begin{bmatrix}1&0&2&1\\-1&2&0&-2\\0&0&1&1\\-3&1&1&0\end{bmatrix}=$$
Porto fuori i 2 dalle due ultime righe
$$-4det\begin{bmatrix}1&0&2&1\\0&2&2&-1\\0&0&1&1\\0&1&7&3\end{bmatrix}
=-4det\begin{bmatrix}2&2&-1\\0&1&1\\1&7&3\end{bmatrix}=+4det\begin{bmatrix}1&7&3\\0&1&1\\2&2&-1\end{bmatrix}
=4det\begin{bmatrix}1&7&3\\0&1&1\\0&-12&-7\end{bmatrix}$$
Se l'elemento in alto a sinistra è 1 e la colonna è zero a parte lui, posso fare il determinante del suo complemento algebrico e baste.
$$=4det\begin{bmatrix}1&1\\0&5\end{bmatrix}=4\cdot 5=20$$

## Teorema di Binet

$$det(AB)=(detA)(detB)$$
