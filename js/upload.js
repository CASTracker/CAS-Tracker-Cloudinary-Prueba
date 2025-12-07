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
      // ✅ PDFs → descarga directa segura
      link = `https://res.cloudinary.com/${data.cloud_name}/raw/upload/fl_attachment/${data.public_id}`;
    } else {
      // ✅ Word → fl_attachment funciona perfecto
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
