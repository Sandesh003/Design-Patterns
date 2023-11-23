// Creational Design Pattern

function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
    this.checkProcessState = (instance) => {
      console.log("this is state... ", instance);
    };
  }

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();

      return pManager;
    },
  };
})();

const processManager1 = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

const demoProcess = new Process("active");

processManager1.checkProcessState(demoProcess);

console.log(processManager1 === processManager2);
