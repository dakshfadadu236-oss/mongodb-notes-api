const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.post("/", async (req, res) => {
    const note = await Note.create(req.body);
    res.json(note);
});

router.get("/", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

router.put("/:id", async (req, res) => {
    const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedNote);
});

router.delete("/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);

    res.json({
        message: "Note deleted"
    });
});

module.exports = router;
