import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import SocialButton from "./SocialButton";

export default function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-15 right-6 flex flex-col gap-5 z-50">

      {/* WhatsApp */}
      <SocialButton
        href="https://wa.me/+91-8287333505"
        title="Chat on WhatsApp"
        colorClass="bg-green-500 hover:bg-green-600"
        icon={<FaWhatsapp size={24} />}
      />

      {/* Instagram */}
      <SocialButton
        href="https://www.instagram.com/crowninktattoos/"
        title="Visit Instagram"
        colorClass="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"
        icon={<FaInstagram size={24} />}
      />

    </div>
  );
}