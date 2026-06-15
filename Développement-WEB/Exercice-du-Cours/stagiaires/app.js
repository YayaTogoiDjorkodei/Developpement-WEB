// --- EXERCICE 1 : La Base de Données ---
// Initialisation avec des objets [cite: 25, 315]
let listeStagiaires = [
    { id: 1, nom: "ALAMI", sujet: "Développement Web", estValide: true },
    { id: 2, nom: "BENNANI", sujet: "Sécurité Cloud", estValide: false }
];

console.log("Il y a actuellement " + listeStagiaires.length + " stagiaires enregistrés.");

// --- EXERCICE 3 : L'Affichage Dynamique ---
// Fonction pour mettre à jour l'interface [cite: 348, 381]
function afficherListe() {
    const ul = document.getElementById("liste-stagiaires");
    ul.innerHTML = ""; // On vide la liste avant de la reconstruire [cite: 386]

    listeStagiaires.forEach((stagiaire, index) => {
        const li = document.createElement("li"); // [cite: 407]
        li.innerHTML = `<strong>${stagiaire.nom}</strong> - ${stagiaire.sujet} `;
        
        // --- EXERCICE 6 : Interaction Avancée ---
        // Ajout du bouton supprimer [cite: 411, 449]
        const btnSuppr = document.createElement("button");
        btnSuppr.textContent = "Supprimer";
        btnSuppr.addEventListener("click", function() {
            listeStagiaires.splice(index, 1); // Retire du tableau
            li.remove(); // Retire du DOM [cite: 413]
            actualiserHeure();
        });

        li.appendChild(btnSuppr); // [cite: 409]
        ul.appendChild(li);
    });
}

// --- EXERCICE 2, 4 & 5 : Logique d'Ajout et Validation ---
function ajouterStagiaire() {
    const champNom = document.getElementById("nom");
    const champSujet = document.getElementById("sujet");
    
    // EXERCICE 4 : Validation (String & Logique) [cite: 41, 257]
    let nomSaisi = champNom.value.trim().toUpperCase(); // Majuscules [cite: 254]
    let sujetSaisi = champSujet.value;

    if (sujetSaisi.includes("Erreur")) { // [cite: 267]
        alert("Action annulée : Le sujet contient un mot interdit.");
        return;
    }

    if (nomSaisi === "" || sujetSaisi === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Confirmation avant ajout [cite: 223]
    if (window.confirm("Voulez-vous vraiment ajouter " + nomSaisi + " ?")) {
        // Ajout au tableau [cite: 315]
        listeStagiaires.push({
            id: Date.now(),
            nom: nomSaisi,
            sujet: sujetSaisi,
            estValide: false
        });

        // Mise à jour visuelle
        afficherListe();
        actualiserHeure();
        
        // EXERCICE 5 : Effet visuel (Timeout) [cite: 230]
        const form = document.getElementById("form-stage");
        form.classList.add("clignotement");
        setTimeout(() => {
            form.classList.remove("clignotement");
        }, 2000); // 2 secondes [cite: 235]

        // Reset des champs
        champNom.value = "";
        champSujet.value = "";
    }
}

// --- EXERCICE 5 : Gestion du Temps ---
function actualiserHeure() {
    const mtn = new Date(); // [cite: 289]
    // Formatage manuel comme dans l'exemple du cours [cite: 308, 311]
    const h = mtn.getHours().toString().padStart(2, '0');
    const m = mtn.getMinutes().toString().padStart(2, '0');
    const s = mtn.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("horodatage").innerHTML = 
        "Dernière mise à jour : " + h + ":" + m + ":" + s;
}

// Lancement initial au chargement [cite: 173]
window.addEventListener("load", () => {
    afficherListe();
    actualiserHeure();
});