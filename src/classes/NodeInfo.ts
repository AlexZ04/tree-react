export interface NodeInfo {
    id: string;
    name: string;
    children: Array<NodeInfo>;
}

export interface FirstLay {
    nodes: Array<NodeInfo>;
}
