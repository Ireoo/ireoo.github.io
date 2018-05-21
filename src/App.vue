<template>
	<div id="app">
		<vue-header></vue-header>
		<div>{{speech}}</div>

		<!-- <vue-speech lang="zh-CN"></vue-speech> -->
		<router-view class="main" :speechs="speechs"></router-view>
		<!-- <vue-footer></vue-footer> -->
	</div>
</template>

<script>
import VueHeader from "./include/vueHeader.vue";
// import VueFooter from "./include/vueFooter.vue";

export default {
	components: {
		// VueFooter,
		VueHeader
	},
	name: "app",
	data: function() {
		return {
			showHeader: true,
			speech: "",
			speechs: []
		};
	},
	watch: {
		"$route.meta.title": function(v) {
			document.title = `${v} - ${this.$store.state.site.page}`;
		}
	},
	beforeMount: function() {
		// this.$speech.text(text => {
		// 	this.speech = text;
		// 	// console.log(text);
		// });
	},
	mounted: function() {
		document.title = `${this.$route.meta.title} - ${
			this.$store.state.site.page
		}`;

		this.$nextTick(function() {});

		if (annyang) {
			// Let's define a command.
			annyang.setLanguage("zh-CN");

			annyang.debug();

			// Start listening.
			annyang.start({ autoRestart: true, continuous: true });

			annyang.addCallback("result", result => {
				console.log(result);
				this.speech = result[0];
				this.speechs.push(result[0]);
			});

			annyang.addCallback("end", result => {
				console.log(`end`);
				// this.speech = result[0];
			});

			annyang.addCallback("error", result => {
				console.log(result);
				// this.speech = result[0];
			});

			annyang.addCallback(
				"resultMatch",
				(userSaid, commandText, phrases) => {
					console.log(userSaid); // sample output: 'hello'
					console.log(commandText); // sample output: 'hello (there)'
					console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
				}
			);

			annyang.addCallback("soundstart", result => {
				console.log(`soundstart`);
				// this.speech = result[0];
			});

			annyang.addCallback("start", result => {
				console.log(`start`);
				// this.speech = result[0];
			});
		} else {
			console.log(`no annyang`);
		}

		// let last = new Date().getTime();
		// this.$speech.text((text, end) => {
		// 	console.log(`[${new Date().getTime() - last} MS] -> ${text}`);
		// 	last = new Date().getTime();
		// 	if (end) {
		// 		this.speechs.push(text);
		// 	} else {
		// 		this.speech = text;
		// 	}
		// 	// console.log(text);
		// });
	}
};
</script>

<style>
@import url("/css/style.css");
</style>
