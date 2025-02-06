"use client";
import Image from "next/image";
import { loginWithGithub } from "@/lib/actions";

const UserProfile = () => {
  return (
    <div>
      <div className="w-1/2 aspect-square rounded-full mx-auto">
        <Image
          width={736}
          height={736}
          src={"/profile.jpg"}
          alt="Profile Picture"
          className="w-full h-full rounded-full object-cover object-center"
        />
      </div>
      <h3 className="text-center text-xl text-secondary font-semibold my-2">
        Kaung Set
      </h3>
      <button onClick={loginWithGithub}>Login</button>
    </div>
  );
};
export default UserProfile;
