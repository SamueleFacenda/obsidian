chiave pubblica e privata, simmetrica


cifrario playfair, faccio la matrice, divido il plaintext in coppie di lettere
prendo una coppia, la guardo nella tabella, se sono sulla stessa riga prendo sostituisco ogno lettera con la lettera dopo, con la colonna idem sostituisco con la cella sotto, se non sono né in riga né in colonna allora "triangolo" le due celle/lettere, così ottengo un quadrato/rettangolo e sostituisco ogni lettera con il vertice seguente nel quadrato così ottenuto, mi sembra che debba prendere il vertice sulla stessa riga per scambiare una lettera
Se ci sono le doppie scelgo un'altra lettera, a priori decido con quale lettera sostituire un'eventuale doppia
cifra di feistel: des lo è con blocchi da 64 bit e chiave da 64 bit


des, prendo i bit e li permuto, scissione, divido in due sottoblocchi(metà parte alta e metà parte bassa)
blocco di destra e di sinistra
Si     Di
       funzione con anche chiave(vedi dopo)       
        xor con Si
Di     Di+1
di nuovo
Si+1 Di+1

funzione con chiave:
prendo la matrice(mezzo quadrato orizzontale), la espando per farla diventare da 32 bit a 48
faccio la xor con la chiave(che è da 6 bit), la faccio riga per riga, visto che ho un rettangolo di 6 colonne e 8 righe
nuova funzione con S box, è una matrice 16 colonne x 4 righe, ogni colonna corrisponde a un numero binario di 4 cifre, mentre ogni riga è associata a un numero binario di 2 cifre, questa mi da un valore, prendendo come 2 bit il primo e l'ultimo e come 4 bit i 4 centrali, per ogni riga.

## RSA
chiavi simmetriche e asimmetriche, chiave pubblica nota a tutti
rsa, iniziali dei tre creatori

trapdoor function, moltiplicazione di due grandi numeri primi

p e q sono due numeri primi molto grandi, n è il loro prodotto
scelgo numero e,  coprimo e più piccolo di (p-1)(q-1), detto esponente pubblico(coprimo, numero con massimo comune divisore uguale a 1 con un altro numero)
algoritmo di euclide per calcolo mcm

d * e = 1 mod(p-1)(q-1)
d è detto esponente privato

chiave pubblica: coppia (e, n)
chiave privata: coppia (d, n)
