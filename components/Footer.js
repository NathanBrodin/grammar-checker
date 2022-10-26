import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-sm sm:text-base font-italic z-10 fixed bottom-0 px-4 sm:px-8 sm:py-4 py-2">
      Created by Nathan Brodin | This website is a reproduction of  
      <Link href="https://quillbot.com/grammar-check" passHref={true}>
        <a target="_blank" className="text-teal-800 dark:text-teal-700 hover:text-teal-600 ml-1">
           Quilbot Grammar Checker
        </a>
      </Link>
    </div>
  )
}
