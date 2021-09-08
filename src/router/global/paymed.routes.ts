import { Router } from 'express';

const Payments: Router = Router();

// controllers
import { paymentAll } from '../../controllers/global/payment';

// ? pay_medthod
//
Payments.route('/payment/all').get(paymentAll);

export default Payments;
