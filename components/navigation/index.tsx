import Link from 'next/link'
import {GiAstronautHelmet as Astronaut} from 'react-icons/gi'
import {navigationStyles} from './styles'

export default function Navigation() {
    return (
        <nav css={navigationStyles}>
            <Link href="/">
                <a aria-label="Back to Home">
                   <Astronaut /> 
                </a>
            </Link> 
            <Link href="/about">
                <a>
                   about
                </a>
            </Link>   
        </nav>
    )
}
