import { useState, useRef, useEffect } from "react";
import myPhoto from "../images/linkedin-min.png";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey, How are you? What do you want to know about Aggrey"
    },
  ]);
  const [input, setInput] = useState("");
  const [hints, setHints] = useState(["Who are you", "Your location", "What's your email"]);
  const chatWindowRef = useRef(null);
  const responses = [

    {
      keywords: ["Hi", "Hey", "Hello", "Sure"],
      answer: `Hey, Is there anything you want to know about aggrey?`,
      hint: ["Location", "Skills", "Education"],
    },
    {
      keywords: ["who are you", "who is he", "who is aggrey", "who"],
      answer: `My name is Aggrey Chikane Maphutha. I was born in Ga Masemola, Limpopo, and I am a passionate junior front-end developer and UI/UX designer. I specialize in creating responsive, user-friendly interfaces and constantly learning new technologies.`,
      hint: ["Location", "Skills", "Education"],
    },
    {
      keywords: ["location", "where is he", "where do you live", "where do you stay", "where are you", "live in"],
      answer: `I currently live in Gauteng, Kempton Park, postal code 1619. 
      This is where I work on my projects and continue developing my skills.`,
      hint: ["Phone", "Email", "Portfolio"],
    },
    {
      keywords: ["phone", "call", "number", "get you"],
      answer: `You can reach me by phone at 0765216787 for professional inquiries or collaborations.`,
      hint: ["Email?", "LinkedIn?", "Portfolio?"],
    },
    {
      keywords: ["email", "contact", "reach"],
      answer: `My email address is maphuthaaggrey83@gmail.com. Feel free to send me a message anytime.`,
      hint: ["Phone?", "LinkedIn?", "Portfolio?"],
    },
    {
      keywords: ["linkedin"],
      answer: `You can connect with me on LinkedIn at www.linkedin.com/in/maphutha-chikane to see my professional profile and updates.`,
      hint: ["Portfolio?", "Agency?", "Skills?"],
    },
    {
      keywords: ["portfolio", "website", "see your work", "your projects", "worked on", "working on"],
      answer: `I have a portfolio website showcasing my projects: https://aggrey.aavenagency.co.za 
      
      You can see my web development work and design projects there.`,
      hint: ["Projects?", "Skills?", "Agency?"],
    },
    {
      keywords: ["agency", "aaven"],
      answer: `I run a web development agency, Aaven Agency, which you can find at https://www.aavenagency.co.za 
      
      We focus on building creative, responsive websites.`,
      hint: ["Portfolio?", "Skills?", "Projects?"],
    },
    {
      keywords: ["profile", "about you", "about him", "foundation","passion", "what he do", "dealing with", "everything", "yourself"],
      answer: `I am a junior front-end developer and UI/UX designer with a strong foundation in creating responsive and user-friendly web interfaces. 
      
      I am passionate about coding, design, and creativity.`,
      hint: ["Skills?", "Projects?", "Education?"],
    },
    {
      keywords: ["education", "school", "college", "study", "course", "qualification"],
      answer: `I completed Grade 12 at Phoroane Secondary School from 2015 to 2020. 
      
      Currently, I am studying IT & Computer Sciences at Nkangala TVET College. I finished NQF Level 3 in 2024, focusing on system development, system analysis, graphic design, and computer hardware & software. I am now pursuing NQF Level 4, specializing in system development, web development (UI/UX), system analysis & design, and networking.`,
      hint: ["Skills?", "Projects?", "Experience?"],
    },
    {
      keywords: ["skills", "technology", "programming", "tools", "stack",],
      answer: `My technical skills include HTML, CSS, JavaScript, React.js, Next.js, PHP, and MySQL. 
      
      I also use Figma and Adobe XD for UI/UX design. Additionally, I am familiar with Visual Studio, GitHub, Git, and I have completed courses in responsive web design and front-end development.`,
      hint: ["Projects?", "Portfolio?", "Agency?"],
    },
    {
      keywords: ["projects", "app", "website"],
      answer: `I have built several web applications and websites, all focused on providing a great user experience. 
      
      You can check out my work on my portfolio at https://aggrey.aavenagency.co.za`,
      hint: ["Skills?", "Portfolio?", "Experience?"],
    },
    {
      keywords: ["hobby", "interest", "passion"],
      answer: `I enjoy coding, designing web interfaces, and exploring new technologies. 
      
      I spend my free time learning and experimenting with different tools to improve my skills.`,
      hint: ["Skills?", "Projects?", "Experience?"],
    },
    {
      keywords: ["experience", "internship", "work"],
      answer: `I have gained practical experience through various small projects that I built. 
      
      The applications I have built helped me sharpen my web development and design skills. I never had an internship before`,
      hint: ["Skills?", "Projects?", "Portfolio?"],
    },
    {
      keywords: ["availability", "hire", "freelance", "collaborate"],
      answer: `I am open to freelance projects, collaborations, and junior opportunities where I can contribute as a front-end developer and UI/UX designer.`,
      hint: ["Portfolio?", "Contact?", "Agency?"],
    },
    {
      keywords: ["reference", "mentor", "lecturer"],
      answer: `I have references from my mentor and lecturer. 
      
      Evidence Maphutha, a Full Stack Developer, can be contacted at evidencemaphutha2@gmail.com, and Singh Renusha, my Multimedia & Programming lecturer, can be reached at singh.r@nkangalafet.edu.za.`,
      hint: ["Education?", "Experience?", "Projects?"],
    },
  ];

  const handleSend = (text) => {
    const userInput = text || input;
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    const question = userInput.toLowerCase();
    let botReply = "Try asking about projects, skills, or education.";
    let newHints = ["Who are you?", "Location?", "Email?", "Portfolio?"];

    for (const item of responses) {
      if (item.keywords.some((k) => question.includes(k))) {
        botReply = item.answer;
        newHints = item.hint;
        break;
      }
    }

    setMessages([...updatedMessages, { sender: "bot", text: botReply }]);
    setHints(newHints);
  };

  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) =>
      urlRegex.test(part) ? (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="chat-link">
          {part}
        </a>
      ) : (
        part
      )
    );
  }



  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]); 

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>Chat</button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h4>Aggrey Chatbot</h4>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>


          <div className="chat-window" ref={chatWindowRef}>
          <p>I’m your virtual assistant and will answer your questions as if I am Aggrey.</p>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-row ${msg.sender}`}>
                {msg.sender === "bot" && <img src={myPhoto} alt="bot" className="avatar" />}
                <div className={`chat-bubble ${msg.sender}`}>
                {msg.sender === "bot" ? renderTextWithLinks(msg.text) : msg.text}
                </div>
              </div>
            ))}
                      <div className="chat-hints">
            {hints.map((hint, i) => (
              <button key={i} className="hint-btn" onClick={() => handleSend(hint)}>
                {hint}
              </button>
            ))}
          </div>
          </div>



          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={() => handleSend()}><svg viewBox="0 0 24 24" width="27" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z" stroke="#000000" stroke-width="2"></path> </g></svg></button>
          </div>
        </div>
      )}
    </>
  );
}
