const twitter = require('twitter');
const config = require('config');

const client = new twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});
 

const list = () => 
  client.get('statuses/user_timeline', {screen_name: 'mr_maybeyes'}, function(error, tweets, response) {
    if (error) {
      console.error('Error : ', error);
      return;
    }
    console.log(tweets);
  });


const postTweet = (status) => 
  client.post('statuses/update', {status},  function(error, tweet, response) {
    if(error) {
      console.error('Error : ', error);
      return;
    }
    console.dir(tweet);  // Tweet body. 
    console.dir(response);  // Raw response object. 
  });


list();