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
