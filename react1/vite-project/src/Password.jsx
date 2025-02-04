import React, { useCallback, useEffect, useRef, useState } from "react";

function Password() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [characters, setCharacters] = useState(false);
  const [number, setNumber] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (characters) str += "!@#$%^&*()_+";
    if (number) str += "1234567890";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, characters, number]);

  useEffect(() => {
    generatePassword();
  }, [length, characters, number, generatePassword]);

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg w-80 mx-auto mt-5">
      <input
        type="text"
        className="w-full p-2 text-black rounded"
        ref={passwordRef}
        value={password}
        readOnly
      />
      <div className="mt-2">
        <input
          type="checkbox"
          checked={characters}
          onChange={() => setCharacters(!characters)}
        />{" "}
        Characters
      </div>
      <div className="mt-2">
        <input
          type="checkbox"
          checked={number}
          onChange={() => setNumber(!number)}
        />{" "}
        Numbers
      </div>
      <div className="mt-2">
        <input
          type="range"
          min={4}
          max={16}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
        <span className="block text-center mt-1">Length: {length}</span>
      </div>
      <button
        onClick={copyToClipboard}
        className="mt-3 w-full bg-blue-500 p-2 rounded hover:bg-blue-600"
      >
        Copy to clipboard
      </button>
    </div>
  );
}

export default Password;
