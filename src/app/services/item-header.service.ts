import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class ItemHeaderService {
    private itemRaw = new BehaviorSubject<any>(null);
    currentItem = this.itemRaw.asObservable();
    private sodRaw = new BehaviorSubject<any>(null);
    currentSod = this.sodRaw.asObservable();
    private sohRaw = new BehaviorSubject<any>(null);
    currentSoh = this.sohRaw.asObservable();
    private detailSO = new BehaviorSubject<any>(null);
    currentDetailSO = this.detailSO.asObservable();

    constructor() {
    }
    changeItem(item: any) {
        this.itemRaw.next(item);
    }
    changeSODetails(sod: any) {
        this.sodRaw.next(sod);
    }
    changeSummany(soh: any) {
        this.sohRaw.next(soh)
    }
    changeViewDetail(so: any) {
        this.detailSO.next(so);
    }

}
