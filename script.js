

var portuguese = document.getElementById("btn1")
portuguese.addEventListener("click",translate_portuguese)

function translate_portuguese(){
    document.getElementById('translate-english').style.display="none"
    document.getElementById('translate-portuguese').style.display=" inline-block"
}



var english = document.getElementById("btn2")
english.addEventListener("click",translate_english)

function translate_english(){
  document.getElementById('translate-portuguese').style.display="none"
  document.getElementById('translate-english').style.display=" inline-block"
}