Trovare le città da cui partono voli diretti a Roma, ordinate alfabeticamente
```
SELECT CittaPart
FROM AEROPORTO as partenza
JOIN VOLO as volo
ON partenza.idCitta = volo.idCittaPart
JOIN AEROPORTO as destinazione
ON volo.idCittaArr = destinazione.idCitta
WHERE destinazione.Citta = 'Roma'
ORDER BY CittaPart
```


Estrarre le informazioni relative ai voli misti (sia merci che passeggeri)
```
SELECT *
FROM AEREO
WHERE NumPasseggeri > 0 AND QtaMerci > 0;

```


Trovare  il maggior numero di piste 

```
SELECT MAX(NumPiste)
FROM AEROPORTO;
```

Trovare il maggior numero di piste in Italia
```
SELECT MAX(NumPiste)
FROM AEROPORTO
WHERE Nazione = 'Italia';
```

Trovare l’aeroporto italiano con il maggior numero di piste
```
SELECT *
FROM AEROPORTO
WHERE Nazione = 'Italia'
ORDER BY NumPiste DESC
LIMIT 1;
```

Per ogni nazione, trovare quante piste ha l’aeroporto con più piste.
```
SELECT Nazione, MAX(NumPiste)
FROM AEROPORTO
GROUP BY Nazione;
```

Per ogni nazione, trovare quante piste ha l’aeroporto con più piste purché siano almeno 5.
```
SELECT Nazione, MAX(NumPiste)
FROM AEROPORTO
GROUP BY Nazione;
HAVING NumPiste >= 5
```

Trovare le città in cui si trovano gli aeroporti con più piste di ogni nazione purché siano almeno 5
```
SELECT AEROPORTO.Nazione, AEROPORTO.Citta
FROM AEROPORTO
JOIN (SELECT Nazione, MAX(NumPiste) AS MaxPiste
      FROM AEROPORTO
      WHERE NumPiste >= 5
      GROUP BY Nazione) AS Tmp
ON AEROPORTO.Nazione = Tmp.Nazione AND AEROPORTO.NumPiste = Tmp.MaxPiste;
```

Trovare gli aeroporti da cui partono voli internazionali (questa informazione viene ricavata  dal fatto che l’aeroporto di partenza e di arrivo sono in due nazioni differenti)
```
SELECT DISTINCT idCittaPart, idCittaArr
FROM VOLO
WHERE idCittaPart IN (SELECT idCitta
                      FROM AEROPORTO
                      WHERE Nazione != (SELECT Nazione
                                        FROM AEROPORTO
                                        WHERE idCitta = idCittaArr))
  AND idCittaArr IN (SELECT idCitta
                     FROM AEROPORTO
                     WHERE Nazione != (SELECT Nazione
                                       FROM AEROPORTO
                                       WHERE idCitta = idCittaPart));

```
Trovare il numero totale di partenze internazionali nella giornata di giovedì  da tutti gli aeroporti

Trovare il numero di aeroporti che hanno almeno una partenza internazionale il giovedì

Trovare il numero di partenze internazionali del giovedì da ogni aeroporto

Estrarre le città italiane da cui ogni giovedì partono più di 3 voli diretti in Inghilterra

Trovare il numero di voli del giovedì di ogni aeroporto da cui partono almeno 100 voli (Attenzione il conteggio è fatto sul giovedì ma la condizione del 100 è fatta su tutti i giorni)
