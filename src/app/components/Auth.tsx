import Link from "next/link";

export default function Auth(){
    return(
        <nav className="m-7">
            <Link className="m-3" href = "/login">Login</Link>
            <Link className="m-3" href = "/register">Register</Link>
        </nav>
    )
}