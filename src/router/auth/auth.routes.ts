import { Response, Router } from 'express';
import { RegisterData1, RegisterData2, RegisterData } from '../../Middlewares/data/auth';

const Auth: Router = Router();

// controllers
import { editPass, login, passMail, register, registerValid1, registerValid2 } from '../../controllers/auth/index';
import { userByID } from '../../controllers/auth/user';

// ? Auth
//
Auth.route('/register/valid/1').post(RegisterData1, registerValid1);
//
Auth.route('/register/valid/2').post(RegisterData2, registerValid2);
//
Auth.route('/register').post(RegisterData, register);
//
Auth.route('/login').post(login);
//
Auth.route('/passMail').post(passMail);
//
Auth.route('/log/editPass').patch(editPass);
//
Auth.route('/user').get(userByID);

export default Auth;
