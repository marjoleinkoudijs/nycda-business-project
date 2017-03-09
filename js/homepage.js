$(document).ready(function () {

	var text = ['We Are Special Flowers','From All The Daily Needs','To Special Occasions','You Can Rely On Us']
	var images = ['url(images/slide1.jpg)','url(images/slide2.jpg)','url(images/slide3.jpg)','url(images/slide4.jpg)']
	var numImages = images.length;
	var index = 0;

	function carousel() {
		$('#titleSlide').html(text[index]);  
    	$('#sectieSlide').css('background-image', images[index]);  
    	$('#sectieSlide').css('background-size', 'cover'); 
    	$('#sectieSlide').css('background-position', 'center center');   
    	index = (index + 1) % numImages;
	}

	timer = setInterval(carousel, 4000);
});