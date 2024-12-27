import Link from "next/link";

export default function Nav(){
    return(
        <nav className="flex flex-col">
            <Link className="text-lg mt-11" href = "/i">Dashboard</Link>
            <Link className="text-lg mt-5" href = "/i/pomodoro">Pomodoro</Link>
            <Link className="text-lg mt-5" href = "/i/tasks">Tasks</Link>
            <Link className="text-lg mt-5" href = "/i/time-blocking">Time Blocking</Link>
            <Link className="text-lg mt-5" href = "/i/settings">Settings</Link>
        </nav>
    )
}