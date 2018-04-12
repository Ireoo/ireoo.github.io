import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [];
let files = require.context("./html", false, /\.vue$/);

files.keys().forEach(key => {
    console.log(key);
    let file = key.replace(/(\.\/|\.vue)/g, "");

    let fileArray = file.split("/");
    let filename = fileArray
        .pop()
        .replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
            return $1.toUpperCase() + $2.toLowerCase();
        });
    let dir = fileArray.join("/");
    let dirname = fileArray
        .map(d => {
            return d.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
                return $1.toUpperCase() + $2.toLowerCase();
            });
        })
        .join("");

    let component = require(`./html/${file}.vue`).default;

    let route = {
        path: filename.toLowerCase() === "index" ?
            `/${dir}` :
            `/${file.toLowerCase()}`,
        name: filename.toLowerCase() === "index" && dirname != "" ?
            dirname :
            filename,
        component: component,
        meta: {
            title: component.title
        }
    };

    routes.push(route);

    console.log(`加载文件: ${key} \r\n挂载点: ${route.path} \r\n完成!`);
});

export default new Router({ routes });