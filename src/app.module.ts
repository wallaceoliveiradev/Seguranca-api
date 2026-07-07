import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { TreinamentoService } from './service/treinamento/treinamento.service';
import {TreinamentoRepository} from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento/treinamento.controller';
import { RiscoController } from './controller/risco/risco.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController, RiscoController],
  providers: [AppService, EpiRepository, TreinamentoService, TreinamentoRepository],
})
export class AppModule {}
