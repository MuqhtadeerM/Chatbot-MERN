import axios from "axios";

export const sendMessageToLLM = async (messages) => {
  // Validate messages
  if (!messages || messages.length === 0) {
    throw new Error("Messages array cannot be empty");
  }

  // Filter out any empty messages
  const validMessages = messages.filter(
    (msg) => msg.content && msg.content.trim() !== "",
  );

  if (validMessages.length === 0) {
    throw new Error("No valid messages to send");
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: validMessages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000",
          "X-Title": "Chatbot Platform",
        },
      },
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "OpenRouter API Error:",
      error.response?.data || error.message,
    );
    throw new Error(
      error.response?.data?.error?.message || "Failed to get LLM response",
    );
  }
};
