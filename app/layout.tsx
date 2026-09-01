import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import "./theme-responsive.css";
import "./apple.css";

export const metadata: Metadata = {
  title:"Dhrisya C | AI/ML Engineer — LLM Evaluation, Agentic AI & RAG",
  description:"Portfolio of Dhrisya C, an AI/ML Engineer focused on LLM evaluation, prompt engineering, Agentic AI, RAG, machine learning and intelligent systems.",
  metadataBase:new URL("https://dhrisya-ai-ml-portfolio.vercel.app"),
  openGraph:{title:"Dhrisya C | AI/ML Engineer",description:"Building, evaluating and improving intelligent systems.",type:"website"},
  twitter:{card:"summary_large_image",title:"Dhrisya C | AI/ML Engineer",description:"LLM Evaluation · Prompt Engineering · Agentic AI · RAG"},
  icons:{icon:"/favicon.svg"}
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
