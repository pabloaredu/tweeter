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
var $content = $('<p>').text(data.content.text).addClass('tweetContent');
// Footer elements
var $footer = $('<footer>');
var $date = $(`<p>${data.content.created_at}</p>`); // Add the time when tweet was created
var $replyIcon = $('<img src = "https://www.podomatic.com/assets/homebase/share-btn-01addbf9c0a7df9c7d3a7b6286da5e587d3c1e5854148746fb03df003d4190f6.png" />').addClass('tweetFooterImage');
var $flagIcon = $('<img src = "https://forums.forzamotorsport.net/Themes/Forza/icon_topic_latestunread.png" />').addClass('tweetFooterImage');
var $likeIcon = $('<img src = "https://sl3-cdn.karousell.com/components/heart.svg" />').addClass('tweetFooterImage');

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
  var $errorSection = $('#new-tweet .error-section').empty();
  var newTweetText = $('#newTweet').val();
  if (newTweetText === "" || newTweetText === null) {
    var $messageEmptyTweet = $('<p>Your tweet is empty. Let the world knows what you are thinking!</p>');
    $errorSection.prepend($messageEmptyTweet);
  } else if (newTweetText.length > 140) {
    var $messageBiggerTweet = $('<p>You only have 140 characters. Please try again.</p>');
    $errorSection.prepend($messageBiggerTweet);
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


