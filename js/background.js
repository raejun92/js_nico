const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // js에서 html을 추가

bgImage.src = `img/${chosenImage}`; // html 선언

document.body.appendChild(bgImage); // html body에 bgImage 추가 