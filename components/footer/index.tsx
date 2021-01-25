import {IoLogoGithub as Github} from 'react-icons/io'
import {FiTwitter as Twitter} from 'react-icons/fi'
import {SiLinkedin as LinkedIn} from 'react-icons/si'
import Copyright from '@components/copyright'

import {css} from '@emotion/react'
import {leakedList} from '@shared/style-helpers'

const footerStyles = css`
    margin-top: 10ch;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

import {metadata} from 'config'

const Footer = () => {
    return (
        <footer css={footerStyles}>
            <ul css={leakedList}>
                <li>
                    <a 
                    href={metadata.author.githubUrl} 
                    target="_blank"
                    rel="noopener noreferer"
                    aria-label="My Github Account">
                        <Github />
                    </a>
                </li>
                <li>
                    <a href={metadata.author.twitterUrl} 
                    target="_blank"
                    rel="noopener noreferer"
                    aria-label="My Twitter Account">
                        <Twitter />
                    </a>
                </li>
                <li>
                    <a href={metadata.author.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferer"
                    aria-label="My LinkedIn Account">
                        <LinkedIn />
                    </a>
                </li>
            </ul>
            <Copyright />
        </footer>
    )
}

export default Footer