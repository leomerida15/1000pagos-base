import { Router } from 'express';
import { RegisterData, LoginData, PassMailData } from '../../Middlewares/data/auth';

const Auth: Router = Router();

// controllers
import { editPass, login, passMail, register } from '../../controllers/auth/index';

// ? Auth
//
Auth.route('/register').post(RegisterData, register);
//
Auth.route('/login').post(LoginData, login);
//
Auth.route('/passMail').post(PassMailData, passMail);
//
Auth.route('/log/editPass').patch(editPass);

export default Auth;
