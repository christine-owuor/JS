var endpoint = 'http://backend.ihub.co.ke/api/v2/blogs';

const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {
	let content = JSON.parse(xhr.responseText);
	const container = document.querySelector('.posts');
	content.data.forEach((blogPost)=> {
		const img =document.createElement('img');
		const h3  = document.createElement('h3');
		h3.textContent = blogPost.heading;
		img.src =blogPost.image_link;

		container.appendChild(img);
		container.appendChild(h3);



	})
 

})

xhr.open('GET', endpoint);
xhr.send();

