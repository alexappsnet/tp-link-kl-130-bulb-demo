import {objToJson} from './util.js';
import net from 'net';

function encryptMessage(text) {
  let bb = [0, 0, 0, text.length];
  let key = 0xAB;
  for (let i = 0; i < text.length; i++) {
    const b = text.charCodeAt(i) ^ key;
    key = b;
    bb.push(b);
  }
  return Uint8Array.from(bb);
}

function decryptMessage(bb) {
  let output = ''
  let key = 0xAB
  for(let i = 4; i < bb.length; ++i) {
    const b = bb[i];
    output += String.fromCharCode(b ^ key);
    key = b;
  }
  return output;
}

export function sendTcpCommand(host, port, cmd) {
  return new Promise((resolve, reject) => {
    const cmdAsString = typeof cmd === 'string' ? cmd : objToJson(cmd);
    console.log(`Send: ${cmdAsString} to ${host}:${port}`);
    const encryptedMessage = encryptMessage(cmdAsString);
    let response = '<no response>';
    let error = undefined;

    let client = new net.Socket();
    client.connect(port, host, function () {
      console.log('  Connected to device!');
      client.write(encryptedMessage);
    });

    client.on('data', function (data) {
      response = decryptMessage(data);
      client.destroy();
    });

    client.on('close', function () {
      console.log('    Connection closed.');
      if (!error) {
        resolve(response);
      }
    });

    client.on('error', err => {
      error = err;
      reject(err);
    });
  });
}
