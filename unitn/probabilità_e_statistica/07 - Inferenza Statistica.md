Conosciamo solo una parte dell'informazione non tutta (e.g. capire l'altezza media nell'aula sapendo solo quella di quelli in prima fila)
- parametrica
- non parametrica (non la facciamo) (machine learning)

### Oggetti

Popolazione di riferimento $\Omega$: l'insieme delle unità statistiche.
Unità statistica $\omega_i$: un'entità su cui vengono effettuate delle misurazioni.
Variabile statistica (ma la chiamiamo aleatoria): funzione di misura che mappa $\Omega$.
Campione: subset rappresentativo estratto in un certo modo.
Campione statistico: se a priori conosco la probabilità di ogni unità statistica a far parte del mio campione.
- campionamento casuale semplice
   - con reinserimento
   - senza reinserimento (non li facciamo)
- campionamento a stadi

Chiamo $X_1, X_2, \dots,X_n$ le variabili aleatorie che mi descrivono il valore dell'n-esima misura (e non n-esima unità).

Modello statistico (parametrizzato) $\mathcal F=\{f(x;\theta):\theta\in\Theta\}$
Stimatore ($T(X_1,X_2,\dots,X_n$)) su n variabili aleatorie. La stima si calcola con le osservazioni degli stimatori.

Per osservare il comportamento dello stimatore osservo il suo
Errore Quadratico Medio
$MSE(T,\theta)=\Bbb E[(T-\theta)^2]=Var(T)+(\Bbb E(T)-\theta)^2$
$B(T,\theta)=\Bbb E[T]-\theta$  _distorsione_

T è uno stimatore di $\theta$ asintoticamente non distorto se $\lim_{n\to\infty}B(T)=\lim_{n\to\infty}B(T(X_1,X_2,\dots,X_n))=0$

La successione $\{T_n\}_{n=1}^{+\infty}$ converge in media quadratica a $\theta$ se $\lim_{n\to\infty} MSE(T_n;\theta)=0$
Allora lo stimatore $T_n$ è consistente in MQ.

## Tecniche per la ricerca degli stimatori
- Minimi Quadrati
- Metodo dei Momenti
- Massima Verosimiglianza

