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


		// liste des articles
		let Camera1 = new Camera(
			"c1",
			"Camera FED 3",
			48,
			"Camera super rapide pour son époque",
			"images/_1.jpg");
		let Camera2 = new Camera(
			"c2",
			"Appareil Photo 1800",
			112,
			"Camera super rapide pour son époque",
			"images/_2.jpg");
		let Camera3 = new Camera(
			"c3",
			"Appareil Photo Stramer",
			23,
			"Camera super rapide pour son époque",
			"images/_3.jpg");
		let Camera4 = new Camera(
			"C4",
			"Camera Mamiya M",
			19,
			"Camera super rapide pour son époque",
			"images/_4.jpg");
		let Camera5 = new Camera(
			"c5",
			"Canon 310M",
			63,
			"Camera super rapide pour son époque",
			"images/_5.jpg");


		console.log(Camera1);
		console.log(Camera2);
		console.log(Camera3);
		console.log(Camera4);
		console.log(Camera5);


		// tableau des articles
		let articles = [
		'Camera1',
		'Camera2',
		'Camera3',
		'Camera4',
		'Camera5'];

		// ajouter un article à la fin
		articles.push('Camera6');

		console.log(articles);
		console.log(articles.length);



		// additioner les prix
		const add = (firstNumber, secondNumber) => {
			return firstNumber + secondNumber;
			let total;
		}
		console.log(add(Camera1.price, Camera2.price));



		// Afficher le total
		Camera1.showTotal();




		var btn = document.getElementById('btn');
		btn.onclick = function(){
			var aj = document.querySelector('.article1');
			aj.classList.add('article1add');












		
		}