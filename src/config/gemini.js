import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

// ⚠️ Replace this with your actual API key and keep it secure in production

//kam
// prompt ka kam krna h run6 ka




const systemPrompt = `
You are an expert JEE Advanced Chemistry teacher with deep knowledge in Organic, Inorganic, and Physical Chemistry.
Your role is to solve high-level, complex Chemistry problems typically asked in JEE Advanced.
Provide step-by-step solutions, using clear reasoning, chemical principles, and appropriate reaction mechanisms or formulae.
Use IUPAC names, structural interpretations, and concise but precise scientific language.
You can handle multi-step synthesis, conceptual traps, advanced reaction mechanisms, hybridization theory, thermodynamics, equilibrium, electrochemistry, and coordination compounds.
Include proper chemical structures or notation (e.g., CO₂, CH₃–CH₂–OH, [Fe(CN)₆]³⁻) wherever necessary.
If the question involves multiple possible interpretations or edge-case reasoning, mention all valid possibilities.
Always aim to match or exceed the difficulty and depth of JEE Advanced 2024 Chemistry questions.
`;

const physicsSystemPrompt = `
You are an expert JEE Advanced Physics teacher with deep expertise in classical mechanics, electromagnetism, optics, modern physics, and thermodynamics.
Your role is to solve highly challenging Physics problems typical of JEE Advanced.
Present step-by-step solutions using core physics principles, formulas, and appropriate diagrams or notations (e.g., F = ma, electric field lines, ray diagrams).
Explain each step with conceptual clarity, and include alternate methods when applicable.
Use SI units consistently and maintain scientific rigor in all derivations.
Handle edge cases, tricky concepts, experimental reasoning, and multi-topic integration (e.g., mechanics + electricity).
Target the level of difficulty and precision expected from top JEE Advanced 2024 Physics problem solvers.
`;


const mathsSystemPrompt = `
You are an expert JEE Advanced Mathematics teacher with mastery in algebra, calculus, coordinate geometry, trigonometry, and probability.
Your role is to solve highly complex math problems at the level of JEE Advanced.
Provide detailed step-by-step solutions with full mathematical justification and derivation.
Include relevant formulas, theorems (e.g., Rolle’s Theorem, Bayes’ Theorem), and graphical insights where needed.
Focus on clarity, brevity, and mathematical precision.
Support multiple solving techniques (analytical, graphical, approximation) if applicable.
Tackle conceptual traps, multi-topic problems, and questions designed to mislead.
Match the depth and rigor expected from JEE Advanced 2024 Mathematics toppers.
`;


const biologySystemPrompt = `
You are an expert NEET-level Biology teacher with deep knowledge of Botany and Zoology.
Your role is to answer complex biology questions with precision and clarity.
Provide scientifically accurate and structured answers using NCERT-based facts and beyond.
Explain physiological processes, genetic mechanisms, molecular biology pathways, ecological interactions, and plant/animal anatomy.
Use proper scientific terminology (e.g., photosynthesis, DNA replication, acetylcholine, nephron, alveoli).
Clarify conceptual traps and provide illustrations or structured breakdowns when required.
Ensure your explanations support NEET 2024 aspirants aiming for top scores.
`;


async function run1(prompt) {
  const apiKey = "AIzaSyDh1bDehR9jzy1wT-kkgAGQ9TlQUkXlE80";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain",
};
  // Embed system prompt inside the first user message
  const fullPrompt = `${systemPrompt}\n\n${prompt}`;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
  });

  const result = await chatSession.sendMessage(fullPrompt);
  console.log(result.response.text());
  return result.response.text();
}


async function run2(prompt) {

  const apiKey = "AIzaSyDvIoMSFQfWP5i0njGagatlUg1ctr3tyf8";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain",
};

  // Embed system prompt inside the first user message
  const fullPrompt = `${physicsSystemPrompt}\n\n${prompt}`;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
  });

  const result = await chatSession.sendMessage(fullPrompt);
  console.log(result.response.text());
  return result.response.text();
}
async function run3(prompt) {


  const apiKey = "AIzaSyBNtuc3RJFKo1iOW3Sn2VMPRixi_UX3_pw";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain",
};
  // Embed system prompt inside the first user message
  const fullPrompt = `${mathsSystemPrompt}\n\n${prompt}`;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
  });

  const result = await chatSession.sendMessage(fullPrompt);
  console.log(result.response.text());
  return result.response.text();
}
async function run4(prompt) {


  const apiKey = "AIzaSyCQwPUode3Z9u51LVqSKr0FpsIN4FNfdvA";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain",
};

  // Embed system prompt inside the first user message
  const fullPrompt = `${biologySystemPrompt}\n\n${prompt}`;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
  });

  const result = await chatSession.sendMessage(fullPrompt);
  console.log(result.response.text());
  return result.response.text();
}

async function run5(exam , sub, num) {


  const papergene = `
  Generate an exam paper for the ${exam} in the subject of ${sub}. The paper should begin with a heading that clearly displays the exam and subject names. Below the heading, list exactly ${num} unique and relevant questions that test a range of concepts and difficulty levels appropriate for this subject. Each question should be clearly numbered and separated by one blank line for readability. Do not include answers or additional instructions—just the heading and the questions.
`;

  

  const apiKey = "AIzaSyCQwPUode3Z9u51LVqSKr0FpsIN4FNfdvA";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain",
};

  // Embed system prompt inside the first user message
  const fullPrompt = papergene;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
  });

  const result = await chatSession.sendMessage(fullPrompt);
  console.log(result.response.text());
  return result.response.text();
}




async function run6(exam , sub, topic , difficulty , numquestions) {


 const papergene = `
Generate a well-structured, in-syllabus MCQ quiz for the ${exam} in the subject of ${sub}${topic ? `, specifically focusing on the topic: ${topic}` : ''}. 
The quiz should contain exactly ${numquestions} multiple-choice questions (MCQs) that are relevant, high-quality, and match the latest syllabus and pattern of the exam.
Each question should have 4 options (A, B, C, D), with only one correct answer. 
Clearly number each question, and list the options below each question. 
Indicate the correct answer after each question as "Answer: [Option Letter]".
Set the overall difficulty to ${difficulty || 'easy'}.
Do not include explanations, extra instructions, or content outside the quiz.
Begin with a heading that displays the exam, subject${topic ? `, and topic` : ''} names.
`;

  

  const apiKey = "AIzaSyDvIoMSFQfWP5i0njGagatlUg1ctr3tyf8";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain",
};

  // Embed system prompt inside the first user message
  const fullPrompt = papergene;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
  });

  const result = await chatSession.sendMessage(fullPrompt);
  console.log(result.response.text());
  return result.response.text();
}



async function run7(exam , sub, topic) {

  const papergene = `
Generate the best possible, chapter-wise detailed revision notes for the ${exam} in the subject of ${sub}${topic ? `, specifically focusing on the topic: ${topic}` : ''}. 
Begin with a clear heading that displays the exam and subject${topic ? ` and topic` : ''} names. 
Organize the notes chapter-wise, with each chapter or major concept as a separate section. 
Within each chapter, comprehensively cover all key concepts, formulas, important facts, and include concise explanations, diagrams (if relevant), and tips for quick revision. 
Use bullet points, subheadings, and clear sections for maximum readability. 
Ensure the content is accurate, up-to-date, and suitable for last-minute revision for high performance in the exam. 
Do not include questions, answers , —just the chapter-wise revision notes.
`;

  const apiKey = "AIzaSyDh1bDehR9jzy1wT-kkgAGQ9TlQUkXlE80";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain",
};

  // Embed system prompt inside the first user message
  const fullPrompt = papergene;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
  });

  const result = await chatSession.sendMessage(fullPrompt);
  console.log(result.response.text());
  return result.response.text();
}

export { run1, run2, run3, run4 , run5 , run6 , run7};
