import { NodeInfo } from "../classes/NodeInfo";
import { Footer } from "../widgets/Footer/Footer";
import { Header } from "../widgets/Header/Header";
import { TreeContainer } from "../widgets/TreeContainer/TreeContainer";
import "./App.css";

function App() {
    const secondChild: NodeInfo = { name: "third", children: [] };
    const child: NodeInfo = { name: "second", children: [secondChild] };
    const node: NodeInfo = { name: "First", children: [child, secondChild] };

    return (
        <>
            <Header />
            <TreeContainer nodes={[node, node, node]} />
            <Footer />
        </>
    );
}

export default App;
