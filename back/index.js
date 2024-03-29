const { conn } = require("./src/db.js");
const app = require("./src/app");

const PORT = 3001;

conn.sync({ force: false})


  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
