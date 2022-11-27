
# Crypto Info API
This is the documentation about the API which is here. Either from the development or process that is already running.

## What i want to do next ?

- [x]  Get X Top Currencies
- [ ]  Add Joy for Validation Input 
- [ ]  Get info about each Crypto
- [ ]  Add Redis to make cache info 
- [ ]  Add many magic stuff! 


## API Information

#### Get x top Cryptocurrencies

```http
  GET https://qlats-crypto-api.herokuapp.com/v1/topXCrypto/q?
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `top` | `int` | **Required**. choose between 1-10 |



## Tech Stack

**Server:** Node, Express

