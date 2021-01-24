import {css} from '@emotion/react'

const globalStyles = css`
  :root {
    --page-background: #222;
    --page-text: #ddd;
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
`

export {
  globalStyles
}
