import { TreeProvider } from "../context/TreeContext";
import { Footer } from "../widgets/Footer/Footer";
import { Header } from "../widgets/Header/Header";
import { TreeContainer } from "../widgets/TreeContainer/TreeContainer";
import "./App.css";

function App() {
    return (
        <>
            <TreeProvider>
                <Header />
                <TreeContainer />
                <Footer />
            </TreeProvider>
        </>
    );
}

export default App;
