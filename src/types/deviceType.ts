export type device = {
    type: string
    condition: string
}

export enum DEVICE_TYPES {
    NOTEBOOK = "nootebook",
    DESKTOP = "desktop",
    NETBOOK = "netbook",
    MONITOR = "monitor",
    IMPRESSORA = "impressora",
    SCANNER = "scanner"
}

export enum CONDITION_TYPES {
    WORKING = "working", 
    NOTWORKING = "notworking",
    BROKEN = "broken"
}