import { Project, SkillItem, ExperienceItem, EducationItem, CertificationItem, AchievementItem } from "@/types";

export const PERSONAL_INFO = {
  name: "Soham Mangroliya",
  title: "AI/ML Engineer | Data Scientist | Python Developer",
  tagline: "B.E. IT Student (7th Sem) at LDRP | Actively Seeking AI/ML Engineer & Python Developer Internships.",
  bio: "Final-year Information Technology student passionate about Artificial Intelligence, Machine Learning, and Data Science. I enjoy building end-to-end AI applications ranging from resume screening systems and stock market intelligence platforms to computer vision and deep learning solutions. My focus is on writing clean, scalable software while continuously exploring modern AI technologies.",
  location: "Currently in Gandhinagar, Gujarat | Originally from Surat, Gujarat",
  email: "sohammangroliya12@gmail.com",
  phone: "+91 7984064034",
  github: "https://github.com/soham-1801",
  linkedin: "https://www.linkedin.com/in/soham-mangroliya/",
  twitter: "https://twitter.com/soham-1801",
  resumeUrl: "/Soham_Resume.pdf",
};

export const SKILLS_DATA: SkillItem[] = [
  // AI & Machine Learning
  { name: "Deep Learning (PyTorch / TensorFlow)", level: "Advanced", category: "AI & Machine Learning" },
  { name: "Large Language Models & RAG", level: "Advanced", category: "AI & Machine Learning" },
  { name: "Computer Vision (OpenCV / YOLO)", level: "Advanced", category: "AI & Machine Learning" },
  { name: "Natural Language Processing (NLP)", level: "Advanced", category: "AI & Machine Learning" },
  { name: "LangChain / LlamaIndex / Agentic AI", level: "Advanced", category: "AI & Machine Learning" },
  { name: "Generative AI & Prompt Engineering", level: "Advanced", category: "AI & Machine Learning" },

  // Data Science & Big Data
  { name: "Data Manipulation (Pandas / NumPy)", level: "Advanced", category: "Data Science & Big Data" },
  { name: "Statistical Modeling & A/B Testing", level: "Advanced", category: "Data Science & Big Data" },
  { name: "Data Visualization (Matplotlib / Seaborn / Plotly)", level: "Advanced", category: "Data Science & Big Data" },
  { name: "Feature Engineering & EDA", level: "Advanced", category: "Data Science & Big Data" },
  { name: "Big Data (PySpark / SQL / NoSQL)", level: "Intermediate", category: "Data Science & Big Data" },

  // Python & Backend
  { name: "Core Python & Advanced OOP", level: "Advanced", category: "Python & Backend" },
  { name: "FastAPI / REST APIs", level: "Advanced", category: "Python & Backend" },
  { name: "Flask / Django", level: "Intermediate", category: "Python & Backend" },
  { name: "Asynchronous Programming & Multithreading", level: "Advanced", category: "Python & Backend" },
  { name: "Database Design (PostgreSQL / MongoDB / Vector DBs)", level: "Advanced", category: "Python & Backend" },

  // DevOps & Cloud
  { name: "Docker & Containerization", level: "Advanced", category: "DevOps & Cloud" },
  { name: "MLOps (MLflow / DVC / Kubeflow)", level: "Intermediate", category: "DevOps & Cloud" },
  { name: "AWS / GCP Cloud Services", level: "Intermediate", category: "DevOps & Cloud" },
  { name: "CI/CD Pipelines (GitHub Actions)", level: "Advanced", category: "DevOps & Cloud" },
  { name: "Model Serving (Triton / TorchServe / ONNX)", level: "Intermediate", category: "DevOps & Cloud" },

  // Tools & Frameworks
  { name: "Git & Version Control", level: "Advanced", category: "Tools & Frameworks" },
  { name: "Jupyter / Colab / VS Code", level: "Advanced", category: "Tools & Frameworks" },
  { name: "Linux / Bash Scripting", level: "Advanced", category: "Tools & Frameworks" },
  { name: "Postman / API Testing", level: "Advanced", category: "Tools & Frameworks" },
];

export const TECH_STACK = [
  { name: "Python", icon: "SiPython", color: "text-blue-400" },
  { name: "PyTorch", icon: "SiPytorch", color: "text-orange-500" },
  { name: "TensorFlow", icon: "SiTensorflow", color: "text-amber-500" },
  { name: "FastAPI", icon: "SiFastapi", color: "text-emerald-400" },
  { name: "OpenCV", icon: "SiOpencv", color: "text-green-500" },
  { name: "Pandas", icon: "SiPandas", color: "text-indigo-400" },
  { name: "NumPy", icon: "SiNumpy", color: "text-cyan-400" },
  { name: "Scikit-Learn", icon: "SiScikitlearn", color: "text-orange-400" },
  { name: "Docker", icon: "SiDocker", color: "text-blue-500" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-300" },
  { name: "Next.js", icon: "SiNextdotjs", color: "text-white" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-300" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-ats-resume-analyzer",
    title: "AI ATS Resume Analyzer ⭐ (Hero Project)",
    description: "An intelligent ATS screening tool with automated resume parsing, OCR capabilities, AI-driven improvement suggestions, JWT authentication, and an interactive analytics dashboard for job seekers and recruiters.",
    tags: ["AI Resume Parsing", "ATS Score", "OCR", "Authentication", "Candidate Dashboard", "Analytics"],
    metrics: "Automated Resume Scoring | Instant Keyword Gap Detection",
    category: "AI / ML",
    image: "/images/ResumeATS.png",
    githubUrl: "https://github.com/soham-1801/AI-ATS-Resume-Analyzer",
    featured: true,
    stars: "AI Powered",
    commits: "FastAPI Backend",
    duration: "NLP + OCR",
    status: "Live Production",
    overview: "An enterprise-grade automated resume screening system designed to streamline recruitment by parsing PDF/DOCX resumes and evaluating candidate qualifications against specific job descriptions.",
    problem: "Traditional Applicant Tracking Systems (ATS) rely heavily on rigid keyword matching, often rejecting qualified candidates due to formatting nuances or synonyms, while recruiters spend hours manually reviewing unstructured resumes.",
    solution: "Built an AI-driven resume engine leveraging advanced OCR and NLP to intelligently parse candidate profiles, calculate semantic similarity scores, and provide actionable feedback on missing skills and formatting gaps.",
    techStackDetails: ["Python 3.11", "Natural Language Processing (NLP)", "Optical Character Recognition (OCR)", "Large Language Models (LLMs)", "JWT Authentication", "FastAPI Backend", "Interactive Analytics Dashboard"],
    keyFeatures: [
      "Automated multi-format resume parsing (PDF, DOCX, Images via OCR)",
      "Semantic similarity scoring against custom Job Descriptions",
      "AI-driven improvement suggestions and keyword gap detection",
      "Secure JWT-based authentication for job seekers and recruiter portals",
      "Interactive recruitment analytics and candidate leaderboard dashboard"
    ],
    challengesLearnings: "Overcame complex PDF layout extraction challenges by implementing fallback OCR pipelines with Tesseract and optimizing token processing for real-time scoring under 2 seconds per resume.",
    architectureDiagram: `[ PDF / DOCX Resume Input ] ---> [ OCR Pipeline (Tesseract) ]
                                          |
                                          v
[ Custom Job Description ] ---> [ NLP Semantic Engine & BERT ]
                                          |
                                          v
                              [ Scoring & Keyword Gap Analyzer ]
                                          |
                                          v
                             [ Interactive Analytics Dashboard ]`,
    folderStructure: `├── app/
│   ├── api/
│   │   ├── v1/endpoints/parse.py
│   │   └── v1/endpoints/score.py
│   ├── core/
│   │   ├── ocr_engine.py
│   │   └── nlp_scorer.py
│   ├── models/
│   │   └── resume_schema.py
│   └── main.py
├── dashboard/
│   ├── components/
│   └── pages/
├── tests/
└── docker-compose.yml`,
    futureImprovements: [
      "Integrate multi-lingual resume parsing for European and Asian job markets",
      "Add LLM agentic workflow for automated mock interview question generation",
      "Implement WebSocket real-time progress streaming for bulk resume batch evaluation"
    ],
    screenshots: ["/images/ResumeATS.png", "/images/QuantLensAI.png", "/images/gym-mentor-ai.png"],
  },
  {
    id: "quantlens-ai",
    title: "QuantLens AI - Stock Research & Analytics",
    description: "A smart stock research and portfolio analytics platform offering real-time market data visualization, financial sentiment analysis, and intelligent quantitative metrics for modern investors.",
    tags: ["Stock Research", "Technical Indicators", "News Sentiment", "Recommendation Engine"],
    metrics: "Smart Portfolio Analytics | Real-time Market Data",
    category: "Data Science",
    image: "/images/QuantLensAI.png",
    githubUrl: "https://github.com/soham-1801/quantlens-ai",
    featured: true,
    stars: "Data Science",
    commits: "React Frontend",
    duration: "NLP Sentiment",
    status: "Live Demo",
    overview: "A quantitative stock research and portfolio analytics platform offering real-time financial market visualization, technical indicator calculations, and sentiment insights for retail investors.",
    problem: "Modern retail investors face data overload across disparate financial news sources and lagging technical charts, making it difficult to perform rapid quantitative sentiment analysis before executing trades.",
    solution: "Developed a unified financial research dashboard that aggregates real-time market feeds, computes key technical indicators (RSI, MACD, Moving Averages), and utilizes NLP sentiment analysis on news headlines to generate intelligent buy/hold scores.",
    techStackDetails: ["Python / FastAPI Backend", "React & Next.js Frontend", "Financial Data APIs (YFinance / Alpha Vantage)", "Pandas & NumPy for Quantitative Modeling", "Tailwind CSS & Charting Libraries"],
    keyFeatures: [
      "Real-time interactive stock price charting and volume visualization",
      "Automated technical indicator calculations (RSI, MACD, Bollinger Bands)",
      "News sentiment scoring engine using financial domain NLP models",
      "Custom portfolio watchlists with risk metric evaluation",
      "Responsive dark-mode UI optimized for rapid financial research"
    ],
    challengesLearnings: "Learned how to handle high-frequency time-series data efficiently using NumPy vectorization and optimized frontend re-renders during live API data polling.",
    architectureDiagram: `[ Live Market Data API ] ----> [ Pandas / NumPy Time Series Processor ]
                                          |
                                          v
[ Financial News Feeds ] ----> [ FinBERT Domain Sentiment Classifier ]
                                          |
                                          v
                               [ Buy / Hold Recommendation Engine ]
                                          |
                                          v
                              [ Interactive Charting & UI Dashboard ]`,
    folderStructure: `├── backend/
│   ├── api/
│   │   └── market_routes.py
│   ├── services/
│   │   ├── indicators.py
│   │   └── sentiment_analyzer.py
│   └── main.py
├── frontend/
│   ├── components/
│   │   ├── PriceChart.tsx
│   │   └── SentimentBadge.tsx
│   └── app/
└── config.yaml`,
    futureImprovements: [
      "Add automated email alerts for technical Bollinger Band breakouts",
      "Integrate SEC 10-K filing summarization via RAG",
      "Implement backtesting simulation engine with customizable risk parameters"
    ],
    screenshots: ["/images/QuantLensAI.png", "/images/ResumeATS.png", "/images/NeuralArt.png"],
  },
  {
    id: "gym-mentor-ai",
    title: "Gym Mentor AI - Personal Fitness Coach",
    description: "An AI-powered personal fitness coach featuring smart workout planning, real-time posture tracking, and progress analytics. Utilizes advanced computer vision to analyze exercise form and provide actionable feedback.",
    tags: ["Workout Generator", "Progress Tracking", "Authentication"],
    metrics: "Real-Time Exercise Tracking | Smart Progress Analytics",
    category: "AI / ML",
    image: "/images/gym-mentor-ai.png",
    githubUrl: "https://github.com/soham-1801/gym-mentor-ai",
    featured: false,
    stars: "Computer Vision",
    commits: "OpenCV + MediaPipe",
    duration: "PyTorch",
    status: "Active Deployment",
    overview: "A real-time personal fitness coaching application that utilizes computer vision to analyze workout ergonomics, count repetitions, and provide instant posture feedback.",
    problem: "Exercising without a professional trainer often leads to incorrect exercise posture, increasing injury risks and reducing workout efficacy for fitness enthusiasts working out at home.",
    solution: "Engineered a low-latency computer vision system using OpenCV and MediaPipe 33-landmark pose estimation to track joint angles in real-time, automatically counting valid repetitions and alerting users to form deviations.",
    techStackDetails: ["Python", "OpenCV", "MediaPipe 33-Landmark Tracking", "PyTorch / Custom Vision Models", "FastAPI", "Real-Time Video Stream Processing"],
    keyFeatures: [
      "Real-time 33-landmark body pose estimation and skeleton overlay",
      "Automated repetition counter with dynamic range-of-motion validation",
      "Instant voice and visual feedback on posture corrections (e.g., squat depth, back alignment)",
      "Secure user authentication and workout session logs",
      "Historical progress analytics with exercise volume tracking"
    ],
    challengesLearnings: "Resolved webcam frame-rate bottlenecks by decoupling video capture threads from inference loops, achieving a consistent 30+ FPS analysis on consumer hardware.",
    architectureDiagram: `[ Webcam Real-Time Video Feed ] ---> [ OpenCV Frame Grabbing & Normalization ]
                                              |
                                              v
                                 [ MediaPipe 33-Landmark Pose Estimator ]
                                              |
                                              v
                                 [ Joint Angle & Biomechanical Calculator ]
                                              |
                                              v
                               [ Instant Voice & Visual Posture Feedback ]`,
    folderStructure: `├── core/
│   ├── pose_detector.py
│   ├── angle_calculator.py
│   └── exercise_validators/
│       ├── squat.py
│       └── pushup.py
├── api/
│   └── stream_handler.py
├── models/
│   └── custom_weights.pth
└── main.py`,
    futureImprovements: [
      "Support multi-person gym class tracking with YOLOv8 person detection",
      "Add personalized workout progression recommendations based on historical fatigue",
      "Export detailed biomechanical PDF reports for physical therapists"
    ],
    screenshots: ["/images/gym-mentor-ai.png", "/images/NeuralArt.png", "/images/ResumeATS.png"],
  },
  {
    id: "neuralart-studio",
    title: "NeuralArt Studio - AI Style Transfer Web App",
    description: "Advanced Neural Style Transfer web application featuring multi-scale feature blending, AI prompt enhancement via LLMs, selective region masking, and SaaS growth features for digital artists.",
    tags: ["Style Transfer", "PyTorch", "Image Processing"],
    metrics: "Multi-Scale Feature Blending | Prompt Enhancement Engine",
    category: "Full Stack",
    image: "/images/NeuralArt.png",
    githubUrl: "https://github.com/soham-1801/NeuralArt-Studio",
    featured: false,
    stars: "Neural Network",
    commits: "PyTorch VGG-19",
    duration: "LLM Enhanced",
    status: "Stable Release",
    overview: "An advanced generative AI platform for digital artists that applies neural style transfer to blend artistic masterpieces with user photographs using deep neural networks.",
    problem: "Traditional image editing software requires extensive manual masking and technical brush skills to recreate complex artistic styles or blend disparate visual aesthetics seamlessly.",
    solution: "Built a web application powered by PyTorch neural style transfer models that extracts content and style representations from convolutional neural networks (VGG-19), enabling instantaneous multi-scale style blending.",
    techStackDetails: ["PyTorch Deep Learning Framework", "Convolutional Neural Networks (VGG-19)", "Large Language Model (LLM) Prompt Enhancer", "Python Image Processing (PIL / OpenCV)", "Modern HTML5/CSS3 Web Dashboard"],
    keyFeatures: [
      "Multi-scale neural style transfer with customizable stylization intensity",
      "LLM-powered prompt enhancement engine for generating creative style descriptions",
      "Selective region masking to preserve specific facial or focal features during stylization",
      "High-resolution artwork export with lossless formatting",
      "Clean gallery dashboard to store and compare creative iterations"
    ],
    challengesLearnings: "Learned how to balance content loss and style loss gradients during optimization iterations, dramatically reducing GPU memory consumption while preserving fine artistic textures.",
    architectureDiagram: `[ Content Image Input ] ---\\
                            +---> [ PyTorch VGG-19 Feature Extractor ]
[ Style Masterpiece ]  ---/                 |
                                            v
                              [ Content Loss + Style Loss Optimizer ]
                                            |
                                            v
                              [ LLM Prompt Enhancement Engine ]
                                            |
                                            v
                               [ Lossless High-Res Artwork Export ]`,
    folderStructure: `├── engine/
│   ├── style_transfer.py
│   ├── vgg_model.py
│   └── llm_enhancer.py
├── static/
│   ├── css/
│   └── js/
├── templates/
│   └── index.html
└── app.py`,
    futureImprovements: [
      "Deploy TensorRT optimized models for sub-second real-time video stylization",
      "Add community marketplace for sharing custom neural style weight matrices",
      "Implement text-to-style generation using Stable Diffusion prompts"
    ],
    screenshots: ["/images/NeuralArt.png", "/images/QuantLensAI.png", "/images/gym-mentor-ai.png"],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "AI/ML & Python Engineering Lead (Academic Projects)",
    company: "LDRP Institute of Technology & Research",
    location: "Gandhinagar, India",
    period: "2024 - Present",
    description: [
      "Architected and deployed real-time computer vision systems including an automated AI Gym Trainer using OpenCV, MediaPipe, and PyTorch.",
      "Developed modular Python backend services and RESTful APIs using FastAPI for real-time data processing and low-latency inference.",
      "Collaborated on technical research exploring Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and prompt engineering."
    ],
    skills: ["Python", "PyTorch", "OpenCV", "FastAPI", "MediaPipe", "LangChain", "Git"]
  },
  {
    id: "exp-2",
    role: "Self-Directed Machine Learning & Data Science Developer",
    company: "Independent / Open Source Projects",
    location: "Remote",
    period: "2023 - 2024",
    description: [
      "Solved algorithmic and data structure challenges in Python to strengthen core computational logic and performance optimization skills.",
      "Performed comprehensive Exploratory Data Analysis (EDA) and predictive modeling using Pandas, NumPy, and Scikit-Learn on real datasets.",
      "Built interactive Streamlit and web dashboards to visualize machine learning metrics and model predictions."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Streamlit", "Data Visualization", "SQL"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering (B.E.) in Information Technology",
    institution: "LDRP Institute of Technology and Research, Gandhinagar",
    period: "2023 - 2027 (Currently in 7th Sem)",
    grade: "CGPA: 7.05 / 10.0",
    description: "Specializing in Information Technology with a strong core focus on AI/ML, Python Development, Data Science, and Modern Web Systems."
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    name: "NPTEL Online Certification",
    issuer: "NPTEL / IIT (Funded by MoE, Govt. of India)",
    date: "2024",
    badge: "Verified Certificate in Programming & Data Analytics",
    link: "/NPTEL.pdf"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Architected 4+ Production-Grade AI/ML Web Applications",
    organization: "Independent Development & Research",
    year: "2024",
    description: "Built end-to-end practical AI applications including Gym Mentor AI (OpenCV posture tracking), AI ATS Resume Analyzer, QuantLens AI, and NeuralArt Studio from scratch.",
    icon: "Trophy"
  },
  {
    id: "ach-2",
    title: "Active Open Source Python Developer",
    organization: "GitHub Community",
    year: "2023 - 2024",
    description: "Consistently developing and maintaining open-source machine learning and full-stack projects on GitHub (@soham-1801), implementing clean architecture and REST APIs.",
    icon: "Award"
  },
  {
    id: "ach-3",
    title: "Information Technology Department Representative Project Lead",
    organization: "LDRP Institute of Technology & Research",
    year: "2024",
    description: "Actively applying modern computer vision, NLP, and web frameworks (Next.js/FastAPI) to solve academic and real-world engineering problem statements.",
    icon: "Star"
  }
];

export const GITHUB_STATS = {
  username: "soham-1801",
  repos: "Public Repos",
  stars: "Open Source",
  contributions: "Active Dev",
  topLanguages: ["Python", "Jupyter Notebook", "TypeScript", "HTML/CSS", "Shell"],
};
