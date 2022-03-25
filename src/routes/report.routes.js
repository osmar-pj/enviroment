import { Router } from 'express'
const router = Router()

import * as reportCtrl from '../controllers/report.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken], reportCtrl.createReport)
router.get('/', [authJwt.verifyToken], reportCtrl.getReports)
router.get('/:id', [authJwt.verifyToken], reportCtrl.getReportById)
router.put('/:id', [authJwt.verifyToken], reportCtrl.updateReportById)
router.delete('/:id', [authJwt.verifyToken], reportCtrl.deleteReportById)

export default router