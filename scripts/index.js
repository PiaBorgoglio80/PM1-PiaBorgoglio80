
class Activity {
    constructor(id, title, description, imgURL) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
    }
}


class Repository {
    constructor() {
        this.activities = [];
        this.__id__ = 1;
    }

    
    getAllActivities() {
        return this.activities;
    }

   
    createActivity(title, description, imgURL) {
        const nuevaActividad = new Activity(
            this.__id__,
            title,
            description,
            imgURL
        );

        this.activities.push(nuevaActividad);
        this.__id__++;
    }

    
    deleteActivity(id) {
        this.activities = this.activities.filter((actividad) => actividad.id !== id);
    }
}


const repository = new Repository();


function convertToHTML(activity) {
    const { id, title, description, imgURL } = activity;

   
    const div = document.createElement('div');
    div.classList.add('actividad-tarjeta');

    const h3 = document.createElement('h3');
    h3.innerHTML = title;

    const p = document.createElement('p');
    p.innerHTML = description;

    const img = document.createElement('img');
    img.src = imgURL;
    img.alt = `Imagen de ${title}`;

    const span = document.createElement('span');
    span.classList.add('x');
    span.innerHTML = 'X';
    span.onclick = () => handleDeleteActivity(id); 

    
    div.appendChild(h3);
    div.appendChild(span);
    div.appendChild(img);
    div.appendChild(p);

    return div;
}

function renderActivities() {
   
    const container = document.querySelector('.OrgDeTarj');

    
    container.innerHTML = '';

    
    const activities = repository.getAllActivities();

    
    activities.forEach((activity) => {
        const activityHTML = convertToHTML(activity);
        container.appendChild(activityHTML);
    });
}


function handleAddActivity(event) {
    event.preventDefault(); 

   
    const titleInput = document.querySelector('#titulo');
    const descriptionInput = document.querySelector('#descripcion');
    const imgURLInput = document.querySelector('input[type="url"]');

    
    const title = titleInput.value;
    const description = descriptionInput.value;
    const imgURL = imgURLInput.value;

    
    if (!title || !description || !imgURL) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    
    repository.createActivity(title, description, imgURL);

   
    titleInput.value = '';
    descriptionInput.value = '';
    imgURLInput.value = '';

    
    renderActivities();
}


const form = document.querySelector('.formulario');
form.addEventListener('submit', handleAddActivity);


function handleDeleteActivity(id) {
   
    repository.deleteActivity(id);

    
    renderActivities();
}
