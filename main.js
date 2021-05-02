let movieArray = [];


document.addEventListener("DOMContentLoaded", function (event) {
    //This will add the validated movie objects into the array
    document.getElementById("addMovie").addEventListener("click", function () {
        var movie = new movieObject(document.getElementById("name").value,document.getElementById("rating").value);
        //determine is movie object is valid using method written in movie.js
        if (movie.isValid()) {
            //movie object is added to array 
            movieArray.push(movie);
            //clear the fields for new movies to be added by user
            document.getElementById("name").value = "";
            document.getElementById("rating").value = ""; 
        } 
        //if not valid, the user will be alerted 
        else {
            alert("please enter valid fields" );
        }
    });
     //call to print contents stored in array
    document.getElementById("showMovies").addEventListener("click",printMovieList);
})


function printMovieList() {
    //clear list every time it is called
    document.getElementById('listed').innerHTML = "";
    let ul = document.createElement('ul');
    document.getElementById('listed').appendChild(ul);
    //traverse through array and print contents using .getAll method
    for (let i = 0; i < movieArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = movieArray[i].getAll();
    };
}


