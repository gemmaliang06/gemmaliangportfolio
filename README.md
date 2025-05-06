# Summary
For my final, I created a design portfolio website to showcase my artwork, involving a variety of mediums. For this website, I mostly focused on the user experience since the website holds the purpose of introducing the user to who I am and my style of design. Within the site, you will begin on a loading page, taken to a home page - introducing my website, then on the side navigation bar, you will find my resume, a contact page, projects page and individual pages for each medium with more information. 

# Recording

# Code I'm Proud Of

The following code is taken from the javascript file for my sildeshow page that gives the user a closer look at each artwork. I am particularly proud of this code because I am not to familiar with JavaScript code, and it took me a while to understand how to use the for loops seamlessly. One part of this that I struggled with for a while was the function of bringing the user from an artwork on the projects page to the specific correlating slide on the slideshow. Eventually I figured out how to use the ```getQueryParam``` function and the UX was improved. 
```
function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

let slideIndex = parseInt(getQueryParam('img')) || 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  let typewriterSpan = slides[slideIndex - 1].querySelector(".typewriter");
if (typewriterSpan) {
  let originalText = typewriterSpan.getAttribute("data-original");
  if (!originalText) {
    originalText = typewriterSpan.textContent;
    typewriterSpan.setAttribute("data-original", originalText);
  }
  typewriterEffect(typewriterSpan, originalText);
}

}

function typewriterEffect(el, text, speed = 50) {
  el.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
```

# What I struggled with
A large part of this project that I struggled with was the organization of the CSS. I found problems with this as navigating through each div became more confusing as I added more to each div. The divs created organization within each page, but they also intertwined with each other making it difficult to add differentiating styling. I learned that seperate styling sheets for each page was an important change I had to make and there was also a lot of trial and error. 

# What I'm proud of
I am most proud of the home page as each animation I added made an easily digestable inroduction to the website and it ended up being a lot more aesthetically pleasing than the inital home screen I had for my midterm. Some animations that contributed to this success were the fadeInUp animation for the larger introduction text, the rotation animation for the logo and the change in cursor to fit the website's whole aesthetic. 

# What I would add next if I had more time
If I had more time I would add a function to make the pages load more seamlessly because I do not love how each item of the page shows up when loading. 