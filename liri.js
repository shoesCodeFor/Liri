/**
 *      Liri JS - A simple Node CLI to access Spotify, Twitter and OMDB
 *      By Schuyler Ankele - University of Denver Code Bootcamp Fall 2018 Cohort
 */

// Import dependencies
require("dotenv").config();
const API_Keys = require('./keys.js');
const fs = require('fs');
const Spotify = require('node-spotify-api');
const Twitter = require('twitter');
const request = require('request');

const keys = new API_Keys();

// Initialize the keys
var spotifyClient = new Spotify(keys.spotify);
var twitterClient = new Twitter(keys.twitter);

// Lets write some common methods
const myTweets = () => {
    var params = {screen_name: 'schuylerHSR'};
    twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
        // Returns an array of Tweets
        if (!error) {
            console.log('************ Top 20 Tweets ***************');

            // show your last 20 tweets and when they were created
            for(let i = 0; i < 20; i++){
                // This is what was said
                console.log('*********** Tweet **************');
                console.log(tweets[i].text);
                // And when
                console.log('************ Date ***************');
                console.log(tweets[i].created_at);
                console.log("\n");

            }
        }
        
    });
};

const spotifySearch = songName => {
    spotifyClient.search({ type: 'track', query: songName}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        let songData = data.tracks.items[0];
        console.log('************ Spotify Song Data ***************');
        // Console log the first one....
        // DEBUG: console.log(songData);
        // Artist(s)
        console.log(`Artist(s): ${songData.album.artists[0].name}`);
        // The song's name
        console.log(`Song Name: ${songData.name}`);
        // A preview link of the song from Spotify
        console.log(`Preview URL: ${songData.preview_url}`);
        // The album that the song is from
        console.log(`Album: ${songData.album.name}`);
    });
};

const searchOMDB = (movieName = 'Mr. Nobody') => {
    request(`http://www.omdbapi.com/?apikey=trilogy&t=${movieName}`, (error, response, body) =>{
        console.log('************ OMDB Movie Data ***************');
        let movieData = JSON.parse(body);
        // Title of the movie.
        console.log(movieData.Title);
        // Year the movie came out.
        console.log(`Released: ${movieData.Year}`);
        // IMDB Rating of the movie.
        console.log(`IMDB Rating: ${movieData.imdbRating}`);
        // Rotten Tomatoes Rating of the movie.
        for (rating in movieData.Ratings){
            if(movieData.Ratings[rating].Source === "Rotten Tomatoes"){
                console.log("Rotten Tomatoes Rating: " + movieData.Ratings[rating].Value);
            }
        }
        // console.log(`IMDB Rating: ${body.imdbRating}`);
        // Country where the movie was produced.
        console.log(`Produced in: ${movieData.Country}`);
        // Language of the movie.
        console.log(`Produced in: ${movieData.Language}`);
        // Plot of the movie.
        console.log(`Plot: ${movieData.Plot}`);
        // Actors in the movie.
        console.log(`Actors: ${movieData.Actors}`);
       
    });
};

const doWhatItSays = () => {
    let randomCommands = fs.readFileSync('random.txt');
    // Command and parameter are comma seperated
    let contentArr = randomCommands.toString().split(",");
    let command = contentArr[0].trim();
    let param = contentArr[1].trim();
    console.log(`From File random.txt - Command: ${command} | Parameter: ${param}`);
    letsDoThis(command, param);
};

const letsDoThis = (command, param = "") =>{
    switch(command) {
        case 'my-tweets':
            myTweets();
            break;
        case 'spotify-this-song':
            spotifySearch(param);
            break;
        case 'movie-this':
            if(param.length > 1){
                searchOMDB(param);
            }
            else{
                searchOMDB();
            }
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
        default:
            console.log(`We don't recognize the command ${command}.\nAcceptable commands are \'my-tweets\' \'spotify-this-song\` \`movie-this\` & \`do-what-it-says\``);
            console.log(`Please try again or run this with the CLI tool by typing: node liri-cli.js`);
    }
};

const logAndPrint = line =>{
    try {
        fs.appendFileSync('log.txt', line);
        console.log(line);
    } catch (err) {
        /* Handle the error */
        console.log(err)
    }
};

// Self-invoking function to collect the args
(function(){
    let arguments = process.argv;
    arguments = arguments.slice(2);
    let command = arguments[0];
    let param = arguments.slice(1);
    param = param.join(" ");
    if(param < 1){
        logAndPrint(`\nCommand: ${command} | Paramaters: N/A\nInput: ${process.argv.join(" ")}\n`);
    }
    else{
        logAndPrint(`\nCommand: ${command} | Paramaters: ${param}\nInput: ${process.argv.join(" ")}\n`);
    }

    letsDoThis(command, param);
})();

/******* Tests *******/
// myTweets();
// spotifySearch('Alien 8');
// searchOMDB();
// doWhatItSays();
// Parse in CLI data from the terminal


/****** Command List *******/
// * `my-tweets`
//
// * `spotify-this-song`
//
// * `movie-this`
//
// * `do-what-it-says`

