/*

---------------------------
    INITIAL SETUP
---------------------------

1. visit : console.firebase.google.com

2. create a new firebase project

3. visit doc (go to docs) : Build > Authentication > Web > get started

4. Resister web app > firebase project home > click web icon > give name

5. Install firebase for your project: npm install firebase

6. DANGER: get firebase config and push it in firebase.init.js

7. export app from firebase.init.js

---------------------------
    SETUP THE PROVIDER
---------------------------

8. create a auth using getAuth from firebase by using app from firebase.init.js

9. Create a Google auth provider. Do not forget to use new GoogleAuthProvider();

10. go to firebase > Build > Authentication > Sign In method

11. Enable Google sign in method

12. Create a button for google sign in method with a click handler

13. inside the event handler, call signInWithPopup with auth, provider

14. after signInWithPopup .then result , error

---------------------------
    DISPLAY DATA
---------------------------

---------------------------
    ADD A NEW METHOD
---------------------------

1. Enable the Sign In Method
2. Go to Github and https://github.com/settings/
3. Create github,fb, twitter, etc app
4. callback URL used by firebase callback URL
5. get clintId and secrete
6. 






---------------------------
    Facebook login system
---------------------------


1. Go to https://developers.facebook.com/apps
2. create an business app
3. facebook login for business
4. Web
5. /settings/basic/
6. copy App ID & App secret and paste it
firebase
(https://console.firebase.google.com/project/simple-firebase-authenti-bee57/authentication/providers)

7. copy link (To complete set up, add this OAuth redirect URI to your Facebook app configuration.)
8. go to fb facebook login for business > Valid OAuth Redirect URIs

and paste copy link & save change
*/