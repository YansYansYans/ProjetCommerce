//Creation de la Fonction du Panier affichant de base ces 3 éléments avant toute action
function panier() {
    let number = localStorage.getItem("nb");
    const messagePanierVide = document.getElementById("paniervide");
    const btnViderPanier = document.getElementById("viderpanier")

    //Si le panier est vide, alors on supprime "btnViderPanier" et on affiche "messagePanierVide"
    if (number != undefined) {
        while (messagePanierVide.firstChild) { messagePanierVide.removeChild(messagePanierVide.firstChild); }
    } else {
        while (btnViderPanier.firstChild) { btnViderPanier.removeChild(btnViderPanier.firstChild); }
    }

    //Affiche l'article ajoutés au panier (Nom et Prix)
    let prixtotal = 0;
    for (let i = 1; i <= number; i++) {
        const affich = document.getElementById("panier");
        const create = document.createElement("p");
        let name = localStorage.getItem("article_name" + i);
        let price = localStorage.getItem("article_price" + i);
        price_enter = parseInt(price)
        prixtotal += price_enter
        name += " - ";
        name += price;
        name += "€";
        affich.append(create);
        console.log(create.innerHTML += name);
    }
    //Affiche le total de tout les articles
    const affichprice = document.getElementById("prixtotal");
    const createprice = document.createElement("h3");
    affichprice.append(createprice);
    prixtotal += " €"
    console.log(createprice.innerHTML += prixtotal)
}

//Fonction pour vider le panier (également le locale/sessionStorage)
function clean() {
    localStorage.clear();
    sessionStorage.clear()
    window.location.reload()
}

//Fonction pour enregistrer les données remplits dans le formulaire
async function sendData() {
    //Récupération données saisies dans le formulaire
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let rue = document.getElementById("rue").value;
    let ville = document.getElementById("ville").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;
    //Si les champs ne sont pas remplit, affiche alert en dessous
    if (prenom == 0 || nom == 0 || rue == 0 || ville == 0 || email == 0 || telephone == 0) {
        alert("Remplir tout les champs pour commander");
    }

    //Remplissage de l'objet à envoyer à la requête
    else {
        let products = []
        let number = sessionStorage.getItem("nb");

        for (let i = 1; i <= number; i++) {
            let ref = localStorage.getItem("article_id" + i);
            let newID = products.push(ref);
        }
        //Création objet formulaire
        let contact = new Object();
        contact.prenom = prenom;
        contact.nom = nom
        contact.address = rue
        contact.ville = ville
        contact.email = email
        contact.telephone = telephone

        let order = new Object()
        order.contact = contact;
        order.products = products;

        //Requête vers le serveur
        response = await fetch("http://localhost:3002/api/cameras/order", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(order),
        })

        let product = await response.json()

        //Suppression des infos inutiles aprés ajout d'un article
        const messagePanierVide = document.getElementById("paniervide");
        const btnViderPanier = document.getElementById("viderpanier")
        while (btnViderPanier.firstChild) { btnViderPanier.removeChild(btnViderPanier.firstChild); }

        //Confirmation de Commande
        const final = document.getElementById('confirme')
        const title = document.createElement('h1')
        final.append(title)
        console.log(title.innerHTML += "Commande Enregistrée")
        //Numéro de commande 
        const orderID = document.getElementById("commande")
        const titleID = document.createElement('h2')
        orderID.append(titleID);
        console.log(titleID.innerHTML += "Numéro de commande:")
        //Nom du produit commandé
        const ordernumber = document.createElement('p')
        orderID.append(ordernumber);
        console.log(ordernumber.innerHTML += product.orderId)
        let change = document.getElementById('modif')
        console.log(change.innerHTML = "Produits commandés :")
        //Suppression du panier après commande
        localStorage.clear();
        sessionStorage.clear()

    }

}
