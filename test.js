(function () {
	'use strict';
	// const todo = require('./index.js');
	const assert = require('assert');
	const fs = require('fs');
	
	// 今ある'./tasks.json'をリネームします
	try {
		fs.renameSync('./tasks.json', './tasks.json.org');
	} catch(err) {}

	// fs.unlink('./tasks.json',(err) => {	// ファイルを消す処理が不要に！！

	const todo = require('./index.js');	// 先に読み込むとうまくいかなかったので移動しました。
	
	// todo と list のテスト
	todo.todo('ノートを買う');
	todo.todo('鉛筆を買う');
	assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
	
	// done と donelist のテスト
	todo.done('鉛筆を買う');
	assert.deepEqual(todo.list(), ['ノートを買う']);
	assert.deepEqual(todo.donelist(), ['鉛筆を買う']);
	
	// del のテスト
	todo.del('ノートを買う');
	todo.del('鉛筆を買う');
	assert.deepEqual(todo.list(), []);
	assert.deepEqual(todo.donelist(), []);

	console.log('テストが正常に完了しました');

	// './tasks.json'をリネームしなおして元に戻します
		try {
	 fs.renameSync('./tasks.json.org', './tasks.json');
	} catch(err) {}

	// });

})();
