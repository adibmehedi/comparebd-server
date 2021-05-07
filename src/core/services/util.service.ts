import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
    
    getGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
              v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    getZeroGmtDateString(date: Date): string {
        const localDateTimeObject = new Date(date);

        const utcYear = localDateTimeObject.getUTCFullYear();
        const utcMonth = localDateTimeObject.getUTCMonth() + 1;
        const utcDate = localDateTimeObject.getUTCDate();
        const utcHours = localDateTimeObject.getUTCHours();
        const utcMinuts = localDateTimeObject.getUTCMinutes();
    
        const utcMonthString = (utcMonth < 10) ? '0' + utcMonth : utcMonth;
        const utcDayString = (utcDate < 10) ? '0' + utcDate : utcDate;
        const utcHoursString = (utcHours < 10) ? '0' + utcHours : utcHours;
        const uthMinutesString = (utcMinuts < 10) ? '0' + utcMinuts : utcMinuts;
    
        const result = utcYear + '-' + utcMonthString + '-' + utcDayString + 'T' + utcHoursString + ':' + uthMinutesString + ':00.000Z';
        return result;
    }

}
