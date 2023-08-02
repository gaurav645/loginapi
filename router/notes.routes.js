const express = require('express');
const { getNotes, createNote, updateNote, deleteNote } = require('../controller/note.controller');
const auth = require('../middleware/auth');
const noteRoute = express.Router();



 
noteRoute.get("/",  auth, getNotes); 
noteRoute.post("/",auth,createNote);


noteRoute.delete("/:id",auth,deleteNote);
noteRoute.put("/:id",auth,updateNote);


module.exports = noteRoute;