import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Copy from "../public/icons/copy.svg";

export default function Main() {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [ textErrors, setTextErrors ] = useState(0);
  const [ message, setMessage ] = useState("");

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

  function handleFixError() {
    setMessage("Fixed all grammar errors.");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col px-40 py-28">
        <div className="w-full h-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4">
            <form className="flex flex-col  h-full gap-4">
                <textarea className="resize-none w-full h-full bg-white dark:bg-neutral-800 border-none focus:ring-0 placeholder-neutral-400" 
                  placeholder="Enter your text"
                  onChange={handleTextChange}
                  value={text}
                  />
                <div className="grid grid-cols-3 justify-between w-full ">
                  <div className="flex gap-4  place-self-start self-center">
                    <p className="self-center">{words} Words</p>
                    <span className={`${textErrors > 1 ? 'bg-red-500' : words !== 0 ? 'bg-green-500' : 'bg-neutral-500'} w-1.5 h-1.5 rounded-full  self-center`}/>
                    <p className={`${words < 1 ? 'hidden' : 'visible'} self-center`}>{textErrors} Errors</p>
                    <p className={`${words !== 0 ? 'hidden' : 'visible'} self-center`}>Write something amazing!</p>
                  </div>
                  <div className="place-self-center self-center">
                    <button type="button" disabled={!words} onClick={handleFixError} className={`${words !== 0 ? 'bg-teal-800 hover:bg-teal-900' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400'} rounded-full px-3 py-1.5 font-bold`}>Fix All Errors</button>
                  </div>
                  <div className="flex  place-self-end self-center">
                    <CopyToClipboard text={text} onCopy={handleCopy}>
                      <button type="button">
                        <Copy className="w-6 h-6 fill-current text-neutral-400 self-center"/>
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
            </form>
        </div>
        <div className="w-full my-4">
          {message ? <span className="bg-teal-700 text-white rounded-lg px-2 py-2 pr-6">{message}</span> : <span className="text-white dark:text-neutral-900">This is invisible</span>}
        </div>
    </div>
  )
}
