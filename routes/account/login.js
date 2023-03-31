const express = require('express')
const user = require('../../db/models/user')

var router = express.Router()
router.post('/', (req, res) => {
    const login = async (id, password) => {
        try {
          const status = await user.findOne({ 
<<<<<<< HEAD
            id: id,
            password: password
        })
        .exec();
=======
            id: req.body.id,
            password: req.body.password
       })
         .exec();

         if (!user) throw new Error('Invalid login credentials');
         const isPasswordValid = await user.checkPassword(req.body.password);
         if (!isPasswordValid) throw new Error('Invalid login credentials');
         res.status(200).send('Login successful');    


        return status
        } catch (err) {
            res.status(401).send(err.message)
        }
    };
    
    login(req.body.id, req.body.password)
    .then(result => {
        if (!result) {
            res.status(406).send("Not Good")
        }
        else {
            res.send("GOOOD!")
        }
    })
})
>>>>>>> origin/ys

        if (!status) {
            console.log("ID not found");
        }
        
        return status
        } catch (err) {
            console.error(err);
        }
    };

    login(req.body.id, req.body.password)
    .then(result => {
        if (!result) {
            res.status(406).send("Not Good")
        }
        else {
            res.send("GOOOD!")
        }
    })
})
module.exports = router
