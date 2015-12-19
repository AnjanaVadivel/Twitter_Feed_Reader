# Twitter_Feed_Reader
First Implementation of Twitter Feed Reader:

-- Uses HTML,AngularJS and JQuery for the front-end
-- Employs OAuth to securely access the twitter API
-- When the application is loaded, the UI shows a “Connect to Twitter” button to the users. 
-- After clicking on it, a popup is opened and the user is shown a Twitter login screen to authorize the application to access the timeline 
   of the twitter page that the user follows.
-- OAuth is used to provide secure authorized access to the Twitter API. It connects to the Twitter API with the help of secure tokens
   obtained while creating a web application in the twitter page.
-- OAuth doesn’t require users to provide their password to third-party applications and this increases the account security.
-- After logging in, latest 10 tweets from the user timeline (Salesforce) will be loaded.
-- The page is updated every minute to show the latest set of tweets
-- The “Sign out” button will let the user to log out of the application

Second Implementation of Twitter Feed Reader:

-- Uses HTML,Javascript,JQuery for the front-end
-- Employs PHP to securely access the twitter API with the help of OAuth tokens
-- Since the tokens are directly given in the user code,there ia no need for the user to give the same during run-time.
-- Once the application is loaded, the UI shows the latest 10 tweets from the user timeline (Salesforce).
-- The page is updated every minute to show the latest set of tweets

