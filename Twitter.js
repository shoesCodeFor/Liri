require("dotenv").config();
const key = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};
const Twitter = require('twitter');
const twitterClient = new Twitter(key);

class TwitterAPI{
    constructor(){
        this.myTweets = () => {
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
                else{
                    console.log(error);
                }

            });
        };
        this.getTweets = userName => {
            twitterClient.get('statuses/user_timeline', userName, function(error, tweets, response) {
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
                else{
                    console.log(error);
                }

            });
        };
    }
}

module.exports = TwitterAPI;