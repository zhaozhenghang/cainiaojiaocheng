$(document).ready(function() {

	$('.gotop').hide();

	$('.right-nav>ul>li').hover(function() {
		$(this).children("a").eq(0).css({
			"font-size": "13px",
			"text-decoration": "underline",
			"color": "#64854c"
		});
		$(this).children("ul").show();

	}, function() {
		$(this).children("a").eq(0).css({
			"font-size": "12px",
			"text-decoration": "none",
			"color": "black"
		});
		$(this).children("ul").hide();
	})

	$('.gotop').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 200);
	})

	$(document).scroll(function() {
		$(document).scrollTop() > 100 ? $('.gotop').show() : $('.gotop').hide();
	})
})