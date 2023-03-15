
## Pat
porta address translation. Tecnica utilizzata per tradurre un gruppo di indirizzi privati in uno pubblico, identificandoli con le porte. Opera al terzo livello e viene implementata nei router. Vantaggi: solo un indirizzo pubblico per meno costo, gli host non espongono i loro indirizzi a tutti. Svantaggi: esce un solo host alla volta con un servizio. Pat table, associazion ip private, pubblico e porte. Comandi: si definisce l'interfaccia inside e outside. Ip nat inside source list NOME interface INTERFACCIA. Con acl.

## Dns
server del protocollo dns, all'ultimo stadio della pila iso-osi, livello di applicazione. Perchè viene usato dagli utenti. Traduce delle stringhe in indirizzi ip, tramite dei record. Più tipi di record:
- A, associazione stringa indirizzi 1:1
- NS, name server, quando il server dns non conosce l'indirizzo ma deve rilanciare la query al server superiore
- CName, associazione stringa stringa 1:1
Posso avere più server dns, interni o esterni alla rete. I pacchetti vengono cachati, senza dover rimpallare le ricerce molte volte. Il server deve essere all'interno di una dmz, infatti deve essere contattabile dall'esterno e quindi non lo possoconsiderare trusted. 

## Nat statico
static network address translation. Viene sempre utilizzato lo stesso indirizzi ip pubblico. Usato per i server che devono essere accessibili dalla rete internet. Viene implementato sui router a livello di rete. Va configurato il router per associare gli indirizzi, manualmente. Ci sono delle regole di inoltro per far sì che funzioni tutto. Si può usare un provider in internet. Ocio alla sicurezza. Tabella di 