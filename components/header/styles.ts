import {css} from '@emotion/react'

const SR_ONLY = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%)
  height: 1px;
  overflow:hidden;
  position:absolute;
  white-space:nowrap;
  width:1px;
`

const container = css`
  min-height: 45vh;
  padding: 1rem 0;
  display: grid;
  place-items: center;
  background-color: var(--background-accent);
`

const title = css`
  ${SR_ONLY}
`

export {
  container, title
}

