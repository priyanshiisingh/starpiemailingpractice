import { useState } from "react";
import "./App.css";

function App() {
  const [newEmail, setNewEmail] = useState("");
  function addemail(e) {
    e.preventDefault();
    let item = newEmail;
    let body = {
      data: {
        emailId: item,
      },
    };

    fetch(`${process.env.REACT_APP_BACKEND}api/user-emails`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(() => {
      setNewEmail("");
    });
  }

  return (
    <div className="app">
      <main>
        <form className="form" onSubmit={addemail}>
          <input
            type="email"
            className="email_input"
            placeholder="Enter email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.currentTarget.value)}
          />
          <button type="submit" className="email_button">
            Add email
          </button>
        </form>
      </main>
    </div>
  );
}
export default App;
