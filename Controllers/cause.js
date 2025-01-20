import Cause from "../Models/cause.js";
import { v4 } from "uuid";
const db = [
  new Cause(
    1,
    "Broken Screen",
    "Need help for the cracked screen",
    "www.google.com"
  ),
];
export const createCause = (req, res) => {
  const { title, description, imageURL } = req.body;
  console.log(title, description, imageURL);
  if (!title || !description || !imageURL) {
    return res.status(400).json({
      message: "All fields are required: title, description, imageURL.",
    });
  }

  const cause = new Cause((id = v4()), title, description, imageURL);
  db.push(cause);
  res.status(201).json({ message: "Successfully Created" });
};

export const getCause = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const cause = db.find((cause) => cause.id == id);
  if (cause) {
    res.status(200).json({ status: "success", cause });
  } else {
    res.status(404).json({ status: "success", message: "Cause not found" });
  }
};

export const getCauses = (req, res) => {
  if (db.length < 1) res.status(200).json({ message: "No Cause found" });
  res.status(200).json({ causes: db });
};

export const updateCause = (req, res) => {
  const { title, description, imageURL } = req.body;
  const { id } = req.params;
  const cause = db.find((cause) => cause.id == id);
  if (!cause) {
    res.status(404).json({ status: "success", message: "Cause not found" });
  }
  if (title) cause.title = title;
  if (description) cause.description = description;
  if (imageURL) cause.imageURL = imageURL;
  res.status(200).json({ status: "success", cause });
};
export const deleteCause = (req, res) => {
  const { id } = req.params;
  const cause = db.findIndex((cause) => cause.id == id);
  if (!cause) {
    res.status(404).json({ status: "success", message: "Cause not found" });
  }
  db.splice(cause, 1);
  res.status(200).json({ status: "success", message: "Successfully Deleted" });
};
