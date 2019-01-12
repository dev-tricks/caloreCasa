import { WaterMeterInterface } from "./water-meter-interface";

export interface HotWaterDataInterface {
    waterMeterModel?: string;
    waterMeterDownloadDate?: Date;
    waterMeter?: WaterMeterInterface[];
    hotWatersRate: number;
    hotWatersDirectCost: number;
    hotWatersIndirectCost: number;
    specialRepairCost: number;
    commonRepairCost: number;
    dataProcessingCost: number;
    individualCost: number;
}
