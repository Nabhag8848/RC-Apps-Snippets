import {
    IAppAccessors,
    ILogger,
    IConfigurationExtend,
    IEnvironmentRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { ApiEndpoint, ApiSecurity, ApiVisibility } from '@rocket.chat/apps-engine/definition/api';
import { Endpoint } from './endpoints/endpoint';


export class WebHookApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        configuration.api.provideApi({
            endpoints: [new Endpoint(this)],
            security: ApiSecurity.UNSECURE,
            visibility: ApiVisibility.PUBLIC
        })
    }
}
// https://github.com/RocketChat/Rocket.Chat.Apps-engine/blob/2105fdd/src/definition/api/IApi.ts#L18

