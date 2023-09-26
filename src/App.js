import React from "react";
import { Toaster } from "react-hot-toast";

import WheelContent from "./components/WheelContent";

const App = () => {
  const RESEND_AUTH_KEY = "re_HeXXEnXN_Lyh6pedUbpYts2M9UWVUyRGf";

  const sendMail = async () => {
    const payload = {
      from: "Contact <contact@festivalofgold.in>",
      to: "immridulpanda2820@gmail.com",
      subject: "A Test email",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_AUTH_KEY}`,
      },

      body: JSON.stringify(payload),
    };

    await fetch("https://api.resend.com/emails", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          sendMail();
        }}
      >
        Send Mail
      </button>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
        }}
      />
      <WheelContent />
    </div>
  );
};

export default App;
