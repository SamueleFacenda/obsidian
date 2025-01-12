# Calcolo dei costi
- $O(n)$ limite superiore
- $\Theta(n)$ crescita esatta
- $\Omega(n)$ limite inferiore
### Analisi per livelli
Livello, dimensione, costo chiamata, n. chiamate, costo livello
Sommatoria di tutti i costi
### Sostituzione
Caso base: di solito si dimostra che $T(1)\le g(1)$  per $O(g(n))$. 
Ipotesi induttiva $\forall k<n: T(k) \,\,\,(\le|\ge)\,\, cg(k)$
Passo induttivo solido dell'induzione di seconda forma (sostituzione)
### Ricorrenze lineari con partizione bilanciata
$a\ge 1,b\ge 2\in \Bbb N, c>0,\beta\ge0\in\Bbb R$
$$
T(n)=\
$$
# Pseudocodice
## Syntax
```
a=b
a <-> b // swap
T[] A = new T[1..n]
T[][] B = new T[1...n][1...m]
if then else
iif(cond, v1, v2) // inline if
while do
foreach element ∈ set do
for i = 0 <to | downto> n do
% commento
nil // null
```
## Utility functions
```
int min(int[] S, int n)
int lookup(int[] S, int v)
int binarySearch(int[] S, int, int, int)

```
