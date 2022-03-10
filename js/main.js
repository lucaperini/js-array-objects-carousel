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

// Creo Array di oggetti slider

const slider = [
    {
        image: 'https://picsum.photos/750/540?random=1',
        title: 'Image One',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',
    },
    {
        image: 'https://picsum.photos/750/540?random=2',
        title: 'Image Two',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',
    },
    {
        image: 'https://picsum.photos/750/540?random=3',
        title: 'Image Three',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',

    },
    {
        image: 'https://picsum.photos/750/540?random=4',
        title: 'Image Four',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',

    },
    {
        image:'https://picsum.photos/750/540?random=5',
        title:'Image Five',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',

    },
    {
        image:'https://picsum.photos/750/540?random=6',
        title:'Image Six',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.',
    },
    
]



//inserisco immagini tramite ciclo
for (let i = 0; i < slider.length; i++){
    document.querySelector('div#my-carousel .my-carousel-images').innerHTML += 
    `<img src="${slider[i].image}" class="picture" alt="random picture">
    <div class="item-description>
    <h2>${slider[i].title}</h2>
    <p>${slider[i].description}<p>
    </div`
}
for (let i = 0; i < slider.length; i++){
    document.querySelector('.my-thumbnails').innerHTML += 
    `<div class="ciccio">
    <img src="${slider[i].image}" class="thumbnail-item" alt="random picture">
    </div>`
}



