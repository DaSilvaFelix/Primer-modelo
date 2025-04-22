const threshold = 0.5;

function analizarTexto() {
  const inputText = document.getElementById("input-text").value;

  if (!inputText.trim()) {
    alert("Por favor, introduce un texto válido.");
    return;
  }

  toxicity.load(threshold).then((model) => {
    model.classify([inputText]).then((predictions) => {
      mostrarResultados(inputText, predictions);
    });
  });
}

function mostrarResultados(texto, predictions) {
  const tablaBody = document.getElementById("tabla-body");
  let nuevaFila = `<tr><td>${texto}</td>`;

  predictions.forEach((prediccion) => {
    nuevaFila += `<td>${prediccion.results[0].match ? "✔️" : "❌"}</td>`;
  });

  nuevaFila += "</tr>";
  tablaBody.innerHTML += nuevaFila;
}
