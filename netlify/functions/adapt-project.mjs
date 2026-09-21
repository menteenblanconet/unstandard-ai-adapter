const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    summary: { type: "string" },
    essentialRequirements: { type: "array", items: { type: "string" } },
    flexibleElements: { type: "array", items: { type: "string" } },
    potentialBarriers: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          barrier: { type: "string" },
          whyItMatters: { type: "string" },
          adaptation: { type: "string" }
        },
        required: ["barrier", "whyItMatters", "adaptation"]
      }
    },
    udl: {
      type: "object",
      additionalProperties: false,
      properties: {
        engagement: { type: "array", items: { type: "string" } },
        representation: { type: "array", items: { type: "string" } },
        actionExpression: { type: "array", items: { type: "string" } }
      },
      required: ["engagement", "representation", "actionExpression"]
    },
    sel: { type: "array", items: { type: "string" } },
    studentAgency: { type: "array", items: { type: "string" } },
    accessibility: { type: "array", items: { type: "string" } },
    designThinking: { type: "array", items: { type: "string" } },
    checkpoints: { type: "array", items: { type: "string" } },
    assessment: { type: "array", items: { type: "string" } },
    revisedProject: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        overview: { type: "string" },
        steps: { type: "array", items: { type: "string" } },
        assessment: { type: "string" },
        flexibilityNote: { type: "string" }
      },
      required: ["title", "overview", "steps", "assessment", "flexibilityNote"]
    }
  },
  required: [
    "summary", "essentialRequirements", "flexibleElements", "potentialBarriers",
    "udl", "sel", "studentAgency", "accessibility", "designThinking",
    "checkpoints", "assessment", "revisedProject"
  ]
};

const SYSTEM_INSTRUCTIONS = `
You are the UN-STANDARD Inclusive Project Adapter, an instructional design assistant for university-level Graphic Design education.

Your task is to help educators adapt an existing assignment while preserving its essential learning outcomes and academic rigor.

Core principles:
- Universal Design for Learning (UDL/DUA): engagement, representation, action and expression.
- Social and Emotional Learning (SEL/ASE), only when pedagogically relevant.
- Student-Centered Learning / Aprendizaje Centrado en el Estudiante (ACE): meaningful choice, agency, reflection, and appropriate autonomy.
- Accessibility: clear instructions, usable formats, multiple pathways where they do not undermine essential requirements, predictable structure, and equitable participation.
- Design Thinking, when selected or already relevant to the project.

Rules:
1. Preserve the instructor's stated learning objectives and non-negotiable requirements.
2. Do not lower academic expectations. Distinguish flexibility from reduced rigor.
3. Do not assume a disability, diagnosis, learning difference, or accommodation for any individual student.
4. Suggest proactive course-design strategies that can benefit varied learners.
5. Recommendations must be concrete and realistic for a Graphic Design classroom.
6. When multiple ways of participating or demonstrating learning are suggested, keep the same learning objective and assessment standard.
7. Do not require a specific technology when an equivalent accessible alternative would work.
8. Use the selected approaches. For an approach that was not selected and is not relevant, return an empty array in its corresponding field.
9. Write in the language requested by the user: English for "en" and Spanish for "es".
10. Produce concise but useful recommendations, not generic definitions.
`;

function getOutputText(data) {
  const parts = [];
  for (const item of data.output || []) {
    if (item.type !== "message") continue;
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) parts.push(content.text);
    }
  }
  return parts.join("\n");
}

function clean(value, max = 14000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "OPENAI_API_KEY is not configured in Netlify." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON request." }, { status: 400 });
  }

  const projectTitle = clean(body.projectTitle, 160);
  const projectDescription = clean(body.projectDescription, 14000);
  const approaches = Array.isArray(body.approaches)
    ? body.approaches.map(x => clean(String(x), 120)).slice(0, 8)
    : [];

  if (!projectTitle || !projectDescription || approaches.length === 0) {
    return Response.json(
      { error: "Project title, project description, and at least one approach are required." },
      { status: 400 }
    );
  }

  const language = body.language === "es" ? "es" : "en";

  const userInput = `
Requested output language: ${language}

PROJECT TITLE:
${projectTitle}

COURSE / AREA:
${clean(body.course, 160)}

STUDENT LEVEL:
${clean(body.studentLevel, 160) || "Not provided"}

DURATION:
${clean(body.duration, 120) || "Not provided"}

CURRENT PROJECT DESCRIPTION:
${projectDescription}

LEARNING OBJECTIVES:
${clean(body.learningObjectives, 5000) || "Not explicitly provided. Infer cautiously from the assignment and label them as inferred in your wording."}

NON-NEGOTIABLE / ESSENTIAL REQUIREMENTS:
${clean(body.essentialRequirements, 5000) || "Not explicitly provided. Preserve the core disciplinary learning demonstrated by the assignment."}

KNOWN BARRIERS OR CHALLENGES:
${clean(body.knownBarriers, 5000) || "None provided. Identify only plausible barriers in the assignment design; do not infer student diagnoses."}

SELECTED APPROACHES:
${approaches.map(x => `- ${x}`).join("\n")}

Create a practical adaptation. In the revised project, keep the original disciplinary purpose recognizable and clearly distinguish essential requirements from flexible pathways.
`;

  try {
    const apiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
        reasoning: {
  effort: "none"
},
        instructions: SYSTEM_INSTRUCTIONS,
        input: userInput,
        max_output_tokens: 3500,
        text: {
          format: {
            type: "json_schema",
            name: "unstandard_project_adaptation",
            strict: true,
            schema
          }
        }
      })
    });

    const data = await apiResponse.json();

    console.log("OpenAI status:", apiResponse.status);
console.log("OpenAI response:", {
  ok: apiResponse.ok,
  errorType: data?.error?.type || null,
  errorCode: data?.error?.code || null,
  errorMessage: data?.error?.message || null
});
    if (!apiResponse.ok) {
      console.error("OpenAI API error:", data);
      return Response.json(
        { error: data?.error?.message || "OpenAI API request failed." },
        { status: apiResponse.status || 500 }
      );
    }

    const outputText = getOutputText(data);
    if (!outputText) {
      return Response.json({ error: "The model returned no text output." }, { status: 502 });
    }

    let result;
    try {
      result = JSON.parse(outputText);
    } catch {
      console.error("Could not parse structured output:", outputText);
      return Response.json({ error: "Could not parse the model response." }, { status: 502 });
    }

    return Response.json({ result });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error while adapting the project." }, { status: 500 });
  }
};
