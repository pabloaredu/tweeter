/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function renderTweets(tweets) {
  $('#tweets').empty();
  tweets.forEach(element => {
    var $tweet = createTweetElement(element);
    $('#tweets').append($tweet)
  });
}

function createTweetElement(data){
var $article = $('<article>');
// Header elements
var $header = $('<header>');
var $avatar = $(`<img src ="${data.user.avatars.small}" />`);
var $userName = $(`<h2>${data.user.name}</h2>`);
var $tweetUserName = $(`<p>${data.user.handle}</p>`);
var $content = $(`<p>${data.content.text}</p>`); //New Tweet Content
// Footer elements
var $footer = $('<footer>');
var $date = $(`<p>${data.content.created_at}</p>`); // Add the time when tweet was created
var $replyIcon = $('<img src = "https://www.theregister.co.uk/Design/graphics/icons/reply_icon.png" />');
var $flagIcon = $('<img src = "https://www.theregister.co.uk/Design/graphics/icons/reply_icon.png" />');
var $likeIcon = $('<img src = "https://www.theregister.co.uk/Design/graphics/icons/reply_icon.png" />')

// Building structure of elements
$header.append($avatar);
$header.append($userName);
$header.append($tweetUserName);
$article.append($header);
$article.append($content);
$footer.append($date);
$footer.append($replyIcon);
$footer.append($flagIcon);
$footer.append($likeIcon);
$article.append($footer);
var $tweet = $($article).addClass("tweet");

return $tweet;
}


$(function() {
  renderTweets(data);
  // data.push(/*new tweet*/);
});

