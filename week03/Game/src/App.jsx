/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Header from "./components/Header";
import { useState } from "react";
import GitHubSearch from "./components/GitHubSearch";
import NumberBaseball from "./components/NumberBaseball";

function App() {
    const [activeTab, setActiveTab] = useState("github");
    return (
        <ThemeProvider theme={theme}>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "github" && <GitHubSearch />}
            {activeTab === "baseball" && <NumberBaseball />}
        </ThemeProvider>
    );
}

export default App;
