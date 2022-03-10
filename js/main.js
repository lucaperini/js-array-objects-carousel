/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const slider = [
    {
        image: 'https://picsum.photos/750/540?random=1',
        title: 'Image One',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',
    },
    {
        image: 'https://picsum.photos/750/540?random=2',
        title: 'Image One',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',
    },
    {
        image: 'https://picsum.photos/750/540?random=3',
        title: 'Image One',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',

    },
    {
        image: 'https://picsum.photos/750/540?random=4',
        title: 'Image One',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',

    },
    {
        image:'https://picsum.photos/750/540?random=5',
        title:'Image One',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',

    },
    {
        image:'https://picsum.photos/750/540?random=6',
        title:'Image One',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',
    },
    
]

