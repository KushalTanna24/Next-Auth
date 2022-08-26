import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, "this is sessions");
  // console.log(status, "this is status");
  if (!session) {
    return (
      <div
        style={{
          // center in the page
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button onClick={() => signIn("google")} style={{ margin: "10px" }}>
          Login with google
        </button>
        <br />
        <button onClick={() => signIn("Credentials")}>
          Login with credentials
        </button>
      </div>
    );
  }
  return (
    <div
      className={styles.container}
      style={{
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
