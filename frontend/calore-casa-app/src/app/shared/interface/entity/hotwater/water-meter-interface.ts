export interface WaterMeterInterface {
    room: string;
    counter: string; // unique code
    kilowatt: number;
    consumption: number;
}
