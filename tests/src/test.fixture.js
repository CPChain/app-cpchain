import Zemu from '@zondax/zemu';
import Eth from '@ledgerhq/hw-app-eth';

const transactionUploadDelay = 60000;

async function waitForAppScreen(sim) {
    await sim.waitUntilScreenIsNot(sim.getMainMenuSnapshot(), transactionUploadDelay);
}

const sim_options_nanos = {
    model: 'nanos',
    logging: true,
    X11: true,
    startDelay: 5000,
    custom: '',
};

const sim_options_nanox = {
    model: 'nanox',
    logging: true,
    X11: true,
    startDelay: 5000,
    custom: '',
};

const Resolve = require('path').resolve;

const NANOS_ELF_PATH = Resolve('elfs/cpchain_nanos.elf');
const NANOX_ELF_PATH = Resolve('elfs/cpchain_nanox.elf');

const NANOS_CPC_LIB = { "CPChain": NANOS_ELF_PATH };
const NANOX_CPC_LIB = { "CPChain": NANOX_ELF_PATH };

const TIMEOUT = 1000000;

function zemu(device, func) {
    return async () => {
        jest.setTimeout(TIMEOUT);
        let zemu_args;
        let sim_options;
        if(device === "nanos") {
            zemu_args = [NANOS_ELF_PATH];
            sim_options = sim_options_nanos;
        }
        else {
            zemu_args = [NANOX_ELF_PATH];
            sim_options = sim_options_nanox;
        }
        const sim = new Zemu(...zemu_args);
        try {
            console.log('----->>>>>>0')
            await sim.start(sim_options);
            console.log('----->>>>>>1')
            const transport = await sim.getTransport();
            console.log('----->>>>>>2')
            await func(sim, new Eth(transport));
        } finally {
            await sim.close();
        }
    };
}

module.exports = {
    zemu,
    waitForAppScreen,
    NANOS_ELF_PATH,
    NANOX_ELF_PATH,
    NANOS_CPC_LIB,
    NANOX_CPC_LIB,
    sim_options_nanos,
    sim_options_nanox,
    TIMEOUT
}
