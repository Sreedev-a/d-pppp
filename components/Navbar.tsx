"use client";
import {useEffect,useState} from "react";
const links=["about","experience","skills","projects","evaluation","education","contact"];
export default function Navbar(){
 const [open,setOpen]=useState(false),[active,setActive]=useState(""),[progress,setProgress]=useState(0);
 useEffect(()=>{const onScroll=()=>{setProgress(scrollY/(document.documentElement.scrollHeight-innerHeight)*100);const seen=links.map(id=>document.getElementById(id)).filter(Boolean).reverse().find(el=>(el as HTMLElement).getBoundingClientRect().top<180);setActive(seen?.id||"")};onScroll();addEventListener("scroll",onScroll,{passive:true});return()=>removeEventListener("scroll",onScroll)},[]);
 return <><div className="progress" style={{width:`${progress}%`}}/><header className="nav"><a className="brand" href="#top">DHRISYA <i>C</i></a><nav className={open?"open":""} aria-label="Main navigation">{links.map(x=><a className={active===x?"active":""} onClick={()=>setOpen(false)} key={x} href={`#${x}`}>{x}</a>)}</nav><button className="menu" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/></button></header></>
}
