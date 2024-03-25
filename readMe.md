# Vue 3
## Introduzione
Vue è un framework JavaScript per la creazione di interfacce utente che utilizza HTML, CSS e JavaScript.
Le sue funzionalità principali sono :
- Rendering dichiarativo.
- Reattività.

Vue è  detto framework "Progressivo" perchè progettato per essere flessibile ed adottabile in modo incrementale a seconda delle esigenze.

I Single-File Components sono lo strumento fondamentale di Vue,incapsulano la logica del componente JS il template Html e gli stili CSS 

I componenti Vue possono essere scritti in due sili API differenti 
- Option API
- Composition API (non ho ben capito come funzionano)

Gli Option API basano la logica su oggetti di opzioni contenenti dati o metodi e con la quale andiamo ad interagire all'interno delle funzioni tramite 'this' che fa riferimento all'istanza del componente. 

## Template Syntax
Vue utilizza una sintassi basata su Html collegando in modo dichiarativo il DOM ai dati del componente.

La base del data binding di Vue è l'interpolazione del testo tramite poppie parentesi graffe che interpretano i dati come testo semplice.

Per iterpretare i dati come Html effettivo abbiamo bisogno delle direttive :
- v-html
- v-bind
- v-if
- v-for
- v-on  
- ...
 
 v-bind si utilizza per inserire html dinamico all'interno degli attributi
 e può essere utilizzato anche per inserire più attributi insieme in un unico bind
 
 Sia all'interno dell'interpolazione che nelle direttive possiamo utilizzare espressioni complesse di JavaScript come anche funzioni.

Possiamo anche utilizzare espressioni Javascript tra [] per creare argomentazioni dinamiche che andranno a variare il comportamento della direttiva in base al valore della variabile in JS

In oltre possiamo aggiungere dei modificatori alle direttive per modificarne il comportamento.