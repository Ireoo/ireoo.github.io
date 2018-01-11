import Vue from "vue";

/**
 * DB
 * How to use:
 * this.$db
 * 		.table(<table>)
 * 		.where(<json>)
 * 		.data(<json>)
 * 		.other(<json>)
 * 		.get(<string>)
 * 		.then(data)
 * 		.catch(err);
 */
import DB from "../../libs/database";

Vue.prototype.$db = new DB("https://api.ireoo.com", "qiyi.io", true);
