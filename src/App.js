import browserSandbox from '@exact-realty/lot/browser';
import { createMachine } from 'xstate';
import './App.css';

const externalMethods = { createMachine };
const sandbox = await browserSandbox(
  `
  /* sandboxed code*/;
  module.exports={
    getMachine:async (config)=>{
      const machine = await createMachine(config);
      return machine.id;
    },
  };
`,
  undefined,
  externalMethods,
  undefined,
  { browserRequireWorker: true }
);

const miniMachineConfig = {
  id: 'mini',
  initial: 'idle',
  states: { idle: {} },
};
const machine = await sandbox('getMachine', miniMachineConfig);
console.log(machine);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Check the console</p>
      </header>
    </div>
  );
}

export default App;
