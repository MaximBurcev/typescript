interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

@CreatedAt
class UserService2 implements IUserService {
    users: number = 1000;

    @Catch({rethrow: true})
    getUsersInDatabase(): number {
        return this.users;
    }
}

function CreatedAt<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    } 
}

function Catch({rethrow}: {rethrow: boolean} = {rethrow: true}) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any > | void => {
        const method = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                const res = await method?.apply(target, args);
                return res;
            } catch(e) {
                if (e instanceof Error) {
                    console.log(e);
                    if ( rethrow) {
                        throw e;
                    }
                }
            }
        }
    }
}

type CreatedAt = {
    createdAt: Date;
}

console.log((new UserService() as IUserService & CreatedAt).createdAt);