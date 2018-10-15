import { UserDto } from './user.dto';

export class UserEntity {
	email: string;
	firstName: string;
	lastName: string;
	userId: string;

	constructor(user: UserDto) {
		Object.assign(this, user);
	}

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}
}
