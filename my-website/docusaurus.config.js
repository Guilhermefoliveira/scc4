// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação SCC4',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Guilhermefoliveira.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/scc4/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Guilhermefoliveira', // Usually your GitHub org/user name.
  projectName: 'scc4', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      
      image: 'img/scc4-home.svg',
      navbar: {
        logo: {
          alt: 'SCC4',
          src: '/img/LogoPreto.svg', 
          srcDark: '/img/LogoBranco.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
            to: '/docs/intro',
            className: 'button button-primary',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Home',
            items: [
              {
                label: 'SCC4',
                to: '/docs/category/geral',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Portal Postal',
                href: 'https://portalpostal.com.br/',
              },
              {
                label: 'BoxCubo',
                href: 'https://boxcubo.com.br/',
              },
              {
                label: 'SCC4',
                href: 'https://scc4.com.br/',
              },
            ],
          },
          {
            title: 'Midias Sociais',
            items: [
              {
                label: 'Instagram',
                href: '/',
              },
            ],
          },
        ],
        // Adicionando a logo no rodapé
        logo: {
          alt: 'Logo SCC4',
          src: 'img/LogoBranco.svg', // Caminho para o arquivo SVG da logo
          href: '/', // Opcional: link que será aberto ao clicar na logo
        },
        copyright: `Copyright © ${new Date().getFullYear()} SCC4 Docs.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
