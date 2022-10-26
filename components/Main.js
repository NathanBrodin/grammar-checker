import { useState, useEffect } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Copy from "../public/icons/copy.svg";
import Undo from "../public/icons/undo.svg";
import Loader from "../public/icons/loader.svg";

export default function Main() {
  const [text, setText] = useState("");
  const [previousText, setPreviousText] = useState("");
  const [words, setWords] = useState(0);
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ fixed, setFixed ] = useState(false);

  function handleTextChange(e) {
    setText(e.target.value);
    setWords(countWords(e.target.value));
  }

  function countWords(str) {
    var matches = str.match(/[\w\d\’\'-]+/gi);
    return matches ? matches.length : 0;
  }

  function handleCopy() {
    setMessage("Copied to clipboard!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function handleUndo() {
    setMessage("Undo successful!");
    setText(previousText);
    setWords(countWords(previousText));

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function handleSubmit(e) {
    setFixed(true);
  }

  useEffect(() => {
    if(loading || !fixed) return;

    try {
      setLoading(true);
      setPreviousText(text);

      const fetchData = async () => {
        const res = await fetch("/api/openai", { 
          method: "POST",
          body: JSON.stringify({ 
            name: text 
          }),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        
        const data = await res.json();   
        setText(data.text); 

        setMessage("Fixed all grammar errors.");
        setFixed(false);
        setLoading(false);

        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
      fetchData();

    } catch {
      setMessage("Something went wrong. Please try again.");
    }
  }, [fixed]);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col px-2 sm:px-40 py-16 sm:py-28">
        <div className="w-full h-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-2 sm:p-4">
            <form className="flex flex-col  h-full gap-4">
                <textarea className="resize-none w-full h-full bg-white dark:bg-neutral-800 border-none focus:ring-0 placeholder-neutral-400" 
                  placeholder="Enter your text"
                  onChange={handleTextChange}
                  value={text}
                  />
                <div className="grid grid-cols-3 justify-between w-full ">
                  <div className="flex gap-4  place-self-start self-center">
                    <p className="self-center whitespace-nowrap">{words} Words</p>
                    <span className={`${words !== 0 ? 'bg-green-500' : 'bg-neutral-500'} w-1.5 h-1.5 rounded-full  self-center invisible sm:visible`}/>
                    <p className={`${words !== 0 ? 'hidden' : 'invisible sm:visible'} self-center`}>Write something amazing!</p>
                  </div>
                  <div className="place-self-center self-center">
                    <button type="button" 
                      disabled={!words} 
                      onClick={handleSubmit} 
                      className={`${words !== 0 ? 'bg-teal-600 dark:bg-teal-800 hover:bg-teal-700 dark:hover:bg-teal-900' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 cursor-not-allowed'} rounded-full px-3 py-1.5 font-bold w-32 flex justify-center`}>
                        {!loading ? <span>Fix All Errors</span> : <Loader className="p-0.5 w-6 h-6 text-gray-400 animate-spin dark:text-gray-600 fill-white" />}
                    </button>
                  </div>
                  <div className="flex  place-self-end self-center gap-4">
                    <button type="button" onClick={handleUndo}>
                      <Undo className="w-6 h-6 fill-current text-neutral-400 self-center hover:text-teal-800"/>
                    </button>
                    <CopyToClipboard text={text} onCopy={handleCopy}>
                      <button type="button">
                        <Copy className="w-6 h-6 fill-current text-neutral-400 self-center hover:text-teal-800"/>
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
            </form>
        </div>
        <div className="w-full my-4">
          {message ? <span className="bg-teal-700 text-white rounded-lg px-2 py-2 pr-6">{message}</span> : <span className="text-gray-200 dark:text-neutral-900">This is invisible</span>}
        </div>
    </div>
  )
}
