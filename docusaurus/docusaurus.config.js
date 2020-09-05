module.exports = {
  title: 'Fastcfs',
  tagline: 'FastCFS is a high performance distributed file storage system.',
  url: 'https://fastcfs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Fastcfs',    // Usually your GitHub org/user name.
  projectName: 'fastcfs.github.io',  // Usually your repo name.
  stylesheets: [
    '/css/gitter-sidecar.css',
  ],
  scripts: [
    '/js/gitter-sidecar.js',
    { src: 'https://sidecar.gitter.im/dist/sidecar.v1.js', async: true },
  ],
  themeConfig: {
    navbar: {
      title: '',
      logo: { alt: 'Fastcfs Logo', src: 'img/fastcfs-logo.svg' },
      items: [
        { label: 'Announcement',    href: 'https://fastcfs.github.io/announcement/', position: 'right', target: '_self' },
        { label: 'Blog',            href: 'https://fastcfs.github.io/blog/',         position: 'right', target: '_self' },
        { label: 'Docs',            to:   'docs/',                                position: 'right', activeBasePath: 'docs' },
        { label: 'Getting Started', to:   'docs/getting-started',                 position: 'right' },
        { label: 'Tutorial',        to:   'docs/video-tutorial',                  position: 'right' },
        { label: 'API',             to:   'docs/api/README',                      position: 'right' },
        { label: 'FAQ',             to:   'docs/faq/README',                      position: 'right' },
        { label: 'GitHub',          href: 'https://github.com/happyfish100/FastCFS',   position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: 'docs/getting-started' },
            { label: 'Tutorial',        to: 'docs/video-tutorial' },
            { label: 'FAQ',             to: 'docs/faq/README' },
            { label: 'API Reference',   to: 'docs/api/README' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow',  href: 'https://stackoverflow.com/questions/tagged/fastcfs' },
            { label: 'Gitter',          href: 'https://gitter.im/fastcfs/fastcfs' },
            { label: 'Twitter',         href: 'https://twitter.com/fastcfs' }
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog',      href: 'https://fastcfs.github.io/community/', target: '_self' },
            { label: 'Branding',  to:   'branding' },
            { label: 'Press',     to:   'press' },
            { label: 'GitHub',    href: 'https://github.com/fastcfs/fastcfs#readme' },
          ],
        },
      ],
      logo: {
        alt  : 'Fastcfs Logo',
        src  : 'img/fastcfs-logo.svg',
        href : 'https://fastcfs.github.io/',
      },
      copyright: `Copyright © 2016-${new Date().getFullYear()} Fastcfs Contributors`,
    },
    algolia: {
      apiKey           : 'cd8ca324c447a803e8a196a5c8fa22dd',
      indexName        : 'fastcfs',
      searchParameters : {},                                   // Optional (if provided by Algolia)
    },
    googleAnalytics: {
      trackingID: 'UA-45269670-1',
    },
    prism: {
      additionalLanguages: [
        'csharp',
        'kotlin',
        'scala',
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`` path).
          homePageId: 'introduction/README',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fastcfs/fastcfs.github.io/edit/master/docusaurus/',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/fastcfs/fastcfs.github.io/edit/master/docusaurusblog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
