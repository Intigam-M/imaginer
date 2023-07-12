const REPLICATE_MODEL_VERSION =
  "6359a0cab3ca6e4d3320c33d79096161208e9024d174b2311e5a21b6c7e1131c";

const startGeneration = async (prompt) => {
  const response = await fetch(`${process.env.REPLICATE_API_URL}/predictions`, {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      version: REPLICATE_MODEL_VERSION,
      input: { prompt },
    }),
  });

  return response.json();
};

const getGeneration = async (url) => {
  const result = await fetch(url, {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  return result.json();
};

async function handler(req, res) {
  const { prompt } = req.body;

  if (!prompt) res.status(400).json("No prompt provided");

  const predictions = await startGeneration(prompt);

  let generatedImage;

  while (!generatedImage) {
    const result = await getGeneration(predictions.urls.get);

    if (result.status === "succeeded") {
      [generatedImage] = result.output;
    } else if (result.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  res
    .status(200)
    .json(generatedImage ? generatedImage : "Failed to generate the image");
}

export default handler;