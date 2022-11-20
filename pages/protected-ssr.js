import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();
  return <h1> Wellcome to Protected SSR Page </h1>;
};

export default ProtectedSSR;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    redirect :{
        destination : "/api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr"
        permanent : false;
    }
  }

  return {
    props: {
      session,
    },
  };
}
