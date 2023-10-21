import React, { useEffect, useRef } from 'react';

const Result = ({ htmlCode, cssCode, jsCode }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const iframeDocument = iframe.contentDocument;
    iframeDocument.open();
    iframeDocument.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `);
    iframeDocument.close();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div style={{ height: '50vh' }}>
      <iframe
        title="Result"
        ref={iframeRef}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default Result;
