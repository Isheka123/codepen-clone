import React, { useState } from 'react';
import Editor from './Editor';
import Header from './Header';
import Result from './Result';
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background: #060606;
  height: 50vh;
`;

const Home = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  return (
    <>
      <Header />
      <Container>
        <Editor
          heading="HTML"
          icon="/"
          color="#FF3C41"
          value={htmlCode}
          onChange={setHtmlCode}
        />
        <Editor
          heading="CSS"
          icon="*"
          color="#0EBEFF"
          value={cssCode}
          onChange={setCssCode}
        />
        <Editor
          heading="JS"
          icon="()"
          color="#FCD000"
          value={jsCode}
          onChange={setJsCode}
        />
      </Container>
      <Result htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
    </>
  );
};

export default Home;
