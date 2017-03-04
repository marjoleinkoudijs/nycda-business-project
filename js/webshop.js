$(document).ready(function () {

		$('[data-toggle="popover"]').popover(); 

		var cart = 0;

		$('#infoLink1').click(function() {
			$('#info1').slideToggle();
			$('#box1 img').fadeToggle();
			$('#box1 p').fadeToggle();
		});
		$('#infoLink2').click(function() {
			$('#info2').slideToggle();
			$('#box2 img').fadeToggle();
			$('#box2 p').fadeToggle();
		});
		$('#infoLink3').click(function() {
			$('#info3').slideToggle();
			$('#box3 img').fadeToggle();
			$('#box3 p').fadeToggle();
		});
		$('#infoLink4').click(function() {
			$('#info4').slideToggle();
			$('#box4 img').fadeToggle();
			$('#box4 p').fadeToggle();
		});

		$('#buy1').click(function() {
			cart = cart+1;
			console.log(cart);
		});
		$('#buy2').click(function() {
			cart = cart+1;
			console.log(cart);
		});
		$('#buy3').click(function() {
			cart = cart+1;
			console.log(cart);
		});
		$('#buy4').click(function() {
			cart = cart+1;
			console.log(cart);
		});
		$('#shoppingCart').click(function() {
			alert(cart);
		});
});