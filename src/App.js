import browserSandbox from '@exact-realty/lot';
import { createMachine } from 'xstate';
import './App.css';
import logo from './logo.svg';

async function goddag(navn) {
  return `hejsa ${navn}`;
}

const externalMethods = {
  createMachine,
  goddag,
};
const sandbox = await browserSandbox(
  `
  /* sandboxed code*/;
  module.exports={
    hello:async (navn)=>\`Hello \${await goddag(navn)}!\`,
    getMachine:async (config)=>{
      // fetch('https://jsonplaceholder.typicode.com/todos/1');
      const machine = await createMachine(config);
      console.log(machine.id);
      return machine.id;
    },
  };
`,
  ['fetch', 'createMachine'],
  externalMethods,
  undefined,
  { browserRequireWorker: true }
);
const result = await sandbox('hello', 'Anders');
console.log(result);

const miniMachineConfig = {
  id: 'mini',
  initial: 'idle',
  states: { idle: {} },
};
const machine = await sandbox('getMachine', miniMachineConfig);
// console.log(machine);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <iframe
          id="sandboxFrame"
          sandbox="allow-scripts"
          srcDoc="
          <script>
          // Your JavaScript code
          console.log('Hello, Sandbox!');
          </script>
          "
        ></iframe>
      </header>
    </div>
  );
}

export default App;