import { IMessageAttachment } from "@rocket.chat/apps-engine/definition/messages";

export class ImageAttachment implements IMessageAttachment {

    imageUrl?: string;

    constructor(imgUrl: string){
        this.imageUrl = imgUrl;
    }

    
}