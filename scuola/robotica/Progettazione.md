astrarre il piu' possibile tra movimento/arduino e esplorazione

classe per l'esplorazione, tiene presente la direzione attuale
la direzione e' importante per leggere dai tof con la direzione giusta
si distingue la direzione tra assoluta(quella del campo, che verra' usata dall'esplorazione) e relativa, quella attuale del robot.
Quella relativa viene modificata dai metodi per le rotazioni **Sempre**, e usata dall'intarfaccia tof(che si chiamera' distanza, non tof) per dare la distanza con una query su direzione assoluta.

lista dei moduli vari e necessita':
- [ ] distanza alla direzione assoluta
- [x] numero di kit usati
- [x] memorizzazione vittime gia' viste
- [ ] raddrizzamento(fine tuning)
- [ ] memorizzamento lack of progress
- [x] rilascio di un numero di kit
- [x] lampeggio e pausa per vittime trovate
- [ ] controllo continuo per vittime visive
- [x] avere direzione di movimento migliore
- [ ] salvataggio campo a piu' piani
- [ ] riconoscimento salite/discese
- [x] diverse strategie(es esplora tutto o torna a casa)
- [ ] diverse strategie(es esplora tutto un piano o va avanti)
- [x] riconoscimento vittime(comunicazione raspberry)
il controlle delle vittime continuo va fatto durante il movimento, il controllo del pulsante di lack of progress anche
Se uso il lack durante il movimento, conto la cella prima o dopo?
Dovrei muovermi a meta' per fare bene, non so neanche dov'e' la vittime(in che cella) se controllo durante
Faccio cosi', non controllo proprio sempre, solo se mi sto muovendo dritto a meta'. Questa cosa la implementiamo ma rimane disattivata se non ce n'e' bisogno
forse va messo un interrupt per il lack of pregress
tengo il codice principale nel loop, se no a poco senso di esistere

individuo cosi' i diversi moduli:
* movimento, avanti indietro, rotazioni(modifica la direzione), allineamento(legge posizioni relative tof)
* kit: lampeggio, sgancio kit, conta kit, accede alla rotazione per lasciare i kit nel posto giusto, vuole sapere la direzione relativa della vittima
* esplorazione, indica a livello astratto dove andare(direzioni assolute), deve sapere la direzione relativa per calcolare il percorso piu' veloce, se va bene deve contare anche i diversi piani, soltanto indica la posizione e aggiorna la mappa ogni tot
* gestione vittime, parla col raspberry, salva le coordinate(hashmap) con le vittime gia' viste, chiama lo sgancio kit
* main loop, connette il basso all'alto livello, legge dalla mappa i movimenti da fare, li fa, aggiorna la mappa, chiama i metodi per le vittime
* meglio se faccio un po' di interfacce: per il movimento, la lettura delle distanze, movimento che si occupa anche dell'allineamento
* per fare una variabile globale per tutti(la direzione) forse devo fare un file apposta
* giroscopio e simili
