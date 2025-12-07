// js/cloudinary.js

const dgcltdq5x = "dgcltdq5x";
const CAS_Tracker = "CAS_Tracker";

// Subir archivo a Cloudinary
async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${dgcltdq5x}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CAS_Tracker);
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
