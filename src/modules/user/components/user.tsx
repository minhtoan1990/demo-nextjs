"use client";
import { useSession } from "next-auth/react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const UserProfile = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <Container>
        <h1>Profile Loading...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <div className="profile mt-3">
        <h1>My account</h1>
        <Image src={session?.user?.image} alt="profile" roundedCircle />
        <div className="profile-item">
          <p>email: {session?.user?.email}</p>
          <p>name: {session?.user?.name}</p>
        </div>
      </div>
    </Container>
  );
};
export default UserProfile;
