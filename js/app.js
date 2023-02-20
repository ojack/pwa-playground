const container = document.querySelector(".container");
// const coffees = [
//   {
//     name: "Perspiciatis",
//     image: "images/coffee1.jpg"
//   },
//   {
//     name: "Voluptatem",
//     image: "images/coffee2.jpg"
//   },
//   {
//     name: "Explicabo",
//     image: "images/coffee3.jpg"
//   },
//   {
//     name: "Rchitecto",
//     image: "images/coffee4.jpg"
//   },
//   {
//     name: " Beatae",
//     image: "images/coffee5.jpg"
//   },
//   {
//     name: " Vitae",
//     image: "images/coffee6.jpg"
//   },
//   {
//     name: "Inventore",
//     image: "images/coffee7.jpg"
//   },
//   {
//     name: "Veritatis",
//     image: "images/coffee8.jpg"
//   },
//   {
//     name: "Accusantium",
//     image: "images/coffee9.jpg"
//   }
// ];
// const showCoffees = () => {
//   let output = "";
//   coffees.forEach(
//     ({ name, image }) =>
//       (output += `
//               <div class="card">
//                 <img class="card--avatar" src=${image} />
//                 <h1 class="card--title">${name}</h1>
//                 <a class="card--link" href="#">Taste</a>
//               </div>
//               `)
//   );
//   container.innerHTML = output;
// };

// document.addEventListener("DOMContentLoaded", showCoffees);

  // create a new hydra-synth instance
  var hydra = new Hydra({ detectAudio: false })

  s0.initCam()

src(o0)
	//.hue(-0.002)
	.saturate(1.01)
	.scrollY(-0.001)
	.scale(1, [0.99, 1.01].smooth().fast(0.08),  [1.01, 0.99].smooth().fast(0.08), [0.2, 0.8].smooth().fast(0.1), 0.7)
	.scrollY(-0.001)
	.layer(
		//   osc(20, 0.03, 0.8)
		src(s0)
		//.contrast(1.4)
		.saturate(2)
		.color(-1, 1)
		.hue(() => time * 0.02)
		//.mask(src(s0)
			//.invert()
		//	.thresh(0.5, 0))
		.mask(shape(4, 0.99, 0))
  		.scale(0.4)
  		.scrollY(0, 0.04)
	)
	.modulateHue(src(o0)
		.hue(() => time * 0.01), 3)
	.out()

render(o0)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
