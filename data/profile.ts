export const profile = {
  name: "Dhrisya C",
  role: "AI/ML Engineer | LLM Evaluation, Prompt Engineering & Agentic AI",
  email: "dhrisya555@gmail.com",
  phone: "+91 6383679955",
  location: "Bangalore, India",
  resume: "/resume/Dhrisya-C-Resume.pdf",
  socials: { linkedin: "", github: "" },
  education: { school: "Don Bosco Institute of Technology, Bangalore", degree: "B.E. Computer Science Engineering (AI & ML)", cgpa: "7.69", period: "November 2022 – June 2026" },
};

export const projects = [
  {number:"01",title:"LLM Recommender — Agentic Pipeline",date:"Prototype / Present",description:"A five-stage recommendation pipeline that moves from intent detection to a validated response across a 14-model catalog.",tech:["FastAPI","Google Gemini API","Qdrant"],flow:["Intent","Retrieval","Reasoning","Validation","Response"],accent:"violet",contribution:"Designed the system architecture and made validation a first-class pipeline stage.",evaluation:"Candidate responses are checked in the validation stage before response generation."},
  {number:"02",title:"Real-Time Object Detection & Tracking",date:"December 2025",description:"A real-time object detection and multi-object tracking system validated against webcam and RTSP feeds.",tech:["YOLOv8","DeepSORT","FastAPI","Streamlit","Docker"],flow:["Video / RTSP","YOLOv8","Detection","DeepSORT","Tracking IDs","API"],accent:"cyan",contribution:"Integrated detection, identity tracking, and an API-driven interface.",evaluation:"Validated system behavior using both webcam and RTSP video sources."},
  {number:"03",title:"DocuMind — RAG Document Q&A",date:"September 2026",description:"A retrieval-augmented Q&A system for scanned and native-text documents, with answer-quality evaluation across both formats.",tech:["FAISS","Sentence-Transformers","FlanT5","BART","Tesseract OCR"],flow:["Document","OCR / Text","Chunking","Embeddings","FAISS","Retrieval","Answer"],accent:"blue",contribution:"Built a document-to-answer pipeline that handles both OCR and native text.",evaluation:"Compared answer quality across scanned and native-text document inputs."},
  {number:"04",title:"Sentiment-Aware Support Chatbot",date:"February 2026",description:"Fine-tuned and evaluated transformer models for real-time sentiment classification, deployed as a containerized API.",tech:["DistilBERT","RoBERTa","FastAPI","Docker"],flow:["Message","Processing","Sentiment Model","Classify","Response"],accent:"pink",contribution:"Connected model evaluation to a production-oriented inference service.",evaluation:"Evaluated DistilBERT and RoBERTa before API deployment."}
];

export const skills = {
  "AI / ML":["Machine Learning","Deep Learning","NLP","Computer Vision","LLMs","Agentic AI","RAG","Model Evaluation","Rubric-Based Test Design","Output Validation","Prompt Engineering"],
  "Languages & Frameworks":["Python","SQL","PostgreSQL","PyTorch","TensorFlow","Scikit-learn","Hugging Face","Sentence-Transformers","LangChain","YOLOv8","DeepSORT"],
  "Backend & Infrastructure":["FastAPI","REST APIs","Docker","AWS","Git / GitHub","Streamlit","Qdrant","FAISS","Vector Databases","CI/CD"],
  "Professional":["Technical Writing","Structured Feedback","Stakeholder Documentation","Sprint Planning","MoSCoW","Cross-Functional Collaboration"]
};
