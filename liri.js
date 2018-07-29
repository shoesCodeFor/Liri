/**
 *      Liri JS - A simple Node CLI to access Spotify, Twitter and OMDB
 *      By Schuyler Ankele - University of Denver Code Bootcamp Fall 2018 Cohort
 */

// Import dependencies
require("dotenv").config();
const fs = require('fs');
const keys = require('./keys.js');
const Spotify = require('node-spotify-api');
const Twitter = require('twitter');
const request = require('request');
const inquirer = require('inquirer');

// Initialize the keys
var spotifyClient = new Spotify(keys.spotify);
var twitterClient = new Twitter(keys.twitter);

// Lets write some common methods
const myTweets = () => {
    var params = {screen_name: 'schuylerHSR'};
    twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
        // Returns an array of Tweets
        if (!error) {
            console.log(tweets);
        }
    });
};

const spotifySearch = songName => {
    spotifyClient.search({ type: 'track', query: songName}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // Console log the first one....
        console.log(data.tracks.items[0]);
    });
};
const searchOMDB = movieName => {
    request('http://www.omdbapi.com/?apikey=trilogy&t=Milo+and+Otis', (error, response, body) =>{
       console.log(body);
    });
};

const doWhatItSays = () => {

};

// myTweets();
// spotifySearch('Alien 8');
searchOMDB('Milo and Otis');
// Parse in CLI data from the terminal

// * `my-tweets`
//
// * `spotify-this-song`
//
// * `movie-this`
//
// * `do-what-it-says`

