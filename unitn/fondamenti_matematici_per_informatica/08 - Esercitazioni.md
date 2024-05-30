
### Proprietà dei grafi isomorfi
Siano G e G' due grafi isomorfi (finiti), allora:
- $score(G)=score(G')$
- G e G' hanno lo stesso numero di componenti connesse.
- G è 2-connesso $\iff$ G' è 2-connesso
- G è hamiltoniano $\iff$ G' è hamiltoniano

```dot
graph {
	f -- g
	a -- b
	a -- g
	a -- f
	b -- g
	b -- c
	c -- g
	c -- d
	d -- g
	d -- e
	e -- g
	e -- f
}
```
```dot
graph {
	a -- {e,g}
	a -- c [minlen=10]
	b -- {f,d,g} [minlen=3]
	c -- {e,g}
	d -- {f,g}
	e -- g
	f -- g
}
```

### Ostruzioni alla connessione

Sia G un grafo, un sottografo T di G è un albero di copertura di G se valgono le seguenti condizioni:
- T è un albero
- V(T)=V(G)

Oss. Se G ammette un albero di copertura allora è connesso.
