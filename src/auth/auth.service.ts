import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from "bcryptjs";
import { JwtService } from '@nestjs/jwt';
import { Role } from './enums/rol.enum';


@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }


    async register({ name, email, password }: RegisterDto) {

        const user = await this.userService.findOneByEmail(email)

        if (user) {
            throw new NotFoundException('Usuario ya existe')
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const roleValue = (typeof arguments[0].role === 'string' && arguments[0].role) ? arguments[0].role : Role.USER;

        await this.userService.create({
            name,
            email,
            role: roleValue,
            password: hashPassword
        })
        return {
            name,
            email
        }
    }


    async login({ email, password }) {
        const user = await this.userService.findOneByEmail(email)
        if (!user) {
            throw new NotFoundException('Usuario no encontrado')
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password)
        if (!isPasswordValid) {
            throw new NotFoundException('Contraseña incorrecta')
        }

        const payload = { email: user.email, role: user.role };

        const token = await this.jwtService.signAsync(payload)

        return {
            name: user.name,
            email: user.email,
            role: user.role,
            token
        }
    }
}