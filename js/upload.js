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

    // URL correcta para DESCARGA de PDFs y DOCX (raw)
    const descargaURL = `https://res.cloudinary.com/${data.cloud_name}/raw/upload/fl_attachment/${data.public_id}`;

    estado.innerHTML = `
      ✅ Archivo subido correctamente<br>
      <a href="${descargaURL}" target="_blank">Descargar evidencia</a>
    `;
  } catch (error) {
    estado.textContent = "❌ Error al subir archivo";
    console.error(error);
  }
});

