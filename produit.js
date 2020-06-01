// Récupération de l'id du produit cliqué puis stocage dans le sessionStorage
async function recup() {
	let id = sessionStorage.getItem("article_id")
	console.log(id)

	//Si aucun produit n'est selectionné alors on renvoi sur la page d'Accueil, sinon on affiche le produit après le click
	if (id == undefined) {
		document.location.href = "index.html";
	}
	else {
		response = await fetch("http://localhost:3002/api/cameras/" + id);
		let camera = await response.json();
		return camera;
	}
}


//Affichage de la caméra sélectioné de manière dynamique dans la page produit avec "recup" (=Promises)
recup().then(function (camera) {

	//Affichage de la photo de la caméra
	const child_photo = document.getElementById("camera");
	const photo_child = document.createElement("img");
	photo_child.src = camera.imageUrl;
	photo_child.alt = camera.name;
	photo_child.title = camera.name;
	child_photo.append(photo_child);
	photo_child.id = "camera_img";

	//Affichage du nom de la caméra
	const child_name = document.getElementById("infos");
	const name_child = document.createElement("h3");
	child_name.append(name_child);
	name_child.className = camera.name;
	name_child.id = "name";
	console.log(name_child.innerHTML += camera.name);
	//Relié à l'ID
	const child_id = document.getElementById("infos");
	const id_child = document.createElement("h3");
	child_id.append(id_child);
	id_child.className = camera._id;
	id_child.id = "id";

	//Affichage du prix de la caméra
	const child_price = document.getElementById("infos");
	const price_child = document.createElement("h4");
	child_price.append(price_child);
	price_child.className = camera.price / 100;
	price_child.id = "price";
	price = camera.price / 100;
	price += " €";
	console.log(price_child.innerHTML += price);

	//Affichage de l'option Lentille
	const lenses = camera.lenses;
	for (let i = 0; i < lenses.length; i++) {
		const child_lenses = document.getElementById("choisirlentille")
		const lenses_child = document.createElement("option");
		child_lenses.append(lenses_child);
		console.log(lenses_child.innerHTML = lenses[i])
	}

	//Affichage de la description de la caméra
	const child_description = document.getElementById("infos");
	const description_child = document.createElement("p");
	child_description.append(description_child);
	description_child.id = "description";
	console.log(description_child.innerHTML += camera.description);

})

// Function Ajouter au Panier
function add() {
	// Données envoyées et récupées
	const name = document.getElementById('name');
	let camera = name.getAttribute('class');
	const price = document.getElementById('price');
	let value = price.getAttribute('class');
	const identifier = document.getElementById('id');
	let id_name = identifier.getAttribute('class');
	let stock = localStorage.getItem("nb");
	let panierfinal = localStorage.getItem("add")

	//Si panier vide alors on affiche "a"/"0"/"undefined"
	if (stock == undefined) {
		stock = 0;
		panierfinal = "a"
	}

	//Variable "rechercheProduit" recherche, au clic "ajouter au panier", si le produit est deja dans le panier
	//Si oui, affiche alert
	let rechercheProduit = panierfinal.indexOf(camera) != -1;
	if (rechercheProduit == 1) {
		alert("Attention : Produit déjà ajouté")
	}
	//Sinon ajoute au panier la caméra {Function relié à panier.js}
	else {
		let i = stock;
		panierfinal += camera
		i++;
		localStorage.setItem("article_name" + i, camera);
		localStorage.setItem("article_price" + i, value);
		localStorage.setItem("article_id" + i, id_name);
		localStorage.setItem("add", panierfinal)
		localStorage.setItem("nb", i);
		alert("Ajouté au Panier");
	}
}










