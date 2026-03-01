import { applyDecorators, UseGuards } from "@nestjs/common";
import { Role } from "../enums/rol.enum";
import { Roles } from "./role.decorator";
import { RolesGuard } from "../roles.guard";
import { AuthGuard } from "../auth.guard";


export function Auth(role: Role) {
    return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard))
}