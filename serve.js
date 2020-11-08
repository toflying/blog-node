var express = require('express');
var app = express();

//静态文件托管
app.use(express.static('./dist'))
//解决跨域
app.use(require("cors")())
//解析json
app.use(express.json())
//引入mongoose插件
const mongoose = require("mongoose")

//链接数据库
//只要安装了mongodb数据库即可 不需要别的操作 第一次创建数据时会自动录入到数据库
mongoose.connect("mongodb://localhost:27017/my-data", { //数据库默认地址 数据库名自己定义即可
	useFindAndModify: true,
	useNewUrlParser: true,
	useCreateIndex: true,
})
//建立数据模型
const Article = mongoose.model("Article", new mongoose.Schema({
	title: {
		type: String
	},
	body: {
		type: String
	}
}))
//新建文章
app.post("/api/articles", async (req, res) => {
	const article = await Article.create(req.body)
	res.send(article)
})
//文章列表
app.get("/api/articles", async (req, res) => {
	const article = await Article.find().sort({'_id':-1})
	res.send(article)
})
//删除文章
app.delete("/api/articles/:id", async (req, res) => {
	await Article.findByIdAndDelete(req.params.id)
	res.send({
		status: true
	})
})
//修改文章
app.put("/api/articles/:id", async (req, res) => {
	const article = await Article.findByIdAndUpdate(req.params.id, req.body)
	res.send(article)
})
//文章详情
app.get("/api/articles/:id", async (req, res) => {
	const article = await Article.findById(req.params.id)
	res.send(article)
})

//监听服务端口
var server = app.listen(3000, () => {
	console.log("服务已开启，访问地址：localhost:3000")
})