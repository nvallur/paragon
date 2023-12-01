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
for (let i = 0; i < form_entry.length; i++){
    form_entry[i].addEventListener("click", function(){
        alert("You do not posses the clearance to edit this form.");
    });
}








