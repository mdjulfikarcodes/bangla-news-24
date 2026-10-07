"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  if(!user){
    redirect('/signin')
  }

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center gap-2">
        <Link href="/profile">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              {user?.image ? (
                <Image
                  alt="Profile image"
                  src={user.image}
                  width={40}
                  height={40}
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                  👤
                </div>
              )}
            </div>
          </div>
        </Link>

        <h2 className="text-1xl font-bold text-[#C10007]">
          {user?.name}
        </h2>

        <p>{user?.email}</p>

        <button
          onClick={handleShowForm}
          className="btn items-center"
        >
          Edit Profile
        </button>
      </div>

      {show && (
        <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">নাম</label>

            <input
              name="name"
              type="text"
              className="input w-md"
              placeholder="নাম"
              defaultValue={user?.name || ""}
            />

            <label className="label">Image</label>

            <input
              name="image"
              type="url"
              className="input w-md"
              placeholder="Image URL"
              defaultValue={user?.image || ""}
            />

            <button
              type="submit"
              className="btn bg-[#C10007] text-white mt-4"
            >
              Update your profile
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;

