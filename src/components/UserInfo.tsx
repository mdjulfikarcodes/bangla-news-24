'use client'

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    // console.log(user)

    const handleSignOut = async () => {
        await authClient.signOut();

    }

    return (
        <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
            {
                user ? <div className="flex flex-col items-center gap-2 ">
                    <Link href={'/profile'}>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img alt="Tailwind-CSS-Avatar-component"
                                    src={user?.image as String} />
                            </div>
                        </div>
                    </Link>
                    <div className="flex gap-4">
                        <h2 className="text-1xl font-bold text-[#C10007]">{user?.name}</h2>
                        <button onClick={handleSignOut} className="btn btn-error btn-xs">Sign Out</button>
                    </div>
                </div> : <div>
                    <Link href={'/signin'}>
                        <button className="btn">সাইন ইন</button>
                    </Link>
                    <Link href={'/signup'}>
                        <button className="btn bg-[#C10007] text-white">সাইন আপ</button>
                    </Link>
                </div>
            }
        </div>



    );
};

export default UserInfo;