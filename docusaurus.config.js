/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '郭海林的博客',
  tagline: 'Dinosaurs are cool',
  url: 'https://www.guohailin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '郭海林的博客',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: "/",
          label: "首页",
          position: "right",
        },
        {
          href: 'https://github.com/GHLxdy/guohailin.com',
          label: '本站源码',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 蜀ICP备2020031778号`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
