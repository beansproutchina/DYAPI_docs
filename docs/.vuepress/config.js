import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
const articles=[{
  text: 'Guide',
  collapsible: true,
  children: [
    'guide/README.md',
    'guide/installation.md',
    'guide/architecture.md',
    'guide/authentication.md',
    'guide/HTTPApi.md',
  ]
}, {
  text: 'Developing Reference',
  collapsible: true,
  children: [
    'developing/README.md',
    'developing/globalSettings.md',
    'developing/dyapi.md',
  ]
}
]

export default defineUserConfig({
  lang: 'en-US',
  title: 'DYAPI docs',
  description: 'another lightweight backend framework',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
        sidebar:{
          '/': [{
            text: 'DYAPI Docs',
            children: articles,
          }]
        },
        navbar: ['/', {
          text: 'Guide',
          link: 'guide/'
        },{
          text: 'Developing',
          link: 'developing/'
        }]
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        sidebar:{
          '/zh/': [{
            text: 'DYAPI 文档',
            children: articles,
          }]
        },
        navbar: [{
          text: '首页',
          link: '/zh/'
        }, {
          text: '指南',
          link: '/zh/guide/'
        },{
          text: '开发',
          link: '/zh/developing/'
        }]
      }
    },


  }),

  bundler: viteBundler(),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'DYAPI',
      description: 'another lightweight backend framework'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'DYAPI',
      description: '另一个轻量级后端框架'
    }
  }

})
