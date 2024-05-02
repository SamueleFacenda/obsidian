### Teorema fondamentale della crittografia RSA
> Rivest Shamir Adleman

$n\in\Bbb Z, n > 0$
Sia $c>0$ t.c. $(c,\phi(n))=1$, e sia d un inverso positivo di $c\mod \phi(x)$
$P_c:(\Bbb Z/_{n\Bbb Z})^*\to(\Bbb Z/_{n\Bbb Z})^*, \alpha\to\alpha^c$
Allora $P_c$ è invertibile e vale:
$$P_c^{-1}=P_d$$
