const texto = document.getElementById("texto");

texto.addEventListener("focus", function(){
    texto.style.borderColor = "black";
});

texto.addEventListener("blur", function() {
    texto.style.borderColor = '#cccccc'; 
});