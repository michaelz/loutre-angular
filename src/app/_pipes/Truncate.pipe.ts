// truncate.ts
import { Pipe } from '@angular/core'

@Pipe({
    name: 'truncate'
})
export class TruncatePipe {
    transform(value: string, args: number[]): string {
        
        let limit = args.length>0 ? args[0] : 200;
        
        
        let trimmedString = value.length > limit ? value.substring(0, limit) : value;
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + ' ...';
    }
}