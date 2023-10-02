## Terminologia
Sia $P_n$ una proprietà che dipende da un parametro $n\in\Bbb R$ 
- si dice che $P_n$ è vera frequentemente se è vera per infiniti valori di n
- si dice che $P_n$ è vera definitivamente se è vera da un certo valore di n in poi ossia se $\exists\, n_0\in\Bbb N$ t.c. $P_n$ è vera per ogni $n\ge n<0$
Osservazioni:
- possiamo rimpiazzare VERA con FALSA
- se una proprietà $P_n$ è vera definitivamente allora $P_n$ è vera frequentemente. Il contrario non è sempre vero
## Successioni
Def. Rigida: Una successione di numeri reali è una funzione $a:\Bbb N\rightarrow\Bbb R$. In generale invece di scrivere i valori con il simbolo a(n) si preferisce scrivere $a_r$

Def. Meno rigida: Si considera una successione come una funzione a valori reali che sia definita anche per non ogni $n\in\Bbb N$ ma almeno vera definitivamente, ossia permettiamo solo un numero finito di eventuali problemi

## Limiti
Sia $a_n$ una successione, sono possibili 4 tipi di comportamenti:
- $\lim_{n\to +\infty}{a_n}=l\in\Bbb R$ (il limite è l oppure $a_n$ tende ad l per $n\to +\infty$) 
- $\lim_{n\to +\infty}{a_n}=+\infty$
- $\lim_{n\to +\infty}{a_n}=-\infty$ 
- $\lim_{n\to +\infty}{a_n}$ Non esiste, $a_n$ è indeterminata

Si dice che $a_n\to l^+$ se $\forall \epsilon>0$ si ha che $l<a_n\le l+\epsilon$ 
...  non sono riuscito a copiare 02-ottobre 2023

## Teorema di unicità
Una successione ha sempre uno solo dei comportamenti sopra elencati

## Teoremi di tipo "permanenza del segno"
Sono enunciati del tipo:
- Se $a_n\to +\infty$, allora definitivamente $a_n>0$ oppure $a_n\ge2023$ 
- Se $a_n\to l>0$ allora definitivamente $a_n >0$

In generale, fare i limiti usando le definizioni può risultare molto difficile se non impossibile. Quindi si usano strumenti più sofisticati. 

## Retta reale estesa
$\overline{\Bbb R}=\Bbb R \cup \{+\infty\}\cup\{-\infty\}$
Utilità:
- se io dico che $a_n\to l\in\overline{\Bbb R}$ , trovo il vantaggio di unificare in una unica espessione le le prime 3 tipologie d limiti di successioni.
- in $\overline{\Bbb R}$ sono "quasi" definite le operazione algebriche dei reali.
Le operazioni sono definite a parte che in questi casi:
- $+\infty-\infty$
- $0\cdot (\pm \infty)$
- $\frac{\pm\infty}{\pm\infty}$
  - $\frac 0 0$
  - $o^0$
  - $1^{\pm\infty}$
  - $(\pm\infty)^0$
### Teoremi algebrici
Siano $a_n$ e $n_n$ 2 successioni. Supponiamo che $a_n\to l_1\in\overline{\Bbb R}$ e $b_n\to l_2\in\overline{\Bbb R}$.
Allora valgono:
- $a_n+b_n\to l_1+l_2$   $a_n-b_n\to l_i-l_2$
- $a_n\cdot b_n\to l_1\cdot l_2$ (idem con diviso)
- $a_n^{b_n}\to l_1^{l_2}$
- $c\cdot a_n\to c\cdot l_1\quad c\in\Bbb R\\\{0\}$

### Teorema confronto a 2
Siano $a_n$ e $b_n$ successioni. Supponiamo che $a_n\le