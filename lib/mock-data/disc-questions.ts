export type DiscDimension = "D" | "I" | "S" | "C"

export interface DiscOption {
  text: string
  dimension: DiscDimension
}

export interface DiscQuestion {
  id: string
  question: string
  options: DiscOption[]
}

export const discQuestions: DiscQuestion[] = [
  {
    id: "dq-01",
    question: "When you're choosing furniture, you usually...",
    options: [
      { text: "Decide quickly once you find what meets your needs", dimension: "D" },
      { text: "Get excited and share ideas with friends or family", dimension: "I" },
      { text: "Take time to make sure everyone at home is happy with the choice", dimension: "S" },
      { text: "Research thoroughly and compare all options before deciding", dimension: "C" },
    ],
  },
  {
    id: "dq-02",
    question: "If a delivery is delayed, you would most likely...",
    options: [
      { text: "Call to demand a solution and clear timeline", dimension: "D" },
      { text: "Share your frustration but stay positive about finding a fix", dimension: "I" },
      { text: "Feel concerned but give the team time to resolve it", dimension: "S" },
      { text: "Request a detailed explanation and written confirmation", dimension: "C" },
    ],
  },
  {
    id: "dq-03",
    question: "When walking into a furniture showroom, you tend to...",
    options: [
      { text: "Walk straight to what you need and make a decision fast", dimension: "D" },
      { text: "Get inspired by the displays and want to try everything", dimension: "I" },
      { text: "Imagine how the furniture would look in your home", dimension: "S" },
      { text: "Check product labels, materials and specifications first", dimension: "C" },
    ],
  },
  {
    id: "dq-04",
    question: "When it comes to home décor, you care most about...",
    options: [
      { text: "Function and durability — it has to work and last", dimension: "D" },
      { text: "Style and how it looks — your home reflects your personality", dimension: "I" },
      { text: "Comfort and how it makes your family feel", dimension: "S" },
      { text: "Quality and value for money — you want the best within budget", dimension: "C" },
    ],
  },
  {
    id: "dq-05",
    question: "When a salesperson approaches you, you prefer they...",
    options: [
      { text: "Get straight to the point and give you the key facts", dimension: "D" },
      { text: "Be friendly and enthusiastic — make it a fun experience", dimension: "I" },
      { text: "Be patient and understanding — no pressure at all", dimension: "S" },
      { text: "Be knowledgeable and answer all your detailed questions", dimension: "C" },
    ],
  },
  {
    id: "dq-06",
    question: "If you're unsure about a furniture purchase, you would...",
    options: [
      { text: "Trust your gut and commit — you can always change it later", dimension: "D" },
      { text: "Ask for opinions from people you trust", dimension: "I" },
      { text: "Sleep on it and come back when you feel ready", dimension: "S" },
      { text: "Continue researching until you feel fully confident", dimension: "C" },
    ],
  },
  {
    id: "dq-07",
    question: "Which phrase describes your home best?",
    options: [
      { text: "Efficient and organised — everything has a purpose", dimension: "D" },
      { text: "Vibrant and welcoming — guests love coming over", dimension: "I" },
      { text: "Warm and cosy — a place where family feels relaxed", dimension: "S" },
      { text: "Tastefully curated — every piece was chosen with care", dimension: "C" },
    ],
  },
  {
    id: "dq-08",
    question: "After your furniture is delivered, what matters most to you?",
    options: [
      { text: "That everything is set up quickly and correctly", dimension: "D" },
      { text: "That the result looks amazing — you can't wait to show friends", dimension: "I" },
      { text: "That your family is comfortable and happy", dimension: "S" },
      { text: "That it matches what was described — quality as expected", dimension: "C" },
    ],
  },
  {
    id: "dq-09",
    question: "If there's a problem with your furniture, you'd expect...",
    options: [
      { text: "Fast resolution — you want it fixed ASAP", dimension: "D" },
      { text: "Friendly communication — keep you in the loop throughout", dimension: "I" },
      { text: "Empathy and a fair solution that works for everyone", dimension: "S" },
      { text: "A clear process, documentation and a proper resolution report", dimension: "C" },
    ],
  },
  {
    id: "dq-10",
    question: "When browsing this website, what would you find most helpful?",
    options: [
      { text: "Clear prices, stock status and a quick checkout process", dimension: "D" },
      { text: "Inspiring room photos and customer stories", dimension: "I" },
      { text: "Honest reviews and information about after-sales support", dimension: "S" },
      { text: "Detailed specs, materials, warranties and comparison tools", dimension: "C" },
    ],
  },
]

export const discResults = {
  D: {
    type: "D",
    label: "The Decisive Buyer",
    description:
      "You know what you want and you want it done right. You value efficiency, quality and clear communication. Our team will give you the key facts upfront and respect your time.",
    communicationTip:
      "Our consultants will lead with the most important information and give you clear recommendations without lengthy explanations.",
    emoji: "🎯",
  },
  I: {
    type: "I",
    label: "The Inspired Creator",
    description:
      "You see furniture as an expression of your personality and lifestyle. You love beautiful spaces and enjoy the shopping experience. Our team will share inspiring ideas and make the journey enjoyable.",
    communicationTip:
      "Our consultants will show you room inspiration and exciting new arrivals, and enjoy the creative journey with you.",
    emoji: "✨",
  },
  S: {
    type: "S",
    label: "The Caring Homemaker",
    description:
      "Home is where your heart is. You prioritise comfort, family harmony and making thoughtful decisions. Our team will be patient, supportive and never rush you.",
    communicationTip:
      "Our consultants will share customer stories, emphasise our after-sales support and give you all the time you need.",
    emoji: "🏡",
  },
  C: {
    type: "C",
    label: "The Quality Researcher",
    description:
      "You believe great decisions are built on great information. You value accuracy, quality and getting true value for your investment. Our team will provide detailed specs and answer every question.",
    communicationTip:
      "Our consultants will provide full product documentation, honest comparisons and thorough answers to all your questions.",
    emoji: "📋",
  },
}

export const DISC_DISCLAIMER =
  "This questionnaire helps our consultants communicate with you more effectively. Your result does not affect pricing, service priority or any business decision. For entertainment purposes only."
