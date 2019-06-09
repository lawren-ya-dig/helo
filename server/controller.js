const bcrypt = require('bcrypt');

module.exports = {
    login: (req, res, next) => {
        const db = req.app.get('db')
        const {username, password} = req.body;

        let currentUser
        db.user_table.fineOne({username})
            .then((user) => {
                if(user){
                    currentUser = user;
                    return bcrypt.compare(password, user.password)
                }else{
                    throw('User does not exist')
                }
            })
            .then((correctInfo) => {
                if(correctInfo){
                    delete currentUser.password
                    res.send({success: true, user:currentUser})
                }else{
                    throw('Incorrect username and password')
                }
            })
            .catch((err) => {
                res.send({success:false, err})
            })
    },

    register: (req, res, next) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.user_table.findOne({username})
            .then((user) =>{
                if(user){
                    throw('Sorry, username already exists. Proceed to login page')
                }else{
                    return bcrypt.hash(password);
                }
            })
            .then((hash) => {
                return db.user_table.insert({username, password:hash})
            })
            .then((user) =>{
                delete user.password;
                req.session.user = user;
                res.send('Welcome! You are now registered!')
            })
            .catch((err)=>{
                res.send(err)
            })
    }
}