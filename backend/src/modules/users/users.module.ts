import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { profileConfig } from './config/profile.config';
import { CreateGoogleUserProvider } from './providers/create-google-user.provider';
import { CreateUsersProvider } from './providers/create-users.provider';
import { FindManyUsersProvider } from './providers/find-many-users.provider';
import { FindOneUserProvider } from './providers/find-one-user.provider';
import { UpdateUserProvider } from './providers/update-user.provider';
import { UsersService } from './providers/users.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUsersProvider,
    FindOneUserProvider,
    CreateGoogleUserProvider,
    FindManyUsersProvider,
    UpdateUserProvider,
  ],
  exports: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(profileConfig),
  ],
})
export class UsersModule {}
