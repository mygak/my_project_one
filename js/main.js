// check if Theres local Storge color option
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  // Check for Active Class
  // Remove Active Class From All Colors list items
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active class on Element With Data-color === Local Storage Items

    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

// Toggle Spin Class on Icon

document.querySelector(".toggel-settings .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".color-list li");

//Loop on All List Items
colorsLi.forEach((li) => {
  // click on Every list Items
  li.addEventListener("click", (e) => {
    // Set Color on Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color on Local Storge
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From All Childrens
    hendleActive(e);
  });
});

// Random Background option
let backgroundOption = true;

// variable To Control The background Interval
let backgroundInterval;

// Check if Theres Local Storge Random Background Item
let bacgroundLocalItem = localStorage.getItem("background-option");

// Check if Random BackGround local Storge Is Not Empty
if (bacgroundLocalItem !== null) {
  if (bacgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // Remove Active from All Spans
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");

    if (bacgroundLocalItem === "true") {
      document.querySelector(".random-background .yes").classList.add("active");
    } else {
      document.querySelector(".random-background .no").classList.add("active");
    }
  });
}

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-background span");

//Loop on All spans
randomBackEl.forEach((span) => {
  // click on Every span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All span
      hendleActive(e);
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randoizeImge();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of imgs

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function To randoize Imgs
function randoizeImge() {
  if (backgroundOption === true) {
    // Get Random Number
    backgroundInterval = setInterval(() => {
      let random = Math.floor(Math.random() * imgsArray.length);
      //Chang Background imge url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[random] + '")';
    }, 10000);
  }
}
randoizeImge();

// Select skilla Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skill Offset Top

  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height

  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// Creat popup with The Image
let ourGlallery = document.querySelectorAll(".gallery img");

ourGlallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Creat Overlay Element

    let overlay = document.createElement("div");

    // Add Class to overlay

    overlay.className = "popup-overlay";

    // Add overlay to body style

    document.body.appendChild(overlay);

    // Creat The Popup box
    let popupBox = document.createElement("div");

    // Add class To The Popup box

    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heding
      let imgHeding = document.createElement("h3");

      // creat Text For Heding
      let imgTxt = document.createTextNode(img.alt);

      // Append text to imge Heding

      imgHeding.appendChild(imgTxt);

      // Append The Heding to poupe box

      popupBox.appendChild(imgHeding);
    }

    // Creat The imge

    let popupImage = document.createElement("img");

    // Set Image src

    popupImage.src = img.src;

    // add image to the poupe box

    popupBox.appendChild(popupImage);

    // add poupe box to the body

    document.body.appendChild(popupBox);

    // Creat the Close Span

    let closeButton = document.createElement("span");

    // Creat The close Button Text

    let buttonText = document.createTextNode("X");

    // Append text button to the button spne

    closeButton.appendChild(buttonText);

    // Add class to close Button
    closeButton.className = "close-button";

    // append close Button to pupe box

    popupBox.appendChild(closeButton);
  });
});
// close popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    // Remove The Current Popup
    e.target.parentNode.remove("popup-box");

    // Remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});
// Sellect All Bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullet ");

let allLinks = document.querySelectorAll(".links a  ");


function scrollTo(elements) {
  
  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'

    });

  });

}); 

}
scrollTo(allBullets);
scrollTo(allLinks);

// Hendel Active Stats

function hendleActive(ev){
   // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active Class On target
  ev.target.classList.add("active");

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

bulletsSpan.forEach(span => {

  let bulletLocalItem = localStorage.getItem("bullets-option");

  if(bulletLocalItem !== null){
    bulletsSpan.forEach(span => {
    span.classList.remove("active");

    });
    
    if(bulletLocalItem === "block") {

      bulletsContainer.style.display = "block"
      document.querySelector(".bullets-option .yes").classList.add("active");
    } else {

      bulletsContainer.style.display = "none"
      document.querySelector(".bullets-option .no").classList.add("active");

    }


  }

  span.addEventListener("click", (e) => {
  
    if(span.dataset.display === "show"){
      bulletsContainer.style.display = "block"
      localStorage.setItem("bullets-option", 'block')
    }else{
      bulletsContainer.style.display = "none"
      localStorage.setItem("bullets-option", "none")
    }
    hendleActive(e);
  }); 
});

 //Reset Button 
document.querySelector(".reset-options").onclick = function(){
  localStorage.removeItem("bullets-option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("background-option");

  window.location.reload()

}

// Toggel Menu
let toggelBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggelBtn.onclick = function(e){
  // Stop propgation
  e.stopPropagation()
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");

}

// Click AnyWhere outside menu and toggel Button
document.addEventListener("click", (e)=> {
  if(e.target !== toggelBtn && e.target !== tLinks){
    // Check if menu is Open

    if(tLinks.classList.contains("open")){

      toggelBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    

    }



  }
});

// Stop Propagation on menu
tLinks.onclick = function(e){
  e.stopPropagation()
}