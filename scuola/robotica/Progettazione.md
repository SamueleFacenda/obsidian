astrarre il piu' possibile tra movimento/arduino e esplorazione

classe per l'esplorazione, tiene presente la direzione attuale
la direzione e' importante per leggere dai tof con la direzione giusta
si distingue la direzione tra assoluta(quella del campo, che verra' usata dall'esplorazione) e relativa, quella attuale del robot.
Quella relativa viene modificata dai metodi per le rotazioni **Sempre**, e usata dall'intarfaccia tof(che si chiamera' distanza, non tof) per dare la distanza con una query su direzione assoluta.

lista dei moduli vari e necessita':
* distanza alla direzione assoluta
* numero di kit usati
* memorizzazione vittime gia' viste
* raddrizzamento(fine tuning)
* memorizzamento lack of progress
* rilascio di un numero di kit
* lampeggio e pausa per vittime trovate
* controllo continuo per vittime visive
* avere direzione di movimento migliore
* salvataggio campo a piu' piani
* riconoscimento salite/discese
* diverse strategie(es esplora tutto o torna a casa)
* diverse strategie(es esplora tutto un piano o va avanti)
* riconoscimento vittime(comunicazione raspberry)
il controlle delle vittime continuo va fatto durante il movimento, il controllo del pulsante di lack of progress anche
Se uso il lack durante il movimento, conto la cella prima o dopo?
Dovrei muovermi a meta' per fare bene, non so neanche dov'e' la vittime(in che cella) se controllo durante


individuo cosi' i diversi moduli:
* movimento, avanti indietro, rotazioni(modifica la direzione), allineamento(legge posizioni relative tof)
* kit: lampeggio, sgancio kit, conta kit, accede alla rotazione per lasciare i kit nel posto giusto, vuole sapere la direzione relativa della vittima
* esplorazione, indica a livello astratto dove andare(direzioni assolute), deve sapere la direzione relativa per calcolare il percorso piu' veloce, se va bene deve contare anche i diversi piani