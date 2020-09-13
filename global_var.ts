import { Injectable } from '@angular/core';
@Injectable()
export class global_var{
    readonly urlsingin  : string = 'http://192.168.1.107:8080/api/schoolLogin';
    readonly urlsingup  : string = 'http://192.168.1.107:8080/api/registerSchool';
}