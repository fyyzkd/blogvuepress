module.exports = {
    title: '枫无涯',
    description: '枫无涯的个人博客',
	base: '/blog/',
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    themeConfig: {
        nav: [
            { 	text: '首页', link: '/' },
			{ 	text: 'Java',
				items:[
					{text: 'JVM', link: '/java/jvm' }
				]
			},
			{
				text: 'Spring',
				items:[
					{text: 'Spring Framework 5', link: '/java/spring' }
				]
			},
            { 
                text: '枫无涯的知识体系', 
                items: [
                    { text: 'Github', link: 'https://github.com/fyyzkd' },
                    { text: '博客园', link: 'https://www.cnblogs.com/fyusac/' }
                ]
            }
        ]
    }
}