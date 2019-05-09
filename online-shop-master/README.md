## Author : Pausha Bhatt ##
# Description

Online Store Front implemented using React, Redux, React router, and React Material UI library.

**Some (main) features**:
- Search products using keyword and/or category
- Ability to filter and sort products
- Users can add products to shopping cart (also has checkout page, which can be accessed when logged in).

# How to use

1. Clone the repository( Or just download/ copy the code to your local PC)

    _NOTE_: Currently the project has grown in size a bit (roughly 45MB) mainly due to .git folder size( will clean up)
    In Visual Studio or the editor of your choice, open the terminal and run the following commands.....
2. ```cd``` into the project folder.
3. ```npm install```
4. ```npm start``` ( this will make the application available in the browser)


<<<<<<< HEAD
# Twitter login POC using React Hook

Obs: this features needs local server running.

## How to test:
1. from root folder : ```npm install``` and ```npm start``` 
2. ```/LocalServer``` : ```npm install``` and ```gulp develop``` to run local server

## Using:
* react-twitter-auth 
* express-jwt 
* passport 
* passport-twitter-token 
* MongoDB

## Links:
https://medium.com/@robince885/how-to-do-twitter-authentication-with-react-and-restful-api-e525f30c62bb
https://github.com/GenFirst/react-node-twitter-login
=======

## Push Notification & Twitter Login:

1) From online-shop-master folder:
* Delete ```node_modules``` folder in ```online-shop-master``` and ```online-shop-master/client``` folder
* ```yarn install``` or ```npm install```
* ```cd client``` 
* ```yarn install``` or ```npm install```

2) Get VAPID KEYS:
* From online-shop-master folder: 
```./node_modules/.bin/web-push generate-vapid-keys```

3) Update .env file located inside ```online-shop-mater``` by replacing current 
```PUBLIC_VAPID_KEY``` and
```PRIVATE_VAPID_KEY``` with newly created VAPID KEYs in step 2).

4) Update PUBLIC_VAPID_KEY inside ```/client/.env``` with newly generated keys in step 2)


5) From online-shop-master folder:
```yarn start``` or ```npm start```

### Push Notification

1) When the site opens in ```http://localhost:3000/``` click to allow notification when the question pops up on the left corner of address bar in browser.

2) The notification should pop up at the right upper corner of screen

## Twitter Login

1) Go to ```http://localhost:3000/login```.

2) ```Sign in with Twitter``` button is located beneath ```Log In``` button. The window asking for Twitter credentials pops up when the button is clicked. 
>>>>>>> 8fab669b3c852b8fee1b79d765ea8a7c33d46a56
