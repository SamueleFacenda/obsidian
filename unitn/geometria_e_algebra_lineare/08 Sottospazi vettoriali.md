Def. [[07 Calcolo di inversi#Sottospazio vettoriale]]

Se il mio sistema ha infinite soluzioni, ma sto usando un sottospazio vettoriale con numeri di elementi finiti, non avrò più infinite soluzioni ma un numero di soluzioni uguale al numero di elementi del sottospazio. Es con $\Bbb K=\Bbb F_2=\{0,1\}$ (numeri binari). Se il mio sistema quadrato 2x2 avrà rango 2 il numero di soluzioni è $2^1=2$.

Def. Sono $v_1,v_2,...,v_k\in\Bbb V$ e $c_1,...,c_k\in\Bbb K$. La combinazione lineare di $v_1,...,v_k$ con coefficienti $c_1,...,c_k$ è il vettore $v=c_1v_1+...+c_kv_k$
Def. Il sottospazio generato di $v_1,...,v_k$ è
$\left\langle v_1,...,v_k\right\rangle=\left\{v=\sum_{i=1}^k c_iv_i|c_i\in \Bbb K \right\} \ni v_1,...,v_k$

Def. V spazio vettoriale in $\Bbb K$. $V_1$ insieme di vettori $B=\{v_1,...,v_n\}$ è una base di V se ogni vettore $v\in V$ si può scrivere in modo unico come combinazione lineare di $v_1,...,v_n$:
$v=\sum_{i=1}^n x_iv_i$  con $x_i\in\Bbb K$
$x_1,...,x_n$ sono le coordinate di v rispetto a B

Oss. Se V ha  una base con n elementi $\implies n=dim(V)$   dimensione di V

Es. $V=\Bbb R^n$
$a=(a_1,...,a_n)\in\Bbb R^n$
$a=\underset{e_1}{a_1(1,0,...,0)}+...+\underset{e_n}{a_n(0,...,0,1)}$
$\xi=\{e_1,...,e_n\}$  base canonica di $\Bbb R^n$

Def. Un insieme di vettori $v_1,...,v_m$ di V è detto insieme generatore o insieme di generatori di V se ogni elemento di V è combinazione lineare di $v_1,...,v_n$. (come la base, ma non deve essere unica). Cioè $V=\langle v_1,...,v_m\rangle$

Oss. Ogni insieme contenente una base è un insieme generatore.

Def. Un insieme di vettori  $v_1,...,v_k$ di V è linearmente indipendente (LI) se $a_1v_1+...+a_kv_k=0\iff a_1=...=a_k=0$
L'insieme è detto linearmente dipendente se non è LI.

Oss. Se $v_1,...,v_k$ sono dipendenti
$\implies \exists \,a_1,...,a_k$ non tutti nulli tali che $a_1v_1+...+a_kv_k=0$ 
Se $a_1\ne 0\implies a_1v_1=-a_2v_2-...-a_kv_k\quad v_1=-\frac{a_2}{a_1}v_2-...-\frac{a_k}{a_1}v_k$
Sono dipendenti $\iff$ (almeno) uno dei vettori è combinazione lineare dei rimanenti

Es. più o meno. Se ho n vettori in V, per capire se sono LI, faccio la loro combinazione lineare con $a_1,...,a_n$ e la pongo uguale a 0 (in V). Se sono vettori in $\Bbb R^n$ allora avrò un sistema lineare omogeneo con ogni colonna uguale al vettore i-esimo. So che esiste sempre la soluzione con tutte le a uguale a 0, essendo omogeneo. Per capire se sono indipendenti devo avere solo quella. Quindi se la nullità del sistema è maggiore di 0 avrò infinite soluzione e saprò che i vettori non sono LI. Serve quindi ridurre a scala la matrice e calcolarne il rango per sapere se sono LI o no.

Teorema: Un insieme $B=\{v_1,...,v_n\}$ è una base di V $\iff$ B è un insieme generatore, linearmente indipendente. 