"use server";

import { createClientForServer } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const loginWithGithub = async () => {
  const auth_callback_url = `${process.env.NEXT_APP_URL}/auth/callback`;
  const supabase = await createClientForServer();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: auth_callback_url,
    },
  });

  if (error) {
    console.error(error);
  }

  if (data.url) {
    redirect(data.url);
  }
};
