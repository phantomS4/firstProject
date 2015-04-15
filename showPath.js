var getPath = require('./getPath');

function main(argv)
{
	getPath.travel(argv[0],function (pathname){
		console.log(pathname);
	});
}

main(process.argv.slice(2));
