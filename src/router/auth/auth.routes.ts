import { Router } from 'express';
const Auth: Router = Router();

// controllers
import { login, register, passMail, editPass } from '../../controllers/auth/index';

//User
Auth.route('/login').post(login);
//
Auth.route('/register').post(register);
//
Auth.route('/passMail').post(passMail);
//
Auth.route('/log/editPass').patch(editPass);

export default Auth;
