import { RateLimit } from '../rate-limit/rate-limit'

export class ApiResponseDTO<T> {
  readonly rateLimits?: RateLimit
  readonly response: T
}