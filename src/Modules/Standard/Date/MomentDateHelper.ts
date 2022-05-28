import moment, {Moment} from "moment";

export class MomentDateHelper {
    static createMomentDateFromAny(data: any | null): Moment | null {
        if (!data) {
            return null;
        }

        if (moment.isMoment(data)) {
            return data;
        }

        if (typeof data === 'string') {
            if (MomentDateHelper.isWellFormattedStrDate(data)) {
                const date = moment(data);
                if (date.isValid()) {
                    return date;
                }
            } else if (MomentDateHelper.isWellFormattedStrDateTime(data)) {
                const date = moment(data, "YYYY-MM-DD hh:mm:ss");

                if (date.isValid()) {
                    return date;
                }
            } else if (MomentDateHelper.isWellFormattedStrLikeDatePicker(data)) {
                const date = moment(data, "DD/MM/YYYY");

                if (date.isValid()) {
                    return date;
                }
            } else if (MomentDateHelper.isWellFormattedStrLikeTimePicker(data)) {
                const date = moment(data, "YYYY-MM-DD hh:mm");

                if (date.isValid()) {
                    return date;
                }
            } else if (MomentDateHelper.isWellFormattedStrYear(data)){
                const fullDate = `${data}-01-01`;
                const date = moment(fullDate, "YYYY-MM-DD");

                if (date.isValid()) {
                    return date;
                }
            }
        }

        return null;
    }

    private static isWellFormattedStrDate(data: string): boolean {
        const regex = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');

        return regex.test(data);
    }

    private static isWellFormattedStrYear(data: string): boolean {
        const regex = new RegExp('^[0-9]{4}$');

        return regex.test(data);
    }

    private static isWellFormattedStrDateTime(data: string): boolean {
        const regex = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$');

        return regex.test(data);
    }

    private static isWellFormattedStrLikeDatePicker(data: string): boolean {
        const regex = new RegExp('^[0-9]{2}/[0-9]{2}/[0-9]{4}$');

        return regex.test(data);
    }

    private static isWellFormattedStrLikeTimePicker(data: string): boolean {
        const regex = new RegExp('^[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2}$');

        return regex.test(data);
    }

    static createOutputApiFromAny(momentDate: any, format: string = 'YYYY-MM-DD HH:mm:ss'): string | null {
        if (!momentDate) {
            return null;
        }

        if (typeof momentDate === 'string') {
            return momentDate;
        }

        if (
            moment.isMoment(momentDate)
        ) {
            return momentDate.format(format);
        }

        return null;
    }

    static getYearsRange(min: number, max: number): number[] {
        return  Array.from({length: (max - min + 1)}, (v, i) => min + i);
    }
}