// Interfaces

export interface InterfaceInputErrors {
    [key: string]: { error: boolean | undefined; messageError: string; };
}

export interface InterfaceHiddenPassword {
    [key: string]: {hidden: boolean };
}

export interface InterfaceDataUser {
    tokenJWT : string,
}