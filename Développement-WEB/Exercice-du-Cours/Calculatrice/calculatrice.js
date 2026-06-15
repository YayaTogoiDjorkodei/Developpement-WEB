let  afficher=document.getElementById("champs");
afficher.value="";
function appendDisplay(valeur){
    afficher.value += valeur;
}
function calculer(){
    try{
        afficher.value = eval(afficher.valeu);
    }
    catch(error){
        afficher.value = "Error";
    }
}
function call(){
    afficher.value = "";
}