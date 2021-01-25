import {MdCopyright as CopyrightLogo} from 'react-icons/md'
import {css} from '@emotion/react'

const copyrightIconStyle = css`
    position: relative;
    top: 0.2ch;
`

const note = css`
    display: block;
    margin: 5ch auto 1ch;
    text-align: center;
    color: var(--color-text-invert);
`

const Copyright = () => (
    <>
        <small css={note}>
            <CopyrightLogo css={copyrightIconStyle} />
        </small>
    </>
)

export default Copyright