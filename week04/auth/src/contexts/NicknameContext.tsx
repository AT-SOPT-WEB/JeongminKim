import { createContext, useContext, useState, ReactNode } from "react";

interface NicknameContextType {
    nickname: string;
    setNickname: (nickname: string) => void;
}

const NicknameContext = createContext<NicknameContextType | undefined>(undefined);

export const NicknameProvider = ({ children }: { children: ReactNode }) => {
    const [nickname, setNickname] = useState("");

    return (
        <NicknameContext.Provider value={{ nickname, setNickname }}>
            {children}
        </NicknameContext.Provider>
    );
};

export const useNickname = () => {
    const context = useContext(NicknameContext);
    if (!context) throw new Error("useNickname must be used within a NicknameProvider");
    return context;
};
