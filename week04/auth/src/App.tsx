import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import "./App.css";
import { NicknameProvider } from "./contexts/NicknameContext"; 

// 페이지 컴포넌트
import Login from "./pages/public/Login";
import Signup from "./pages/public/Singup";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./pages/protected/DashboardLayout";
import Mypage from "./pages/protected/Mypage";
import Users from "./pages/protected/Users";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NicknameProvider>
                <BrowserRouter>
                    <Routes>
                    
                        {/*로그인 전*/}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        {/*로그인 후*/}
                        <Route path="/" element={<DashboardLayout />}>
                            <Route path="mypage" element={<Mypage />} />
                            <Route path="users" element={<Users />} />
                        </Route>
                        {/* 404 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </NicknameProvider>
        </ThemeProvider>
    );
}

export default App;
