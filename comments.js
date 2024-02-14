// Create web server using express
// Create a route that returns a list of comments
// Create a route that returns a single comment by id
// Create a route that adds a new comment
// Create a route that updates a comment by id
// Create a route that deletes a comment by id

const express = require('express');
const app = express();
const comments = require('./comments.json');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 }