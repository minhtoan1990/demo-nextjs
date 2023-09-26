"use client";

import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../style/home.scss";
import Link from "next/link";
const HomePage = () => {
  return (
    <Container className="mt-3">
      <h1 className="page-title mb-3">
        Wellcome to Project NextJs with Toan.pham
      </h1>

      <div className="processBar mt-2 mb-2">
        <span>Process Project:</span> <ProgressBar animated now={60} />
      </div>
      <div className="homepage">
        <ul className="home-list">
          <li>
            <h3>
              <Link href="/blogs">Blogs</Link>
            </h3>
            <p>This is list Blogs</p>
          </li>
          <li>
            <h3>
              <Link href="/comments">Comments</Link>
            </h3>
            <p>This is list Comments</p>
          </li>
          <li>
            <h3>Post List</h3>
            <p>This is list posts</p>
          </li>
          <li>
            <h3>Post List</h3>
            <p>This is list posts</p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default HomePage;
