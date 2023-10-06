import { createMachine } from 'xstate';

const getMachine = async (config) => {
  const machine = await createMachine(config);
  return machine.id;
};

export { getMachine };
