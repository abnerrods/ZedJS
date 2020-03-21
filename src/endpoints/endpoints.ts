export interface IEndpoint {
    path: string
    version: number
    prefix: string
}

interface IEndpoints {
    [key: string]: IEndpoint
}

export const endpointsV4: IEndpoints = {
    Summoner: {
        path: 'summoners/$(by)/$(encryptedSummonerId)',
        prefix: 'summoner',
        version: 4
    }
}