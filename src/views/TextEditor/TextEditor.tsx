import React from 'react';
import styled from "styled-components";
import { DataTable } from './table';

const Container = styled.section`
  margin: 1em;
  border-radius: 16px;
  padding: 2em;
  height: 100%
`

const TextEditor: React.FC = () => {
  return (
    <Container>
      <DataTable/>
    </Container>
  );
};

export default TextEditor;