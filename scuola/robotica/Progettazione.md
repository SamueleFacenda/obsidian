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
* diverse stratefie(es esplora tutto un piano o va avanti)
* riconoscimento vittime(comunicazione raspberry)
* 