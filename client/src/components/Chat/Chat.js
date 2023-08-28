import React, { useEffect, useState, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";

const Chat = (props) => {
  const [inputValue, setInputValue] = useState("");

  // expands textbox as text gets larger
  const textBoxRef = useRef();

  useEffect(() => {
    adjustTextBox();
  }, [inputValue]);

  const textOnChangeHandler = (e) => {
    setInputValue(e.target.value);
    adjustTextBox();
  };

  const adjustTextBox = () => {
    if (textBoxRef.current) {
      textBoxRef.current.style.height = "auto";
      textBoxRef.current.style.height = `${textBoxRef.current.scrollHeight}px`;
    }
  };

  // Everytime someone submits a form, we update the input field
  useEffect(() => {
    if (!props.response) return; // if no form, input field should be empty
    let feedData = "";
    const stringBuilder = (dict, str) => {
      feedData += str + " \n";
      Object.entries(dict).forEach(([key, value]) => {
        feedData += `Here are some ${key} information about our target audience: \n`;
        Object.entries(dict[key]).forEach(([secKey, secValue]) => {
          if (secValue !== "") {
            feedData += `${secKey} ${key} information are ${secValue}, \n`;
          }
        });
        feedData += "\n";
      });
    };

    stringBuilder(
      props.response,
      "here are some traits about our target audience, as well as our product: \n"
    );
    setInputValue(feedData);
  }, [props.response]);

  // Call API when user prompts
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      {/* Message List */}
      <div className="flex-1 overflow-y-auto mb-4 bg-white p-4 rounded shadow">
        {/* Sample message */}
        <div className="mb-4">
          <div className="text-sm text-gray-600">Username</div>
          <div className="bg-blue-200 rounded p-2 mt-1">
            Hello, this is a sample message!
          </div>
        </div>
      </div>

      {/* Input Area */}
      <form onSubmit={submitHandler}>
        <div className="flex p-2 bg-white rounded shadow">
          <textarea
            ref={textBoxRef}
            className="flex-1 h-auto mr-2 text-xs font-medium bg-gray-200 rounded-md px-2 overflow-hidden"
            placeholder="Send a Message..."
            value={inputValue}
            onChange={textOnChangeHandler}
            rows="1"
          />
          <button className="w-10 h-10 text-xs font-medium bg-blue-500 rounded-md text-white">
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
