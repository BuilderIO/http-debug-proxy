# Builder.io Proxy Debug Tool

This tool is used by Builder.io to help diagnose problems which our customers may encounter and which may be hard for Builder.io to reproduce.

This tool is an HTTP proxy which records all of the communications between your application and our API. It is meant to be used only why diagnosing problems and than it should be removed.

## What does this do

This project contains a set up to create a local HTTP proxy for the https://cdn.builder.io/ endpoint.

## How do I set this up Proxy

1. Download the repository to your machine
   ```
   git clone https://github.com/BuilderIO/http-debug-proxy.git
   ```
2. Install all dependencies
   ```
   npm install
   ```
3. Start the proxy.
   ```
   npm start
   ```

Your proxy is now running on `http://localhost:8100` and is proxying data from `https://cdn.builder.io/`. The result of the communication will be stored in the `./test` folder.

At this point you need to re-configure your application to point to `http://localhost:8100` instead of `https://cdn.builder.io/`. By changing your configuration the proxy will record the communication between your computer and Builder.io services. The recordings are useful tool for Builder.io engineers to help you diagnose the problems.

Next step is to configure your application to talk to the proxy rather than to the usual endpoint.

## Gatsby

1. Locate [`gatsby-config.js`](https://github.com/BuilderIO/gatsby-starter-builder/blob/65480041479d4749bfe5ef5a6d4f38419fad92c2/gatsby-config.js#L26-L33) file in your application and add
   ```
   baseURL: "http://localhost:8100",
   ```
   to the `options` object. The resulting code should look something like this:
   ```
   options: {
      publicAPIKey: config.builderAPIKey,
      baseURL: "http://localhost:8100",
      ...
    }
   ```
2. Recrate the problem
3. Send logs to Builder.io

## Harvesting Logs

The logs are stored in this project directory under `./test` folder. Please zip-up the folder and send it to the builder.io engineers for analysis.
