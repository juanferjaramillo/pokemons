//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("running index.js");

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT_SERVER = 3001;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
// conn.sync({ force: true }).then(() => {
  server.listen(PORT_SERVER, () => {
    console.log(`server listening at ${PORT_SERVER}`); // eslint-disable-line no-console
  });
});
