import React from 'react';
let marked = require("marked");



export default class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    markdown: placeholder,
  };
}

updateMarkdown(markdown){
  this.setState({markdown });
}

  
  
  render(){

    var inputStyle = {
      width: "500px",
      height: "60vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      borderRadius: "1%"

    };

    var outputStyle = {
      width: "auto",
      height: "auto",
      backgroundColor: "#E6DDC6",
      marginLeft: "auto",
      padding: "10px",
      borderRadius: "1%"
    };



    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
            <h1 className="text-align-center title">
              {" "}
              
                Markdown Previewer 
      
            </h1>
          </div>
        </div>  

            <div className="row mt-4">
              <div className="col-md-6">
                {" "}
                   <div className="col text-center">
                      <h4 className="text-align-center sub-title">
                          Editor
                      </h4>
                   </div>
                <div className="input" style={inputStyle}>
                  <textarea
                    id="editor" 
                    className="input" 
                    style={inputStyle} 
                    value={this.state.markdown} 
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value);
                    }}
                  > 
                    
                  </textarea>
                </div>
              </div>

              <div id="preview" className="col-md-6">
                {" "}
                <div className="col text-center">
                  <h4  className="text-align-center sub-title" >
                    
                      Previewer
                    
                  </h4>
                </div>
                <div style={outputStyle}
                dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

<img src="https://camo.githubusercontent.com/a72be36d3cb4418b399e072a87db309aa9105f817c4e2b5403b60b4646fb607a/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f38353536362f3137333633332f62616634383262342d376165322d313165322d393036352d3063643334353362333436392e706e67" > 
`;
