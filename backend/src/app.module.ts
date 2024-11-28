import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventFactory } from './use-case/event-factories/event-factory.entity';
import { EventFactoryModule } from './use-case/event-factories/event-factory.module';
import { EventModelModule } from './use-case/event-models/event-model.module';
import { EventTypeModule } from './use-case/event-types/event-type.module';
import { EventModel } from './use-case/event-models/event-model.entity';
import { EventModule } from './use-case/event/event.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      synchronize:true,
    }),
    EventFactoryModule,
    EventModelModule,
    EventTypeModule,
    EventModule,
   
  ],
})
export class AppModule {}
