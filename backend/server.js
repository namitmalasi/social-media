const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");

connectDatabase();

cloudinary.config({
  cloud_name: "dgqnvrab1",
  api_key: "283851229745733",
  api_secret: "-g1IXDqHZRAcDFWC1NAphh_iMac",
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port :${process.env.PORT}`);
});
