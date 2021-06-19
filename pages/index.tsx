import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

const IndexPage = () => {
  const [session] = useSession();
  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>
      <nav>
        {!session ? (
          <>
            <button onClick={() => signIn("github")}>Github Signin</button>
            <button onClick={() => signIn("google")}>Google Signin</button>
          </>
        ) : (
          <>
            <span>{session.user.name}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                style={{ width: "25px", borderRadius: "50%" }}
              />
            )}
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        )}
      </nav>
    </>
  );
};

export default IndexPage;
