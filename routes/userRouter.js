const router = require("express").Router();

const { userController } = require("../controllers");

router.get("", userController.findUsers);
router.get("/:id", userController.findUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
