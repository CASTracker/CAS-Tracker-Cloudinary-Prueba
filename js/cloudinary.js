// js/cloudinary.js

const dgcltdq5x = "dgcltdq5x";
const CLOUDINARY_UPLOAD_PRESET = "CAS_Tracker";

// Subir archivo a Cloudinary
async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "cas-tracker");

  const res = await fetch(url, {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    throw new Error("Error al subir archivo");
  }

  return await res.json();
}
