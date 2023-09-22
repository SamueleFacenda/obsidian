
### Gruppo
Un insieme G sul quale è definita un'operazione $*$ : GxG-> G che denotiamo (a,b)->a$*$b, che soddisfa:
- associatività: $(a* b)* c=a* (b * c)\;\; \forall a,b,c \in G$
- esiste l'elemento neutro e, tale che $a * e = e * a = a \;\; \forall a \in G$
- $\forall a \in G\;\; \exists$ simmetrico $a^I \in G$ tale che $a* a^I=a^I * a = e$

Un gruppo (G,$*$) è detto commutativo (abeliano) se $a* b=b* a \,\,\, \forall a,b\in G$

$(V^2, +),(V^3,+)$ sono gruppi commutativi

### Campo
Un campo è un'insieme K che ha due operazioni +,x tali che:
- (K,+) è un gruppo commutativo
- (K*=K\{0},x} è un gruppo commutativo
- a(b+c)=ab + ac $\forall a,b,c \in K$

### Ennuple
$\Bbb R ^ n=\left\{ (a_1,...,a_n)|a_1,...,a_n \in \Bbb R\right\}$
n-uple

somma: $a=(a_1,...,a_n), b=(b_1,...,b_n)$
$a+b=(a_1+b_1, ..., a_n+b_n)\in \Bbb R ^n$

$(\Bbb R^n,+)$ è un gruppo commutativo
$0=(0,...,0)\in\Bbb R^n$ è l'elemento neutro
Data $a\in\Bbb R^n$ $-a=(-a_1,...,-a_n)$ (n-upla opposta)

#### Moltiplicazione per scalare:
$ka = (ka_1,...,ka_n)\in \Bbb R^n$
Proprietà:
- $(k_1+k_2)a=k_1a+k_2a$
- $(k_1k_2)a=k_1(k_2a)=k_2(k_1a)$
- $k(a+b)=ka+kb$
$\forall k,k_1,k_2\in\Bbb R, \forall a,b \in \Bbb R^2$

### Matrici
Una matrice reale $m\times n$ o(o di tipo (m,n)) è una tabella formata da m righe e n colonne contenenti numeri reali $a_{aj},i=1,...,m; j=1,...,n$
$A=[a_{ij}]$
$$ A=\begin{bmatrix}
a_{11} & a_{12} & ... & a_{1n} \\
a_{21} & a_{22} & ... & a_{2n} \\
a_{n1} & a_{n2} & ... & a_{nn} \\
\end{bmatrix}$$
Se m=1 è detto vettore riga, che si può identificare con la n-upla corrispondente (uso le parentesi diverse per identificare elementi di insiemi diversi)

#### Somma di matrici
A,B m x n
Se $A=[a_{ij}]$ e $B=[b_{ij}]$
A+B=$[a_{ij}+b_{ij}]$
#### Moltiplicazione per scalare
kA=$[ka_{ij}]\,\, k\in\Bbb R$

$M_{m,n}(R)=\{A|A\,matrice\,reale\,m\times n\}$
$M_{m}(R)=M_{m,m}(R)$

$M_{m,n}(R)$ è un gruppo commutativo rispetto alla somma di matrici
Matrice nulla (elemento neutro) è una matrice con solo elementi zero
Elemento simmetrico è una matrice con tutti gli elementi opposti

#### Moltiplicazione di matrici
A m x n   A n x l
Il prodotto di A e B (in questo ordine) è la matrice C=AB m x l, con $C=[c_{ik}]$
dato che

$c_{ik}=a_{i1}b_{1k}+a_{i2}b_{1k}+...+a_{in}b_{nk}$
con i =1,...,m e k=1,...,l


Riscrittura in forma matriciale di un sistema di equazioni lineari.
$$\begin{cases}
x_1+x_2+x_3=4\\
2x_1+2x_2+5x_3=11\\
4x_1+6x_2+8x_3=24
\end{cases}$$
$$A=\begin{bmatrix}
1 & 1 & 1\\
2 & 2 & 5\\
4 & 6 & 8
\end{bmatrix}
,x=\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}
,b=\begin{bmatrix}4\\11\\24\end{bmatrix}
$$
b è il vettore/colonna di termini noti

#### Proprietà della moltiplicazione di matrici
1. associatività: (AB)C=A(BC)
2. distributività: (A+B)C=AC+BC
3. distributività a sinistra/destra A(B+C)=AB+AC
4. k(AB)=(kA)B=(kB)A

Non valgono:
- commutatività