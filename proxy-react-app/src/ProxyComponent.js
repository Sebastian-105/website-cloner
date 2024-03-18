// src/ProxyComponent.js
import React, { useState, useEffect } from 'react';

function ProxyComponent() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rocketbotroyale.winterpixel.io/');
        const htmlData = await response.text();
        setHtmlContent(htmlData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default ProxyComponent;
