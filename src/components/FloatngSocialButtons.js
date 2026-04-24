import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import SocialButton from "./SocialButton";

export default function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-15 right-6 flex flex-col gap-5 z-50">

      {/* WhatsApp */}
      <SocialButton
        href="https://wa.me/919319913232"
        title="Chat on WhatsApp"
        colorClass="bg-green-500 hover:bg-green-600"
        icon={<FaWhatsapp size={24} />}
      />

      {/* Call */}
      <SocialButton
        href="tel:+919319913232"
        title="Call Now"
        colorClass="bg-blue-500 hover:bg-blue-600"
        icon={<FaPhoneAlt size={24} />}
      />

    </div>
  );
}