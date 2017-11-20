let images = document.querySelectorAll('.thumbnails img');



let largeImg = document.createElement('img');
let viewer = document.querySelector('.viewer');
viewer.appendChild(largeImg);

let caption = document.createElement('p');
viewer.appendChild(caption);

images.forEach(function(img){
	img.onclick = function (event){
		let img = event.target;
		largeImg.src = img.src;

		let captionText = img.getAttribute('data-caption');
		caption.innerHTML = captionText;
	}

	
})






