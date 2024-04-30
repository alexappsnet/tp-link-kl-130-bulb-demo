import {rgb2hsv} from './util.js';

export function createGetSysInfoCommand() {
  return {
    system: {
      get_sysinfo: {}
    }
  };
}

export function createRebootCommand() {
  return {
    system: {
      reboot: {
        delay: 1
      }
    }
  };
}

export function createSwitchOnOffCommand(onOff /* 0-off, 1-on */) {
  return {
    ['smartlife.iot.smartbulb.lightingservice']: {
      transition_light_state: {
        on_off: onOff,
        transition_period: 500
      }
    }
  };
}

export function createSetBrightnessCommand(level /*0-100*/) {
  return {
    ['smartlife.iot.smartbulb.lightingservice']: {
      transition_light_state: {
        ignore_default: 1,
        on_off: 1,
        brightness: level,
        transition_period: 500
      }
    }
  };
}

export function createSetRgbCommand(red /*0-255*/, green /*0-255*/, blue /*0-255*/) {
  const [hue, saturation, level] = rgb2hsv(red/255.0, green/255.0, blue/255.0);
  return {
    ['smartlife.iot.smartbulb.lightingservice']: {
      transition_light_state: {
        ignore_default: 1,
        on_off: 1,
        brightness: Math.round(100 * level),
        color_temp: 0,
        hue,
        saturation,
        transition_period: 500
      }
    }
  };
}
