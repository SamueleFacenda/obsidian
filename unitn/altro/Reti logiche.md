> Prof. Roberto Passerone

esame con esercizi e teoria
laboratorio e progetto

Teorema di espansione di Shannon, data una qualunque funzione booleana di n variabili, può essere considerata come due funzioni booleane di n-1 variabili, con una variabile condizionata.
minmax, maxmin, implicante

### Mappa di Karnaugh
Matrice con variabili un po' sulle righe e un po' sulle colonne

Trovare gli implicanti primi (che non siano contenuti ad altri implicanti)
Implicante: se è vero anche l'output è uno.


## Circuiti sequenziali

Per ridurre la complessità divido in rete combinatoria e memoria.
La rete combinatoria prende in input degli ingressi e lo stato della memoria 
e da in output lo stato futuro della memoria e gli output.

circuiti:
- asincroni: lo stato può cambiare in qualsiasi istante
- sincroni: segnale di sincronizzazione per la memoria: clock

### Latch D
Controllo e valore d. Quando il controllo è uno il valore d esce (trasparente), quando c è 0 l'output è l'ultimo valore di d prima che c diventasse 0 (memorizzato). C è il controllo o clock.