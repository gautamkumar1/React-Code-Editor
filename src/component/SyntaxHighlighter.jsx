/* eslint-disable react/jsx-key */

import { useState } from 'react';

// Imports the Highlight component from the prism-react-renderer library for syntax highlighting

import { Highlight } from 'prism-react-renderer';

// Imports a CSS file for styling the syntax highlighter

import './syntaxHighlighterCssCode/SyntaxCss.css';

const codeHighlightTheme = {
// Defines a theme object for customizing the appearance of the syntax highlighting
  plain: {
    // Styles for plain text (default text style)
    color: '#393A34', // Text color
    backgroundColor: '#f6f8fa', // Background color
  },
  styles: [
    // Array of style rules for different token types
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'], // Token types
      style: {
        color: '#90a4ae', // Color for these token types
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#9e9e9e',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#e91e63',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#4caf50',
      },
    },
    {
      types: ['operator', 'entity', 'url', 'language-css.string', 'style.string'],
      style: {
        color: '#795548',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#3f51b5',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#f44336',
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#ff9800',
      },
    },
    {
      types: ['text'],
      
      style: {
        color: '#ffff',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
  ],
};

export const SyntaxHighlighter = () => {
  // Declares a state variable 'code' and a function 'setCode' to update it, initialized to an empty string

  const [code, setCode] = useState('');

  // Function to handle changes in the textarea, updates the 'code' state with the new value

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (

      // Container div for the code editor 

    <div className="code-editor-container">
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
      {/* Textarea for code input, with a class name, value bound to the 'code' state, and onChange event handler */}
      <div className="code-output">
        {/* Div for displaying the highlighted code output */}
        <Highlight {...{}} code={code} language="javascript" codeHighlightTheme={codeHighlightTheme}>
          {/* Uses the Highlight component to render syntax-highlighted code */}
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {/* Preformatted text block for the highlighted code */}
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {/* Maps each line of tokens to a div with line properties */}
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                  {/* Maps each token to a span with token properties */}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

