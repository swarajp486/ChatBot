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
  const { prompt } = request.body;
  console.log(prompt[0])
  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [...prompt],
  });
  console.log(result)

  response.json({
    output: result.choices[0].message.content,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
