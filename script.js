const ratingSubmit = document.getElementById('rating-submit');
const ratingPopUp = document.getElementById('rating-pop-up');
const thankYou = document.getElementById('thank-you');
const ratings  = document.querySelectorAll('.rating-options>button');
const submitRating = function(){
    userRating.innerHTML = pickedRating;
    thankYou.style.display = "block";
    ratingPopUp.style.display = "none";
}

let pickedRating = "none";
const userRating = document.getElementById('user-rating');
let previousRating;
let currentHoverRating;
const darkGrey = "hsl(208, 16%, 21%)";
const mediumGrey = "hsl(216, 12%, 54%)";
const lightGrey = "hsl(217, 12%, 63%)";
const orange =  "hsl(25, 97%, 53%)";


const ratingMouseOut = function(){
    currentHoverRating.style.backgroundColor = darkGrey;
    currentHoverRating.style.color = lightGrey;
}

const testCode1 = function(){
    let nav = document.getElementsByTagName('nav')[0];
    console.log(nav);
    nav.innerHTML += "hello ";
}

// const triggerRatingMouseOut = function(){
//     rating.addEventListener('mouseout', ratingMouseOut); // check if working
// }

const pickRating = function(aRating){
    if (typeof previousRating !== "undefined" && previousRating !== null){
        previousRating.disabled = false;
        previousRating.style.backgroundColor = darkGrey;
        previousRating.style.color = lightGrey;
    }

    pickedRating = aRating.innerHTML;
    
    aRating.removeEventListener('mouseout', ratingMouseOut); // why this does not work
    aRating.disabled = true;

    aRating.style.backgroundColor = mediumGrey;
    aRating.style.color = "white";

    previousRating = aRating;
}

ratings.forEach(function(rating){
    rating.addEventListener('mouseover', function(){
        currentHoverRating = rating;
        rating.style.backgroundColor = orange;
        rating.style.color = "white";
        rating.addEventListener('mouseout', ratingMouseOut);
    }); // OK

    
    // rating.addEventListener('mouseout', ratingMouseOut); // check if working
    rating.addEventListener('click', function(){pickRating(rating)});
});

ratingSubmit.addEventListener('click', submitRating);


const body = document.querySelector('body');
const bodyHeight = body.scrollHeight;
console.log(bodyHeight);

const ratingPopUpContainer = document.querySelector('.pop-up-container');
ratingPopUpContainer.style.height = bodyHeight + 'px';

window.onscroll = function(){
    ratingPopUpContainer.style.animationName = "fade-in";
}

const closePopUps = document.querySelectorAll('.close-pop-up');
closePopUps.forEach(function(closePopUp){
    closePopUp.addEventListener('click', function(){
        ratingPopUpContainer.style.display = 'none';
    })
});
