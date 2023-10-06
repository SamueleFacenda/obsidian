## Eliminazione di Gauss-Tordan
Esercizio:
$$\begin{cases}x_1+x_2+x_3=4\\
2x_1+2x_2+5x_3=11\\
4x_1+6x_2+8x_3=24\end{cases}$$
Modifico l'equazione per eliminare almeno una variabile. (metodo di sottrazione)
$$2^aeq-2\times1^aeq:\begin{cases}
x_1+x_2+x_3=4\\
3x_3=3\\
a_x1+6x_2+8x_3=24\end{cases}$$
Faccio di nuovo sempre sulla terza usando sempre la prima
$$3^aeq-4\times1^aeq:\begin{cases}x_1+x_2+x_3=4\\
3x_3=3\\
2x_2+4x_3=8\end{cases}$$
Riordino
$$\begin{cases}x_1+x_2+x_3=4\\
\qquad\,2x_2+4x_3=8\\\qquad\qquad\quad3x_3=3\end{cases}$$
Ho così un sistema in "forma triangolare". Capisco velocemente se ho una soluzione e lo risolvo facilmente.
$\begin{cases}z_1=1\\x_2=2\\x_3=1\end{cases}$ 
Il sistema ha una sola soluzione: x=(1,2,1)

#### Uso la notazione matriciale
$Ax_{m\times n}=b_{m\times 1}\qquad (A\,b)$ <u>matrice completa</u>

Es:
$$(A\,b)=\begin{bmatrix}1&1&1&|&4\\2&2&5&|&11\\4&6&8&|&24\end{bmatrix}
\rightarrow IIriga-2\times Iriga, IIIriga-4\times Iriga
\begin{bmatrix}1&1&1&4\\0&0&3&3\\0&2&4&8\end{bmatrix}=
\begin{bmatrix}1&1&1&4\\0&2&4&8\\0&0&3&3\end{bmatrix}$$
E ho una matrice triangolare alta
### Operazioni sulla matrice completa
Sono di tre tipi:
1. Scambio di due righe
2. Moltiplicazione di una riga per $c\in\Bbb R,c\ne0$
3. Somma ad una riga di un'altra riga moltiplicata per $c\in\Bbb R$
Queste sono le operazione elementari sulle righe di una matrice