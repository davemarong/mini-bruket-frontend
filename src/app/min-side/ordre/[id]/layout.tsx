"use client";

import { ArrowCircleLeft } from "@phosphor-icons/react";
import React from "react";
import { useParams, useRouter } from "next/navigation";

interface LayoutProps {
  children: any;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div>
      <ArrowCircleLeft
        onClick={() => {
          router.push("/min-side/ordre");
        }}
        size={30}
      />
      {children}
    </div>
  );
};

export default Layout;
