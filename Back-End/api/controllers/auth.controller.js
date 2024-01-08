import db from '../models/index.js'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const {UserModel} = db;

export const signup = async (req,res)=>{
    const { email, password, name, role} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const existingUser = await UserModel.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }


    try{
    const newUser = await UserModel.create({
        username,
        email, 
        password: hashedPassword,
        name, 
        role,
    });
    await newUser.save()  
        res.status(201).json({message: "user created successfully!"})
    } catch (error) {
        res.status(500).json({message: "signup error!", error: error.message})
    }
}


export const signin = async (req,res) =>{
    const {email,password} = req.body;
    try{
        const validUser = await UserModel.findOne({ where: { email } });

    if(!validUser) {
        res.status(500).json({message: "invalid email!"})
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
        res.status(500).json({message: "invalid password!"})
    } 

    const token = jwt.sign({id: validUser.id, role:validUser.role}, process.env.JWT_SECRET);
    const {password: pass, ...rest} = validUser.dataValues;
    res
        .cookie('access_token', token, { httpOnly: true, expires: new Date(Date.now()+ 24*60*60*100)})
        .status(200)
        .json(rest);
    
    } catch (error) {
    res.status(500).json({message: "signin error!", error: error.message})
    }
};


export const signOut = async(req,res)=>{
    try{
        res.clearCookie('access_token');
        res.status(200).json('User has been logged out!');
    } catch (error){
        res.status(500).json({message: "logging out error!", error: error.message})
    }
}