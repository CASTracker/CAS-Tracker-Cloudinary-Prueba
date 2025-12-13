// js/upload.js

const inputArchivo = document.getElementById("archivo"); 
const botonSubir = document.getElementById("subirBtn");
const estado = document.getElementById("estado"); 

botonSubir.addEventListener("click", async () => {
  const file = inputArchivo.files[0];

  if (!file) {
    estado.textContent = "Selecciona un archivo primero.";
    return;
  }

  estado.textContent = "Subiendo archivo...";

  try {
    const data = await uploadToCloudinary(file);

    let link;

    if (file.type === "application/pdf") {
      // ✅ PDF → descarga forzada REAL (cloud name fijo)
      link = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/raw/upload/fl_attachment/${data.public_id}`;
    } else {
      // ✅ Word → funciona con secure_url
      link = data.secure_url.replace(
        "/upload/",
        "/upload/fl_attachment/"
      );
    }

    estado.innerHTML = `
      ✅ Archivo subido correctamente<br>
      <a href="${link}" download>Ver la evidencia</a>
    `;
  } catch (error) {
    estado.textContent = "❌ Error al subir archivo";
    console.error(error);
  }
});
