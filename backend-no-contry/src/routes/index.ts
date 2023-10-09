import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return 'Hello World'
})

export default router;