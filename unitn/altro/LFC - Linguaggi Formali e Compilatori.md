> Paola Quaglia - 2025/26

Traduzione da un linguaggio ad un altro
Trovo un albero di derivazione per andare verso un risultato. 

>Analisi lessicale: traduce stream di caratteri in stream di token (e.g. <ID,pippo>, ASS, <NUM,2>, MUL...)

> Analisi sintattica: controlla se una stream di token aderisce a una grammatica, convertendolo in un parse tree o abstract syntax tree.

Parse Tree: ogni nodo contiene una lista di operazioni in ordine, le sotto operazioni (e.g. espressioni in un assegnamento) sono unite da un padre.
ABS: ogni nodo operazione contiene i suoi operandi.

> Analisi semantica: controllo validità delle operazioni (e.g. type checking)

Generazione del codice intermedio, da albero/grafo a codice.
