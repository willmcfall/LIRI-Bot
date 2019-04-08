# LIRI-Bot
## Overview
This application allows a user to query a number of popular media databases; including Bands in Town, Spotify, and Open Moves Database, and provides basic information on the queried items. The application runs within the user's terminal and is queried through a simple preocedure as outlined below in the Specifications and Instructions. Additionally, a link included here (https://drive.google.com/file/d/1XdEImfWdY77fyhodApZ4eN7CTz-MkP-0/view) is a video tutorial outlining how to use this application.

## Specifications

### node liri.js concert-this <span><</span>artist name here<span>></span>
This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

### node liri.js spotify-this <span><</span>song name here<span>></span>
This will search the Spotify API for an artist and render the following information about each song to the terminal:
* Artist(s)
* Song's name
* Preview link of the song from Spotify
* Album that the song is from

### node liri.js movie-this <span><</span>movie name here<span>></span>
This will search the OMDB API for a movie and render the following information about each movie to the terminal:
 * Title of the movie.
 * Year the movie came out.
 * IMDB Rating of the movie.
 * Rotten Tomatoes Rating of the movie.
 * Country where the movie was produced.
 * Language of the movie.
 * Plot of the movie.
 * Actors in the movie.

 ### node liri.js do-this
 This will read text from the random.txt file and will run the code stored within the file.

## Instructions
1. Open your terminal and navigate to the file path that stores the liri.js file
1. Install node packages by running npm install axios
1. Enter a search query per the Specification guidance above

