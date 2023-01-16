// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite

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
        img: ''
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

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i = 0; i < teamMembers.length; i++) {

    console.log('Membro n°: ' + (i + 1));

    for(let key in teamMembers[i]) {
        console.log(key + ': ' + teamMembers[i][key]);
    }

    console.log('-------------------')

}