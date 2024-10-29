# Using Replicate in Node.js: Streaming ML model responses to p5.js

This repository contains an example demonstrating how to interact with a machine learning model hosted by Replicate via Node.js, using a streaming API to send real-time responses to a p5.js sketch. This example is for the [Programming from A to Z](https://github.com/Programming-from-A-to-Z/A2Z-F24) class at ITP, NYU. (Students in the class, contact me for your API key!)

In this example, the p5.js client receives streamed responses, simulating a "bot" typing effect in real-time.

## Replicate

[Replicate](https://replicate.com/) is a platform for running machine learning models in the cloud from your own code. [Browse models](https://replicate.com/explore).

For detailed usage, setup, and more, here is the official [Replicate Documentation for Node.js](https://replicate.com/docs/get-started/nodejs).

## Replicate Streaming API

The project utilizes [Replicate's streaming API](https://replicate.com/docs/streaming) to receive real-time outputs from a machine learning model. The server sets up a connection using the `EventSource` interface, enabling it to handle streamed data from the model and forward it to the p5.js client.

## Replicate

[Replicate](https://replicate.com/) is a platform for running machine learning models in the cloud from your code. [Browse models](https://replicate.com/explore).

For more on [using the streaming API](https://replicate.com/docs/streaming) and setting up your environment, refer to the [official Replicate Documentation for Node.js](https://replicate.com/docs/get-started/nodejs).
