var proxyR = require("proxy-recorder");

var opts = {
  port: 8100, // port on local machine to listen on.
  target: "https://cdn.builder.io/", // Builder.io services to proxy.
};

proxyR.rec(opts);
