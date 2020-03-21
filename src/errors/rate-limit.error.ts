import * as _ from 'lodash'
import { IErrors } from '.'
import { TOO_MANY_REQUESTS } from 'http-status-codes'
import { RateLimit } from '../models/rate-limit/rate-limit'

const message = 'Rate limit error'

export class RateLimitError extends Error implements IErrors {
  readonly status: number = TOO_MANY_REQUESTS
  readonly error: Error
  readonly rateLimits: RateLimit

  constructor (rateLimits: RateLimit) {
    super(message)
    this.rateLimits = rateLimits
    Object.setPrototypeOf(this, RateLimitError.prototype)
  }
}