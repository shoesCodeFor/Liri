require('./keys.js');
const key = SpotifyAPI;
const Spotify = require('node-spotify-api');
const spotifyClient = new Spotify(key);


class SpotifyToLog{
    constructor(){
        this.songSearch = songName => {
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
    }
}

module.exports = SpotifyToLog;
