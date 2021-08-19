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
router.get("/:id", getSubscriber, (req, res) => {
  // req.params.id: this will give us access to whats passed after the '/'
  // res.send(req.params.id);
  //   res.send(res.subscriber);
  res.json(res.subscriber);
});

// Creating ONE -------------------------------------
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    city: req.body.city,
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
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.email != null) {
    res.subscriber.email = req.body.email;
  }
  if (req.body.city != null) {
    res.subscriber.city = req.body.city;
  }

  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting ONE -------------------------------------
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "delete person!!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// middleware to find the Subscriber
async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
}

module.exports = router;
