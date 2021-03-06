// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
	const wxContext = cloud.getWXContext()
	// 1. 获取数据库引用
	const db = cloud.database()
	let result = await db.collection('test').add({
			// data 字段表示需新增的 JSON 数据
			data: {
				test:"2"
			}
		})
	return result
}
