const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriberModel");

// Getting ALL -------------------------------------
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting ONE -------------------------------------
router.get("/:id", (req, res) => {
  // req.params.id: this will give us access to whats passed after the '/'
  res.send(req.params.id);
});

// Creating ONE -------------------------------------
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating ONE -------------------------------------
router.patch("/:id", (req, res) => {});

// Deleting ONE -------------------------------------
router.delete("/:id", (req, res) => {});

module.exports = router;
