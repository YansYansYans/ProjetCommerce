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

    class Camera {
            constructor(id, name, price, description, imageUrl) {
                this.id = id;
                this.name = name;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            showTotal() {
                console.log('Total : ' + this.price + ' € ')
            }
        }

        var id = document.querySelector('id');

        // liste des articles
        let Camera1 = new Camera(
            "name1",
            "Camera FED 3",
            48,
            "La FED 3 a été crée en 1967, c'est le premier reflex numerique. Il connait un succet fou dans les années 70' après que sa promotion dans une pub avec Mickael Jordan.",
            "images/vcam_1.jpg");
        let Camera2 = new Camera(
            "name2",
            "Camera Anex 1800",
            112,
            "La FED 3 a été crée en 1967, c'est le premier reflex numerique. Il connait un succet fou dans les années 70' après que sa promotion dans une pub avec Mickael Jordan.",
            "images/vcam_2.jpg");
        let Camera3 = new Camera(
            "name3",
            "Camera Stramer 90'",
            230,
            "La FED 3 a été crée en 1967, c'est le premier reflex numerique. Il connait un succet fou dans les années 70' après que sa promotion dans une pub avec Mickael Jordan.",
            "images/vcam_3.jpg");
        let Camera4 = new Camera(
            "name4",
            "Camera Mamiya M",
            99,
            "La FED 3 a été crée en 1967, c'est le premier reflex numerique. Il connait un succet fou dans les années 70' après que sa promotion dans une pub avec Mickael Jordan.",
            "images/vcam_4.jpg");
        let Camera5 = new Camera(
            "name5",
            "Canon 310 M",
            230,
            "La FED 3 a été crée en 1967, c'est le premier reflex numerique. Il connait un succet fou dans les années 70' après que sa promotion dans une pub avec Mickael Jordan.",
            "images/vcam_5.jpg");


        console.log(Camera1);
        console.log(Camera2);
        console.log(Camera3);
        console.log(Camera4);
        console.log(Camera5);



request.open("GET", "http://localhost:3000/api/cameras");

// Transforme l'objet JavaScript en chaîne de caractères JSON
    var texteCamera1 = JSON.stringify(Camera1);
    var texteCamera2 = JSON.stringify(Camera2);
    var texteCamera3 = JSON.stringify(Camera3);
    var texteCamera4 = JSON.stringify(Camera4);
    var texteCamera5 = JSON.stringify(Camera5);
    console.log(texteCamera1);
    console.log(texteCamera2);
    console.log(texteCamera3);
    console.log(texteCamera4);
    console.log(texteCamera5);
// Transforme la chaîne de caractères JSON en objet JavaScript
    console.log(JSON.parse(texteCamera1));
    console.log(JSON.parse(texteCamera2));
    console.log(JSON.parse(texteCamera3));
    console.log(JSON.parse(texteCamera4));
    console.log(JSON.parse(texteCamera5));


