require("dotenv").config();
console.log('Keys are loaded....');

// We'll dump this once we have verified the other two work
class API_Keys{
    constructor(){
        this.twitter = {
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        };

        this.spotify = {
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
        };
    }
}

class SpotifyAPI{
    constructor(){
        this.key = {
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
        };
    }
}

class TwitterAPI{
    constructor(){
        this.key = {
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        };
    }
}



module.exports = {
    SpotifyAPI: SpotifyAPI.key,
    TwitterAPI: TwitterAPI
};