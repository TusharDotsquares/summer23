// import * as React from 'react';
// import { useChatState, useChatActions } from "@yext/chat-headless-react";

// let storedMessages: any[] = [];

// if (typeof sessionStorage !== 'undefined') {
//   const storedMessagesString = sessionStorage.getItem('messages');
//   if (storedMessagesString !== null) {
//     storedMessages = JSON.parse(storedMessagesString);
//     console.log(storedMessages,"storeMessages")
//   }
// }
// const MyComponent: React.FC = () => {
//   const chat = useChatActions();
//   const chatMessages = useChatState((state) => state.conversation.messages);
//   const [inputValue, setInputValue] = React.useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     chat.getNextMessage(inputValue);
//     setInputValue("");
//   };

//   return (
//     <div>
//       <ul>
//         {chatMessages.map((message, index) => (
//           <li key={index}>{message.text}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default MyComponent;


import * as React from 'react';

declare global {
  interface Window {
    ChatApp: any;
  }
}

const ChatComponent = () => {
  React.useEffect(() => {
    setTimeout(()=>{
    const script = document.createElement('script');
    script.src = 'https://assets.sitescdn.net/chat/v0/chat.umd.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  },100)
  }, []);

  React.useEffect(() => {
    if (window.ChatApp) {
      window?.ChatApp?.mount({
        apiKey: "caad5a844103ee05c0c98f8a0b6d85bf",
        botId: "chit-chat",
        title: "Chit-chat",
        saveToSessionStorage:false,
        apiDomain: "sbx-cdn.yextapis.com",
        stream: false,
      });
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://assets.sitescdn.net/chat/v0/chat.css" />
      <div id="chat-container"></div>
    </>
  );
};

export default ChatComponent;


