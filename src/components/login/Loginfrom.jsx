import { useState } from "react";
// import { Button } from "../UI/Button";

export const Loginfrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitedData, setSubmitedData] = useState([]);

  const handsubmit = (e) => {
    e.preventDefault();
    setSubmitedData((e) => [...e, { email, password }]);
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handsubmit} className="form">
      <div className="div-forst">
        <h1 className="h1">Вход</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <input
          className="input1"
          type={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Пороль"
        />

        <button type="submit" className="button">
          Войти
        </button>
        {submitedData &&
          submitedData.map((s) => (
            <div>
              <p>{s.email}</p>
              <p>{s.password}</p>
            </div>
          ))}
      </div>
    </form>
  );
};

// export default Loginfrom;
