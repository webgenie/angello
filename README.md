# Angello

[![Build Status](https://travis-ci.org/angularjs-in-action/angello.png)](https://travis-ci.org/angularjs-in-action/angello)

Welcome to Angello, the AngularJS storyboard! Based off the [Trello App](https://trello.com), this repo holds the code for the app built in the [AngularJS in Action](http://www.manning.com/bford/) book. Read on to get started!

## Prerequisites
You'll need [`git`](http://git-scm.com/), a web browser, and a local web server.

## Running Angello

#### Install it
Run the following command to check out a local copy of the code.

`git clone git@github.com:angularjs-in-action/angello.git`

#### Set up the backend
There are two options for the backend of the app: NodeJS and Firebase.

##### Using Firebase

1. If you do not have one already, set up an account with [firebase.com](https://www.firebase.com/)
![Firebase Home Page](https://cloud.githubusercontent.com/assets/590361/4364837/749ca694-42a4-11e4-9fa3-d19f25cb1bab.png)
2. Create an app (name it whatever you want)
![Create Firebase App](https://cloud.githubusercontent.com/assets/590361/4364985/dbc240b6-42a6-11e4-81f2-d9a254f25ffd.png)
3. Click on your new app's URL <br>
![Firebase App](https://cloud.githubusercontent.com/assets/590361/4365468/c162bca8-42ad-11e4-91b5-7eb81669748a.png)
4. Click on the `Login & Auth` section of the resulting page on the left hand side, and check the checkbox that says `Enable Email & Password Authentication`
![Enable Auth](https://cloud.githubusercontent.com/assets/590361/4365643/0027bb0c-42b1-11e4-9b21-45249fcb6eb7.png)
5. Copy the URL from the address bar of the page you are on
5. Open the file `angello > client > src > angello > app > services > EndpointConfigService.js` and update the `URI` property of the `firebase` object to your copied URL.
![Edit File](https://cloud.githubusercontent.com/assets/590361/4365499/45762980-42ae-11e4-99f7-58feeb27b934.png)
6. You're done! Skip to the *Start it* section

##### Using NodeJS
Coming Soon!

#### Start it
Start up your local web server and navigate to the client folder. <br>
Example: [http://localhost/~username/angello/client/](http://localhost/~username/angello/client/)

If you don't have a local web server and/or don't want to set one up, just `cd` into the client folder and run `python -m SimpleHTTPServer`. You should get an output that looks like this: `Serving HTTP on 0.0.0.0 port 8000 ...`. Just navigate to the web address and port specified (in this case, [http://0.0.0.0:8000/](http://0.0.0.0:8000/)).

#### Use it!
At this point, you should see the login portion of the site.
![Angello Login Screen](https://cloud.githubusercontent.com/assets/590361/4364466/36bf22d8-42a0-11e4-91e5-ab5bc28a20b0.png)
We've made it to the fun part! Go ahead and play around with the app and see what it does. More info and screenshots coming soon.

## License
MIT
