import { OptionsWithUri } from 'request'
import qs from 'querystring'

export interface IParams {
    [key: string]: string | number
}

export interface IBaseApiParams {
    rateLimitRetry?: boolean
    rateLimitRetryAttempts?: number
    key?: string
    concurrency?: number
}

export function waiter (ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

export function getUrlFromOptions (options: OptionsWithUri): string {
    let uri = options.uri as string
    if (options.qs) {
        uri += '?'
        uri += qs.stringify(options.qs);
    }
    console.log(uri)
    return uri
}