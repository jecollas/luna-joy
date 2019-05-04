//loveforfriends.js

var ready = function(fn) {
  if (typeof fn !== 'function') return;
  if (document.readyState === 'complete') {
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn, false);
};

var compliment = [
  "You are the most perfect you that there is",
  "You should be proud of yourself \, you're doing amazing",
  "You're more loved than you realize",
  "You really are something special",
  "Your ideas are so incredible\, and it\'s always wonderful to hear what you have to say",
  "You make a difference",
  "You are a gift to everyone around you",
  "Your smile is one of the best things about you",
  "You're a great friend",
  "Everything would be better if there were more people like you in the world",
  "I like talking to you",
  "There's ordinary, and then there's you",
  "You deserve to be happy with who you are",
  "You look really nice today",
  "You are a great listener",
  "You are one of the strongest people that I know",
  "Your work is incredible",
  "You are an inspiration to those who admire what you do",
  "Thank you for existing",
  "You are a constant reminder that peole can be good",
  "Life would be boring without you in it",
  "You\'re not as dumb as you let people think you are",
  "You\'re beautiful",
  "You are truly unforgettable",
  "Wow",
  "Please never stop being you",
  "There\'s never been a person quite like you",
  "You are just beyond",
  "Thank you",
  "You\'re fun to be around",
  "You look great today",
  "You have a wonderful laugh",
  "You are brave",
  "Everyone gets knocked down sometimes, but you always get back up and keep going",
  "You\'re someone\'s reason to smile",
  "You should see how many people smile when they talk to you",
  "You are more than enough",
  "I believe in you",
  "You are worth so much more",
  "You are nothing less than special",
  "You are one of a kind",
  "You have the best ideas",
  "Your creative potential seems limitless",
  "You should be thanked more often\. Thank you",
  "I appreciate you",
  "You\'re really something special"
];

function random(arr) {
  return Math.floor((Math.random() * arr));
}

function randomString(strings) {
    var randomNumber = random(strings.length);
    return strings[randomNumber];
}

function affectClick() {
  affection = randomString(compliment);
  document.getElementById('affect').innerHTML = affection;
}
