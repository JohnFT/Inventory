import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Session } from '../core/globals';
@Injectable()
export class Storage {
    public get Session(): User {
        const obj = localStorage.getItem(Session) || null;
        return JSON.parse(obj);
    }

    public set Session(data: User) {
        localStorage.setItem(Session, JSON.stringify(data));
    }
}