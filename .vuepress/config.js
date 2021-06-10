const removeMd = require('remove-markdown')
module.exports = {
    title: 'Lufuhu的博客',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: '博客文章',
                link: '/post',
            },
        ],
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'post',
                    dirname: '_posts',
                    path: '/post/',
                    layout: 'Layout',
                    itemLayout: 'Post',
                    pagination: {
                        lengthPerPage: 10,
                    },
                },
            ],
            frontmatters: [
                {
                    id: "tag",
                    keys: ['tag', 'tags'],
                    path: '/tag/',
                    layout: 'Tag',
                },
                {
                    id: "topic",
                    keys: ['topic'],
                    path: '/topic/',
                    layout: 'Topic',
                },
            ],
        }],
        ['@vuepress/nprogress'],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }]
    ],
    extendPageData(pageCtx) {
        const strippedContent = pageCtx._strippedContent
        if (!strippedContent) {
            return
        }
        pageCtx.summary = removeMd(strippedContent.trim().replace(/^#+\s+(.*)/, '').slice(0, 160)) + ' ...'
        pageCtx.frontmatter.description = pageCtx.summary
    },
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
        }
    }
}