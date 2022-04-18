console.clear();

(function ($) {
    "use strict";

		$(window).on('scroll', function() {

						 var scroll_pos = $(this).scrollTop();
						if(scroll_pos > 210) {
								$('.menuh').css('color', '#000');
						} else {
								$('.menuh').css('color', '#fff');
						}
				 });

				 $('#homem').on("click", function () {
				   window.location.href = "index.html";
				 })

				 $('#missionm').on("click", function () {
				   window.location.href = "mission.html";
				 })

				 $('#findm').on("click", function () {
					window.location.href = "find.html";
				})

				$('#contactm').on("click", function () {
				 window.location.href = "contact.html";
			 })

			 $('#ecoOne').on("click", function () {
				$(".product-pic").attr("src", "assets/img/ecocup.png");
				$(".product-image").css("background", "linear-gradient(to bottom, #437849 0%, #308d3a 100%)");
					$("#orderB").css("background", "linear-gradient(to bottom, #437849 0%, #308d3a 100%)");
					$("#orderB").css("box-shadow", "0 10px 30px 0 rgb(65 122 72)");
					$(".current").css("color", "#437849");
					$(".colorCat").html("EcoCup: Grasslands");
					$(".descp").html("This EcoCup has embedded seeds, specifically targeted to better grow within grassy regions.")

			})

			$('#ecoTwo').on("click", function () {
				console.log("kys");
			  $(".product-pic").attr("src", "assets/img/eco2.png");
				$(".product-image").css("background", "linear-gradient(to bottom, #5b603f 0%, #4e513f 100%)");
				$("#orderB").css("background", "linear-gradient(to bottom, #5b603f 0%, #4e513f 100%)");
				$("#orderB").css("box-shadow", "0 10px 30px 0 #5b603f");
				$(".colorCat").html("EcoCup: Tundra");
					$(".current").css("color", "#5b603f");
					$(".descp").html("This EcoCup has embedded seeds, specifically targeted to better grow within humid regions.")
		 })

		 $('#ecoThree').on("click", function () {
			$(".product-pic").attr("src", "assets/img/eco3.png");
      $(".product-image").css("background", "linear-gradient(to bottom, #2b6fa0 0%, #2e485e 100%)");
			$("#orderB").css("background", "linear-gradient(to bottom, #2b6fa0 0%, #2e485e 100%)");
			$("#orderB").css("box-shadow", "0 10px 30px 0 #2e485e");
			$(".colorCat").html("EcoCup: SubZero");
				$(".current").css("color", "#2e485e");
				$(".descp").html("This EcoCup has embedded seeds, specifically targeted to better grow within cold regions.")
		})

		$('#ecoFour').on("click", function () {
		 $(".product-pic").attr("src", "assets/img/eco4.png");
     $(".product-image").css("background", "linear-gradient(to bottom, #d49347 0%, #b4752c 100%)");
		 $("#orderB").css("background", "linear-gradient(to bottom, #d49347 0%, #b4752c 100%)");
		 $("#orderB").css("box-shadow", "0 10px 30px 0 #d49347");
		 $(".colorCat").html("EcoCup: Warm & Dry");
		 	$(".current").css("color", "#d49347");
			$(".descp").html("This EcoCup has embedded seeds, specifically targeted to better grow within warm & dry regions.")
	 })

})(jQuery);
