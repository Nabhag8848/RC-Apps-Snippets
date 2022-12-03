import { IRead, IModify, IHttp, IPersistence } from "@rocket.chat/apps-engine/definition/accessors";
import { ISlashCommand, SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";

export class PhoneCommand implements ISlashCommand {

    public command: string = 'phone';
    public i18nDescription: string = '';
    public i18nParamsExample: string = '';
    public providesPreview: boolean = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        const [subcommand] = context.getArguments();

        if(!subcommand) {
            throw new Error('Error!');
        }

        switch(subcommand){
            case 'text': {
                console.log('Texting!');
                await this.sendMessage(context, modify, 'Texting!');
                break;
            }

            case 'call': {
                console.log('Calling!');
                await this.sendMessage(context, modify, 'Calling!');
                break;
            }
            
            default: {
                throw new Error('No subCommand  /Argument Match!!');
            }

        }
    }

    private async sendMessage(context: SlashCommandContext, modify: IModify, message: string): Promise<void> {
        const messageStructure = modify.getCreator().startMessage();
        const sender = context.getSender(); 
        const room = context.getRoom(); 

        messageStructure
        .setSender(sender)
        .setRoom(room)
        .setText(message); 

        await modify.getCreator().finish(messageStructure); 
    }
}