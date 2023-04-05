const path = require('path')
const rootPath = path.dirname(__dirname)


//导入生成导航栏和侧边栏的工具类
const { navBarTool } = require(path.join(__dirname, './utils/navibar.js'))
const { sideBarTool } = require(path.join(__dirname, './utils/sidebar.js'))


let config = {
    title: '枫无涯',
    description: '枫无涯的个人博客',
	base: '/blog/',
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
	plugins: ['@vuepress/back-to-top'],
    themeConfig: {
		// 导航栏
        nav: navBarTool,
		// 侧边栏
		sidebar: sideBarTool
    }
}
module.exports = config