import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

const tweets = [];

const recentTweets = []; 

app.post('/sign-up', (req, res) => {
  users.push(req.body);
  res.send('OK');
});

app.get('/tweets', (req, res) => {
  res.send(recentTweets);
});

app.post('/tweets', (req, res) => {
  const tweet = req.body;
  users.forEach(user => {
    if (user.username === tweet.username) 
      tweet.avatar = user.avatar; 
  })
  tweets.push(tweet);
  if (recentTweets.length === 10) 
    recentTweets.shift();
  recentTweets.push(tweet);
  res.send('OK');
})

app.listen(5000);