require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// This section creates a switch

switch (process.argv[2]) {
    case ("concert-this"):
        concert_this();
        break;
    case ("spotify-this"):
        spotify_this();
        break;
    case ("movie-this"):
        movie_this();
        break;
    case ("do-this"):
        do_this();
        break;
};

// This section draws from the Bands in Town API

function concert_this(){
    console.log("Concert this run succesfully!");
};

// This section draws from the Spotify API

function spotify_this(){
    console.log("Spotify this run succesfully!");
};

// This section draws from the OMDB API

function movie_this(){
    console.log("Movie this this run succesfully!");
};

// This section draws from the random.text file

function do_this(){
    console.log("Do this this run succesfully!");
};