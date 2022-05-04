import "../styles.css";
import styled from "styled-components";

export default function Entry({ text }) {
  return (
    <EWrapper>
      <Intro>I'm grateful for...</Intro>
      <p>{text}</p>
    </EWrapper>
  );
}

const EWrapper = styled.article`
  margin: 20px;
  background-color: var(--entry-color);
  left: 80px;
  right: 80px;
  border-radius: 16px;
  font-size: 24px;
  border-style: solid;
  border-color: var(--border-color);
`;

const Intro = styled.p`
  font-size: 24px;
  margin: 8px;
  padding-left: 8px;
  text-align: left;
`;
