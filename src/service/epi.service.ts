import { Injectable } from '@nestjs/common';
import { EpiRepository } from '../repository/epi.repository';
// import * as fs from 'fs';

@Injectable()
export class AppService {
  //private repository = new EpiRepository(); /**** */
  constructor(private repository: EpiRepository) {}

  getHello(): string {
    return 'Alô mundo!';
  }
  getDados() {
    return this.repository.findAll();
  }

  getEpiById(id: number) {
    return this.repository.findById(id);

  }

  create(epi: any) { return this.repository.create(epi); }
  delete(id: number) { return this.repository.delete(id); }
  update(id: number, epi: any) { return this.repository.update(id, epi); }
  patch(id: number, epi: any) { return this.repository.patch(id, epi); }

}