export interface RadiatorInterface {
    type: string;
    room: string;
    counter: string; // unique code
    various: string;
    contactCoefficient: number
    radiatorElements: number;
    radiatorWidth: number;
    radiatorHeight: number;
    radiatorDepth: number;
    radiatorPower: number;
    radiatorCoefficient : number;
    pipeDiameter: number;
    pipeLength: number
    pipePower: number;
    totalPower: number;
    consumption: number;
    calculationType: string; // type of legislation
    calculationModel: string; // type of calculation
    dimensionalCoefficient?: number // only by law the dimensional calculation
    valueK?: number
    valueKT?: number
}
