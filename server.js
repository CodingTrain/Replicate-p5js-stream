// Import required modules and initialize environment variables
import Replicate from 'replicate';
import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();

// Set up Express app and middleware
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Initialize Replicate client with API token
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Define the new /api/text endpoint
app.post('/api/text', async (request, response) => {
  // Define input options with updated parameters
  const input = {
    prompt: request.body.prompt,
    temperature: 0.7,
    system_prompt: 'You are a helpful assistant',
    max_new_tokens: 512,
  };

  // Set response headers for streaming
  response.setHeader('Content-Type', 'text/event-stream');
  response.setHeader('Cache-Control', 'no-cache');
  response.setHeader('Connection', 'keep-alive');

  try {
    // Stream responses from the model using for await loop
    for await (const event of replicate.stream('meta/meta-llama-3-8b-instruct', { input })) {
      // Write each event to the response
      response.write(event.toString());
    }
    // End the response once streaming is complete
    response.end();
  } catch (error) {
    // Handle errors during streaming
    console.error('Error during streaming:', error);
    response.status(500).send('Error during streaming');
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
