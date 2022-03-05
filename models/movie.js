// <!-- // COMP229 - Mid-Term Test
// // Laura Amangeldiyeva - 301167661
// // 2022-03-01 -->
let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);