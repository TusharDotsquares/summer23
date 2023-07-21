import * as React from "react";
import { ChatHeadlessProvider } from "@yext/chat-headless-react";
import { ChatPopUp } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";

const MyComponent = () => {
  return (
      <ChatHeadlessProvider
        config={{
          apiKey: "00369516dceafa7b6f1d54a7259b4903",
          botId: "weather",
          saveToSessionStorage: false,
          apiDomain: "sbx-cdn.yextapis.com",
        }}
      >
        <ChatPopUp 
        title="Chat with us"
        showRestartButton={false}
        placeholder="Ask me Weather And KG releted Data"
        stream={false}
        showTimestamp={false} />
      </ChatHeadlessProvider>
  );
};

export default MyComponent;
