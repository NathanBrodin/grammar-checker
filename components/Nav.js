import Link from 'next/link'
import Vercel from '../public/vercel.svg'

export default function Nav() {
  return (
    <div className="w-screen z-50 fixed top-0 bg-white shadow-sm">
        <div className="flex justify-between px-8 py-4 border-b">
            <div>
                <Link href={"https://nathanbrodin.com"} passHref={true}>
                    <a target="_blank" className='flex'>
                        <Vercel className="w-8 h-8"/>
                        <h1 className='text-xl font-black text-green-700'>Nathan Brodin</h1>
                    </a>
                </Link>
            </div>
            <div>
                <h1 className='text-xl font-black'>Grammar Checker</h1>
            </div>
            <div>
                <h2 className='text-lg font-medium'>Settings</h2>
            </div>
        </div>
    </div>
  )
}
