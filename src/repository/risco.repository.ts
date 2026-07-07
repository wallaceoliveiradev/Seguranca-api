import { Injectable } from "@nestjs/common";
import * as fs from 'fs';

@Injectable()
export class riscoRepository {
    findAll() {
        
        const dados = fs.readFileSync(
            './bd/risco.json',
            'utf8'
        );
        
        return JSON.parse(dados);
    }

    findById(id: number) {
        const risco = this.findAll();
        return risco.find((risco) => risco.id === id);
    }

    create(risco: any){
        const riscos = this.findAll();
        const novoId = risco.length > 0
            ? Math.max(...risco.map(e => e.id)) + 1
            : 1;
        const novorisco = { id: novoId, ...risco };
        risco.push(novorisco);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return novorisco;
    }

    delete(id: number) {
        const risco = this.findAll();
        const idx = risco.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        risco.splice(idx, 1);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return true;
    }

    update(id: number, risco: any) {
        const riscos = this.findAll();
        const idx = risco.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        risco[idx] = { id, ...risco };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return true;
    }

    patch(id: number, risco: any) {
        const riscos = this.findAll();
        const idx = risco.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        risco[idx] = { ...risco[idx], ...risco };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return true;
    }

}