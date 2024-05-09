Dato un insieme V, definiamo con $\binom V2$ (che si legge "V su 2") l'insieme i cui elementi sono tutti e soli i sottoinsiemi di V con 2 elementi (cioè 2-sottoinsiemi di V). In simboli, $\binom V2:=\{A\in 2^V||A|=2\}$.

$|\binom V2=\binom {|V|}2=\frac{|V||!}{2!(|V|-2)!}$

### Grafo semplice
Un grafo (semplice, non orientato) G è una coppia $G=(V,E)$ dove V è un insieme non vuoto detto insieme dei vertici di G e E è un sottoinsieme (eventualmente vuoto) di $\binom V2$ detto insieme dei lati di G.
Si indicano con $V(G)$ e $E(G)$.

### Grafi notevoli
1. Per ogni $n\in\Bbb N$, definiamo il cammino $P_n$ di lunghezza n. 
   - $V(P_n):=\{0,1,\dots,n\}$
   - $E(P_n):=\varnothing se\,n=0$
   - $E(P_n):=\{\{i,i+1\}\in\binom {V(P_n)}2|i\in\{0,1,\dots,n-1\}\}$
2. Per ogni $n\ge 3$, il ciclo $C_n$ di lunghezza n detto anche n-ciclo
   - $V(P_n):=\{0,1,\dots,n\}$
   - $E(P_n):=\{\{i,i+1\}\in\binom {V(P_n)}2|i\in\{0,1,\dots,n-1\}\}$
   