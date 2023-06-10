// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Other People Magazine Docs',
  tagline: 'The most innovative student-run digital publication!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Other-People-UCSD.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: 'main',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Other-People-UCSD', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Other-People-UCSD/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Other-People-UCSD/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Other People',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/category/calla-lily',
            label: 'Calla-Lily',
            position: 'left',
          },
          {
            to: '/docs/category/pink-currents',
            label: 'Pink-Currents',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.otherpeoplesd.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/Other-People-UCSD/docs',
            label: 'Docs GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Calla-Lily',
                to: '/docs/category/calla-lily',
              },
              {
                label: 'Pink-Currents',
                to: '/docs/category/pink-currents',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/otherpeoplesd/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/otherpeoplesd/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Organization',
                href: 'https://github.com/Other-People-UCSD',
              },
              {
                label: 'GitHub Docs',
                href: 'https://github.com/Other-People-UCSD/docs',
              },
              {
                label: 'GitHub Calla-Lily',
                href: 'https://github.com/Other-People-UCSD/Calla-Lily',
              },
              {
                label: 'GitHub Pink-Currents',
                href: 'https://github.com/Other-People-UCSD/Pink-Currents',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Other People Magazine.<br/> Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
