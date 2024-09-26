import {defineUserConfig} from 'vuepress'
import {recoTheme} from 'vuepress-theme-reco'
import {themeConfig} from './config/index'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'zh-CN',
            description: '无侵入监控你的函数',
            title: 'Medivh',
            warning: '警告',
        },
        '/en/': {
            lang: 'en-US',
            description: 'Monitor your function without intrusion',
            title: 'Medivh',
        },
    },
    bundler: viteBundler({}),
    head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
    theme: recoTheme(themeConfig),
});
