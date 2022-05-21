# magill-a-bot

This project is a Vue-Node-Stripe-Heroku integration project.   the Vue app is based primarily on a a Jim Cooper Pluralsight course, "Vue Fundamentals:.  It lets you select from robot parts and add a Robot (or multiple) to a cart.   I added a Checkout button with an HTML form Post that then kicks the Post to a Node.js proxy server ("server.js").   Proxy server has a Stripe test key and Stripe has some products and prices set up on their side.   key is kept in an environment variable, if you want to fork this and make it work you will have to get your own key.     Proxy server redirects to a Stripe prebuilt checkout page, passing a Succcess Url.

Don't enter real credit card number here (this is just a TEST Stripe account, it won't process it or anything , but still...).  Instead enter the fake credit card number 4242 4242 4242 4242 with any other fake info and you can get to a success page.  here is a link to more test card info: https://stripe.com/docs/testing

App is also deployed in Heroku, you can see it running at https://magill-a-bot.herokuapp.com/

IDE: VSCode

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
