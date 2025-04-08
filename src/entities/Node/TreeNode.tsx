import "./Node.css";

export function TreeNode() {
    return (
        <>
            <div className="node">
                <div className="node-body">
                    <h3>Заголовок</h3>
                </div>

                <div className="node-children">
                    <div className="node">
                        <div className="node-body">
                            <h3>Заголовок</h3>
                        </div>

                        <div className="node-children">
                            <div className="node">
                                <div className="node-body">
                                    <h3>Заголовок</h3>
                                </div>

                                <div className="node-children"></div>
                            </div>

                            <div className="node">
                                <div className="node-body">
                                    <h3>Заголовок</h3>
                                </div>

                                <div className="node-children"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
