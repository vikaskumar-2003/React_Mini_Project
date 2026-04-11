import { ExternalLink } from "lucide-react";
import "./App.css";
import "animate.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [message, setMessage] = useState("");
  let [chat, setChat] = useState([]);
  const[isTyping,setTyping]=useState(false)

  const createChat = async (e) => {
    try {
      e.preventDefault();
     setChat((prev)=>[
      ...prev,
        {
          sender: "me",
          message: message,
          createdAt: new Date(),
        }
     ]);
      setTyping(true)

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": API_KEY,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Answer in short word ${message}`,
                  },
                ],
              },
            ],
          }),
        },
      );

      let data = await response.json();
      console.log(data);
      let result = data.candidates[0].content.parts[0].text;
       setChat((prev)=>[
      ...prev,
        {
          sender: "ai",
          message: result,
          createdAt: new Date(),
        }
       ]);
       setMessage("")
    } catch (err) {
      toast.error(err.message);
    }
    finally {
      setTyping(false)
     
     }

  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-9/12 mx-auto bg-white  pt-12 pb-48 min-h-screen">
        <h1 className="text-3xl font-bold text-center">AI chat</h1>
        <div className="p-8">
          {chat.map((items, index) => (
            <div key={index}>
              {
                items.sender === "me" ?(
                <div className="flex flex-col gap-1 justify-start animate__animated animate__fadeIn">
                
                <div className="bg-rose-200 text-black font-medium px-2 py-2 rounded-xl w-fit">
                  
                  {items.message}
                </div>
                  </div>) : (
                    <div className="flex flex-col gap-1 items-end animate__animated animate__fadeIn">
                      {  isTyping &&
                        <small className="text-gray-500 text-sm font-medium animate_animated animate_fadeIn">
                          Typing...
                        </small>}
                  <div className="bg-green-200 text-black font-medium px-2 py-2 rounded-xl w-fit">
                    {items.message}
                  </div>
                </div>
              )

              }
              
              {/* { items.sender==="ai" &&
                <div className="flex flex-col gap-1 items-end animate__animated animate__fadeIn">
                  <small className="text-gray-500 text-sm font-medium animate_animated animate_fadeIn">
                    Typing...
                  </small>
                  <div className="bg-green-200 text-black font-medium px-2 py-2 rounded-xl w-fit">
                    {items.message}
                  </div>
                </div>
              } */}
            </div>
          ))}
        </div>
        <div className="bg-indigo-600 p-8  fixed bottom-0 w-9/12 ">
          <form className="flex gap-4" onSubmit={createChat}>
            <input
              type="text"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value.trim());
              }}
              className="bg-white rounded-xl p-6 w-full"
              placeholder="chat with ai from here"
            />
            <button
              className="bg-yellow-400 px-10 rounded-2xl text-white flex flex-col items-center justify-center hover:bg-green-400  hover:scale-105 transition-transform duration-300
            
            "
            >
              <ExternalLink />
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
