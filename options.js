module.exports = Object.freeze({
  port: {
    default: 2775,
    alias: 'p',  
    describe: 'Port which server listen to.'
  },
  ddmin: {
    default: 0, 
    describe: 'Minimum delay after submit_sm requested and deliver_sm request to ESME.'
  },
  ddmax: {
    default: 0, 
    describe: 'Maximum delay after submit_sm requested and deliver_sm request to ESME.'
  },
  statuses: {
    alias: 's', 
    default: 'delivered', 
    describe: "Comma separated list of statuses, server send in deliver_sm request to ESME."
  },
  auth: {
    default: 'user:pass', 
    describe: 'Comma separated auth credentials in format [system_id]:[password]'
  },
  help: {
    default: false, 
    alias: 'h', 
    describe: 'Current help.'
  }
});