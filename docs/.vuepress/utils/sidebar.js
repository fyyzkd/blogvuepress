const path = require('path')
const rootPath = path.dirname(__dirname)


//导入生成导航栏和侧边栏的工具类，目前没起作用
const { javaBarTool } = require(path.join(__dirname, './sidebar/java.js'))
	
const sideBarTool = {
	'/md/tags/Java/': [
		{
			title: 'Java - 反射机制',
			collapsable: false,
			children: [
				['/md/tags/Java/Collection/arraylist.md', "Collection之ArryList详解"],
			],
		},{
			title: 'Java - 集合',
			collapsable: false,
			children: [
				['/md/tags/Java/Collection/arraylist.md', "Collection之ArryList详解"],
			],
		}, {
			title: 'Java - IO',
			collapsable: false,
			children: [
				['/md/tags/Java/IO/IO.md', "Java之IO简介"],
			],
		},{
			title: 'Java - Netty',
			collapsable: false,
			children: [
				['/md/tags/Java/IO/Netty/NIO.md', "Netty框架之NIO基础"],
			],
		}, {
			title: 'Java - JVM',
			collapsable: false,
			children: [
				['/md/tags/Java/JVM/JVM.md', "JVM相关知识详解"],
			],
		}, 
	], 
	"/md/tags/Spring/":[
		{
			title: 'Spring Framework5 基础',
			collapsable: false,
			children: [
				['/md/tags/Spring/SpringFramework/IOC', 'Spring核心之控制反转(IOC)'],	// 前面是链接文件(后缀.md可不写)，后面是显示的内容
				['/md/tags/Spring/SpringFramework/AOP', 'Spring核心之面向切面编程(AOP)']
			],	  
		}, {
			title: 'SpringBoot2 基础',
			collapsable: false,
			children: [
				['/md/tags/Spring/SpringBoot/introduce', 'SpringBoot基础之SpringBoot简介'],
			],	  
		},
	],
	'/md/tags/CS/Network/': [
		{
		  title: '计算机网络',
		  collapsable: false,
		  children: ['/md/tags/CS/Network/TCP协议.md'],
		},
	],

}

// 侧边栏显示的是对应的内容，并非文件名
module.exports = {sideBarTool}