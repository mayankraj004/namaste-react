const root = ReactDOM.createRoot(document.getElementById("root"));

        // root.render(heading);

        const parent= React.createElement("div", {id: "parent"},
        React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I am h1 tag"),React.createElement("h2", {}, "I am an h2 tag")])
        
        );
        root.render(parent);