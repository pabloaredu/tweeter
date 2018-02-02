/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

function renderTweets(tweets) {
  $('#tweets').empty();
  tweets.forEach(element => {
    var $tweet = createTweetElement(element);
    $('#tweets').prepend($tweet)
  });
}

function createTweetElement(data){
var $article = $('<article>');
// Header elements
var $header = $('<header>');
var $avatar = $(`<img src ="${data.user.avatars.small}" />`);
var $userName = $(`<h2>${data.user.name}</h2>`);
var $tweetUserName = $(`<p>${data.user.handle}</p>`);
var $content = $('<p>').text(data.content.text);
// Footer elements
var $footer = $('<footer>');
var $date = $(`<p>${data.content.created_at}</p>`); // Add the time when tweet was created
var $replyIcon = $('<img src = "https://www.theregister.co.uk/Design/graphics/icons/reply_icon.png" />');
var $flagIcon = $('<img src = "https://www.theregister.co.uk/Design/graphics/icons/reply_icon.png" />');
var $likeIcon = $('<img src = "https://www.theregister.co.uk/Design/graphics/icons/reply_icon.png" />')

// Building structure of elements in DOM
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

//Loading tweets from database
function loadTweets () {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (response)=>{
        renderTweets(response)
      }
  });
}

// When document ready:
$(function() {
  // Creating a new tweet
$('#tweetform').submit(function(event){
  event.preventDefault();
  var newTweetText = $('#newTweet').val();
  if (newTweetText === "" || newTweetText === null) {
    var $messageEmptyTweet = $('<p>Your tweet is empty. Let the world knows what you are thinking!</p>');
    $('#new-tweet').prepend($messageEmptyTweet);
  } else if (newTweetText.length > 140) {
    var $messageBiggerTweet = $('<p>You only have 140 characters. Please try again.</p>');
    $('#new-tweet').prepend($messageBiggerTweet);
  } else {
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $('form').serialize(),
      success: function(event){
        console.log("Ajax call was successful");
        loadTweets();
      },
      error: function(err){
        console.log("There was an error calling the api ");
        console.log(err);
      }
    });
  }
});

$('#new-tweet textarea').focus();

$( "button" ).click(function(event) {
  $( "#new-tweet" ).slideToggle( "down" );
  $('#new-tweet textarea').focus();
});



  loadTweets(); //Testing GET response: DELETE LATER
});


