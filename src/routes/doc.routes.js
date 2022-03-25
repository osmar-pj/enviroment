import { Router } from "express";
const router = Router();
import multer from 'multer'

import * as docCtrl from "../controllers/docs.controller";
import { authJwt } from "../middlewares";
const upload = multer({ dest: 'public/data/uploads/' })

router.post(
  "/",
  [
    authJwt.verifyToken,
    // authJwt.isAdmin
  ],
  docCtrl.createDoc
)

router.get('/:id', [authJwt.verifyToken, authJwt.isAdmin], docCtrl.getDocById)

router.get('/', [authJwt.verifyToken] ,docCtrl.getDocs)

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], upload.single('file'), docCtrl.updateDocById)

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], docCtrl.deleteDocById)

// router.get('/search/:name', docCtrl.searchWorker)

export default router;
