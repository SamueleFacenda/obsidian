### Teorema fondamentale della crittografia RSA
> Rivest Shamir Adleman

$n\in\Bbb Z, n > 0$
Sia $c>0$ t.c. $(c,\phi(n))=1$, e sia d un inverso positivo di $c\mod \phi(x)$
$P_c:(\Bbb Z/_{n\Bbb Z})^*\to(\Bbb Z/_{n\Bbb Z})^*, \alpha\to\alpha^c$
Allora $P_c$ è invertibile e vale:
$$P_c^{-1}=P_d$$

### Potenze modulari veloci
Metodo uno: invece del rappresentante canonico della base posso usare il suo opposto (negativo), se è più piccolo.
Metodo due: faccio il quadrato e lo calcolo modulato, lo sostituisco poi nel cubo che modulo. E così via ho semplificato i calcoli.