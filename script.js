document.addEventListener('DOMContentLoaded', () => {
  new window['Cursor']({
    targets: ['a']
  })
})


var typed = new Typed('#element', {
      strings: ['Frontend Developer', 'Web Developer '],
      typeSpeed: 50,
    });
    function reload() {
      window.location.reload();
  }
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");;
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  }

  var sideMenu = document.getElementById("sidemenu");
  function openmenu(){
     sideMenu.style.right = "0";
  }
  function closemenu(){
    sideMenu.style.right = "-200px";
 }

// Contact Form
 const scriptURL = 'https://script.google.com/macros/s/AKfycbxfW_GuqVNmVKJji0nS50Vjhb7d5lYd_nWUlPShL2z7TU7NvEiKlnxRzsIn3DXYR2DP/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById("msg")

 form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
         .then(response => {
             msg.innerHTML = "Message sent successfully"
             setTimeout(function(){
                 msg.innerHTML = ""
             },5000)
             form.reset()
         })
         .catch(error => console.error('Error!', error.message))
 })


 cursorAnim();

