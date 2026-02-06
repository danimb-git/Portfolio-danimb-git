document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".selection-btn");
  const tbody = document.getElementById("skillsTbody");

  // Dades: 3 “taules” (mateixes 2 columnes i 5 files)
  const tables = {
    frontend: [
      {
        competencia: "HTML5 y CSS3",
        evidencia:
          "Estructura y maquetación de interfaces adaptativas. Uso de Flexbox y Grid en proyectos personales y académicos.",
      },
      {
        competencia: "JavaScript",
        evidencia:
          "Creación de componentes interactivos y validaciones de formularios. Uso en proyectos DAW y ejercicios prácticos.",
      },
      {
        competencia: "Bootstrap 5",
        evidencia:
          "Aplicación del sistema grid y componentes responsive en proyectos de clase (porfolio y web corporativa).",
      },
      {
        competencia: "Diseño responsive",
        evidencia:
          "Adaptación de layouts a distintas resoluciones siguiendo guías de diseño responsive y wireframes Hi-Fi.",
      },
      {
        competencia: "Accesibilidad web",
        evidencia:
          "Buenas prácticas (semántica, contraste, foco) y revisión básica con herramientas de auditoría.",
      },
    ],

    backend: [
      {
        competencia: "Node.js / Express",
        evidencia:
          "Creación de APIs REST, rutas, middlewares y manejo de errores para proyectos académicos.",
      },
      {
        competencia: "Bases de datos",
        evidencia:
          "Modelado de datos y consultas SQL. Integración con aplicaciones web y validación de datos.",
      },
      {
        competencia: "Autenticación",
        evidencia:
          "Implementación de login/registro, control de sesión o JWT y protección de endpoints.",
      },
      {
        competencia: "APIs y consumo de servicios",
        evidencia:
          "Consumo de APIs externas, manejo de JSON y control de estados de carga/errores.",
      },
      {
        competencia: "Despliegue básico",
        evidencia:
          "Configuración de entornos, variables y pruebas en local antes de publicar versiones.",
      },
    ],

    softskills: [
      {
        competencia: "Trabajo en equipo",
        evidencia:
          "Coordinación con compañeros, reparto de tareas y comunicación constante para cumplir objetivos.",
      },
      {
        competencia: "Gestión del tiempo",
        evidencia:
          "Planificación semanal, priorización y entrega de tareas con plazos ajustados.",
      },
      {
        competencia: "Resolución de problemas",
        evidencia:
          "Análisis de errores, búsqueda de causas y propuesta de soluciones probadas.",
      },
      {
        competencia: "Comunicación",
        evidencia:
          "Explicar ideas técnicas de forma clara (oral y escrita) y documentación de proyectos.",
      },
      {
        competencia: "Adaptabilidad",
        evidencia:
          "Aprendizaje rápido de herramientas nuevas y mejora continua según feedback.",
      },
    ],
  };

  function renderTable(key) {
    const rows = tables[key] ?? [];
    tbody.innerHTML = rows
      .map(
        (r) => `
          <tr>
            <td>${r.competencia}</td>
            <td>${r.evidencia}</td>
          </tr>
        `
      )
      .join("");
  }

  function setActiveButton(activeBtn) {
    buttons.forEach((btn) => btn.classList.remove("is-active"));
    activeBtn.classList.add("is-active");
  }

  // Click listeners
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.textContent.trim().toLowerCase();

      // Map per text del botó → clau del objecte
      const key =
        label === "frontend"
          ? "frontend"
          : label === "backend"
          ? "backend"
          : "softskills";

      setActiveButton(btn);
      renderTable(key);
    });
  });

  // Per defecte: Frontend
  const first = buttons[0];
  setActiveButton(first);
  renderTable("frontend");
});
