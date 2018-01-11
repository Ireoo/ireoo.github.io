import axios from "axios";

function DB(url, key, debug = false) {
	this.API = axios;
	this.config = {
		url: process.env.API_URL || url,
		key: process.env.API_KEY || key,
		debug: process.env.API_DEBUG || debug
	};
	this._data = {
		where: {},
		data: {},
		other: {}
	};
	
	this.table = (table) => {
		this._table = table;
		return this;
	};
	
	this.where = (where) => {
		this._data.where = where || {};
		return this;
	};
	
	this.data = (data) => {
		this._data.data = data || {};
		return this;
	};
	
	this.other = (other) => {
		this._data.other = other || {};
		return this;
	};
	
	this.get = (command) => {
		let self = this;
		return new Promise((res, rej) => {
			self._data.key = self.config.key;
			if (self.config.debug) console.log(`SQL -> [into]\r\n${JSON.stringify(self._data)}`);
			self.API.post(`${self.config.url}/${self._table}/${command}`, self._data, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(result => {
				self._data = {
					where: {},
					data: {},
					other: {}
				};
				let data = null;
				try {
					data = JSON.parse(result.data);
				} catch (e) {
					data = result.data;
				}
				res(data);
				
				if (self.config.debug) console.log(`SQL -> [info]\r\n${JSON.stringify(data)}`);
			}).catch(err => {
				rej(err);
				if (self.config.debug) console.log(`SQL -> [error]\r\n${JSON.stringify(err)}`);
			});
		});
	};
}

exports = module.exports = DB;
