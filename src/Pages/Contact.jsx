import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-6">

      <div>
        <h1>Contact us on</h1>
      </div>

      <div className="flex gap-10 text-lg font-medium">
        <Link to="instagram" className="hover:underline">
          Instagram
        </Link>
        <Link to="facebook" className="hover:underline">
          Facebook
        </Link>
        <Link to="lnkdin" className="hover:underline">
          LinkedIn
        </Link>
        <Link to="whatsapp" className="hover:underline">
          WhatsApp
        </Link>

      </div>


      <div className="mt-4 text-center">
        <Outlet />
      </div>

    </div>
  );
};

export default Contact;
