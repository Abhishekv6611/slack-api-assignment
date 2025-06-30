#  Slack API Assignment – Abhishek

This project demonstrates basic Slack messaging functionalities using the Slack Web API and Node.js. It allows sending, scheduling, editing, retrieving, and deleting messages in a Slack channel using a bot token.

---

##  Tech Stack

- Node.js
- Express.js
- Slack Web API (`@slack/web-api`)
- dotenv

---

##  Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/slack-api-assignment-abhishek.git
   cd slack-api-assignment-abhishek

   npm install
   
Create a .env file

SLACK_BOT_TOKEN=your-slack-bot-token
CHANNEL_ID=channel-id

^Start the server^

----- node index.js  -----


Available API Routes






---> POST /send
{
  "text": "Hello from API!"
}

 Schedule Message
---> POST /schedule
{
  "text": "Scheduled Message!",
  "postAt": 1719873600   // Unix timestamp (in future) change it withyour current + future time
}

 Edit Message
 ---> PUT /edit
 {
  "ts": "1719859812.000300",
  "newText": "Updated message text"
}

 Delete Message
 ---> DELETE /delete
 {
  "ts": "1719859812.000300"  (change it withyour msg ts)
}

Get Messages
GET /messages







Notes
All operations are performed in a Slack Developer Sandbox environment.

Make sure your Slack app has the required scopes:

      - chat:write
      - channels:history
      - chat:write.public


Author

Abhishek V
https://www.linkedin.com/in/abhishek-v-4841a9242/
