# LIRI-Bot
## Overview
This applicationis a language interpretation and recognition interface that allows the user to use the command line to enter parameters and gives you back music data from Spotify, concert data from Bands in Town, and movie data from OMDB.

## Specifications
### node liri.js concert-this <artist/band name here>
This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

### node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

### node liri.js movie-this '<movie name here>'
 * Title of the movie.
 * Year the movie came out.
 * IMDB Rating of the movie.
 * Rotten Tomatoes Rating of the movie.
 * Country where the movie was produced.
 * Language of the movie.
 * Plot of the movie.
 * Actors in the movie.
  

## Instructions
1. Open your terminal and navigate to the file path that stores the liri.js file
2. Install node packages by running npm install axios
3. 
