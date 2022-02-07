class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this.isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(i){
        this._isCheckedOut = i;
    }

    toggleCheckOutStatus(){
        return this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);

        const lengthOfArray = this._ratings.length;

        return ratingsSum / lengthOfArray;
    }

    addRating(n){
        this._ratings.push(n);
    }
}

class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist(){
        return this._artist;
    }

    get songs(){
        return this._songs;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything', 544);

console.log(historyOfEverything.toggleCheckOutStatus());

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

console.log(speed.toggleCheckOutStatus());

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());