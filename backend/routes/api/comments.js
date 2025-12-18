const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * @route GET /api/comments
 * @description Get all comments from the database
 * @access Public
 */
router.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find();
    return res.json({ comments });
  } catch (err) {
    next(err);
  }
});

/**
 * @route DELETE /api/comments/:id
 * @param {string} id - The ID of the comment to delete
 * @description Delete a specific comment by its ID
 * @access Public
 */
router.delete("/:id", async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.sendStatus(404);
    }

    await Comment.deleteOne({ _id: req.params.id });
    return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;