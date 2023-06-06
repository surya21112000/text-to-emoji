import React, { useState } from "react";

import TextToEmoji from "emojify";

const emojiMapping = {
  happy: "😀",
  sad: "😢",
  love: "❤️",
  // Add more keyword-to-emoji mappings here
};

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(TextToEmoji.replaceWord(e.target.value, e));
        }}
        value={value}
        style={{ width: "80%" }}
      />
    </div>
  );
};

export default App;
