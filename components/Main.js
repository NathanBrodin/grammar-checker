import Copy from "../public/icons/copy.svg";

export default function Main() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-2/3 h-2/3 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4">
            <form className="flex flex-col content-between items-center h-full gap-4">
                <textarea className="resize-none w-full h-full bg-white dark:bg-neutral-800 border-none focus:ring-0 placeholder-neutral-400" 
                  placeholder="Enter your text"/>
                <div className="flex justify-between w-full">
                  <div className="flex gap-4">
                    <p className="self-center">0 Words</p>
                    <p className="self-center">Write something amazing!</p>
                  </div>
                  <div>
                    <button type="submit" className="bg-teal-800 rounded-full px-3 py-1.5 font-bold">Fix All Errors</button>
                  </div>
                  <div className="flex">
                    <Copy className="w-6 h-6"/>
                  </div>
                </div>
            </form>
        </div>
    </div>
  )
}
