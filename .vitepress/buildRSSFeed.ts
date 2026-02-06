import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://datasnack.org`;

export async function buildRSSFeed(config: SiteConfig) {
    const feed = new Feed({
        title: 'Data Snack',
        description: 'Posts from the Data Snack initiative',
        id: baseUrl,
        link: baseUrl,
        language: 'en',
    })

    const posts = await createContentLoader('news/*.md', {
        excerpt: true,
        render: true
    }).load()

    posts.sort(
        (a, b) =>
            +new Date(b.frontmatter.date as string) -
            +new Date(a.frontmatter.date as string)
    )

    for (const { url, excerpt, frontmatter, html } of posts) {
        feed.addItem({
            title: frontmatter.title,
            id: `${baseUrl}${url}`,
            link: `${baseUrl}${url}`,
            description: excerpt,
            content: html,
            date: frontmatter.date
        })
    }

    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}