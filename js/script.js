let form_entry = document.getElementsByClassName("form_entry");
console.log(form_entry);


// form_entry.addEventListener("click", function(){
//     console.log("test");
//     alert("You do not posses the clearance to edit this form.");
// });
// form_entry.addEventListener("mouseover", function(){
//     console.log("test");
//     alert("You do not posses the clearance to edit this form.");
// });
// let username = "none";
if(window.location.href.indexOf('login.html') > -1){
    let login = document.getElementById("myForm");
    login.addEventListener("submit", function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    console.log(username);
    window.open("main.html", "_self");
});
}
console.log(localStorage.getItem("username"));
if(window.location.href.indexOf('subject_a_bio_stats.html') > -1){
    const statsDivs = document.getElementsByClassName("stat");
    const hidden = document.getElementsByClassName("hidden");
    const info = document.getElementsByClassName("stat_info");

    for (let i = 0; i < statsDivs.length; i++){
        statsDivs[i].addEventListener("mouseover", function(){
            for (let j = 0; j < hidden.length; j++){
               
                hidden[j].style.display = "block";
            }
            for (let k = 0; k < info.length; k++){
                info[k].style.display = "none";
            }
            
            

            
        });
        statsDivs[i].addEventListener("mouseout", function(){
            for (let j = 0; j < hidden.length; j++){
                hidden[j].style.display = "none";
            }
            for (let k = 0; k < info.length; k++){
                info[k].style.display = "block";
            }
        });
       
    }
    for (let i = 0; i < statsDivs.length; i++){
        statsDivs[i].addEventListener("focus", function(){
            for (let j = 0; j < hidden.length; j++){
               
                hidden[j].style.display = "block";
            }
            for (let k = 0; k < info.length; k++){
                info[k].style.display = "none";
            }
            
            

            
        });
        statsDivs[i].addEventListener("blur", function(){
            for (let j = 0; j < hidden.length; j++){
                hidden[j].style.display = "none";
            }
            for (let k = 0; k < info.length; k++){
                info[k].style.display = "block";
            }
        });
       
    }
    for (let i = 0; i < statsDivs.length; i++){
        statsDivs[i].addEventListener("click", function(){
            for (let j = 0; j < hidden.length; j++){
               
                hidden[j].style.display = "block";
            }
            for (let k = 0; k < info.length; k++){
                info[k].style.display = "none";
            }
            
            

            
        });
        statsDivs[i].addEventListener("blur", function(){
            for (let j = 0; j < hidden.length; j++){
                hidden[j].style.display = "none";
            }
            for (let k = 0; k < info.length; k++){
                info[k].style.display = "block";
            }
        });
       
    }
    
   
}



for (let i = 0; i < form_entry.length; i++){
    form_entry[i].addEventListener("click", function(){
        alert("You do not posses the clearance to edit this form.");
    });
}
if (window.location.href.indexOf('terminate.html') > -1) {
   console.log("terminate");
   // Add a specified delay in miliseconds
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
console.log(mediaQuery['matches']);

// Write text to a target element with a specified delay in ms
function writeText(target, content, delay = 100)

{
    console.log("test");
  // Loop through array of content characters
  return new Promise((resolve) => {
    // Make an array of the specified content
    const contentArray = content.split('')

    // Keep track of the character currently being written
    let current = 0

    while (current < contentArray.length) {
      ;((curr) => {
        setTimeout(() => {
          target.innerHTML += contentArray[curr]
          // Scroll to the bottom of the screen unless scroll is false
          window.scrollTo(0, document.body.scrollHeight)
          
          // Resolve the promise once the last character is written
          if (curr === contentArray.length - 1) resolve()
        }, delay * curr) // increase delay with each iteration
      })(current++)
    }
  })
}
function writeNoAnimation(target, content) {
  target.innerHTML = content
}

document.addEventListener('DOMContentLoaded', async () => {

    await wait(5000)
    if (mediaQuery['matches']) {
        await writeNoAnimation(document.getElementById('name'), `Hello, ${localStorage.getItem("username")}.`)
        await writeNoAnimation(document.getElementById('instructions'), `If you're reading this. It's not too late. You can still run.`)
        await wait(2000)
        await writeNoAnimation(document.getElementById('creepy'), `\nBut you can't hide.`)
        await wait(1000)
        await writeNoAnimation(document.getElementById('creepy2'), `\nRemember, they're always watching.`)
        return
    }
    const instructions = document.getElementById('instructions')
    const creepy = document.getElementById('creepy')
    const creepy2 = document.getElementById('creepy2')
    const name = document.getElementById('name')

    await writeText(name, `Hello, ${localStorage.getItem("username")}.`)
    await writeText(instructions, `If you're reading this. It's not too late. You can still run.`)
    await wait(2000)
    await writeText(creepy, `\nBut you can't hide.`)
    await wait(1000)
    await writeText(creepy2, `\nRemember, they're always watching.`)


});
}









