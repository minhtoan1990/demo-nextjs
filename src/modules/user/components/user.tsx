"use client";
import { useSession } from "next-auth/react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../styles/user.scss";
const UserProfile = () => {
  const { data: session, status } = useSession();
  const imgUrl = session?.user?.image as string;

  if (status === "loading") {
    return (
      <Container>
        <h1>Profile Loading...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <h1>My account</h1>
      <div className="profile mt-3">
        <Image src={imgUrl} alt="profile" roundedCircle />
        <div className="profile-item">
          <p>Name: {session?.user?.name}</p>
          <p>Email: {session?.user?.email}</p>
        </div>
      </div>
    </Container>
  );
};
export default UserProfile;
