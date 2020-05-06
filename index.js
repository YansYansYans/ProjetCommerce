 // Total de tout les articles dans le panier
    var total = 0;
    // Index
    var i = 1;
    // Message Erreur "Ajout sans lentille" 
    var message = "Veuillez selectionner une Lentille";
    // Liste des articles dans le panier
    var itemCost = [];

// Ajouter un article
    function add(n){
        // n = rang de la camera
        lentilleId = "lentille" + n;
        /* Chaque camera a un Id (racine + rang)*/
        messageId = "message" + n;
        // Lentille selectionné
        lentille = document.getElementById(lentilleId).value;
        // Si non-selection-lentille alors message-erreur
        if (lentille==="lentille"){
            document.getElementById(messageId).innerHTML = message;
            return 0;
        }

// Tout les Id de la Camera selectionné
    name = "name" + n;
    priceId = "price" + n;
    quantityId = "quantity" + n;

// Detaille de la camera
    // Marque
    name = document.getElementById(name).innerHTML;
    // Prix
    price = document.getElementById(priceId).innerHTML;
    // Quantité
    quantity = document.getElementById(quantityId).value;

// Crée "li" pour ajouter à "ul" 
    var node = document.createElement("LI");
    // Id de "li" 
    item = "item"+i;
    node.setAttribute("id", item)
    // Prix de la camera selectionné
    itemCost[i-1] = Number(price) * Number(quantity);
    // MAJ = index i 
    i += 1;
    // Texte de "li"
    var textnode = document.createTextNode(name+" "+quantity+" x "+price+" €, Lentille: "+ lentille);
    // Ajoute "texte" à "li"
    node.appendChild(textnode);
    // Ajoute "li" à liste "ul"
    document.getElementById("items").appendChild(node);

    total += Number(price) * Number(quantity);
    // MAJ Total
    document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " €";
    
    // Ajoute BTN pour supprimer l'article 
    document.getElementById(item).innerHTML += '<button onclick="deleItem('+"'"+item+"'"+')">x</button>';
    
    }

 // Supprime le "message erreur" lorsque une lentille est choisi
    function deleteE(eId) {
        document.getElementById(eId).innerHTML = ' ';
    }

// Retire un produit du panier
    function deleItem(eId){
        document.getElementById(eId).remove();

    n = Number(eId.slice(-1)) - 1;
    // Supprime le cout du produit supprimé du panier
    total -= itemCost[n];
    // MAJ Total Panier après tout changement ou modification
    document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " €"; 
    }

    var art1 = document.getElementById('art1');
    art1.onclick = function(){
        var carre = document.querySelector('.fed');
        carre.classList.add('fedvisible')
    }
    var art1 = document.getElementById('art2');
    art1.onclick = function(){
        var carre = document.querySelector('.anex');
        carre.classList.add('anexvisible')
    }
    var art1 = document.getElementById('art3');
    art1.onclick = function(){
        var carre = document.querySelector('.stramer');
        carre.classList.add('stramervisible')
    }
    var art1 = document.getElementById('art4');
    art1.onclick = function(){
        var carre = document.querySelector('.mamiya');
        carre.classList.add('mamiyavisible')
    }
    var art1 = document.getElementById('art5');
    art1.onclick = function(){
        var carre = document.querySelector('.canon');
        carre.classList.add('canonvisible')
    }


