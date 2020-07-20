const generateLocalStorage = <T>(name: string) => ({
    get: (): T | null => {
        const value = window.localStorage.getItem(name)
        return value ? JSON.parse(value) : null
    },
    set: (value: T): void =>
        window.localStorage.setItem(name, JSON.stringify(value)),
})

export const gameIdLocalStorage = generateLocalStorage<string>(
    'my-treasure-gameId'
)
export const userNameLocalStorage = generateLocalStorage<string>(
    'my-treasure-userName'
)
