class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    printcolor(){
       return console.log(this.rating="PG")
    }
}
var moviee=new Movie("Fall","FAST 5","PS1")
console.log(moviee)
