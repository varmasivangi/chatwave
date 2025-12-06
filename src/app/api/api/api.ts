export * from './account.service';
import { AccountService } from './account.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AccountService, UsersService];
