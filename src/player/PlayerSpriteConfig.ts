export type PlayerSpriteConfig = {
    key: string;
    offset: { x: number; y: number };
    depth: number;
    flip: { x: boolean; y: boolean };
    scale: number;
    active: boolean;
    visible: boolean;
};
