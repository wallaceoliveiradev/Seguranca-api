import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { TreinamentoService } from './service/treinamento/treinamento.service';
import {TreinamentoRepository} from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento/treinamento.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController],
  providers: [AppService, EpiRepository, TreinamentoService, TreinamentoRepository],
})
export class AppModule {}
