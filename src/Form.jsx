import React, { useState } from "react";

export default function Form() {
  const [message, setMessage] = useState("Hi!");
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Sending message:", message); 
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
