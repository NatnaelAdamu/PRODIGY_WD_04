console.log("JavaScript is linked and running!");

var  tablinks = document.getElementsByClassName("tab-links");
var  tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tabs");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tabs");
}

// ---------for smaller screen-----------

var sidemenu = document.getElementById("side-menu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// contact me google form script

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxq-nn3dMjEqXuPgMtT9wPxIM3v6lXUu291T3Zc8Xfsg4d9GUDnKZ4rfaVYW7fj0FJm/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successuflly!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
