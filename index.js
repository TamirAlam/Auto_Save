const textarea=document.getElementById("textarea");

function saveToLocalStorage(){
    localStorage.setItem("saveText",textarea.value);
}



if(localStorage.getItem("saveText")){
  textarea.value=localStorage.getItem("saveText");
}
textarea.style.color="red";
textarea.style.fontFamily="cursive";
textarea.style.fontWeight="bold";

textarea.addEventListener("input",saveToLocalStorage);