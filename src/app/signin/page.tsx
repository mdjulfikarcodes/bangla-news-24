import React from 'react';

const SignInPage = () => {
    return (
        <div className='mt-5'>
            <h2 className='flex justify-center mb-5 text-2xl font-bold text-[#C10007]'>সাইন ইন</h2>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="পাসওয়ার্ড" />

                    <button className="btn bg-[#C10007] text-white mt-4"> সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;