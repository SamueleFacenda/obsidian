Reazioni in cui lo stato finale e lo stato iniziale coincidono.
$$\Delta U=0$$
$$W_{i\to f}=\oint_C dW =W_C$$
$$Q_C=\oint_CdQ$$
Sul piano pV (p su y e V su x) se il ciclo è orario $\implies W_C>0$ e parleremo di cicli termici/macchine termiche. Inversamente su cicli antiorari avremo $W_C<0$ e un ciclo frigorifero/macchina frigorifera.

#### Rendimento
$$\eta=\frac W{Q_A}=1+\frac{Q_C}{Q_A}=1-\frac{|Q_C|}{Q_A}$$
Lavoro totale fratto quantità di calore assorbita dalla macchina ($Q_C$ è calore ceduto, è sempre negativo).

Per le macchine frigorifere è analogo, abbiamo il coefficiente di prestazione:
$$CoP=\frac {Q_A}{|W_{need}|}$$
### Ciclo di Carnot
Ho una isoterma a $T_2$, una adiabatica, una isoterma a $T_1$ e un'altra adiabatica. $T_1<T_2$.
Chiamo i vari stati A,B,C,D, con A lo stato iniziale.

|     | $\Delta U$      | Q                            | W                 |
| --- | --------------- | ---------------------------- | ----------------- |
| AB  | 0               | $nRT_2\ln[\frac {V_B}{V_A}]$ | $\leftarrow idem$ |
| BC  | $nc_v(T_1-T_2)$ | 0                            | $-nc_v(T_1-T_2)$  |
| CD  | 0               | $nRT_1\ln[\frac {V_D}{V_C}]$ | $\leftarrow idem$ |
| DA  | $nc_v(T_2-T_1)$ | 0                            | $-nc_v(T_1-T_2)$  |

$$\eta = 1-\frac{T_1}{T_2}$$
### Ciclo di Otto
Questo è per i motori diesel
Fasi:
- A: espansione isobara, il carburante viene iniettato
- B: riduzione del volume e aumento di pressione, il pistone comprime il carburante
- C: accensione (compressione), il carburante esplode per compressione e la pressione aumenta istantaneamente
- D: espansione adiabatica, la pressione muove il pistone
- E: decompressione, scarico a volume costante
- F: scarico, la valvola di scarico fa ridurre il volume
$$\eta = 1-\frac{|T_A-T_D|}{|T_C-T_B|}$$
Nel caso ideale solito è 0.6.

### Trasformazioni reversibili
Una trasformazione si dice reversibile quando è possibile riportare allo stato iniziale sia il sistema sia l'ambiente esterno.

### Seconda legge della termodinamica
Enunciato di Kelvin-Planck: non è possibile costruire una macchina il cui unico enunciato sia prendere del calore da una sorgente e trasformarlo in lavoro.
Enunciato di Clausius: non esiste nessuna trasformazione termodinamica il cui unico effetto sia trasferire calore da una sorgente ad un'altra sorgente a temperatura più calda.

### Teorema di Carnot
$$\eta_{x(T_1,T_2)}\le \eta_{R(T_1,T_2)}$$
$$<\;:\text{ x irreversibile}$$
$$=\;:\text{ x reversibile}$$
Si dimostra per assurdo mettendo le due macchine vicine, facendo andare il lavoro da una all'altra (invertendo quella reversibile) e dimostrando usando la ipotesi assurda che la macchina combinata viola il principio di Clausius.
### Teorema di Clausius
Estende il teorema di Carnot a multiple sorgenti.
$$\sum_{i=1}^n\frac{Q_i}{T_i}\le 0$$
N sorgenti distinte.
$$\oint\frac{dQ}T\le 0$$
Per $\infty$ sorgenti a T variabile.
### Entropia
$$S | \Delta S_{A\to B}=S_B - S_A=\underset{(rev)}{ \int_A^B}\frac{dQ}T $$
Non si tratta mai di entropia ma di variazione di entropia!
$dS=\frac {dQ}T,\qquad [S]=[\frac ET]$

$$\Delta S_{A\to B}\ge \underset{(x)}{\int_A^B}\frac{dQ}T$$
valido per tutte le trasformazioni

#### Teorema dell'entropia
Considerando un sistema isolato:
$$Q=0\implies \Delta S_{AB}\ge 0\implies \frac{dS_0}{dt}\ge 0$$
L'entropia non può diminuire.

Sapendo il numero di stati possibili in un dato istante (N) (esempio dei quadratini):
$$S=K_B\ln N$$
#### Note su trasformazioni irreversibili
Espansione libera
$\Delta S_u=nR\ln\frac{V_f}{V_i}$ per le isoterme
$W_R-W=T\Delta S_u$

Passaggio di Q da $T_2>T_2\to T_i$
$\Delta S_u=-\frac Q{T_2}+\frac Q{T_1}$
$W_R-W=T_1\Delta S_u$

Macchina $T_2\to Q_1,\quad Q_1\to T_1\quad W>0$
$W_R-W=T_1\Delta S_u$

### Energia inutilizzata
$$E_{IN}=T_0\Delta S_u$$
$T_0$ è la temperatura minima del processo.
