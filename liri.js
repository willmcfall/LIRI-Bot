require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


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

function concert_this() {
    // console.log("Concert this run succesfully!");
    var artist = "";
    for (i = 3; i < process.argv.length; i++) {
        if (i == 3) {
            artist += process.argv[i];
        }
        else {
            artist += "%20" + process.argv[i];
        };
    };
    queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    // console.log(queryUrl);
    axios.get(queryUrl)
        .then(function (response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country);
            console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
        })
        .catch(function (error) {
            console.log(error);
        });
};

// This section draws from the Spotify API

function spotify_this() {

    var song = "";
    for (i = 3; i < process.argv.length; i++) {
        if (i == 3) {
            song += process.argv[i];
        }
        else {
            song += " " + process.argv[i];
        };
    };


    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            console.log("Whoops, there has been an error. Aaaanyway, here is some Ace of Base!");
            aceOfBase();
            return
        }
        // Name of the song
        console.log(data.tracks.items[0].name);
        // Name of the artist
        console.log(data.tracks.items[0].artists[0].name);
        // Name of the album
        console.log(data.tracks.items[0].album.name);
        // Name of the spotify url
        console.log(data.tracks.items[0].external_urls.spotify);
    }
    );
};

function aceOfBase() {
    spotify.search({ type: 'track', query: 'Ace of Base' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // Name of the song
        console.log(data.tracks.items[0].name);
        // Name of the artist
        console.log(data.tracks.items[0].artists[0].name);
        // Name of the album
        console.log(data.tracks.items[0].album.name);
        // Name of the spotify url
        console.log(data.tracks.items[0].external_urls.spotify);
    }
    );
};

// This section draws from the OMDB API

function movie_this() {
    // console.log("Movie this this run succesfully!");
    var movie = "";
    for (i = 3; i < process.argv.length; i++) {
        if (i == 3) {
            movie += process.argv[i];
        }
        else {
            movie += "+" + process.argv[i];
        };
    };
    queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"
    // console.log(queryUrl);
    axios.get(queryUrl)
        .then(function (response) {
            console.log(response.data.Title);
            console.log(response.data.Year);
            console.log(response.data.imdbRating);
            console.log(response.data.Ratings[1].Value);
            console.log(response.data.Country);
            console.log(response.data.Language);
            console.log(response.data.Plot);
            console.log(response.data.Actors);
        })
        .catch(function (error) {
            console.log("Whoops, there has been an error. here is Mr. Nobody");
            mrNobody();
        });


        function mrNobody(){
            queryUrl = "http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=trilogy"
            // console.log(queryUrl);
            axios.get(queryUrl)
                .then(function (response) {
                    console.log(response.data.Title);
                    console.log(response.data.Year);
                    console.log(response.data.imdbRating);
                    console.log(response.data.Ratings[1].Value);
                    console.log(response.data.Country);
                    console.log(response.data.Language);
                    console.log(response.data.Plot);
                    console.log(response.data.Actors);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };




// This section draws from the random.text file

function do_this() {
    console.log("Do this this run succesfully!");
};