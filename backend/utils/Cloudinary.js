const cloudinary = require("cloudinary").v2;
console.log("CLOUD_NAME:", process.env.CLOUD_NAME); // Debugging statement
console.log("API_KEY:", process.env.CLOUDINARY_API_KEY); // Debugging statement
console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET); // Debugging statement
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: "oCl8_CCXmV81BR8Lwz8yvnYkL00",
});

const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    // return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = uploadImage;
