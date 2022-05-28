import moment, {Moment} from "moment";
import {DATE_FORMAT_STD_BACK} from "../Date/dateConstants";

export class ModelHelper {
    public static transformFromMoment(momentDate: Moment | null | string, format: string = DATE_FORMAT_STD_BACK): string | null {

        if (!momentDate) {
            return null;
        }

        if (typeof momentDate === 'string') {
            return momentDate;
        }

        if (moment.isMoment(momentDate) && !momentDate.isValid()) {
            return null;
        }

        return momentDate.format(format);
    }

    public static transformToMoment(value: any): Moment | null {
        if (!value) {
            return null;
        }

        if (moment.isMoment(value)) {
            if (value.isValid()) {
                return value;
            }
            return null;
        }

        let momentDate: Moment | null = null;

        if (typeof value === 'string') {
            if (ModelHelper.isStrDateNormalizedBack(value)) {
                const stdFront = ModelHelper.normalizeStrToFrontDateFormat(value);
                momentDate = moment(stdFront);
            } else if (ModelHelper.isStrDateNormalizedFront(value)) {
                momentDate = moment(value);
            } else {
                const tmpMoment = moment(value);
                if (tmpMoment?.isValid()) {
                    momentDate = tmpMoment;
                }
            }
        }

        return momentDate;
    }

    private static isStrDateNormalizedBack(value: string): boolean {
        const regex = new RegExp('^[0-9]{2}/[0-9]{2}/[0-9]{4}$');

        return regex.test(value);
    }

    private static isStrDateNormalizedFront(value: string): boolean {
        const regex = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');

        return regex.test(value);
    }

    private static normalizeStrToFrontDateFormat(value: string): string {
        if (!ModelHelper.isStrDateNormalizedBack(value)) {
            throw new Error('Give good value please');
        }

        const parts = value.split('/');

        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    static transformToStringArray(data: null | string | string[]) {
        if (!data || !data.length) {
            return [];
        }

        if (Array.isArray(data)) {
            return data;
        }

        return data.split("\n");
    }

    static transformFromStringArray(data: string | (string | number)[] | null) {
        if (!data || !data.length) {
            return '';
        }

        if (typeof data === 'string') {
            return data;
        }

        return data.join("\n");
    }

    static getIdFromTheoricalObject(data: any | number | null): number | null {
        if (!data) {
            return null;
        }

        if (typeof data === 'number') {
            return data;
        }

        return data.id ?? null;
    }


}