const createError = require('http-errors');
const mongoose = require('mongoose');
const axios = require('axios');

module.exports.getCats = (req, res, next) => {
    const q = req.body.search
    console.log(req.body.search)
    axios({
        method: 'get',
        url: `https://api.thecatapi.com/v1/breeds/search?q=${q}`,
        headers: { 
          'x-api-key': 'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'
        }
    })
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
};

module.exports.getImg = (req, res, next) => {
    const id = req.params.id
    console.log(req.params.id)
    axios({
        method: 'get',
        url: `https://api.thecatapi.com/v1/images/${id}`,
        headers: { 
          'x-api-key': 'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'
        }
    })
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports.getImgs = (req, res, next) => {
    const type = req.params.type
    console.log(req.params.id)
    axios({
        method: 'get',
        url: `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${type}`,
        headers: { 
          'x-api-key': 'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'
        }
    })
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports.getFavs = (req, res, next) => {
    axios({
        method: 'get',
        url: `https://api.thecatapi.com/v1/breeds?limit=4`,
        headers: { 
          'x-api-key': 'live_Pia5aSppQhkJGiuHLo8LfZmpMpaEL695fkjf5oJp2FWD6Lt5z3D58uNXbuqe4HXU'
        }
    })
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}