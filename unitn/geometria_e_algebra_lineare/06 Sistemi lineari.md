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

$(A\,b)\rightarrow_{op\,elementari} (A'\,b')$ equivalente per righe a (A b)

Ogni operazione elementare è reversibile:
1. $S_{ij}$ (scambio delle righe i e j) $\Rightarrow$ $S^{-1}_{ij}=S_{ij}$
2. $D_i(c)$ (molt. della riga i-esima per $c\in\Bbb R,c\ne0$) $\Rightarrow D_i(c)^{-1}=D_i(\frac1c)$ 
3. $E_{ij}(c)$ (somma alla riga i-esima la j-esima moltiplicata per $c\in\Bbb R$)$\Rightarrow E_{ij}(c)^{-1}=E_{ij}(-c)$

### Seconda parte del processo
Uso sempre le operazioni elementari per trovare le soluzioni
$$\begin{bmatrix}1&1&1&4\\0&2&4&8\\0&0&3&3\end{bmatrix}
\rightarrow_{D_3(\frac13)}\begin{bmatrix}
1&1&1&4\\0&1&2&4\\0&0&1&1\end{bmatrix}
\rightarrow_{E_1\,3(-1)\,E_{1\,2}(-2)}
\begin{bmatrix}
1&1&0&3\\0&1&0&2\\0&0&1&1
\end{bmatrix}
\rightarrow_{E_{1\,2}(-1)}
\begin{bmatrix}
1&0&0&1\\0&1&0&2\\0&0&1&1
\end{bmatrix}
$$

Esercizio:
$\begin{cases}x_1+x_2+3x_3=2\\3x_1+5x_2-x_3=3\\-2x_1-4x_2+4x_3=-1\end{cases}$
$$(A\,b)_{3\times4}=
\begin{bmatrix}
1&1&3&2\\3&5&-1&3\\-2&-4&4&-1\end{bmatrix}
\rightarrow_{E_{2\,1}(-3)\,E_{3\,1}(2)}
\begin{bmatrix}
1&1&3&2\\0&2&-10&-3\\ 0&-2&10&3
\end{bmatrix}
\rightarrow_{E_{3\,2}(1)}\begin{bmatrix}
1&1&3&2\\0&2&-10&-3\\
\end{bmatrix}
$$
