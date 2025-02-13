// Create Web Server
const express = require('express');
const app = express();
// Create a static server
app.use(express.static('public'));
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Create a router
const comments = [
  {name: 'Tom', content: 'Today is a good day!'},
  {name: 'Jerry', content: 'I am hungry!'},
  {name: 'Spike', content: 'I am sleepy!'}
];
app.get('/comments', (req, res) => {
  res.send(comments);
});
app.get('/comments/:name', (req, res) => {
  const name = req.params.name;
  const comment = comments.find(comment => comment.name === name);
  res.send(comment);
});