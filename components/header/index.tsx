import {container, title} from "./styles"

const Header = () => {
    return (
        <header css={container}>
            <h1 css={title}>
            Welcome to NextJS Tuts
            </h1>
        </header>
    )
}

export default Header;