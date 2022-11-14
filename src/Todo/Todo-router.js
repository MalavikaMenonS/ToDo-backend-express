const express = require("express");
const app = express();
const router = express.Router();
const { read,displaySingleItem, addItem,deleteItem, editItem } = require("./Todo-controller");
// router.route('/').get(dispAll);
router.route("/list").get(read);
router.route("/list/:id").get(displaySingleItem);
router.route("/add").post(addItem);
router.route('/delete/:id').delete(deleteItem);
router.route('/edit').put(editItem);


module.exports =  router ;
