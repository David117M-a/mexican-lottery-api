"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lottery_1 = require("../controllers/lottery");
const router = (0, express_1.Router)();
router.get('/cards', lottery_1.getCards);
router.get('/tables', lottery_1.getTables);
router.post('/generateTables/:length', lottery_1.generateRandomTables);
exports.default = router;
//# sourceMappingURL=lottery.js.map