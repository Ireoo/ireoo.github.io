<template>
    <div class="header">
        <div class="main-header">
            <ul class="left">
                <li class="logo">
                    <router-link to="/">
                        <icon name="ravelry" scale="1.6"></icon>
                        <span v-text="site.name"></span>
                    </router-link>
                </li>
            </ul>
            <ul class="right" v-if="!user">
                <li>
                    <router-link to="/login">
                        <icon name="user-circle-o"></icon>
                        <span>登陆</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/reg">
                        <icon name="user-plus"></icon>
                        <span>注册</span>
                    </router-link>
                </li>
                <li>
                    <b-btn variant="secondary" size="sm" style="padding: 1px;">
                        <qriously id="QRcode" style="height: 15px;" value="19980108@qq.com" :size="15"/>
                    </b-btn>
                    <!--<b-tooltip :show.sync="QRcodeShow" target="QRcode" placement="bottomleft">-->
                    <b-popover target="QRcode"
                               :show.sync="QRcodeShow"
                               triggers="click"
                               placement="bottomleft">
                        <qriously value="19980108@qq.com" :size="150"/>
                    </b-popover>
                    <!--</b-tooltip>-->
                </li>
            </ul>
            <ul class="right" v-if="user">
                <li>
                    <router-link to="/user">
                        <icon name="user-circle-o"></icon>
                        <span v-text="user.username"></span>
                    </router-link>
                </li>
                <li>
                    <router-link @click="sessionStorage.removeItem('user')">
                        <icon name="sign-out"></icon>
                        <span>退出</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		name: "vue-header",
		data: function () {
			return {
				QRcodeShow: false
			};
		},
		props: ["site", "user"],
		mounted() {
			this.$nextTick(function () {
				// this.site.name = "123";
			});
		}
	};
</script>

<style>
    div.header {
        height: 40px;
    }

    div.header > div.main-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 40px;
        background: #333;
        color: #fff;
        text-align: left;
        line-height: 40px;
        padding: 5px;
    }

    div.header > div.main-header > ul {
        line-height: 30px;
        width: 50%;
        display: inline-block;
    }

    div.header > div.main-header > ul.left {
        float: left;
    }

    div.header > div.main-header > ul.right {
        text-align: right;
        float: right;
    }

    div.header > div.main-header > ul > li {
        line-height: 30px;
    }

    div.header > div.main-header > ul > li > button {
        display: flex; /*Flex布局*/
        display: -webkit-flex; /* Safari */
        align-items: center; /*指定垂直居中*/
    }

    div.header > div.main-header > ul > li > a {
        color: #FFF;
        line-height: 30px;
    }

    div.header > div.main-header > ul > li > a:hover {
        color: #ff7272;
    }

    div.header > div.main-header > ul > li.logo > a:hover {
        text-decoration: none;
    }

    div.header > div.main-header > ul > li > a > i, div.header > div.main-header > ul > li > a > svg, div.header > div.main-header > ul > li > a > img {
        margin-right: 5px;
    }

    div.header > div.main-header > ul > li.logo > a > i, div.header > div.main-header > ul > li.logo > a > svg, div.header > div.main-header > ul > li.logo > a > img {
        /*font-size: 20px;*/
        color: #ff0000;
    }

    div.header > div.main-header > ul > li.logo > a > span {
        font-size: 14px;
    }

    div.header > div.main-header > ul > li.logo > a > span:hover {
        color: red;
    }
</style>