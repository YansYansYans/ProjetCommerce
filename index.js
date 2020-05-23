//Récuperation des données en JSON venant de l'api du Backend 
async function recup() {
	response = await fetch("http://localhost:3002/api/cameras");
	data = await response.json();
	return data;
}

//Récupère JSON de chaque caméra en 4 éléments en executant une promise
recup().then(() => { //Exécution du code dès que la promesse est résolue
	for (let article of data) {
		//Création de la DIV PARENT pour les camera
		let oldname = 0;
		if (article.name !== oldname) {
				const parent = document.getElementById('camera');
				const new_parent = document.createElement("a");
				parent.append(new_parent);
				new_parent.id = article._id;
				new_parent.addEventListener('click', function (e) {
					sessionStorage.setItem('article_id', event.currentTarget.getAttribute('id'));
			})

			new_parent.className = "product";
			new_parent.href = "produit.html";
			const child_photo = document.getElementById(article._id);
			const photo_child = document.createElement("img");
			photo_child.src = article.imageUrl;
			photo_child.alt = article.name;
			photo_child.title = article.name;
			child_photo.append(photo_child);
			photo_child.id = "image";

			//Affiche le nom du produit
			const child_name = document.getElementById(article._id);
			const name_child = document.createElement("p");
			child_name.append(name_child);
			name_child.id = "name";
			console.log(name_child.innerHTML += article.name);

			//Affiche le prix
			const child_price = document.getElementById(article._id);
			const price_child = document.createElement("p");
			child_price.append(price_child);
			price_child.id = "price";
			price = article.price / 100;
			price += " €";
			console.log(price_child.innerHTML += price);
		}
	}

})


