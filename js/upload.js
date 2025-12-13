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

    // 🔒 SIEMPRE descarga directa (PDF y Word)
    const link = `${data.secure_url}?dl=1`;

    estado.innerHTML = `
      ✅ Archivo subido correctamente<br>
      <a href="${link}" download>Descargar evidencia</a>
    `;
  } catch (error) {
    estado.textContent = "❌ Error al subir archivo";
    console.error(error);
  }
});
