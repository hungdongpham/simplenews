// custom jsdom environment
const chalk = require('chalk')
const child_process = require('child_process')
const DomEnvironment = require('jest-environment-jsdom');

class CustomEnvironment extends DomEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;
    this.memoryAtStart = this.getMemory();
    this.pid = process.pid;
  }

  getMemory(){
    const command = `ps -o pid,rss,%mem | grep ${this.pid} | awk 'BEGIN{FS=" "}{print $2}'`
    return child_process.execSync(command)
  }

  async setup() {
    await super.setup();
    this.memoryAtStart = this.getMemory(); 
    const now = new Date().toLocaleString();
  }

  async teardown() {
    await super.teardown();
    const memoryUsed = this.getMemory()-this.memoryAtStart;
    const usedMemory = (memoryUsed<=0) ? chalk.green(memoryUsed) :  chalk.red(memoryUsed);
    console.log(`process memory at start was ${this.memoryAtStart.toString().trim()}; diff: ${usedMemory}`)
    const now = new Date().toLocaleString();
    
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;