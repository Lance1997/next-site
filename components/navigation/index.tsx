import Link from 'next/link'
import {GiAstronautHelmet as Astronaut} from 'react-icons/gi'
import {leakedList} from '@shared/style-helpers'

export default function Navigation() {
    return (
        <nav css={leakedList}>
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
