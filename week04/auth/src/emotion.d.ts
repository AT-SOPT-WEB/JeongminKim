// src/emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            valid: string;
            text: string;
            error: string;
        };
        fontSizes: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
