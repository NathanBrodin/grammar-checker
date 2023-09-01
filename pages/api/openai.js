import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(400).json({ text: "Error: the API key is missing, make sure you added it to env.local or to the server" });
  }

  const prompt = "Correct this to standard English:\n\n" + req.body.name;

  try {
    const response = await Promise.race([
      openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        temperature: 0,
        max_tokens: 1024,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request Timeout")), 10000) // 10 seconds timeout
      ),
    ]);

    res.status(200).json({ text: `${(response.data.choices[0].text).slice(2)}` });
  } catch (error) {
    res.status(500).json({ text: "Request failed, meaning the OpenAi API key is not working anymore. My free trial of 3 months is probably over :(" });
  }
};
