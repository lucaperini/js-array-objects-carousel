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
    `<div class="thumbnail-box">
    <img src="${slider[i].image}" class="thumbnail-item" alt="random picture">
    </div>`
}

let activeElement = 0;

document.getElementsByClassName('picture')[activeElement].classList.add('active');

document.getElementsByClassName('thumbnail-item')[activeElement].classList.add('active');

const prev = document.querySelector('div.my-previous');

prev.addEventListener('click', function() {
    
    document.getElementsByClassName('picture')[activeElement].classList.remove('active');
    document.getElementsByClassName('thumbnail-item')[activeElement].classList.remove('active');

    
    if( activeElement === 0){
        activeElement = slider.length - 1;
    } else {
        activeElement--;
    }
    
    document.getElementsByClassName('picture')[activeElement].classList.add('active');
    document.getElementsByClassName('thumbnail-item')[activeElement].classList.add('active');
});

const next = document.querySelector('div.my-next');

next.addEventListener('click', function() {
    
    document.getElementsByClassName('picture')[activeElement].classList.remove('active');
    document.getElementsByClassName('thumbnail-item')[activeElement].classList.remove('active');

    if( activeElement === slider.length - 1){
        activeElement = 0;
    } else {
        activeElement++;
    }
    
    
    document.getElementsByClassName('picture')[activeElement].classList.add('active');
    document.getElementsByClassName('thumbnail-item')[activeElement].classList.add('active');
});






