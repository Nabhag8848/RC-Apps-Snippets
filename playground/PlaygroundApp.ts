import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    IHttp,
    ILogger,
    IMessageRead,
    IModify,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IMessage, IMessageReactionContext, IPostMessageReacted } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

export class PlaygroundApp extends App implements IPostMessageReacted {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    async executePostMessageReacted(context: IMessageReactionContext, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify): Promise<void> {
    
        const isreacted = context.isReacted;
        const messagetext = context.message.text;
        const Reaction = context.reaction;
        const username = context.user.username;
        console.log("isReacted: ", isreacted, "\n","messagetext: ", messagetext, "\n","Reaction: ", Reaction, "\n","username: ", username);

    }

}
