const sock = new WebSocket('ws://127.0.0.1:5001');

        // 接続
        sock.addEventListener('open',(e) => {
            console.log('Socket 接続成功');
        });

        document.addEventListener('DOMContentLoaded',(e) => {
            // サーバーにデータを送る
            document.getElementById('submit').addEventListener('click',(e) => {
              const text = document.getElementById('message').value
                sock.send(text);
            });
        });

        // サーバーからデータを受け取る
        sock.addEventListener('message',(e) => {
          let element = document.createElement('div')
          element.innerText = e.data;
          document.getElementById('app').appendChild(element)
            console.log(e.data);
        });