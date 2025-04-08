export interface NodeInfo {
    name: string;
    children: Array<NodeInfo>;
}

export interface FirstLay {
    nodes: Array<NodeInfo>;
}
