const {
  getNote,
  getSingleItem,
  getAdd,
  getDelete,
  getEdit,
} = require("./Todo-service");

const read = async (req, res, next) => {
  const foundNote = await getNote();
  res.json({ data: foundNote });
};

const displaySingleItem = async (req, res, next) => {
  const id = req.params.id;
  const foundNote = await getSingleItem(id);
  res.json({ data: foundNote });
};

const addItem = async (req, res, next) => {
  const text = req.body.text;
  const addList = await getAdd(text);
  res.json("Added");
};

const deleteItem = async (req, res, next) => {
  const id = req.params.id;
  const addList = await getDelete(id);
  res.json("Deleted");
};
const editItem = async (req, res, next) => {
  const id = req.body.id;
  const text = req.body.item;
  console.log(id, text);
  const editList = await getEdit(id, text);
  res.json("Edited");
};

module.exports = { read, displaySingleItem, addItem, deleteItem, editItem };
