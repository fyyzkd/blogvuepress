const navBarTool = [
	{ 	text: '首页', link: '/md/tags/' },		// 以 ‘/’结束，默认读取 README.md
	{ 	text: '资源导航', link: '/md/tags/ResourceNavigate/' },
	{ 	text: 'Java',
		items:[
			{text: 'Java基础之集合', link: '/md/tags/java/Collection/' },
			{text: 'Java基础之IO', link: '/md/tags/java/IO/' },
			{text: 'Java进阶之并发', link: '/md/tags/java/Concurrent/' },
			{text: 'Java进阶之JVM', link: '/md/tags/java/JVM/' },
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
					{text: 'MySQL 详解', link: '/md/tags/DataBase/SQL/' },
				]
			},
			{
				text: 'NoSQL 数据库', 
				items:[
					{text: 'Redis 详解', link: '/md/tags/DataBase/NoSQL/' },
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
					{text: 'Tomcat 源码详解', link: '/md/tags/Microservice/Tomcat/' },
				]
			},
			{
				text: '消息队列', 
				items:[
					{text: 'Kafka 源码详解', link: '/md/tags/Microservice/MQ/Kafka/' },
					{text: 'RocketMQ 源码详解', link: '/md/tags/Microservice/MQ/RocketMQ/' },
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
					{text: 'Tomcat 源码详解', link: '/md/tags/Middleware/Tomcat/' },
				]
			},
			{
				text: '消息队列', 
				items:[
					{text: 'Kafka 源码详解', link: '/md/tags/Middleware/MQ/Kafka/' },
					{text: 'RocketMQ 源码详解', link: '/md/tags/Middleware/MQ/RocketMQ/' },
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
					{text: '排序算法', link: '/md/tags/ComputerScience/Algorithm/' },
				]
			},
			{
				text: '计算机网络', 
				items:[
					{text: 'TCP/UDP协议', link: '/md/tags/ComputerScience/Network/' },
				]
			},
			{
				text: '操作系统', 
				items:[
					{text: '进程与线程', link: '/md/tags/ComputerScience/OS/' },
				]
			},
		]
	},
	{
		text: '项目复盘',
		items:[
			{text: '问题整理', link: '/md/tags/ProjectResume/ProblemSort/' }
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