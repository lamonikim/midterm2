// COMP229 - Mid-Term Test
// Laura Amangeldiyeva - 301167661
// 2022-03-01
// create a reference to the model
let Movie = require('../models/movie');

// Gets all movies from the Database and renders the page to list all movies.
module.exports.movieList = function(req, res, next) {  
    Movie.find((err, movieList) => {
        // console.log(movieList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('movie/list', {
                title: 'Movie List', 
                movies: movieList
            })            
        }
    });
}

// Gets a movie by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    Movie.findById(id, (err, movieToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('movie/details', {
                title: 'Movie Details', 
                movie: movieToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE        
    res.render('movie/add', {title: 'Add a new Movie'});   
}

// Processes the data submitted from the Add form to create a new movie
module.exports.processAddPage = (req, res, next) => {

    // ADD YOUR CODE HERE
    let newMovie = Movie({
        "Title": req.body.Title,
        "Synopsis":req.body.Synopsis,
        "Year":req.body.Year,
        "Director":req.body.Director,
        "Genre":req.body.Genre
    });

    Movie.create(newMovie, (err, Movie) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //to refresh list of movies 
            res.redirect('/movie/list');
        }

    });
}

// Gets a movie by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;
    Movie.findById(id, (err, movieToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edited result 
            res.render('movie/edit', {title: 'Edit Movie', movie: movieToEdit})
        }

    });

}

// Processes the data submitted from the Edit form to update a movie
module.exports.processEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;
    let updateMovie = Movie({
        "_id": id,
        "Title": req.body.Title,
        "Synopsis":req.body.Synopsis,
        "Year":req.body.Year,
        "Director":req.body.Director,
        "Genre":req.body.Genre

    });
    Movie.updateOne({_id: id}, updateMovie, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh list of movies
            res.redirect('/movie/list');
        }
    
    });
}

// Deletes a movie based on its id.
module.exports.performDelete = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;

    Movie.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh list of movies
            res.redirect('/movie/list');
        }

    });
}