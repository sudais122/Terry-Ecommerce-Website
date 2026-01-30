const app = require('./app/app');

const Port = 3000;

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});