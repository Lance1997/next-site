import {container, title} from "./styles"
import Logo from '@components/logo'

const Header = () => {
    return (
        <header css={container}>
            <Logo />
            <h1 css={title}>
            Statr
            </h1>
        </header>
    )
}

export default Header;