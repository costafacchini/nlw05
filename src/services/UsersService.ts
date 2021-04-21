import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUsersCreate {
    email: string;
}

class UsersService {
    async create({ email }: IUsersCreate) {
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({ email });

        if(userAlreadyExists) {
            return userAlreadyExists;
        }

        const users = usersRepository.create({
            email
        });

        await usersRepository.save(users);

        return users;
    }
}

export { UsersService };
