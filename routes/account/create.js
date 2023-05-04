const express = require('express');
const user = require('../../db/models/user');

var router = express.Router();

router.post('/', (req, res) => {
    const { id, password, name, email, birth } = req.body;

    user.findOne({ id })
        .then((foundUser) => {
            if (foundUser) { // 중복 아이디 체크
                res.send('중복된 아이디입니다.');
            } else if (!id || !password || !name || !email || !birth) {
                res.send('There are spaces missing');
            } else {
                user.create({ id, password, name, email, birth });
                console.log(id, password, name, birth, email);
                res.send("Account Created!" +req.body.id)
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});


module.exports = router;
