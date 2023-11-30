"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub } from "react-icons/fa";


const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <FaGoogle className={styles.socialButton__icon} /> <div>Sign in with Google</div>
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          <FaGithub className={styles.socialButton__icon} /> <div>Sign in with Github</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
