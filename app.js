const express = require("express");
const https = require("https");
const app = express();

app.get("/*", (req, res, next) => {
  const targetUrl = new URL("https://rocketbotroyale.winterpixel.io/" + req.path);
  
  // Make a request to the target URL
  https.request(targetUrl, (resp) => {
    let data = '';

    // Concatenate chunks of data received from the response
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // After receiving the full response
    resp.on('end', () => {
      // Modify the response content here
      // For example, you can inject custom HTML and JavaScript
      const modifiedData = data + `<script>alert('Injected JavaScript');</script>`;

      // Set the content type header
      res.contentType(resp.headers["content-type"]);

      // Send the modified response to the client
      res.send(modifiedData);
    });
  }).end();
});

app.listen(3000);
