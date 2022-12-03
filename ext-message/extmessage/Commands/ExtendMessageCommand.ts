import { IRead, IModify, IHttp, IPersistence } from "@rocket.chat/apps-engine/definition/accessors";
import { ISlashCommand, SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";
import { ImageAttachment } from "../Attachments/ImageAttachment";
import { IMessageExtender } from '@rocket.chat/apps-engine/definition/accessors';

export class ExtendMessageCommand implements ISlashCommand {

    public command: string = 'extend-message';
    public i18nDescription: string = '';
    public i18nParamsExample: string = '';
    public providesPreview: boolean = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        
        const messageId = await this.sendMessage(context, modify, 'Hello Adding attachments!!');
        const messageExtender = await this.getMessageExtender(context, modify, messageId);

        const value = 1;
        const img = new ImageAttachment('https://open.rocket.chat/images/logo/logo.svg');

        messageExtender.addCustomField('key', value);
        messageExtender.addAttachments([img]);

        await modify.getExtender().finish(messageExtender);
    }

    private async sendMessage(context: SlashCommandContext, modify: IModify, message: string): Promise<string> {
        const messageStructure = modify.getCreator().startMessage();
        const sender = context.getSender();
        const room = context.getRoom();
    
        messageStructure
        .setSender(sender)
        .setRoom(room)
        .setText(message);
    
        return (await modify.getCreator().finish(messageStructure)); 
    }

    private async getMessageExtender(context: SlashCommandContext, modify: IModify, messageId: string): Promise<IMessageExtender>{
        const sender = context.getSender();
        return modify.getExtender().extendMessage(messageId, sender); 
    }
}