import Page from '@layouts/page';
import Image from 'next/image'
import {FaReact as ReactIcon} from 'react-icons/fa'
import {css,keyframes} from '@emotion/react'

const rotate = keyframes`
 from {
    transform: rotate(0)
 }
 to {
    transform: rotate(360deg)
 }
`

const headerStyles = css`
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2ch;
`

const pilotPicture = css`
    border-radius: 50%;
`

const pilotName = css`
    margin-right: 3ch;
    font-weight: 200;
`
const reactIconStyles = css`
 margin-left: 1ch;
 position: relative;
 top: 5px;
 color: var(--color-accent);
 animation: ${rotate} 5s linear infinite;
`

const bioStyles = css`
    margin-top: 5ch;

    p {
        max-width: 68ch;
        margin: 0 auto;
    }

    > p + p {
        margin-top: 3ch;
    }
`

const title = css`
    font-size: 2rem;
    font-weight: 200;
`

const footerStyles = css`
    margin-top: 5ch;
    text-align: right;
    margin-right: 5ch;
`

export default function About() {
  return (
    <Page meta= {{
        title: "About",
        description: "About page of Statr" }}
    >
        <section css={headerStyles}>
        <Image css={pilotPicture} src="/images/dog.jpg" width={225} height={300}/>
        <h2 css={title}>
            <span css={pilotName}>Staton King</span><ReactIcon css={reactIconStyles} /> </h2>
        </section>
        <section css={bioStyles}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum labore inventore, debitis veniam dolores sed, quaerat modi voluptatibus odio aperiam ipsum? Minima possimus, autem pariatur quo obcaecati modi? Ab.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum iusto qui tempore quidem. Quod, asperiores quis reiciendis inventore a aut id sed debitis eveniet. Iusto placeat omnis facilis reiciendis.
            </p>
        </section>
        
        <section css={footerStyles}>
            <small>Source:</small>
            <a href="#" target="_blank" rel="noopener noreferer">
                Lorem Ipsum
            </a>
        </section>
    </Page>
  )
}
