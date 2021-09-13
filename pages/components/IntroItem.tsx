import React from "react";
import styled from 'styled-components';

interface Props {
  title: string,
  text: string,
}

const IntroItem: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Item>
      <h1>
        {props.title}
      </h1>
      <p>
        {props.text}
      </p>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  flex-flow: column;
`;

export default IntroItem;
