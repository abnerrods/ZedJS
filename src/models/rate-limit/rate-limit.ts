export class RateLimit {
    Type?: string
    RetryAfter?: number
    AppRateLimit: string
    MethodRateLimit: string
    AppRateLimitCount: string
    MethodRatelimitCount: string
    EdgeTraceId?: string
}