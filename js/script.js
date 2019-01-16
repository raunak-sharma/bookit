(function(){

    "use strict";
    document.addEventListener("DOMContentLoaded", function () {

    	const navMenu = document.querySelector('.burger');
    	navMenu.addEventListener('click', function() {
    		document.querySelector('nav ul').classList.toggle('ul-hidden');
    	});

    	const form = document.getElementById('submitBookmark');
    	form.addEventListener('submit', function(e) {
    		e.preventDefault();
			Array.from(form.elements).forEach((former) => {
			});

			let newBookmark = document.createElement('div');
			newBookmark.classList = "bookmark-box";
			newBookmark.innerHTML = `
            	<h1>${form.elements[0].value}</h1>
	            <h4>${form.elements[2].value}</h4>
	            <p><i>${form.elements[1].value}</i></p>
	            <a href="${form.elements[1].value}" target="_blank"><i class="fas fa-eye eye"></i></a>
	            <i class="fas fa-trash-alt trash"></i>
            `;

            const wrapper = document.querySelector('.wrapper');
            wrapper.appendChild(newBookmark);

    	});

    	const addButton = document.querySelector('#add-icon');
    	addButton.addEventListener('click', function () {
    		(addButton.innerHTML === '&nbsp;Add') ?
    			addButton.innerHTML = '&nbsp;Hide':
    			addButton.innerHTML = '&nbsp;Add';		
    		
    		const form = document.querySelector('#submitBookmark');
    		form.classList.toggle('form-display');
    	});

    	const deleteButton = document.querySelector('.wrapper');
    	deleteButton.addEventListener('click', function(e) {
    		if(e.target.classList[2] === 'trash') {
    			e.target.parentElement.remove();
    		}
    	});

    });

})();