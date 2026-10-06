'use client'

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            name?: string;
            email: string;
            image?: string;
            password: string;
        };

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Sign In Successfull")
            console.log(data);
            router.push("/");
        }

        if (error) {
            toast.error(error.message ?? "An error occurred")
            console.log(error);
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);

    }

    return (
        <div className='mt-5'>
            <h2 className='flex justify-center mb-5 text-2xl font-bold text-[#C10007]'>সাইন ইন</h2>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="পাসওয়ার্ড" />

                    <button type="submit" className="btn bg-[#C10007] text-white mt-4">সাইন ইন করুন</button>


                </fieldset>
            </form>
            <button onClick={handleGoogleSignIn} className="btn">Sign In with Google</button>
        </div>
    );
};

export default SignInPage;