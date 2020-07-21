const generateLocalStorage = <T>(name: string, defaultValue: T) => ({
    get: (): T => {
        const value = window.localStorage.getItem(name)
        return value ? JSON.parse(value) : defaultValue
    },
    set: (value: T): void =>
        window.localStorage.setItem(name, JSON.stringify(value)),
})

export const gameIdLocalStorage = generateLocalStorage('my-treasure-gameId', '')

export const userNameLocalStorage = generateLocalStorage(
    'my-treasure-userName',
    ''
)
