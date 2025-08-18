require('dotenv').config();

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação SCC4',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs-scc4.web.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
            className: 'button',
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
                href: 'https://www.instagram.com/portal_postal/', 
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SCC4 Docs. Desenvolvido por Guilherme Oliveira.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    function DocusaurusFirebaseEnvPlugin(context, options) {
      return {
        name: 'docusaurus-firebase-env-plugin',
        configureWebpack(config, isServer, utils) {
          // DefinePlugin só deve ser aplicado ao build do cliente
          if (isServer) {
            return {};
          }
          const webpack = require('webpack');
          return {
            plugins: [
              new webpack.DefinePlugin({
                'process.env.DOCUSAURUS_FIREBASE_API_KEY': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_API_KEY),
                'process.env.DOCUSAURUS_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_AUTH_DOMAIN),
                'process.env.DOCUSAURUS_FIREBASE_DATABASE_URL': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_DATABASE_URL),
                'process.env.DOCUSAURUS_FIREBASE_PROJECT_ID': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_PROJECT_ID),
                'process.env.DOCUSAURUS_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_STORAGE_BUCKET),
                'process.env.DOCUSAURUS_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_MESSAGING_SENDER_ID),
                'process.env.DOCUSAURUS_FIREBASE_APP_ID': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_APP_ID),
                'process.env.DOCUSAURUS_FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.DOCUSAURUS_FIREBASE_MEASUREMENT_ID),
              })
            ]
          };
        },
      };
    },
  ],
};

export default config;
