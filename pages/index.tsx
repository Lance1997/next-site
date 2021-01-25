import {InferGetStaticPropsType} from 'next'
import { getPosts } from '@shared/get-posts'
import Link from 'next/link'

import Page from '@layouts/page';

export default function Home({posts}: InferGetStaticPropsType <typeof getStaticProps>) {
  return (
    <Page>
      <ul>
        {
          posts.map(post => {
           return (
              <li key={post.slug}>
                <Link href={`/post/${post.slug}`}>
                  <a>
                  {post.frontMatter.title}
                  </a>
                </Link>
              </li>
           )
          })
        }
      </ul>
    </Page>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts('./posts')
  const allMdx = posts.map(({slug, frontMatter}) => {
    return {
      slug, frontMatter
    }
  })
  return {
    props: {
      posts: allMdx
    }
  }
}
