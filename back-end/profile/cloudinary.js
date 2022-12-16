const cloudinary = require("cloudinary");
const { API_SECRET, CLOUD_NAME, API_KEY } = require("../config/config");

cloudinary.config({
  cloud_name: `${CLOUD_NAME}`,
  api_key: `${API_KEY}`,
  api_secret: `${API_SECRET}`,
});

exports.uploads = (file, folder) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      },
      {
        ressource_type: "auto",
        folder: folder,
      }
    );
  });
};
