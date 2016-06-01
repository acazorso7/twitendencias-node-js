Node.js Server

First of all, you should install node.js. After that, please follow the notes below.

Notes:
- app.js 
  - (line 27) this URL is where the job of spark Streaming will do the post. It should be the same.
  - (line 28) this URL is where node.js will push the information received by Spark Streaming.

- index.html
  - (line 306) the socket is waiting the emit of node.js, remaind that it's configured in line 28 of app.js
  - (line 346) "buscarHBase" function. This url must point to the URL of windows service. It will be different depending on your enviornment, please check.
