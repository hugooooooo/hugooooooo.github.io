$(document).ready(
	function(){
	var tags=$("p");
	});
	//Changing Element text:
	//$("a").text("link text");

	//Hiding your link:
	//$("a").hide();

	//Set up event handler
	$("nav#menu a").click(function(){
		var clickedLink = $(this);
		
		//let's bold the link we clicked
		clickedLink.css("font-weight", "bold");

		var target = clickedLink.attr("href"); //#section
		console.log(target);

		var scrollTo = $(target); //<section>

		//Change font style to italic
		scrollTo.css("font-style", "italic");

		//scroll back to the top
		var top= scrollTo.offset().top;
		console.log(top);

		//call scroll animation
		$("html, body").animate(
		{
			'scrollTop': top
		}, 1000, 'swing');

	});
});


