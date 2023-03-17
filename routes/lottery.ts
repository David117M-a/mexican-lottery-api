import { Router } from "express";
import { getCards, getTables, generateRandomTables } from '../controllers/lottery';

const router = Router();

router.get('/cards', getCards);
router.get('/tables', getTables);
router.post('/generateTables/:length', generateRandomTables);

export default router;