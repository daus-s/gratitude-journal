import styled from "styled-components";
import "../styles.css";
import { useState } from "react";

export default function SingleSubmit({ addGratitude }) {
  const [text, setText] = useState({ text: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(addGratitude);
    addGratitude(text.text);
    text.text = "";
  }

  function update(text) {
    let newText = {
      text: text
    };
    setText(newText);
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <TextQuery>
        <label htmlFor="entry">What are you most thankful for?</label>
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
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  height: 100px;
  background-color: var(--submit-color);
  position: fixed;
  padding: 20px;
  left: 20px;
  right: 20px;
  border-style: solid;
  border-radius: 16px;
  border-width: 1.5px;
  border-color: var(--border-color);

  @media (max-width: 578px) {
    flex-direction: column;
    height: 140px;
  }
`;

const GreenButton = styled.button`
  background-color: var(--button-submit);
  position: absolute;
  right: 35%;
  width: 30%;
  border-radius: 8px;
  bottom: 10px;

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
