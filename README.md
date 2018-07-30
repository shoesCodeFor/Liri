# Liri - A node command-line bot

Digital assistant powered by Node, Twitter, Spotify and OMDB

To install configure a .env file with the following format:
```ruby
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```
To install dependencies run 
   `npm install`

To launch the bot type 
```bash
node liri.js <command> <paramters>
```

Acceptable commands are: 

    *  ```bash
    my-tweets
    ``` 
    (no parameters) Ex. - 
    ```bash
    node liri.js my-tweets
    ```

    *  ```spotify-this-song``` Ex. - ```node liri.js spotify-this-song Alien 8```

    *  ```movie-this``` Ex. - ```node liri.js movie-this Milo and Otis```

    *  `do-what-it-says` (no parameters) Ex. - `node liri.js do-what-it-says`
      NOTE: This command pulls requests from random.txt in this format: `spotify-this-song,"I Want it That Way"`
