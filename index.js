// Propriété du Panier
    var shoppingCart = (function () {
    // Méthode
        var cart = [];
    // Création de la fonction article serveur
        function Item(name, price, count, description, imageUrl) {
            this.name = name
            this.price = price
            this.count = count
            this.description = description
            this.imageUrl = imageUrl
        }
    // Sauvegarde Panier avec localStorage
        function saveCart() {
            localStorage.setItem("shoppingCart", JSON.stringify(cart));
        }
        function loadCart() {
            cart = JSON.parse(localStorage.getItem("shoppingCart"));
            if (cart === null) {
                cart = []
            }
        }

        loadCart();



// Partie destinée au publique
// Chargement de l'objet demandé
    var obj = {};
// Ajoute ses 3 fonctions de l'article au panier
    obj.addItemToCart = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };
// Nombre d'article à ajouter
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };

// Retirer l'objet du panier
    obj.removeItemFromCart = function (name) {  
        for (var i in cart) {
            if (cart[i].name === name) { 
                cart[i].count--; 
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };

// Supprime tout les noms d'articles
    obj.removeItemFromCartAll = function (name) { 
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

// Total d'article
    obj.countCart = function () { 
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

// Total Prix
    obj.totalCart = function () { 
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

// Tableau du panier
    obj.listCart = function () {
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };


    return obj;
})();










       