function getInsta() {
	var parms = {
		count: '20',
		client_id: '8d5e11005aaf470d8923a9a48a8f17fc'
	}

	var end = "https://api.instagram.com/v1/users/791415154/media/recent/?client_id=8d5e11005aaf470d8923a9a48a8f17fc";

	$.ajax({
		type: "GET",
		url: end,
		dataType: "jsonp",
		data: parms,
		beforeSend: function(){

		},
		complete: function(){

		},
		success: function(res){

			var links = res.data;

		for(i=1;i<links.length;i++) {
			var lead = links[i];
			var src = lead.images.thumbnail.url;
			var tag = lead.tags;
			var image = lead.images.standard_resolution.url;

				$("#insta-feed").append("<div class='insta-image-con'><img class='insta-image-img' src='" + src + "'/></div>");
		}

		var instaWidth = $("img.insta-image-img").width();
			var bodyWidth = $("body").width();
			var width = (bodyWidth)/(instaWidth);
			var floor = Math.floor(width);
			var totalWidth = floor * instaWidth;

			var prop = (totalWidth * 100)/bodyWidth;
			$("#insta-wrapper").css("width", prop + "%");

	}
	});

}

function resize(){

			var instaWidth = $("img.insta-image-img").width();
			var bodyWidth = $("body").width();
			var width = (bodyWidth)/(instaWidth);
			var floor = Math.floor(width);
			var totalWidth = floor * instaWidth;

			var prop = (totalWidth * 100)/bodyWidth;
			$("#insta-wrapper").css("width", prop + "%");

}

$(function(){
	$(".insta-image-img").click(function(){
		console.log("click!");
	});
});


