// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchWebsiteContent = async () => {
      try {
        const response = await fetch('https://example.com');
        const htmlData = await response.text();
        setHtmlContent(htmlData);
      } catch (error) {
        console.error('Error fetching website content:', error);
      }
    };

    fetchWebsiteContent();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default App;
