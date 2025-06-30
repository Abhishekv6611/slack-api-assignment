// slackBot.js
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";
dotenv.config();

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);

export const sendMessage = async (channel, text) => {
  return await slackClient.chat.postMessage({ channel, text });
};

export const scheduleMessage = async (channel, text, postAt) => {
  return await slackClient.chat.scheduleMessage({
    channel,
    text,
    post_at: postAt,
  });
};

export const editMessage = async (channel, ts, text) => {
  return await slackClient.chat.update({ channel, ts, text });
};

export const deleteMessage = async (channel, ts) => {
  return await slackClient.chat.delete({ channel, ts });
};

export const fetchMessages = async (channel) => {
  return await slackClient.conversations.history({ channel });
};
