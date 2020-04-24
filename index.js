const log = {
	label: false,
	showMemoryUsage: true,
	setName(name) {
		log.label = name;
	},
	debug(a, b) {
		log.log(a, b, 'debug');
	},
	error(a, b) {
		log.log(a, b, 'error');
	},
	warning(a, b) {
		log.log(a, b, 'warning');
	},
	success(a, b) {
		log.log(a, b, 'success');
	},
	info(a, b) {
		log.log(a, b, 'info');
	},
	formatBytes(a, b = 2) {
		if (0 === a) return '0 Bytes';
		const c = 0 > b ? 0 : b,
			d = Math.floor(Math.log(a) / Math.log(1024));
		return (
			parseFloat((a / Math.pow(1024, d)).toFixed(c)) +
			' ' +
			['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]
		);
	},
	log(a, b, type) {
		if (process.env.NODE_ENV !== 'production') {
			var trace = new Error();
			let file = '';
			var regExp = /(?<=\$ \()(.*)\.vue|(?<=\()(.*)\.vue|(?<=\$ \()(.*)\.js/;
			try {
				var matches = regExp.exec(trace.stack.toString());
				file = matches[0].split('./').pop();
			} catch (error) {}
			if (!type) type = 'debug';
			const colors = {
				debug: '#1565C0',
				error: '#c62828',
				warning: '#E64A19',
				success: '#2E7D32',
				info: '#7E57C2',
			};
			const memory = log.showMemoryUsage
				? `⚙️ ${log.formatBytes(performance.memory.usedJSHeapSize, 0)}`
				: '';
			let colorMain = `background: ${
				colors[type] ? colors[type] : '#424242'
			}; font-size:10px;color: #FFF;;line-height:15px; font-weight:bold;border-radius:0px 2px 2px 0px;`;
			let colorTime = `font-size:10px;line-height:15px;background: #263238; color: #ECEFF1;border-radius:0`;

			let colorFile = `font-size:10px;font-weight:normal;;line-height:15px;background: #546E7A; color: #ECEFF1;border-radius:2px 0px 0px 2px`;
			const time = `${new Date().toTimeString().split(' ')[0]}`;
			if (!file) file = type.toUpperCase();
			console.log(
				` %c ${memory} %c ${time} %c ⚡ ${log.label ? log.label : file} `,
				colorFile,
				colorTime,
				colorMain,
				a ? a : '',
				b ? b : ''
			);
		}
	},
};

log.setName('Logger for vue.js [Nuxt]');
log.info('ℹ️ Usage & More info 👉 https://github.com/jodacame/vue-logger');
log.setName(false);

module.exports = log;
