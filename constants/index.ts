import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
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
/*
export const generator: CreateWorkflowDTO = {
  "name": "interview",
  "nodes": [
    {
      "name": "introduction",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -1114.6666364317318,
          "y": -318.66665741567914
        }
      },
      "prompt": "Hello, {{username}} lets prepare your interview. i will ask you a few questions and generate a  perfect interview just for you. Are you ready?",
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
        "firstMessage": "Hey there!"
      }
    },
    {
      "name": "conversation_1748766557774",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -1115.489167031711,
          "y": -64.95793393927057
        }
      },
      "prompt": "",
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
            "description": "what role would you like to train for ?"
          },
          {
            "enum": [],
            "type": "string",
            "title": "type",
            "description": "Are you aiming for technical, behavioral or mixed interview?"
          },
          {
            "enum": [],
            "type": "string",
            "title": "level",
            "description": "Job experience level ?"
          },
          {
            "enum": [],
            "type": "string",
            "title": "amount",
            "description": "How many questions would you like me to prepare you?"
          },
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": "A list of technology to cover during a job interview"
          }
        ]
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
          "x": -1299.195502496209,
          "y": 196.10820569392675
        }
      },
      "tool": {
        "type": "apiRequest",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "properties": {},
            "required": []
          }
        },
        "name": "Interview Generator",
        "url": "https://mock-interview-dusky-two.vercel.app/api/vapi/generate",
        "method": "POST",
        "headers": null,
        "body": {
          "type": "object",
          "required": [
            "role",
            "type",
            "level",
            "amount",
            "userid",
            "techstack"
          ],
          "properties": {
            "role": {
              "type": "string",
              "value": "{{role}}",
              "description": ""
            },
            "type": {
              "type": "string",
              "value": "{{ type }}",
              "description": ""
            },
            "level": {
              "type": "string",
              "value": "{{level}}",
              "description": ""
            },
            "amount": {
              "type": "string",
              "value": "{{ amount }}",
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
        }
      }
    },
    {
      "name": "conversation_1748767209408",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -1093.6505367320833,
          "y": 435.04206606072944
        }
      },
      "prompt": "say that the interview has been generated and thank the user for the call",
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
      "name": "hangup_1748767222239",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -1096.8906320421884,
          "y": 679.026902146407
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
      "to": "conversation_1748766557774",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "conversation_1748766557774",
      "to": "API Request",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "conversation_1748767209408",
      "to": "hangup_1748767222239",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "API Request",
      "to": "conversation_1748767209408",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    }
  ],
  "globalPrompt": ""
}
*/

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

