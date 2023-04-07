const navBarTool = [
	{ 	text: '首页', link: '/md/tags/' },		// 以 ‘/’结束，默认读取 README.md
	{ 	text: '资源导航', link: '/md/tags/RN/' },
	{ 	
		text: 'Java',
		items:[
			{	
				text: 'Java 集合系列', 
				items:[
					{text: 'Java之集合框架', link: '/md/tags/Java/Collection/'},
				]
			},{
				text: 'Java IO系列',
				items:[
					{text: 'Java之IO框架', link: '/md/tags/Java/IO/'},
					{text: 'Java之Netty框架', link: '/md/tags/Java/IO/Netty/'},
				]
			},{
				text: 'Java 并发系列', 
				items:[
					{text: 'Java之并发框架', link: '/md/tags/Java/Concurrent/'},
				]
			},{
				text: 'Java JVM系列', 
				items:[
					{text: 'Java之JVM相关', link: '/md/tags/Java/JVM/'},
				]
			},
		]
	},
	{
		text: 'Spring',
		items:[
			{
				text: 'Spring Framework系列', 
				items:[
					{text: 'Spring Framework框架体系', link: '/md/tags/Spring/SpringFramework/'},
				]
			},
			{
				text: 'SpringBoot系列', 
				items:[
					{text: 'SpringBoot框架体系', link: '/md/tags/Spring/SpringBoot/'},
				]
			},
			{
				text: 'SpringCloud系列', 
				items:[
					{text: 'SpringCloud框架体系', link: '/md/tags/Spring/SpringCloud/'},
				]
			},
		]
	},
	{
		text: '数据库',
		items:[
			{
				text: 'SQL 数据库', 
				items:[
					{text: 'MySQL 详解', link: '/md/tags/DB/SQL/'},
				]
			},
			{
				text: 'NoSQL 数据库', 
				items:[
					{text: 'Redis 详解', link: '/md/tags/DB/NoSQL/'},
				]
			},
		]
	},
	{
		text: '微服务',
		items:[
			{
				text: 'Web容器', 
				items:[
					{text: 'Tomcat 源码详解', link: '/md/tags/MS/Tomcat/'},
				]
			},
			{
				text: '消息队列', 
				items:[
					{text: 'Kafka 源码详解', link: '/md/tags/MS/MQ/Kafka/'},
					{text: 'RocketMQ 源码详解', link: '/md/tags/MS/MQ/RocketMQ/'},
				]
			},
		]
	},
	{
		text: '中间件',
		items:[
			{
				text: 'Web容器', 
				items:[
					{text: 'Tomcat 源码详解', link: '/md/tags/MW/Tomcat/' },
				]
			},
			{
				text: '消息队列', 
				items:[
					{text: 'Kafka 源码详解', link: '/md/tags/MW/MQ/Kafka/' },
					{text: 'RocketMQ 源码详解', link: '/md/tags/MW/MQ/RocketMQ/' },
				]
			},
		]
	},
	{
		text: 'CS相关',
		items:[
			{
				text: '数据结构与算法', 
				items:[
					{text: '排序算法', link: '/md/tags/CS/Algorithm/' },
				]
			},
			{
				text: '计算机网络', 
				items:[
					{text: 'TCP/UDP协议', link: '/md/tags/CS/Network/' },
				]
			},
			{
				text: '操作系统', 
				items:[
					{text: '进程与线程', link: '/md/tags/CS/OS/' },
				]
			},
		]
	},
	{
		text: '项目复盘',
		items:[
			{text: '问题整理', link: '/md/tags/PR/ProblemSort/' }
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

module.exports = {navBarTool}