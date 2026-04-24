import React from "react";
import Link from "next/link";
export default function SocialButton({ href, icon, colorClass, title }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg hover:scale-110 transition ${colorClass}`}
    >
      {icon}
    </Link>
  );
}