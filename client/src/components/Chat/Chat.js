import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";

import { useAuth } from "@clerk/clerk-react";

const Chat = ({ response }) => {
  const [inputValue, setInputValue] = useState("");
  const [openAIResponse, setOpenAIResponse] = useState("");
  const { getToken } = useAuth();

  // input box expands
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
    if (!response) return;

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
      response,
      "here are some traits about our target audience, as well as our product: \n"
    );

    setInputValue((prevInputValue) => prevInputValue + "\n" + feedData);
  }, [response]);

  // Call API when user prompts
  const submitHandler = async (e) => {
    e.preventDefault();
    setInputValue("");
    const token = await getToken();

    axios
      .post(
        `http://localhost:8080/api/openaiResponse`,
        { text: inputValue }, // Your data payload {}
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            mode: "cors",
          },
        }
      )
      .then((res) => {
        setOpenAIResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      {/* Message List */}
      <div className="flex-1 overflow-y-auto mb-4 bg-white p-4 rounded shadow">
        {/* Sample message */}
        {openAIResponse && (
          <div className="mb-4">
            <div className="text-sm text-gray-600">Username</div>
            <div
              className="bg-blue-200 rounded p-2 mt-1"
              style={{ whiteSpace: "pre-line" }}
            >
              {openAIResponse}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={submitHandler}>
        <div className="flex p-2 bg-white rounded shadow">
          <textarea
            ref={textBoxRef}
            className="flex-1 h-auto mr-2 text-xs font-medium bg-gray-200 rounded-md px-2 overflow-hidden overflow-y-auto"
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
