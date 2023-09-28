import OpenAIApi from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAIApi({
  apiKey: "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",
});

app.post("/", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [...chats],
  });

  response.json({
    output: result.choices[0].message.content,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
