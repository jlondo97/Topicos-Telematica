const express = require("express");
const router = express.Router();

const clientes = require("../models/cliente");

router.post("/", async (req, res) => {
  const { first_Name, last_Name, email, pwd } = req.body;
  const task = new clientes({ first_Name, last_Name, email, pwd });
  await task.save();
  res.json({ status: "Task Saved" });
});

//obtener cliente

router.get("/", async (req, res) => {
  const Cliente = await clientes.find();
  res.json(Cliente);
});

//obtener un cliente

router.get("/:id", async (req, res) => {
  const Cliente = await clientes.findById(req.params.id);
  res.json(Cliente);
});

//Guardar un usuario

// Login service
const mockAsyncResponse = () => {
  return new Promise(resolve => {
    setTimeout(() => {}, 500);
  });
};

router.post("/sign-in", async (req, res) => {
  const res = await mockAsyncResponse();
  res.send("OK");
});

module.exports = router;
