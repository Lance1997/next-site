import Head from 'next/head'
import {metadata as siteMetadata} from 'config'

export type SEOProps = {
    title?: string;
    description?: string;
}

const SEO = ({title, description}: SEOProps) => {

    const pageTitle = title 
        ? `${title} - ${siteMetadata.siteName}` 
        : siteMetadata.siteName

    const pageDescription = description 
        ? `${description} - ${siteMetadata.description}` 
        : siteMetadata.description

    return (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}/>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:site" content={siteMetadata.author.twitter} />
    </Head>
    )
}

export default SEO