Un grafo si dice albero se è connesso e senza cicli.
Un grafo senza cicli si dice foresta.

Sia T=(V,E) un grafo. Sono fatti equivalenti:
- T è un albero
- $\forall v,v'\in V,\;\exists!$ cammino in T che congiunge v e v'.
- T è connesso e per ogni lato $e\in E$, $T\setminus e=(V,E\setminus\{e\})$ è sconnesso
- T non ha cicli e $\forall e\in\binom Ve\setminus E$ il grafo $T+e=(V,E\cup\{e\})$ ha almeno un ciclo.