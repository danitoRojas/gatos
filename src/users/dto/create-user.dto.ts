import { IsEnum, IsString } from "class-validator";
import { Role } from "src/auth/enums/rol.enum";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsEnum(Role)
    role!: Role
}
