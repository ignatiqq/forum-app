import { lightTheme, darkTheme, theme } from ".";

interface ITheme {
    [key: string]: object
}

function getAppTheme(params: string): ITheme {
    switch (params) {
        case "light": {
            return {
                ...theme,
                colors: {
                    ...lightTheme
                }
            }
        }
        break;

        case "dark": {
            return {
                ...theme,
                colors: {
                    ...darkTheme
                }
            }
        }
        break;

        default: {
            return {
                ...theme,
                colors: {
                    ...lightTheme
                }
            }
        }
        break;
    }
}

export default getAppTheme;