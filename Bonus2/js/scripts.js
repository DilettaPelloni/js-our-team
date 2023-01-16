//creo un array di oggetti, ciascuno dei quali è un membro del team
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angel Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg'
    }
];




//creo tante card quanti sono gli elementi di teamMembers
for(let i = 0; i < teamMembers.length; i++) {
    //prendo la card-box
    const cardBox = document.getElementById('card-box');

    //creo la card
    const card = document.createElement('div');
    card.classList.add('card');

    //creo gli elementi da mettere nella card
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    //in img metto l'immagine
    img.setAttribute('src', `img/${teamMembers[i]['img']}`);

    //in h4 metto il nome
    h4.innerText = teamMembers[i]['name'];

    //in p metto il ruolo
    p.innerText = teamMembers[i]['role'];

    //li metto nella card
    card.append(img);
    card.append(h4);
    card.append(p);
    //metto la card nella box
    cardBox.append(card);
}