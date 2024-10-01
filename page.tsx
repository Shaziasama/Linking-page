import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1>Lets learn how to link different pages to home page</h1>
    <Link className="mr-5 hover:text-green-900" href={"http://localhost:3000/"}>Home</Link>
<Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/about"}>About</Link>
      <Link className="mr-5 hover:text-yellow-900" href={"http://localhost:3000/contact"}>Contact</Link>
      
    
    </div>

  )
}

    