import Entry from "./Entry.js";
import styled from "styled-components";
import "../styles.css";

import SingleSubmit from "./SingleSubmit.js";

export default function EntryList(texts) {
  if (texts.list.length === 0) {
    return <SingleSubmit />;
  } else {
    return (
      <Wrapper>
        {texts.list.map((t, i) => (
          <Entry key={i} text={t} />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.ol``;
