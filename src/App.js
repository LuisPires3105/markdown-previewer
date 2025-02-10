import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

marked.use({
  breaks: true,
  gfm: true,
});

const initialState = `# This is an h1 element
## This is an h2 element
### This is an h3 element

[links](https://www.freecodecamp.org)

\`<div></div>\`

list

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

text
> Block Quotes!

**bold**

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

\`\`\`

something
// this is multi-line code:

\`\`\`

`;

function App() {

  const [editorInput, setEditorInput] = useState(initialState);

  function handleInput(event){
    setEditorInput(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <div id="editor-window">
          <h2>Editor Window</h2>
          <textarea id = "editor" rows= "15" cols = "100" onInput={handleInput}>{editorInput}</textarea>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(editorInput)}}>
        </div>
      </div>
    </div>
  );

}


export default App;
