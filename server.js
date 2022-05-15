// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
const stripe = require('stripe')(
  'sk_test_51KwqevADBAdluDju98Ed0TkGw2KsUwEFlNzk6zT1kbC8KfRCF4Hf8PpScYGQihvIIs79qF0FIzWqI1UGFo34rb3200cLfHY9Ey',
);

const express = require('express');

// heroku
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// heroku - here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')));
// heroku - this * route is to serve project on different page routes except root `/`
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

const SUCCESS = 'http://localhost:8080/success';
const FAIL = 'http://localhost:8080/fail';

app.post('/create-checkout-session', async (req, res) => {
  let mapped = [];
  if (req.body.price.constructor === Array) {
    mapped = req.body.price.map((price) => ({ price, quantity: 1 }));
  }
  const session = await stripe.checkout.sessions.create({
    line_items: (req.body.price.constructor === Array) ? mapped : [req.body],
    mode: 'payment',
    success_url: `${SUCCESS}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${FAIL}?canceled=true`,
  });

  res.redirect(303, session.url);
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);

app.listen(4242, () => console.log('Running on port 4242'));
