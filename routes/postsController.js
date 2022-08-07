const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { PostsModel } = require("../models/postModel");

router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else res.send("Erreur " + err);
  });
});
//pour les ajouts
router.post("/", (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error " + err);
  });
});
//pour les update
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);
  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };
  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error " + err);
    }
  );
});
//pour effacer des données

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error " + err);
  });
});

module.exports = router;
