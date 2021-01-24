import {css} from '@emotion/react'

const globalStyles = css`
  :root {
    --page-background: rgb(248, 248, 248);
    --page-text: rgb(40,40,40);
    --background-accent: rgb(3,84,133);
    --color-text-invert: rgb(240,240,240);
    --color-accent: rgb(4,64,100);
    --page-width: 800px;
  }

  *,
  *::after,
  *::before {
    boxSizing: "border-box"
  }

  html,body {
    padding: 0,
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    background-color: var(--page-background)
    color: var(--page-text)
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export {
  globalStyles
}
