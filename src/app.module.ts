import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module';

@Module({//this module uses appservcie and appcontroller//
  imports: [TypeOrmModule.forRoot(),StudentRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//