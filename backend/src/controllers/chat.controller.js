import Chat from "../models/Chat.model.js";
import Project from "../models/Project.model.js";
import { sendMessageToLLM } from "../services/llm.service.js";

export const chatWithAgent = async (req, res) => {
  try {
    // get projectID
    const projectId = req.params.projectId;

    //get logged in user
    const userId = req.user.userId;

    //   get user message
    const { message } = req.body;

    // find the project and ensure ownership
    const project = await Project.findOne({
      _id: projectId,
      userId,
    });

    if (!project) {
      return res.status(404).json({
        message: "project not found",
      });
    }

    //   get or create a chat
    let chat = await Chat.findOne({ projectId });
    if (!chat) {
      chat = await Chat.create({ projectId, messages: [] });
    }

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    // add user message
    chat.messages.push({ role: "user", content: message });

    // build promp for llm
    const messages = [
      {
        role: "system",
        content: project.systemPrompt || "You are a helpful assistant.",
      },
      ...chat.messages,
    ];

    // send to llm
    const reply = await sendMessageToLLM(messages);

    // store assistant reply
    chat.messages.push({ role: "assistant", content: reply });
    await chat.save();

    // response
    res.status(200).json({
      reply,
    });
  } catch (error) {
    res.status(500).json({
      message: "chat failed",
      error: error.message,
    });
  }
};
