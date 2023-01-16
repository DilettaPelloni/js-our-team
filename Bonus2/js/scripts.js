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


for(let i = 0; i < teamMembers.length; i++) {

    const h3 = document.createElement('h3');
    const main = document.querySelector('main');

    h3.innerText = 'Membro n°: ' + (i + 1);

    main.append(h3);

    for(let key in teamMembers[i]) {

        const p = document.createElement('p');

        if (key == 'img') {
            p.innerText = key + ':';
            const img = document.createElement('img');
            img.setAttribute('src', `img/${teamMembers[i][key]}`);
            main.append(p);
            main.append(img);
        }
        else {
            p.innerText = key + ': ' + teamMembers[i][key];
            main.append(p);
        }
    }

    const hr = document.createElement('hr');
    main.append(hr);
}