
## Pat
porta address translation. Tecnica utilizzata per tradurre un gruppo di indirizzi privati in uno pubblico, identificandoli con le porte. Opera al terzo livello e viene implementata nei router. Vantaggi: solo un indirizzo pubblico per meno costo, gli host non espongono i loro indirizzi a tutti. Svantaggi: esce un solo host alla volta con un servizio. Pat table, associazion ip private, pubblico e porte. Comandi: si definisce l'interfaccia inside e outside. Ip nat inside source list NOME interface INTERFACCIA. Con acl.

## Dns
server del protocollo dns, all'ultimo stadio della pila iso-osi, livello di applicazione. Perchè viene usato dagli utenti. Traduce delle stringhe in indirizzi ip, tramite dei record. Più tipi di record:
- A, associazione stringa indirizzi 1:1
- NS, name server, quando il server dns non conosce l'indirizzo ma deve rilanciare la query al server superiore
- CName, associazione stringa stringa 1:1
Posso avere più server dns, interni o esterni alla rete. I pacchetti vengono cachati, senza dover rimpallare le ricerce molte volte. Il server deve essere all'interno di una dmz, infatti deve essere contattabile dall'esterno e quindi non lo possoconsiderare trusted. 

## Nat statico
static network address translation. Viene sempre utilizzato lo stesso indirizzi ip pubblico. Usato per i server che devono essere accessibili dalla rete internet. Viene implementato sui router a livello di rete. Va configurato il router per associare gli indirizzi, manualmente. Ci sono delle regole di inoltro per far sì che funzioni tutto. Si può usare un provider in internet. Ocio alla sicurezza. Tabella di traduzione, nat table. Essa tiene traccia delle mappature degli indirizzi. La traduzione avviene così per tutti i pacchetti che passano dal router i cui indirizzi compaiono nella tabella. Vantaggi: meno ip pubblici per una rete con molti indirizzi che non devono essere tutti tradotti. Nasconde gli indirizzi della rete privata all'internet. Però devono esserci abbastanza indirizzi pubblici, e gli host possono essere più difficili di identificare. 

## Nat dinamico
tecnica di traduzione di indirizzi ip in modo dinamico, per nascondere il proprio indirizzo. Gli indirizzi pubblici vengono usati per essere assegnati agli host che comunicano con l'esterno. è importante che questa pool sia minore del numeo di dispositivi. Quando un host vuole comunicare gli viene assegnato il primo indirizzo disponibile. Non viene usata coi server, visto che non sarebbero accessibili dall'esterno. Comandi: sulle interfacce ip nat inside/outside. Creo la pool e l'access list. Ip nat inside source list LISTA pool POOL ed è fatto. 

## Server web
Scambia contenuti di default sulle porte 80 e 443, usando il protocollo http. 
#### Http
client server, documentato negli rfc. Ci sono tre macro categorie: start line che definisce se è una richiesta o risposta, due caratteri ascii per la fine delle startline e inizial'header. Associazione nome campo e valore, spesso riempiti dal browser. Contengono ad esempio i cookie. Ultima sezione, il body, contiene il messaggio principale, che può essere una pagina web o anche i campi di un form. Sicurezza, possono essere ispezionati i pacchetti http dal web server se il protocollo è in chiaro(no https). Questi server sono in una dmz, anche per bilanciare il carico. 