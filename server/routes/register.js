import express from 'express';

const router = express.Router();

import { register, registeredUsers } from '../controllers/controllers.js';

router.post('/register', register);
router.get('/registered', registeredUsers);

module.exports = router;
