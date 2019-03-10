import { initializeBuilder, logComplete, logError } from './common';
import Runner from './cli/runner';
import App from './cli/app';
import Platform from './cli/platform';
import Setup from './cli/setup';
import Target from './cli/target';

const commands = {
    setup: Setup,
    init: Setup,
    app: App,
    platform: Platform,
    run: Runner,
    target: Target,
};

const run = (cmd, subCmd, program, process) => {
    initializeBuilder(cmd, subCmd, process, program).then((v) => {
        commands[cmd](v).then(() => logComplete(true)).catch(e => logError(e, true));
    }).catch(e => logError(e, true));
};


export default { run };
