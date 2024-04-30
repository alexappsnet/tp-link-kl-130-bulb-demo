import {sendTcpCommand} from './tcp.js';
import {
  createGetSysInfoCommand,
  createRebootCommand,
  createSetBrightnessCommand, createSetRgbCommand,
  createSwitchOnOffCommand,
} from './command.js';
import delay from 'delay';

const TCP_HOST = process.argv[2] || '192.168.1.135';
const TCP_PORT = 9999;

async function send(command) {
  await delay(2000);
  let response = await sendTcpCommand(TCP_HOST, TCP_PORT, command);
  console.log('Recv:', response);
  console.log();
}

async function main() {
  await send(createGetSysInfoCommand());
  await send(createSwitchOnOffCommand(1));  // switch on
  await send(createSetBrightnessCommand(25));  // 25% brightness
  await send(createSetBrightnessCommand(100));  // full brightness
  await send(createSetRgbCommand(255, 0, 0));  // red
  await send(createSetRgbCommand(0, 255, 0));  // green
  await send(createSetRgbCommand(0, 0, 255));  // blue
  await send(createSetRgbCommand(255, 255, 255));  // white
  await send(createSwitchOnOffCommand(0));  // switch off
  await send(createRebootCommand())  // reboot

  console.log('Done');
}

void main();
