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
$\underset{m\times n}{Ax}=\underset{m\times 1}b\qquad (A\,b)$ <u>matrice completa</u>

Es:
$$(A\,b)=\left[\begin{array}{ccc|c}1&1&1&|&4\\2&2&5&|&11\\4&6&8&|&24\end{array}\right]
\rightarrow IIriga-2\times Iriga, IIIriga-4\times Iriga
\left[\begin{array}{ccc|c}1&1&1&4\\0&0&3&3\\0&2&4&8\end{array}\right]=
\left[\begin{array}{ccc|c}1&1&1&4\\0&2&4&8\\0&0&3&3\end{array}\right]$$
E ho una matrice triangolare alta
### Operazioni sulla matrice completa
Sono di tre tipi:
1. Scambio di due righe
2. Moltiplicazione di una riga per $c\in\Bbb R,c\ne0$
3. Somma ad una riga di un'altra riga moltiplicata per $c\in\Bbb R$
Queste sono le operazione elementari sulle righe di una matrice

$(A\,b)\underset{op\,elementari}{\rightarrow} (A'\,b')$ equivalente per righe a (A b)

Ogni operazione elementare è reversibile:
1. $S_{ij}$ (scambio delle righe i e j) $\Rightarrow$ $S^{-1}_{ij}=S_{ij}$
2. $D_i(c)$ (molt. della riga i-esima per $c\in\Bbb R,c\ne0$) $\Rightarrow D_i(c)^{-1}=D_i(\frac1c)$ 
3. $E_{ij}(c)$ (somma alla riga i-esima la j-esima moltiplicata per $c\in\Bbb R$)$\Rightarrow E_{ij}(c)^{-1}=E_{ij}(-c)$

### Seconda parte del processo
Uso sempre le operazioni elementari per trovare le soluzioni
$$\left[\begin{array}{ccc|c}1&1&1&4\\0&2&4&8\\0&0&3&3\end{array}\right]
\underset{D_3(\frac13)}{\longrightarrow}
\left[\begin{array}{ccc|c}
1&1&1&4\\0&1&2&4\\0&0&1&1\end{array}\right]
\underset{E_1\,3(-1)\,E_{1\,2}(-2)}{\longrightarrow}
\left[\begin{array}{ccc|c}
1&1&0&3\\0&1&0&2\\0&0&1&1
\end{array}\right]
\underset{E_{1\,2}(-1)}{\longrightarrow}
\left[\begin{array}{ccc|c}
1&0&0&1\\0&1&0&2\\0&0&1&1
\end{array}\right]
$$

### Esempio 1
$\begin{cases}x_1+x_2+3x_3=2\\3x_1+5x_2-x_3=3\\-2x_1-4x_2+4x_3=-1\end{cases}$
$$\underset{3\times4}{(A\,b)}=
\left[\begin{array}{ccc|c}
1&1&3&2\\3&5&-1&3\\-2&-4&4&-1\end{array}\right]
\underset{E_{2\,1}(-3)\,E_{3\,1}(2)}{\longrightarrow}
\left[\begin{array}{ccc|c}
1&1&3&2\\0&2&-10&-3\\ 0&-2&10&3
\end{array}\right]
\underset{E_{3\,2}(1)}{\longrightarrow}
\left[\begin{array}{ccc|c}
1&1&3&2\\0&2&-10&-3\\0&0&0&0
\end{array}\right]
$$
Ho una matrice a scalini, diventa
$\begin{cases}x_1+x_2+3x_3=2\\2x_2-10x_3=-3\end{cases}$
Ha infinite soluzioni (trasformazione in forma parametrica):
$\begin{cases}x_1=\frac72-8t\\x_2=-\frac32+5t\\x_3=t\end{cases}\;(t\in\Bbb R)$
Infinite soluzioni dipendenti da un parametro: $\infty^1$
### Esempio 2
$\begin{cases}x_1+x_2+3x_3=2\\3x_1+5x_2-x_3=3\\-2x_1-4x_2+4x_3=-4\end{cases}$
(cambia solo il termine noto della terza equazione)
$$\underset{3\times4}{(A\,b)}=
\left[\begin{array}{ccc|c}
1&1&3&2\\3&5&-1&3\\-2&-4&4&-4\end{array}\right]

\underset{E_{2\,1}(-3)\,E_{3\,1}(2)}{\longrightarrow}
\left[\begin{array}{ccc|c}
1&1&3&2\\0&2&-10&-3\\ 0&-2&10&0
\end{array}\right]
\underset{E_{3\,2}(1)}{\longrightarrow}\left[\begin{array}{ccc|c}
1&1&3&2\\0&2&-10&-3\\0&0&0&-3
\end{array}\right]
$$
$\begin{cases}x_1+x_2+3x_3=2\\2x_2-10x_3=-3\\0=-3\end{cases}$
Non ci sono soluzioni
## Formalizzazione dell'algoritmo
#### Matrice a scalini
Una matrice A (m x n) è detta a scalini se il numero di zeri su una riga che precede il primo elemento non nullo cresce riga per riga.
Sono detti pivot i primi scalari non nulli di ogni riga (angolo dello scalino)
A è una matrice a scalini ridotta se i pivot sono uguali a 1 e sono gli unici elementi non nulli sulla colonna che contiene (una sola associata ad ogni matrice)

#### Teorema
Ogni matrice m x n A è equivalente per righe a una matrice a scalini (ridotta)

Procedimento:
##### Caso 1
La $1^a$ colonna non è tutta nulla: se $a_{1\,1}=0$ e $a_i1\ne0$ scambiamo le righe i e 1. Possiamo supporre $a_{1\,1}\ne0$ $p_1=a_{1\,1}\ne0$
Con operazioni del tipo $E_{i\,1}(\frac{-a_{i\,1}}{a_{11}})$ si annullato tutti gli elementi sotto $p_1$ ($p_1$: pivot della prima riga)
Si ripete il procedimento sulla matrice ottenuta togliendo la prima colonna (non considerando la prima colonna) e la prima riga (non considerando la prima riga)
##### Caso 2
La $1^a$ colonna è nulla, si ripete il procedimento sulla matrice ottenuta togliendo la prima colonna (non considerando la prima colonna)

Procedo così in loop, ogni volta capendo il caso che ho davanti e procedendo di conseguenza.
Con operazioni del tipo $D_i(\frac1{p_i})$ i pivot diventano uguali a 1. Con operazioni del terzo tipo (D) anche gli elementi sopra ai pivot vengono resi uguali a zero.

### Rango
Il rango di una matrice (A) è il numero dei pivot di una (qualsiasi) matrice a scalini equivalente ad A. (il numero di righe non nulle)

r=rg(Ab) variabili dipendenti e n-r variabili libere
Se l'ultimo pivot è sull'ultima colonna il sistema non è risolubile (impossibile)

## Teorema (Rouché-Capelli)
compatibile = risolvibile
1. Ax=b è compatibile se e solo se rg(A b)=rg A
2. Sia Ax=b un sistema compatibile. Allora la soluzione è unica se rg A=n (A m x n). Se rg A < n, ci sono infinite soluzioni dipendenti da n - rg A parametri ($\infty^{n-rg A})$
## Sistemi lineari omogenei
Ax=0 (è compatibile)
Sia Ax=0 e Ay=0
A(x+y)=Ax+Ay=0+0=0
A(kx)=k(Ax)=k0=0 ($k\in\Bbb R$)
Cioè Sol(Ax=0)={$x\in\Bbb R^n|Ax=0$} è un sottospazio vettoriale di $\Bbb R^n$
