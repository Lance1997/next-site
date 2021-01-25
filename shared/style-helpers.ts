import {css} from '@emotion/react'

export const leakedList = css`
    position: relative;
    top: -3ch;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    max-width: var(--page-width);
    margin: 0 auto;
    font-size: 2.5rem;
    padding: 1.5ch 1.5ch;
    background-color: var(--page-background);
    width: 80%;

    a:hover,
    a:focus {
        color: var(--color-accent)
    }
`