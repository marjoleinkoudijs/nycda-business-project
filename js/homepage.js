$(document).ready(function () {

	var images = ["url(images/slide1.jpg)","url(images/slide2.jpg)","url(images/slide3.jpg)","url(images/slide4.jpg)"]
	var numImages = images.length;
	var index = 0;

	function carousel() {
    	$('#sectieSlide').css("background-image", images[index]);  
    	$('#sectieSlide').css("background-size", "cover"); 
    	$('#sectieSlide').css("background-position", "center center");   
    	index = (index + 1) % numImages;
	}

	timer = setInterval(carousel, 2000);
});