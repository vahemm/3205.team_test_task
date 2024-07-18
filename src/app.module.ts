import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AppConfig from './config/app.config';
import { validate } from './config/env.validation';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      load: [AppConfig],
      validate,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/build'),
    }),

    UserModule,
  ],
})
export class AppModule {}
