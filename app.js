const translations = {
  en: {
    title: "Adapt Your Project",
    subtitle: "Turn an existing graphic design project into a more flexible, accessible, and student-centered learning experience.",
    projectTitle: "Project title",
    projectTitlePlaceholder: "e.g., Restaurant Branding Project",
    course: "Course / area",
    duration: "Approximate duration",
    durationPlaceholder: "e.g., 4 weeks",
    studentLevel: "Student level",
    studentLevelPlaceholder: "e.g., Undergraduate, introductory course",
    projectDescription: "Current project description",
    projectDescriptionHelp: "Paste the assignment as it currently exists. Include deliverables and major steps when possible.",
    projectDescriptionPlaceholder: "Paste your project instructions here...",
    learningObjectives: "Learning objectives",
    learningObjectivesHelp: "Optional, but recommended. These will be preserved.",
    learningObjectivesPlaceholder: "What should students know or be able to do?",
    essentialRequirements: "Non-negotiable requirements",
    essentialRequirementsHelp: "Anything that must remain unchanged to preserve rigor.",
    essentialRequirementsPlaceholder: "e.g., final logo must be vector-based; critique participation is required",
    knownBarriers: "Barriers or challenges you have noticed",
    knownBarriersHelp: "Optional. Describe difficulties with instructions, pacing, participation, tools, process documentation, critique, or assessment.",
    knownBarriersPlaceholder: "e.g., some students struggle to organize the process book or ask for feedback",
    approaches: "Choose the approaches to apply",
    studentCentered: "Student-Centered Learning / ACE",
    accessibility: "Accessibility",
    privacyTitle: "Privacy reminder:",
    privacyText: "Do not paste student names, diagnoses, grades, or other personally identifiable student information.",
    adaptButton: "Adapt My Project",
    clearButton: "Clear",
    working: "Creating your adaptation…",
    error: "Something went wrong. Please try again.",
    chooseApproach: "Select at least one approach.",
    resultsEyebrow: "UN-STANDARD adaptation",
    resultsTitle: "Your Adapted Project",
    copyButton: "Copy",
    copied: "Copied",
    downloadButton: "Download TXT",
    printButton: "Print / Save PDF",
    disclaimer: "Use these suggestions as a planning aid. The instructor remains responsible for course requirements, accessibility obligations, and final instructional decisions.",
    sections: {
      summary: "Adaptation overview",
      essential: "Essential requirements to preserve",
      flexible: "Elements that can be flexible",
      barriers: "Potential barriers and responses",
      udl: "Universal Design for Learning (UDL)",
      engagement: "Engagement",
      representation: "Representation",
      actionExpression: "Action & Expression",
      sel: "Social and Emotional Learning (SEL)",
      agency: "Student choice & agency",
      accessibility: "Accessibility considerations",
      designThinking: "Design Thinking opportunities",
      checkpoints: "Checkpoints & feedback",
      assessment: "Assessment adaptations",
      revised: "Revised project",
      steps: "Suggested sequence",
      revisedAssessment: "Assessment approach",
      flexibilityNote: "Flexibility note"
    },
    barrierLabels: { barrier: "Barrier", why: "Why it matters", adaptation: "Possible response" }
  },
  es: {
    title: "Adapta tu proyecto",
    subtitle: "Transforma un proyecto existente de Diseño Gráfico en una experiencia de aprendizaje más flexible, accesible y centrada en el estudiante.",
    projectTitle: "Título del proyecto",
    projectTitlePlaceholder: "Ej.: Proyecto de branding para restaurante",
    course: "Clase / área",
    duration: "Duración aproximada",
    durationPlaceholder: "Ej.: 4 semanas",
    studentLevel: "Nivel de los estudiantes",
    studentLevelPlaceholder: "Ej.: Pregrado, curso introductorio",
    projectDescription: "Descripción actual del proyecto",
    projectDescriptionHelp: "Pega la actividad tal como existe actualmente. Incluye entregables y etapas principales cuando sea posible.",
    projectDescriptionPlaceholder: "Pega aquí las instrucciones del proyecto...",
    learningObjectives: "Objetivos de aprendizaje",
    learningObjectivesHelp: "Opcional, pero recomendado. Estos se preservarán.",
    learningObjectivesPlaceholder: "¿Qué deben saber o ser capaces de hacer los estudiantes?",
    essentialRequirements: "Requisitos no negociables",
    essentialRequirementsHelp: "Elementos que deben mantenerse para preservar el rigor académico.",
    essentialRequirementsPlaceholder: "Ej.: el logo final debe ser vectorial; la participación en crítica es requerida",
    knownBarriers: "Barreras o dificultades que has observado",
    knownBarriersHelp: "Opcional. Describe dificultades con instrucciones, ritmo, participación, herramientas, documentación del proceso, crítica o evaluación.",
    knownBarriersPlaceholder: "Ej.: algunos estudiantes tienen dificultad para organizar el process book o pedir retroalimentación",
    approaches: "Selecciona los enfoques que deseas aplicar",
    studentCentered: "Aprendizaje Centrado en el Estudiante / ACE",
    accessibility: "Accesibilidad",
    privacyTitle: "Recordatorio de privacidad:",
    privacyText: "No incluyas nombres de estudiantes, diagnósticos, calificaciones u otra información personal identificable.",
    adaptButton: "Adaptar mi proyecto",
    clearButton: "Limpiar",
    working: "Creando la adaptación…",
    error: "Ocurrió un problema. Inténtalo nuevamente.",
    chooseApproach: "Selecciona al menos un enfoque.",
    resultsEyebrow: "Adaptación UN-STANDARD",
    resultsTitle: "Tu proyecto adaptado",
    copyButton: "Copiar",
    copied: "Copiado",
    downloadButton: "Descargar TXT",
    printButton: "Imprimir / Guardar PDF",
    disclaimer: "Utiliza estas sugerencias como apoyo para la planificación. El docente mantiene la responsabilidad sobre los requisitos del curso, las obligaciones de accesibilidad y las decisiones pedagógicas finales.",
    sections: {
      summary: "Resumen de la adaptación",
      essential: "Requisitos esenciales que deben preservarse",
      flexible: "Elementos que pueden flexibilizarse",
      barriers: "Barreras potenciales y respuestas",
      udl: "Diseño Universal para el Aprendizaje (DUA)",
      engagement: "Compromiso e implicación",
      representation: "Representación",
      actionExpression: "Acción y expresión",
      sel: "Aprendizaje Socioemocional (ASE)",
      agency: "Elección y agencia del estudiante",
      accessibility: "Consideraciones de accesibilidad",
      designThinking: "Oportunidades de Design Thinking",
      checkpoints: "Puntos de seguimiento y retroalimentación",
      assessment: "Adaptaciones de evaluación",
      revised: "Proyecto revisado",
      steps: "Secuencia sugerida",
      revisedAssessment: "Enfoque de evaluación",
      flexibilityNote: "Nota sobre flexibilidad"
    },
    barrierLabels: { barrier: "Barrera", why: "Por qué importa", adaptation: "Respuesta posible" }
  }
};

let currentLang = "en";
let latestResult = null;
const form = document.getElementById("adapter-form");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const statusEl = document.getElementById("form-status");
const resultsEl = document.getElementById("results");
const resultsContent = document.getElementById("results-content");
const resultTitle = document.getElementById("result-title");
const copyBtn = document.getElementById("copy-btn");
const downloadBtn = document.getElementById("download-btn");
const printBtn = document.getElementById("print-btn");

function t(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], translations[currentLang]);
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = t(el.dataset.i18nPlaceholder);
    if (value) el.placeholder = value;
  });
  if (latestResult) renderResults(latestResult);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

function collectFormData() {
  const fd = new FormData(form);
  return {
    language: currentLang,
    projectTitle: fd.get("projectTitle")?.trim(),
    course: fd.get("course"),
    duration: fd.get("duration")?.trim(),
    studentLevel: fd.get("studentLevel")?.trim(),
    projectDescription: fd.get("projectDescription")?.trim(),
    learningObjectives: fd.get("learningObjectives")?.trim(),
    essentialRequirements: fd.get("essentialRequirements")?.trim(),
    knownBarriers: fd.get("knownBarriers")?.trim(),
    approaches: fd.getAll("approaches")
  };
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = collectFormData();
  if (!payload.approaches.length) {
    statusEl.textContent = t("chooseApproach");
    return;
  }

  submitBtn.disabled = true;
  statusEl.textContent = t("working");

  try {
    const response = await fetch("/.netlify/functions/adapt-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Request failed");

    latestResult = data.result;
    renderResults(latestResult);
    statusEl.textContent = "";
    resultsEl.classList.remove("hidden");
    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error(error);
    statusEl.textContent = `${t("error")} ${error.message || ""}`.trim();
  } finally {
    submitBtn.disabled = false;
  }
});

clearBtn.addEventListener("click", () => {
  form.reset();
  document.querySelectorAll('input[name="approaches"]').forEach((cb, i) => cb.checked = i < 4);
  latestResult = null;
  resultsEl.classList.add("hidden");
  resultsContent.innerHTML = "";
  statusEl.textContent = "";
  form.querySelector("input, textarea, select")?.focus();
});

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function list(items = [], ordered = false) {
  if (!items.length) return "<p>—</p>";
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</${tag}>`;
}
function section(title, html) {
  return `<section class="result-section"><h3>${escapeHtml(title)}</h3>${html}</section>`;
}

function renderResults(data) {
  const s = t("sections");
  const b = t("barrierLabels");
  resultTitle.textContent = data.revisedProject?.title || t("resultsTitle");

  const barriers = (data.potentialBarriers || []).map(item => `
    <div class="barrier-card">
      <strong>${escapeHtml(b.barrier)}: ${escapeHtml(item.barrier)}</strong>
      <p><b>${escapeHtml(b.why)}:</b> ${escapeHtml(item.whyItMatters)}</p>
      <p><b>${escapeHtml(b.adaptation)}:</b> ${escapeHtml(item.adaptation)}</p>
    </div>`).join("") || "<p>—</p>";

  const udl = `
    <h4>${escapeHtml(s.engagement)}</h4>${list(data.udl?.engagement)}
    <h4>${escapeHtml(s.representation)}</h4>${list(data.udl?.representation)}
    <h4>${escapeHtml(s.actionExpression)}</h4>${list(data.udl?.actionExpression)}
  `;

  const revised = `
    <div class="revised-project">
      <p>${escapeHtml(data.revisedProject?.overview || "")}</p>
      <h4>${escapeHtml(s.steps)}</h4>${list(data.revisedProject?.steps, true)}
      <h4>${escapeHtml(s.revisedAssessment)}</h4><p>${escapeHtml(data.revisedProject?.assessment || "")}</p>
      <h4>${escapeHtml(s.flexibilityNote)}</h4><p>${escapeHtml(data.revisedProject?.flexibilityNote || "")}</p>
    </div>`;

  resultsContent.innerHTML = [
    section(s.summary, `<p>${escapeHtml(data.summary || "")}</p>`),
    section(s.essential, list(data.essentialRequirements)),
    section(s.flexible, list(data.flexibleElements)),
    section(s.barriers, barriers),
    section(s.udl, udl),
    section(s.sel, list(data.sel)),
    section(s.agency, list(data.studentAgency)),
    section(s.accessibility, list(data.accessibility)),
    section(s.designThinking, list(data.designThinking)),
    section(s.checkpoints, list(data.checkpoints)),
    section(s.assessment, list(data.assessment)),
    section(s.revised, revised)
  ].join("");
}

function resultAsText() {
  if (!latestResult) return "";
  const s = t("sections");
  const b = t("barrierLabels");
  const d = latestResult;
  const lines = [];
  const add = (heading, items) => {
    lines.push(`\n${heading}\n${"-".repeat(heading.length)}`);
    if (Array.isArray(items)) items.forEach(x => lines.push(`• ${x}`));
    else lines.push(items || "—");
  };

  add(s.summary, d.summary);
  add(s.essential, d.essentialRequirements);
  add(s.flexible, d.flexibleElements);
  lines.push(`\n${s.barriers}\n${"-".repeat(s.barriers.length)}`);
  (d.potentialBarriers || []).forEach(x => {
    lines.push(`${b.barrier}: ${x.barrier}`);
    lines.push(`${b.why}: ${x.whyItMatters}`);
    lines.push(`${b.adaptation}: ${x.adaptation}\n`);
  });
  add(`${s.udl} — ${s.engagement}`, d.udl?.engagement || []);
  add(`${s.udl} — ${s.representation}`, d.udl?.representation || []);
  add(`${s.udl} — ${s.actionExpression}`, d.udl?.actionExpression || []);
  add(s.sel, d.sel);
  add(s.agency, d.studentAgency);
  add(s.accessibility, d.accessibility);
  add(s.designThinking, d.designThinking);
  add(s.checkpoints, d.checkpoints);
  add(s.assessment, d.assessment);

  lines.push(`\n${s.revised}\n${"-".repeat(s.revised.length)}`);
  lines.push(d.revisedProject?.title || "");
  lines.push(d.revisedProject?.overview || "");
  lines.push(`\n${s.steps}`);
  (d.revisedProject?.steps || []).forEach((x, i) => lines.push(`${i + 1}. ${x}`));
  lines.push(`\n${s.revisedAssessment}\n${d.revisedProject?.assessment || ""}`);
  lines.push(`\n${s.flexibilityNote}\n${d.revisedProject?.flexibilityNote || ""}`);
  return lines.join("\n");
}

copyBtn.addEventListener("click", async () => {
  if (!latestResult) return;
  await navigator.clipboard.writeText(resultAsText());
  copyBtn.textContent = t("copied");
  setTimeout(() => copyBtn.textContent = t("copyButton"), 1500);
});

downloadBtn.addEventListener("click", () => {
  if (!latestResult) return;
  const blob = new Blob([resultAsText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const title = latestResult.revisedProject?.title || "UN-STANDARD-adapted-project";
  a.href = url;
  a.download = `${title.replace(/[^\w\-]+/g, "_")}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

printBtn.addEventListener("click", () => window.print());
setLanguage("en");
