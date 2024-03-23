Definizione: sia $A\in M_n(\Bbb R)$. A si dice invertibile se $\exists\,B\in M_n(\Bbb R)$ tale che $AB=BA=I_n$ 
($I_n$ è la matrice nulla/identità) Se esiste B è la matrice inversa di $A:B=A^{-1}$
### Determinante
Ci permette di capire se una matrice è invertibile (se è diverso da 0).

### Potenza di una matrice
$A\in M_n(\Bbb R)$ la potenza k-esima di A è: $A^k=A...A$ k volte

## Grafo
grafo non orientato: insieme $~~V~~=\{v_1,...v_n\}$ di vertici o nodi e un insieme E di lati che congiungono coppie di vertici
grafo orientato: idem sono che contiene lati orientati, cioè coppie ordinate di vertici

### Matrice di adiacenza
A $a_{ij}=\text{ numero di lati da }v_i\,a\,v_j$

Teorema: sia $s\in \Bbb N$. L'elemento (i,j) della matrice $A^s$ è uguale al numero i cammini di lunghezza S nel grafo che collega $v_i\,a\,v_j$.

### Notazioni sulle matrici

Osservazioni sull'invertibilità:
A,B n x m , invertibili
AB invertibile
$(AB)(A^{-1}B^{-1})=I_n$ 

Per n>1, l'insieme della matrici invertibili forma un gruppo non commutativo rispetto al prodotto matriciale

Def: dati $A\in M_{m,n}(\Bbb R)$ la sua trasposta è $A^T=[a_{ji}]$ se $A=[a_{ij}]$
Se m=n e $A=A^T$, A si dice simmetrica.

Def: Una combinazione lineare di k matrici $A_1,...,A_k$ con coefficienti $c_1,...,c_k$ è a sua volta una matrice $c_1A_1+...+c_kA_k$ (m x n)

## Prodotto scalare in $\Bbb R ^n$
DEf $x,y\in \Bbb R^2$ il prodotto scalare di x e y è $x\cdot y= \sum_{i=1}^n{x_iy_i}\in\Bbb R$ 
Proprietà:
bilineare, simmetrico (commutativo?), definito positivo ($x\cdot x\ge 0$ e $x\cdot x=0\iff x=0$)

Def:  $x\in\Bbb R^2$ , la lunghezza o norma di x è $||x||=\sqrt{x\cdot x}$
Def $x,y\in\Bbb R^2$, la distrnza tra x e y è $d(x,y)=||x-y||\ge0$
Def: un elemento $x\in\Bbb R^2$ è detto versore se ha norma 1. Se $x\ne 0$

Proprietà: $\alpha\in\Bbb R,||\alpha x||=\sqrt{(\alpha x_1)^2+...+(\alpha x_n)^2}=|\alpha|||x||$
$||x+y||^2=||x||^2+2x\cdot y+||y||^2$
Def: $x,y\in \Bbb R^2$, x e y si dicono ortogonali se $x\cdot y=0$ $(x\bot y)$
Oss: se $x\bot y\Rightarrow||x+y||^2=||x||^2+||y||^2$ 

#### Proiezione ortogonale
Def: $pr_y(x)=\frac{x\cdot y}{||y||^2}y\in \Bbb R^2$
è la proiezione ortogonale di z su y

### Disuguaglianza di Cauchy-Schwarz
$\forall x,y\in\Bbb R^2,\,\,\,\,\,|x\cdot y|\le||x||||y||$
Vale l'uguaglianza $\iff$ x e y sono proporzionali

Corollario: (disuguaglianza triangolare)
$\forall x,y\in\Bbb R^2$   $||x+y||\le||x||+||y||$
