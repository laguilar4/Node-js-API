const {Router} = require('express');
const router = Router();
const jwt = require('../middleware/jwt');

router.post('/', (req, res) => 
{
    console.log(req.headers.authorization);
});

module.exports = router;