document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("aboutPanel");
  const buttons = document.querySelectorAll(".about-btn");

  const content = {
    sobremi: `
    <p>
      Soy una persona responsable, organizada y con gran capacidad para trabajar en equipo.<br><br>
      Me motiva el aprendizaje continuo y la tecnología, especialmente el desarrollo web y la inteligencia artificial.<br><br>
      Valoro la claridad, la eficiencia y la creatividad en todo lo que hago, tanto en el código como en el trato con las personas.<br><br>
      Busco seguir creciendo profesionalmente, aportando compromiso, actitud positiva y soluciones con propósito.
    </p>
  `,

    experiencia: `
    <p>
      <strong>Encargado de cafetería — Bombon Boss</strong><br>
      📍 Julio 2023 - Diciembre 2024
    </p>
    <p>
      Coordinación del equipo, gestión de turnos y supervisión del funcionamiento diario del local.<br>
      Desarrollé habilidades de liderazgo, organización y toma de decisiones rápidas en un entorno dinámico.
    </p>

    <p style="margin-top: 16px;">
      <strong>Barista — Frend Coffee</strong><br>
      📍 Diciembre 2024 - Actualidad
    </p>
    <p>
      Atención al cliente, control de pedidos y elaboración de bebidas.<br>
      He perfeccionado mi capacidad para trabajar bajo presión, mantener la calidad del servicio y cuidar los detalles.
    </p>
  `,

    formacion: `
    <p>
      <strong>CFGS Desarrollo de Aplicaciones Web</strong><br>
      <em>Escoles Universitàries Gimbernat</em> (2024 - Actualidad)
    </p>
    <p>
      Aprendizaje en programación web full stack, bases de datos, diseño de interfaces y gestión de proyectos.
    </p>

    <p style="margin-top: 16px;">
      <strong>Bachillerato Tecnológico</strong><br>
      <em>Sagrada Familia Sabadell</em> (2020 - 2022)
    </p>
    <p>
      Desarrollo de pensamiento lógico, fundamentos de programación y competencias STEM.
    </p>
  `,

    habilidades: `
      <p>🤝 Trabajo en equipo</p>
      <p>⏱️ Autonomía y gestión del tiempo</p>
      <p>🔎 Resolución de problemas</p>
      <p>🗣️ Atención al cliente</p>
      <p>💡 Creatividad y diseño funcional</p>
      <p>🤖 Interés en IA aplicada al desarrollo web</p>
  `,

    idiomas: `
      <p><strong>Español:</strong> nativo</p>
      <p><strong>Catalán:</strong> nativo</p>
      <p><strong>Inglés:</strong> nivel C1</p>
  `,
  };

  function setActive(key) {
    panel.innerHTML = content[key] ?? "<p>Contenido no disponible.</p>";

    buttons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.key === key);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setActive(btn.dataset.key));
  });

  const initial =
    document.querySelector(".about-btn.is-active")?.dataset.key || "sobremi";
  setActive(initial);
});
