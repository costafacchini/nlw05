import {getCustomRepository, Repository} from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { Message } from "../entities/Message";

interface IMessageCreate {
    admin_id?: string;
    user_id: string;
    text: string;
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({ admin_id, user_id, text }: IMessageCreate) {
        const message = this.messagesRepository.create({
            admin_id,
            user_id,
            text,
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        return await this.messagesRepository.find({
            where: { user_id },
            relations: ["user"],
        });
    }
}

export { MessagesService };
