<template>
	<div>
		<div class="content">
			<div class="li">
				<h1>基本信息</h1>
				<table class="base">
					<tr>
						<td>
							<label>姓名</label>
							<span>王超</span>
						</td>
						<td>
							<label>邮箱</label>
							<span>s@ireoo.com</span>
						</td>
						<td>
							<label>性别</label>
							<span>男</span>
						</td>
					</tr>
					<tr>
						<td>
							<label>年龄</label>
							<span>{{age}}</span>
						</td>
						<td>
							<label>毕业院校</label>
							<span>淮阴工学院</span>
						</td>
						<td>
							<label>电话</label>
							<span>13395209955</span>
						</td>
					</tr>
				</table>

				<table class="github">
					<tr>
						<td>
							<label>个人项目地址</label>
							<span>https://github.com/Ireoo</span>
						</td>
					</tr>
				</table>
			</div>

			<div class="li">
				<h1>应聘方向</h1>
				<ul class="yinpin">
					<li>
						<label>求职行业：</label>
						计算机软件，计算机服务（系统、数据服务），大数据，AI，区块链，互联网/电子商务
					</li>
					<li>
						<label>应聘职位：</label>
						软件工程师，系统架构师，数据分析师
					</li>
					<li>
						<label>薪资要求：</label>
						面议
					</li>
				</ul>
			</div>

			<div class="li">
				<h1>工作经历</h1>
				<ul>
					<li v-for="(one, key) in works" :key="key">
						<p class="timer">{{one.timer}}</p>
						<p>{{one.com}}
							<label>所属行业：{{one.industry}}</label>
						</p>
						<p>{{one.description}}</p>
					</li>
				</ul>
			</div>

			<div class="li">
				<h1>项目经验</h1>
				<ul>
					<li v-for="(one, key) in objects" :key="key">
						<p class="timer">{{one.timer}}
							<span>{{one.title}}</span>
						</p>
						<p>
							<label>软件环境：</label>{{one.software}}
						</p>
						<p>
							<label>项目描述：</label>{{one.description}}
						</p>
						<p>
							<label>责任描述：</label>{{one.duty}}
						</p>
					</li>
				</ul>
			</div>

			<div class="li">
				<h1>培训教育</h1>
				<ul>
					<li v-for="(one, key) in studys" :key="key">
						<p>
							<b>{{one.timer}}</b>
							<b>{{one.school}}</b>
							<b>{{one.major}}</b>
							<b>{{one.edu}}</b>
						</p>
					</li>
				</ul>
			</div>

			<div class="li">
				<h1>语言技能</h1>
				<table class="art">
					<tr>
						<td>语言</td>
						<td>熟练度</td>
						<td>使用时间（年）</td>
					</tr>
					<tr v-for="(one, key) in arts" :key="key">
						<td>{{one.name}}</td>
						<td>{{one.proficiency}}</td>
						<td>{{one.timer | timer}}</td>
					</tr>
				</table>
			</div>

			<div class="li">
				<h1>自我评价</h1>
				<p class="about">{{about}}</p>
			</div>
		</div>
	</div>
</template>

<script>
const YAML = require("js-yaml");

export default {
	name: "Index",
	title: "首页",
	computed: {
		age: function() {
			return new Date().getFullYear() - 1988;
		}
	},
	data: function() {
		return {
			works: [],
			objects: [],
			studys: [],
			arts: [],
			about: ""
		};
	},
	filters: {
		timer: function(v) {
			return new Date().getFullYear() - v;
		}
	},
	mounted: function() {
		// 获取工作经验
		this.$http(
			`https://raw.githubusercontent.com/Ireoo/blog/master/about/works.yml`
		).then(r => {
			this.works = YAML.load(r.data);
		});

		// 获取语言技能
		this.$http(
			`https://raw.githubusercontent.com/Ireoo/blog/master/about/arts.yml`
		).then(r => {
			this.arts = YAML.load(r.data);
		});

		// 获取项目经验
		this.$http(
			`https://raw.githubusercontent.com/Ireoo/blog/master/about/objects.yml`
		).then(r => {
			this.objects = YAML.load(r.data);
		});

		// 获取培训教育
		this.$http(
			`https://raw.githubusercontent.com/Ireoo/blog/master/about/studys.yml`
		).then(r => {
			this.studys = YAML.load(r.data);
		});

		// 获取自我评价
		this.$http(
			`https://raw.githubusercontent.com/Ireoo/blog/master/about/me.txt`
		).then(r => {
			this.about = r.data;
		});
	}
};
</script>

<style scoped>
div.content {
	padding-top: 100px;
}

div.li {
	margin-bottom: 50px;
}

div.li h1 {
	font-size: 30px;
	color: #4898f8;
	margin-bottom: 20px;
}

table {
	border-collapse: collapse;
	width: 100%;
	border: none;
	margin-bottom: 50px;
}

table tr td {
	border: 1px #333 solid;
	text-align: center;
	padding: 5px;
}

table.base tr {
	border-top: 1px solid #333;
}

table.base tr:first-child {
	border-top: none;
}

table.base tr td {
	border-width: 0 0 0 1px;
}

table.base tr td:first-child {
	border-width: 0;
}

table tr td label {
	text-align: right;
	padding-right: 5%;
	color: #aaa;
}

table tr td span {
	margin-left: 5%;
	text-align: left;
	font-weight: bold;
}

table tr td label,
table tr td span {
	margin-bottom: 0;
	width: 45%;
	float: left;
	font-size: 20px;
}

table.github tr td label {
	border-right: 1px #333 solid;
}

table.art tr td {
	font-size: 20px;
}

table.art tr td:first-child {
	width: 70%;
	text-align: left;
}

ul {
	list-style: none;
}

ul li,
ul li label {
	font-size: 20px;
}

p {
	font-size: 20px;
}

p.about {
	text-indent: 40px;
}

ul li p.timer {
	font-weight: bold;
}

ul.yinpin li label {
	color: #aaa;
}

ul li p span {
	font-weight: normal;
	font-size: 20px;
	color: red;
}

ul li p label {
	color: #aaa;
}

ul li p b {
	font-weight: normal;
	margin-right: 30px;
	font-size: 20px;
}

ul li p b:first-child {
	color: #aaa;
}
</style>
