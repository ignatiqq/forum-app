import { AppThemes } from "@/constants/theme";
import { lightTheme, darkTheme, theme } from ".";

interface ITheme {
    [key: string]: object
}

function getAppTheme(params: AppThemes): ITheme {
    switch (params) {
        case AppThemes.Light: {
            return {
                ...theme,
                colors: {
                    ...lightTheme
                }
            }
        }
        break;

        case AppThemes.Dark: {
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