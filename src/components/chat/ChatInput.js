import React, { useState } from "react";
import "./chat.css";

function ChatInput() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Send the message and file
  const sendMessage = () => {
    if (message.trim() !== "" || file) {
      console.log("Sent:", message, file);
      setMessage(""); // Clear input field
      setFile(null); // Clear selected file
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="file-input-wrapper">
        {/* Hidden File Input */}
        <input
          type="file"
          id="file-input"
          className="file-input"
          onChange={handleFileChange}
        />
        {/* Label Styled as Button with Icon */}
        <label htmlFor="file-input" className="file-input-label">
          <i className="fi fi-ss-attachment"></i>
        </label>
      </div>

      <button onClick={sendMessage}>
        <i className="fi fi-ss-paper-plane"></i>
      </button>

      {/* Display file preview */}
      {file && (
        <div className="file-preview">
          {file.type.startsWith("image") ? (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="file-preview-img"
            />
          ) : (
            <span>File selected: {file.name}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatInput;
