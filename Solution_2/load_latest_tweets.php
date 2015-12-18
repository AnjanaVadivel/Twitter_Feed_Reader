<?php

require_once('twitter_proxy.php');

// Twitter OAuth Config options
// oauth_access_token and oauth_access_token_secret are obtained from the Twitter application(https://apps.twitter.com)
// Consumer_key and Consumer_secret are obtained from the Twitter application (https://apps.twitter.com)

$oauth_access_token = '1279477993-l8mXYKJ2sbgE4vY6JheRexwlu3ReGGXgfbTQCmQ';
$oauth_access_token_secret = 'xnjuIIaVUWeWgGAIWGweymFk4YItxU3CHfNBoRotvDniG';
$consumer_key = '32yiDVUghRzXQrwRAhjEoYd2k';
$consumer_secret = '3XjhhjssbdGacSYizJsidxrjLcMtgzDTNGn3Rp9j7Op8Uzm0pY';
$screen_name = 'salesforce';
$count = 10;

$twitter_url = 'statuses/user_timeline.json';
$twitter_url .= '&screen_name=' . $screen_name;
$twitter_url .= '&count=' . $count;

// Create a Twitter Proxy object from our twitter_proxy.php class
$twitter_proxy = new TwitterProxy(
	$oauth_access_token,			
	$oauth_access_token_secret,		
	$consumer_key,					
	$consumer_secret,				
	$screen_name,					
	$count							
);

// Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);
?>