import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialNetwork = ({ href, src, size = 25 }) => {
  return (
    <Link href={href}>
      <Image src={src} width={size} height={size} alt="logo" />
    </Link>
  );
};

export default SocialNetwork;
