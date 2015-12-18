$(function(){

	$.ajax({
		url: 'load_latest_tweets.php',
		type: 'GET',
		success: function(response) {
			if (typeof response.errors === 'undefined' || response.errors.length < 1) {				
				var $tweets;
				$.each(response, function(i, obj) {
					$tweets.append('<li>' + obj.user.profile_image_url + obj.user.name + obj.text + obj.user.screen_name + obj.retweet_count'</li>');
				});

				$('.tweets-container').html($tweets);

			} else {
				$('.tweets-container p:first').text('Response error');
			}
		},
		error: function(errors) {
			$('.tweets-container p:first').text('Request error');
		}
	});
});