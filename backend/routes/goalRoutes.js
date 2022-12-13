const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, goalController.getGoals).post(protect, goalController.setGoal)
router.route('/:id').delete(protect, goalController.deleteGoal).put(protect, goalController.updateGoal)

module.exports = router 
