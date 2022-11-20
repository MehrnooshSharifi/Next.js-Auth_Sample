import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return <div>Loding...</div>;
  }
  return <h1>{session.user.name} Wellcome to your Profile Page </h1>;
};

export default Profile;
