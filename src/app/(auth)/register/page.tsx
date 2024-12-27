'use client'

import { authService } from "@/services/auth.service";
import { useRouter } from 'next/navigation'

export default function RegisterPage(){
    const router = useRouter()
    return(
    <form data-testid = "form" className=" mt-32" action = {authService.register}>
        <div data-testid = "form-div" className="flex flex-col border">
            <input className="m-8 w-60 h-7 bg-slate-300 rounded-md" name="email" type="email" placeholder="email" />
            <input data-testid = "password" className="m-8 w-60 h-7 bg-slate-300 rounded-md" name="password" type="password" placeholder="password" />
            <button className="m-8" type="submit" onClick={() => router.push('i')}>Register</button>
        </div>
    </form>)
}