const generateLocalStorage = (name: string) => ({
    get: (): string | null => window.localStorage.getItem(name),
    set: (value: unknown): void =>
        window.localStorage.setItem(name, JSON.stringify(value)),
})

export const gameIdLocalStorage = generateLocalStorage('gameId')
export const userNameLocalStorage = generateLocalStorage('userName')
