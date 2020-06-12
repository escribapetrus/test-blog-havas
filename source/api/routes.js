const   express = require('express'),
        router = express.Router(),
        axios = require('axios');

router.get('/', (req,res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(d => {
        return res.json(d.data)
    })
    .catch(err => {
        return res.status(400).json({"Error": "not found"})
    });
})

router.get('/:id', (req,res) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then(d => {
        return res.json(d.data)
    })
    .catch(err => {
        return res.status(400).json({"Error": "Post not found"})
    });
})

module.exports = router