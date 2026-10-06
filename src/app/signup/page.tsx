'use client'

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {name:string, email:string, image:string, password: string}

       const {data, error} = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })

        if(data){
            console.log(data)
            redirect("/")
            
        }
        if(error){
            console.log(error)
        }

        

    }
    return (
        <div className='mt-5'>
            <h2 className='flex justify-center mb-5 text-2xl font-bold text-[#C10007]'>সাইন আপ</h2>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">নাম</label>
                    <input name="name" type="taxt" className="input w-md" placeholder="নাম" />
                    
                    <label className="label">Image</label>
                    <input name="image" type="url" className="input w-md" placeholder="Image" />

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="পাসওয়ার্ড" />

                    <button type='submit' className="btn bg-[#C10007] text-white mt-4">সাইন আপ করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;