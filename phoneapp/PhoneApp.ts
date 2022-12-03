import { IConfigurationExtend, IEnvironmentRead } from "@rocket.chat/apps-engine/definition/accessors";
import { App } from "@rocket.chat/apps-engine/definition/App";
import {PhoneCommand} from './Commands/PhoneCommand';
import {IAppAccessors, ILogger} from '@rocket.chat/apps-engine/definition/accessors';
import {IAppInfo} from '@rocket.chat/apps-engine/definition/metadata'; 

export class PhoneApp extends App {

    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {

        const phoneCommand:PhoneCommand = new PhoneCommand();
        configuration.slashCommands.provideSlashCommand(phoneCommand);
    }
}