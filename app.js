const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(express.static('public'));


const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get('/', (req, res) => {
  res.json(blog);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
