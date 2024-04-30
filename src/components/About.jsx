import { useEffect, useState } from "react";
import Agent from "./Agent";


const About = () => {
  const [agents, setAgent] = useState([]);
  
useEffect(()=>{
fetch('/agent.json')
.then(res => res.json())
.then(data => setAgent(data))
},[]);


  return (
    <div>
      <div className="my-10 py-4 rounded-md">
      <h2 data-aos="flip-left" className="text-3xl font-bold text-center text-[#5bafa5 underline">Meet Our Agent</h2>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      {
        agents.map(agent => <Agent key={agent.id} agent={agent}></Agent>)
      }
     </div>
     
     
    </div>
  );
};

export default About;