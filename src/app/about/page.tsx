import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>some introductions</p>

      <Link href="/">
        <Button>home</Button>
      </Link>
    </div>
  );
};

export default AboutPage;
