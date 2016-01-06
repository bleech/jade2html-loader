/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author bleech
*/
var loaderUtils = require("loader-utils");
module.exports = function(source) {
	this.cacheable && this.cacheable(true);
	var jade2php = require("jade2php");
	var query = loaderUtils.parseQuery(this.query);
	var req = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
	return jade2php(String(source), {
		filename: req,
		self: query.self,
		pretty: query.pretty,
		locals: query.locals,
		doctype: query.doctype || 'html',
		compileDebug: this.debug || false,
    omitPhpRuntime: query.omitPhpRuntime,
    omitPhpExtractor: query.omitPhpExtractor,
	});
}

module.exports.raw = true;
