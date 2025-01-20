import Contribution from "../Models/Contribution.js";
const contributions = {};
const addContribution = (req, res) => {
  const { name, email, amount } = req.body;
  if (!name || !email || !amount) {
    return res
      .status(400)
      .json({ message: "All fields are required: name, email, amount." });
  }
  const cause = causes.find((c) => c.id === id);
  if (!cause) {
    return res.status(404).json({ message: "Cause not found." });
  }
  const contribution = new Contribution((id = v4()), name, email, amount);

  if (!contributions[id]) {
    contributions[id] = [];
  }
  contributions[id].push(contribution);
  res.status(201).json(contribution);
};

export default addContribution;
