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

    estado.innerHTML = `
      ✅ Archivo subido correctamente<br>
      <a href="${data.secure_url.replace('/upload/', '/upload/fl_attachment/')}" target="_blank">
  Ver evidencia
</a>
    `;
  } catch (error) {
    estado.textContent = "❌ Error al subir archivo";
    console.error(error);
  }
});

