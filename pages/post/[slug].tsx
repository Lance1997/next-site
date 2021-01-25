import {GetStaticPaths, GetStaticPropsContext,InferGetStaticPropsType} from 'next'
import {getPosts, FormatedPost} from '@shared/get-posts'
import hydrate from 'next-mdx-remote/hydrate'

export default function Post({mdxContent, frontMatter}: InferGetStaticPropsType <typeof getStaticProps>) {

    const content = hydrate(mdxContent, {components: {}})
    return (
        <>
            <h1>{frontMatter.title}</h1>
            <article>{content}</article>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts('./posts')

    const paths = posts.map(({slug}) => (
        {
            params: {
                slug,
            }
        }
    ))
    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
    const {slug: routeSlug} = params as {slug: string}

    const posts = await getPosts('./posts')

    const {mdx, frontMatter} = posts.find(({slug: postSlug}) => postSlug === routeSlug) as FormatedPost

    return {
        props: {
            mdxContent: mdx,
            frontMatter
        }
    }
}