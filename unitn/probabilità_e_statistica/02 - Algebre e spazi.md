## Algebra e $\sigma-algebra$

$\mathcal P(\Omega)=$ insieme della parti di omega, insieme di tutti i sottoinsiemi
$\#\mathcal P(\Omega)=2^{\#\Omega}$

Def: $\mathscr F\subseteq \mathcal P(\Omega)$ algebra se:
- $\Omega\in \mathscr F$
- $A\in \mathscr F\implies A^c \in \mathscr F$
- $A,B \in\mathscr F\implies A\cup B\in\mathscr F$

Def: $\mathscr F \subset \mathcal P(\Omega)$ $\sigma-algebra$
- $\Omega\in \mathscr F$
- $A\in \mathscr F\implies A^c \in \mathscr F$
- $A_1,A_2,\dots=(A_i)^\infty_{i=1}\in\mathscr F\implies\bigcup_{i=1}^\infty A_i\in\mathscr F$

### Proprietà
- $\varnothing\in\mathscr F$
- $A,B\in\mathscr F\implies A\cap B\in \mathscr F$  perché $A\cap B=(A^c\cup B^c)^c$
- idem per l'intersezione di n insiemi $\in\mathscr F$
- idem per l'unione di n insiemi $\in\mathscr F$
- $A,B\in \mathscr F\implies A\setminus B\in\mathscr F$
- $A,B\in\mathscr F\implies A\triangle B\in\mathscr F$
($\triangle$ è la differenza simmetrica: unione meno intersezione)

$\mathscr F_1,\mathscr F_2\; (\sigma -)algebre\implies \mathscr F_1 \cap\mathscr F_2 \;(\sigma -)algebra$

Def: Gli elementi di $\mathscr F$ si dicono eventi. I singoletti di $\mathscr F$ si dicono eventi elementari.
L'evento E si verifica se l'esito dell'esperimento aleatorio sta in E.

Def: $\mathscr G\subseteq\mathcal P(\Omega)$ famiglia di sottoinsiemi
La $\sigma-algebra\;generata$ da $\mathscr G$ è la più piccola $\sigma-algebra$ generata da $\mathscr G$
$\sigma(\mathscr G)=\cap\{\mathscr F|\mathscr F \;contiene\; \mathscr G\}$

## Spazi di Probabilità
Def: La coppia $(\Omega,\mathscr F)$ è detto spazio probabilizzabile
Def: Su $(\Omega,\mathscr F)$ sia $\Bbb P:\mathscr F\to\Bbb R$ si dice misura se
- $\forall E\in\mathscr F\qquad\Bbb P(E)\ge 0$
- $\Bbb P(\Omega)=1$
- $(E_i)_{i=1}^\infty$ famiglia numerabile di eventi a due a due disgiunti $\implies \Bbb P(\bigcup_{i=1}^\infty E_i)=\sum_{i=1}^n\Bbb P(E_i)$
(questi sono gli assiomi di Kolmogorov)
Def. $(\Omega,\mathscr F,\Bbb P)$ si dice spazio di probabilità

Notazione: $\Bbb P(a)=\Bbb P(\{a\})$

## Proprietà della Probabilità

$\Bbb P(\varnothing)$
$E\in\mathscr F\implies \Bbb P(E^c)=1-\Bbb P(E)$
