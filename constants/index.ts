import { CreateAssistantDTO, CreateWorkflowDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";



export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const generator: CreateWorkflowDTO = {
  "name": "AI Interview Generator",
  "nodes": [
    {
      "name": "introduction",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -633.3333027035404,
          "y": -565.3332852169182
        }
      },
      "prompt": "Hello! I'm your AI Interview Assistant. Let's create a new interview together. \nCould you please tell me:\n- The **job role** you are preparing for (e.g., Frontend, Backend, Fullstack)?\n- The **experience level** (entry, mid, senior)?\n- The **technologies** you want to cover (e.g., React, Node.js)?\n- The **type** of interview you'd like (behavioral, technical, or mixed)?\n- And how many **questions** you’d like me to generate?\n",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "voice": {
        "voiceId": "Neha",
        "provider": "vapi"
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "role",
            "description": ""
          },
          {
            "enum": [
              " entry, mid, senior"
            ],
            "type": "string",
            "title": "level",
            "description": ""
          },
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": ""
          },
          {
            "enum": [
              " behavioral, technical, mixed"
            ],
            "type": "string",
            "title": "type",
            "description": ""
          },
          {
            "enum": [],
            "type": "number",
            "title": "amount",
            "description": ""
          }
        ]
      },
      "messagePlan": {
        "firstMessage": "Hey there!"
      }
    },
    {
      "name": "conversation_1748876012334",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -348.0000306297925,
          "y": -37.99997895964496
        }
      },
      "prompt": "Great! Let me confirm:\n- **Role**: {{ role }}\n- **Experience Level**: {{ level }}\n- **Technologies**: {{ techstack }}\n- **Interview Type**: {{ type }}\n- **Number of Questions**: {{ amount }}\n\nI’ll now prepare your interview. Please hold on!",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "voice": {
        "voiceId": "Neha",
        "provider": "vapi"
      },
      "messagePlan": {
        "firstMessage": ""
      }
    },
    {
      "name": "API Request",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -683.9999879849979,
          "y": 366.6666680768782
        }
      },
      "tool": {
        "url": "https://mock-interview-dusky-two.vercel.app/api/vapi/generate",
        "body": {
          "type": "object",
          "required": [
            "role",
            "amount",
            "techstack",
            "type",
            "level",
            "userid"
          ],
          "properties": {
            "role": {
              "type": "string",
              "value": "{{role}}",
              "description": ""
            },
            "type": {
              "type": "string",
              "value": "{{type}}",
              "description": ""
            },
            "level": {
              "type": "string",
              "value": "",
              "description": ""
            },
            "amount": {
              "type": "string",
              "value": "{{amount}}",
              "description": ""
            },
            "userid": {
              "type": "string",
              "value": "{{ userid }}",
              "description": ""
            },
            "techstack": {
              "type": "string",
              "value": "{{techstack}}",
              "description": ""
            }
          }
        },
        "type": "apiRequest",
        "method": "POST",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          }
        }
      }
    },
    {
      "name": "conversation_1748876543810",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -1153.333261750999,
          "y": 637.9999987026055
        }
      },
      "prompt": "Thank you! The AI Interview has been generated successfully. Good luck with your preparation!\n",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "voice": {
        "voiceId": "Neha",
        "provider": "vapi"
      },
      "messagePlan": {
        "firstMessage": "success"
      }
    },
    {
      "name": "hangup_1748876591045",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -591.9999879849979,
          "y": 866.6666680768782
        }
      },
      "tool": {
        "type": "endCall"
      }
    }
  ],
  "edges": [
    {
      "from": "introduction",
      "to": "conversation_1748876012334",
      "condition": {
        "type": "ai",
        "prompt": "if the user said yes"
      }
    },
    {
      "from": "conversation_1748876012334",
      "to": "API Request",
      "condition": {
        "type": "ai",
        "prompt": "if the user said yes"
      }
    },
    {
      "from": "API Request",
      "to": "conversation_1748876543810",
      "condition": {
        "type": "ai",
        "prompt": "if the user said yes"
      }
    },
    {
      "from": "conversation_1748876543810",
      "to": "hangup_1748876591045",
      "condition": {
        "type": "ai",
        "prompt": "if the user said yes"
      }
    }
  ],
  "globalPrompt": ""
}

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage: "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
  clientMessages: [],
  serverMessages: []
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

