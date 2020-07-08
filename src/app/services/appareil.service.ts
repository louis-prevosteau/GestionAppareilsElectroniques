import { Subject } from 'rxjs';

export class AppareilService{
    appareilSubject = new Subject<any[]>();
    private appareils = [];

    constructor(){}

    emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
    }

    switchOnOne(i: number){
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(i: number){
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
    }

    switchOnAll(){
        for (let appareil of this.appareils){
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }

    switchOffAll(){
        for (let appareil of this.appareils){
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string){
        const appareilObject = {
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
}