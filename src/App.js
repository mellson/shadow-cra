import browserSandbox from '@exact-realty/lot/browser-worker';
import sandboxedCode from './sandboxed.bundle.js?raw';
import './App.css';

const sandbox = await browserSandbox(sandboxedCode);

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
