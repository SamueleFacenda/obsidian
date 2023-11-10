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
- se A ha due righe uguali