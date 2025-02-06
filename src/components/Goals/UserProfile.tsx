import Image from "next/image";
import { loginWithGithub } from "@/lib/actions";
import { createClientForServer } from "@/utils/supabase/server";

const UserProfile = async () => {
  const supabase = await createClientForServer();
  const session = await supabase.auth.getUser();
  const sessionUser = session.data.user;

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="w-1/2 aspect-square rounded-full mx-auto">
        <Image
          width={250}
          height={250}
          //src={"/profile.jpg"}
          src={session.data.user?.user_metadata.avatar_url}
          alt="Profile Picture"
          className="w-full h-full rounded-full object-cover object-center"
        />
      </div>
      {sessionUser ? (
        <h3 className="text-center text-xl text-secondary font-semibold my-2">
          {sessionUser.user_metadata.full_name}
        </h3>
      ) : (
        <div className="flex w-2/3 flex-col justify-center items-center gap-y-3">
          <button
            className="w-full border-2 border-secondary h-9 rounded-md text-sm font-semibold"
            formAction={loginWithGithub}
          >
            Login with Github
          </button>
          <button
            className="w-full border-2 border-secondary h-9 rounded-md text-sm font-semibold"
            formAction={loginWithGithub}
          >
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
};
export default UserProfile;
