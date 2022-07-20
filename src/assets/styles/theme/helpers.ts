import { lightTheme, darkTheme } from ".";

enum themes {
    light = "light",
    dark = "dark"
}

type appTheme = themes;

interface ITheme {
    [key: string]: {
        [key: string]: string | number
    }
}

function getAppTheme(params: appTheme): ITheme {
    switch (params) {
        case themes.light: {
            return lightTheme
        }
        break;

        case themes.dark: {
            return darkTheme
        }
        break;

        default: {
            return lightTheme
        }
        break;
    }
}

export default getAppTheme;