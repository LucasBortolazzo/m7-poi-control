export class DateUtils {
    static diffYMDHMS(date1: moment.Moment, date2: moment.Moment) {
        // let years = date1.diff(date2, 'year');
        // date2.add(years, 'years');

        // let months = date1.diff(date2, 'months');
        // date2.add(months, 'months');

        let days = date1.diff(date2, 'days');
        date2.add(days, 'days');

        let hours = date1.diff(date2, 'hours');
        date2.add(hours, 'hours');

        let minutes = date1.diff(date2, 'minutes');
        date2.add(minutes, 'minutes');

        let seconds = date1.diff(date2, 'seconds');

        // years = Math.abs(years);
        // months = Math.abs(months);
        days = Math.abs(days);
        hours = Math.abs(hours);
        minutes = Math.abs(minutes);
        seconds = Math.abs(seconds);

        return { days, hours, minutes, seconds };
    }

    static strToDate(dtStr: string): Date {
        if (!dtStr) return null;
        let dateParts = dtStr.split("/") as any;
        let timeParts = dateParts[2].split(" ")[1].split(":");
        dateParts[2] = dateParts[2].split(" ")[0] as any;
        return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]);
    }
}