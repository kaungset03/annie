"use server";

import { createClient } from "@/utils/supabase/server";

export const loginWithGithub = async () => {
  console.log("loginWithGithub");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/api/callback",
    },
  });

  if (error) {
    console.error("Error logging in with Github", error);
  }
};
