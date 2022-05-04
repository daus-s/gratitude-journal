import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

//se defined class imports
import Submit from "./components/Submit";
import EntryList from "./components/EntryList";
import React from "react";
import SingleSubmit from "./components/SingleSubmit";

export default function App() {
  const [texts, setTexts] = useState([]);

  function addGratitude(text) {
    const newTexts = [...texts, text]; //think its ok
    setTexts(newTexts);
  }

  function clear() {
    const newTexts = [];
    setTexts(newTexts);
  }

  return (
    <div className="App">
      <h1>Gratitude Journal</h1>
      <h2>Give Thanks</h2>
      <List>
        {texts.length === 0 ? (
          <SingleSubmit
            hidden={!texts.length === 0}
            addGratitude={addGratitude}
          ></SingleSubmit>
        ) : null}

        <EntryList list={texts}></EntryList>
      </List>
      <SubmitSection>
        <Submit clearGratitude={clear} addGratitude={addGratitude} />
      </SubmitSection>
    </div>
  );
}

const SubmitSection = styled.section`
  background-color: var(--submit-color);
  position: fixed;
  padding: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border-style: solid;
  border-radius: 16px;
  border-width: 1.5px;
  border-color: var(--border-color);
`;

const List = styled.section`
  padding-bottom: 125px;
`;
