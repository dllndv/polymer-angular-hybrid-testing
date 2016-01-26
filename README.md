# polymer-angular-hybrid-testing
This is a test app using both polymer and angular to see how we can test both with Protractor. You must have node and bower installed in order to run.

It's built with kd7yva's polymer-startup app, which can be found [here](https://github.com/kd7yva/polymer-startup) along with instructions on how to run the app.

Also most of the code I used to make the app came from [this article](http://jcrowther.io/2015/05/26/using-polymer-webcomponents-with-angular-js/) by Josh Crowther.

## Getting Started:

```
git clone https://github.com/dllndv/polymer-angular-hybrid-testing.git
cd polymer-angular-hybrid-testing
npm install
```

## To run in dev mode:

```
gulp dev
```
This builds the app and deploys with gulp, and enables browser-sync. To stop, use `ctrl-c`.

## To run in prod mode:

```
npm start
```
 
 For more instructions on how the project is structured, and how to add more web components, see [kd7yva's](https://github.com/kd7yva/polymer-startup) repo for the polymer-startup app.