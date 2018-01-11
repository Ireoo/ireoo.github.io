import Vue from "vue";
import ClientJS from "clientjs";

const client = new ClientJS();

client.weixin = () => {
	let ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
};

client.chat = () => {
	return client.weixin();
};

Vue.prototype.$client = client;
