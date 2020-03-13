const UserRepository = require('../repository/UserRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.authenticate = async (req,res,next) =>{
    
    const {mail,password} = req.body;
    var user; 
    try{
        user = await UserRepository.getByMail(mail);
    }catch(e){
        console.log(e)
    }

    if(!user){
        return res.status(400).send({error:'User not found'})
    }
    if(! await bcrypt.compareSync(password, user.password)){
        return res.status(400).send({error:'Password invalid'})   
    }
    const token = jwt.sign({id: user.id},'desafiochat',{
        expiresIn:86400
    })

    res.status(200).json({token,userId:user.id});
    
};