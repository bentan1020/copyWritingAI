import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";

import { useAuth, useUser } from "@clerk/clerk-react";

const Chat = ({ response }) => {
  const [inputValue, setInputValue] = useState("");
  const [openAIResponse, setOpenAIResponse] = useState("");
  const [messages, setMessages] = useState([]);
  const { getToken } = useAuth();
  const { user } = useUser();
  const uid = user.id;

  // retrieve messages
  const fetchMessages = async () => {
    const token = await getToken();
    axios
      .get(`http://localhost:8080/api/message/retrieveMessages/${uid}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          mode: "cors",
        },
      })
      .then((res) => {
        // input: [{sender:"user",message:"something",createdAt:some date},{sender:"bot",message:"something",createdAt:some date}]
        const sortedMessages = res.data.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setMessages(sortedMessages);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchMessages();
    // Set up an interval to fetch messages every 10 seconds (or however often you'd like)
    const intervalId = setInterval(() => {
      fetchMessages();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [openAIResponse]);

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
    console.log(uid);
    e.preventDefault();
    setInputValue("");
    const token = await getToken();
    const currTime = new Date();

    axios
      .post(
        `http://localhost:8080/api/message/givePrompt/${uid}`,
        {
          currTime: currTime,
          message: inputValue,
        },
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
      <div className="flex-1 overflow-y-auto mb-4 bg-white p-4 rounded shadow">
        {messages.map((message, index) => (
          <div className="mb-4" key={index}>
            <div className="text-sm text-gray-600">
              {message.sender === "user" ? "Username" : "Bot"}
            </div>
            <div
              className={`rounded p-2 mt-1 ${
                message.sender === "user" ? "bg-blue-200" : "bg-gray-200"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {message.message}
            </div>
            <div className="text-xs text-gray-400">
              {new Date(message.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
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
