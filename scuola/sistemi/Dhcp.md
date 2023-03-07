Dynamic host configuration protocol
Livello 5/6/7
Assegna automaticamente indirizzi ip e configurazioni di rete agli host di una rete privata on demand.
L'host manda una richiesta sulla rete, il server dhcp risponde assegnando un indirizzo ip disponibile e le informazioni di configurazione richieste(default gateway, dns server, maschere di rete varie).
Vantaggi:
- semplificazione della gestione della rete
- eviti conflitti di indirizzi ip
- minor tempo di configurazione
Basato su UDP, usa di default la porta 67 per il server, 68 client.
Il server che fornisce il servizio, designato dal router della rete, non deve necessariamente essere all'interno della rete privata dell'host, visto che sarà poi contattato dal router. Un server dhcp può servire più reti, risponderà in base all'indirizzo del router richiedente.
Fasi del dhcp:
- discover, il client cerca il server dhcp(di solito è il router)
- offer, il server risponde con un indirizzo
- request, il client accetta o meno l'indirizzo
- acknowledge, 