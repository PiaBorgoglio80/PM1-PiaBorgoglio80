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


function createActivityCard(activity) {
    
    const { id, title, description, imgURL } = activity;

   
    const cardDiv = document.createElement('div');
    const titleElement = document.createElement('h3');
    const descriptionElement = document.createElement('p');
    const imgElement = document.createElement('img');
    const closeButton = document.createElement('span');

 
    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description;
    imgElement.src = imgURL;
    imgElement.alt = `Imagen de ${title}`;
    closeButton.innerHTML = 'X';

    
    cardDiv.classList.add('activity-card');
    titleElement.classList.add('activity-title');
    descriptionElement.classList.add('activity-description');
    imgElement.classList.add('activity-img');
    closeButton.classList.add('x');

    
    cardDiv.appendChild(titleElement);
    cardDiv.appendChild(closeButton);
    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(descriptionElement);

    
    return cardDiv;
}
