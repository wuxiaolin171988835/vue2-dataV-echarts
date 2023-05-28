// 引入nodejs-websocket
const ws = require("nodejs-websocket");
// 定义监听的host地址跟port端口
const host = "127.0.0.1",
  port = 8000;
// 创建ws服务
const service = ws
  .createServer((conn) => {
    // 定义测试数据
    const data = [
      "[100, 23, 45, 134, 78, 155, 21]",
      "[20, 30, 40, 133, 90, 45, 87]",
      "[104, 145, 99, 44, 78, 167, 189]",
      "[100, 45, 199, 124, 89, 27, 18]"
    ];
    conn.on("text", (message) => {
      // 当收到消息的时候就开始定时推送
      console.log("message", message);
      setInterval(() => {
        // 随机推送message里的内容
        conn.sendText(data[(Math.random() * 3).toFixed(0)]);
      }, 2000);
    });
  })
  .listen(port, host, () => {
    console.log("service---connection---");
  });
