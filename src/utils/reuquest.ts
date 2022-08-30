export function paramsToString<T extends Record<keyof T, T[keyof T]>>(data:T) {
    return Object.keys(data).map(item => {
        if(data[item as keyof typeof data]) {
            return `${item}=${data[item as keyof typeof data]}`
        }
    }).join("&")
}