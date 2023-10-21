import React, { useState, useCallback } from "react";
import { Box, styled } from "@mui/material";
import { CloseFullscreen } from '@mui/icons-material';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { xml } from '@codemirror/lang-xml';
import { css } from '@codemirror/lang-css';
import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #AAAEBC;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleOnChange = useCallback((value, viewUpdate) => {
    onChange(value);
  }, [onChange]);

  let language
  if (heading === "HTML") {
   language = xml;
 } else if (heading === "CSS") {
   language = css;
 } else if (heading === "JS") {
   language = javascript;
 }

 return (
   <Container style={open ? null : { flexGrow: 0 }}>
     <Header>
       <Heading>
         <Box component="span"
           style={{
             background: color,
             height: 20,
             width: 20,
             display: 'flex',
             placeContent: 'center',
             borderRadius: 5,
             marginRight: 5,
             paddingBottom: 5,
             color: '#000'
           }}>{icon}</Box>
         {heading}
       </Heading>
       <CloseFullscreen
         fontSize="small"
         style={{ alignSelf: 'center' }}
         onClick={() => setOpen(prevState => !prevState)}
       />
     </Header>
     <CodeMirror
       className="custom-classname"
       value={value}
       onChange={handleOnChange}
       extensions={[language()]}
     />
   </Container>
 );
};

export default Editor;
