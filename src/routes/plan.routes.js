import { Router } from "express";
const router = Router();

import * as planCtrl from "../controllers/plan.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    // authJwt.isAdmin
  ],
  planCtrl.createPlan
)

router.get('/:id', [authJwt.verifyToken], planCtrl.getPlanById)

router.get('/', [authJwt.verifyToken] ,planCtrl.getPlans)

router.put('/:id', [authJwt.verifyToken], planCtrl.updatePlanById)

router.delete('/:id', [authJwt.verifyToken], planCtrl.deletePlanById)

// router.get('/search/:name', docCtrl.searchWorker)

export default router;
