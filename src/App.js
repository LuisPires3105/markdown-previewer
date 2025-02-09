import './App.css';
import React from 'react';
import { marked } from 'marked';

marked.use({
  breaks: true,
  gfm: true,
});

const initialState = {editor_input: `# This is an <h1> element
### This is an <h3> element`,
}

class MarkdownPreviewer extends React.Component{
  constructor(props){
    super(props);
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    const input_text = event.target.value;
    document.getElementById("preview").innerHTML = marked.parse(input_text);
    this.setState(() => {
      return {
      editor_input: input_text,
      }
    })
  }

  render(){
    
    return <div>
      <div id="editor-window">
          <h2>Editor Window</h2>
          <textarea id = "editor" rows= "15" cols = "100" onInput={this.handleInput}>{this.state.editor_input}</textarea>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.state.editor_input)}}>
      </div>
    </div>
  }
}


function App() {
  return (
    <div className="App">
      <MarkdownPreviewer id="window"/>
    </div>
  );
}


export default App;
