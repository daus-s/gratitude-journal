import styled from "styled-components";
import "../styles.css";
import { useState } from "react";

export default function Submit({ addGratitude, clearGratitude }) {
  const [text, setText] = useState({ text: "" });

  function handleSubmit(event) {
    event.preventDefault();
    addGratitude(text.text);
    text.text = "";
  }
  function handleClear(event) {
    event.preventDefault();
    clearGratitude();
  }

  function update(text) {
    let newText = {
      text: text
    };
    setText(newText);
  }
  //console.log(text.text);

  return (
    <SWrapper onSubmit={handleSubmit} onReset={handleClear}>
      <RedButton>
        <button className="redbutton" type="reset">
          Clear
        </button>
      </RedButton>

      <TextQuery>
        <label htmlFor="entry">What are you grateful for?</label>
        <br></br>
        <input
          type="text"
          name="entry"
          id="entry"
          className="entry"
          value={text.text}
          onChange={(e) => update(e.target.value, "text")}
        />
      </TextQuery>
      <GreenButton>
        <button
          className="greenbutton"
          disabled={text.text.length === 0}
          type="submit"
        >
          Enter
        </button>
      </GreenButton>
    </SWrapper>
  );
}

const SWrapper = styled.form`
  display: flex;
  height: 70px;

  @media (max-width: 578px) {
    flex-direction: column;
    height: 140px;
  }
`;

const GreenButton = styled.button`
  background-color: var(--button-submit);
  position: absolute;
  right: 40px;
  border-radius: 8px;
  top: 40%;

  @media (max-width: 578px) {
    flex-direction: column;
    justify-content: center;
    width: 40px;
    font-size: 8px;
    right: 10px;
  }
`;

const TextQuery = styled.article`
  font-size: 24px;
  position: absolute;
  left: 140px;
  right: 140px;

  @media (max-width: 578px) {
    flex-direction: column;
    font-size: 16px;
    left: 65px;
    right: 65px;
  }
`;

const RedButton = styled.button`
  background-color: var(--button-DELETE);
  position: absolute;
  left: 40px;
  border-radius: 8px;
  top: 40%;
  @media (max-width: 578px) {
    flex-direction: column;
    justify-content: center;
    width: 40px;
    font-size: 8px;
    left: 10px;
  }
`;
