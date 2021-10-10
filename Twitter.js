const typing=document.getElementById("typing");
const tweet_btn =document.getElementById("tweet_btn");
let postContainer = document.getElementById("postContainer");
let Tweety, text, tweetylike, retweet;
let like = false;

tweet_btn.onclick = newTweet;

let arr = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items")): [];
localStorage.setItem("items", JSON.stringify(arr));


function newTweet(event) {
  if (typing.value == "" || typing.value == null) {
    alert("Tweet us please!");
  } else {
    event.preventDefault();
  }
  if (typing.value.length > 250) {
    alert(
      "too much Bro!"
    );
  } else {
    Tweety = document.createElement("section");
    Tweety.setAttribute("class", "tweet");

    text = document.createElement("p");
    text.textContent = typing.value;
    text.setAttribute("calss", "tweetText");
    

    tweetylike = document.createElement("i");
    tweetylike.setAttribute("class", "far fa-heart");
    tweetylike.setAttribute("id", "likeicon");
    tweetylike.setAttribute("onclick", "like");

    
    retweet = document.createElement("i");
    retweet.setAttribute("class", "fas fa-retweet");
    retweet.setAttribute("id", "retweeticon");
    retweet.addEventListener("click", Retweet);

  
    tweetylike.addEventListener("click", () => {
      if (like) {
        tweetylike.setAttribute("class", "fas fa-heart");
        tweetylike.setAttribute("id", "liky");
        like = !like;
      } else {
        tweetylike.setAttribute("class", "far fa-heart");
        tweetylike.setAttribute("id", "likeicon");
        like = !like;
      }
    });
    function Retweet() {
      let Retweety = Tweety.cloneNode(true);
      postContainer.appendChild(Retweety);
    }

    postContainer.appendChild(Tweety);
    Tweety.appendChild(text);
    Tweety.appendChild(tweetylike);
    Tweety.appendChild(retweet);


  arr.push(typing.value);
    localStorage.setItem("items", JSON.stringify(arr));
    document.querySelector("#typing").value = "";
}
} 