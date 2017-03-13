import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "activeCounts"
})

export class ActiveCounts implements PipeTransform {
    public onlineCount = 0;
    transform(object: any) {
        this.onlineCount = 0;
        for (let i = 0; i < object.length; i++) {
            if (object[i].is_online) this.onlineCount += 1;
        }
        return this.onlineCount;
    }
}

@Pipe({
    name: "inactiveCounts"
})

export class InactiveCounts implements PipeTransform {
    public offlineCount = 0;
    transform(object: any) {
        this.offlineCount = 0;
        for (let i = 0; i < object.length; i++) {
            if (!object[i].is_online)this.offlineCount += 1;
        }
        return this.offlineCount;
    }
}