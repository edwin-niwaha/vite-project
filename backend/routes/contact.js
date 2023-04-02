import { Router } from "express";
import Contact from "../models/contact.model.js";
const router = Router();

// fetch route
router.route("/").get((req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const c_name = req.body.c_name;
  const email = req.body.email;
  const mobileNumber = req.body.mobileNumber;

  const newContact = new Contact({
    c_name,
    email,
    mobileNumber,
  });

  newContact
    .save()
    .then(() => res.json("Contact added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Contact.findById(req.params.id)
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
