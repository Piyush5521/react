import React from "react";
import emojipedia from "./emojipedia";
import Entry from "./Entry";

function createEntry (emojiTerm){
  return(
  <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
  />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="container">
          {emojipedia.map(createEntry)}
      </div>
    </div>
  );
}

export default App;
