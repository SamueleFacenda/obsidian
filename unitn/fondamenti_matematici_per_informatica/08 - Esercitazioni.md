
### Proprietà dei grafi isomorfi
Siano G e G' due grafi isomorfi (finiti), allora:
- $score(G)=score(G')$
- G e G' hanno lo stesso numero di componenti connesse.
- G è 2-connesso $\iff$ G' è 2-connesso
- G è hamiltoniano $\iff$ G' è hamiltoniano

```dot
graph {
	graph [splines=line]
	g [pos="0,0!"]
	a [pos="-1,-1.73!"]
	b [pos="1,-1.73!"]
	c [pos="2,0!"]
	d [pos="1,1.73!"]
	e [pos="0-1,1.73!"]
	f [pos="-2,0!"]
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
