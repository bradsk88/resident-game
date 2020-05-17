abstract class ResidentItem implements Item {
    public readonly namespace = 'resident';
    public abstract name: string;
}

export interface Item {
    namespace: string;
    name: string;
}

export class WoodStick extends ResidentItem implements Item {
    public readonly name = "Wood Stick";
}

export class Berry extends ResidentItem implements Item {
    public readonly name = "Berry";
}