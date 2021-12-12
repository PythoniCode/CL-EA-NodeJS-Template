const sdk = require('api')('@coinbase-exchange/v1.0#1araz11kx0qhg10');

sdk['ExchangeRESTAPI_GetAccounts']()
  .then(res => console.log(res))
  .catch(err => console.error(err));

app.post('/', (req, res) => {
  console.log('POST Data: ', req.body);
  coinbase.getAccounts({}, function(err, accounts) {
    if (err) console.log(err);
    console.log(accounts);
    //res.status(response.statusCode).send(response.body);
  });
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
