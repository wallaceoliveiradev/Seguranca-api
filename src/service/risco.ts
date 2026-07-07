import { Injectable } from '@nestjs/common';
import { riscoRepository } from 'src/repository/risco.repository';

@Injectable()
export class riscoService {
    constructor(private repository: riscoRepository) {}

  getHello(): string {
    return 'Alô mundo!';
  }
  getDados() {
    return this.repository.findAll();
  }

  getEpiById(id: number) {
    return this.repository.findById(id);

  }

  create(epi: any) { return this.repository.create({ risco: epi }); }
  delete(id: number) { return this.repository.delete(id); }
  update(id: number, epi: any) { return this.repository.update(id, epi); }
  patch(id: number, epi: any) { return this.repository.patch(id, epi); }

}
