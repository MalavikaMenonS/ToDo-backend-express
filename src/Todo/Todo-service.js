// const notes=require('../data/nodes-data')
const knexInstance = require("../database/connection");

const getNote = async () => {
  const result = await knexInstance("todo").select("*");
  console.log(result);
  return result;
};

const getSingleItem = async (id) => {
  const result = await knexInstance("todo").where("id",id);
  console.log(result);
  return result;
};

const getAdd = async (text) => {
  const add = await knexInstance("todo").insert({ item: text });
  return add;
};

const getDelete=async (id) => {
    const deleteitem = await knexInstance("todo").where("id",id).del();
    return deleteitem;
  };

const getEdit=async (id,text) => {
    const edititem = await knexInstance("todo").where("id",id).update({item:text});
    return edititem;
  };

module.exports = {
  getNote,
  getSingleItem,
  getAdd,
  getDelete,
  getEdit
};
