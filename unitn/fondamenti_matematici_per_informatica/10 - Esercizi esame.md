
## Algoritmo di euclide

$(a,b)=?\qquad a\ge b$
$a = q\cdot b + r$
$b = q_2 \cdot r + r_2$
$\dots$

E poi sostituzioni a ritroso; il resto finale (l'ultimo diverso da 0) è l'mcd, lo pongo uguale all'equazione e sostituisco da sopra.

## Teorema cinese del resto

$$\begin{cases} x \equiv a \pmod m\\ x \equiv b \pmod n\end{cases}$$
Check: $(m,n) | b-a$
Calcolo $(m,n)=q_1\cdot a + q_2\cdot b$ con l'algoritmo di Euclide esteso
Da qui è facile trovare $a-b=q_3\cdot m +q_4\cdot n= \frac{b-a}{(m,n)}(q_1\cdot m +q_2 \cdot n)$
Infine
$$x_0=b-q_4\cdot n = a + q_4\cdot m$$
La soluzione è $$[x_0]_{[m,n]}$$
