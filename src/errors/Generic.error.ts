import * as _ from 'lodash'
import { IErrors } from '.'
import { RateLimit } from '../models/rate-limit/rate-limit'
import { StatusCodeError } from 'request-promise/errors'

const message = 'Generic error'

export class GenericError extends Error implements IErrors {
  readonly status: number
  readonly error: Error
  readonly rateLimits: RateLimit
  readonly body?: any
  readonly name = 'GenericError'

  constructor (rateLimits: RateLimit, error: StatusCodeError) {
    super(error.message || message)
    this.status = error.statusCode
    this.body = _.get(error, 'response.body', null)
    this.rateLimits = rateLimits
    this.error = error
    Object.setPrototypeOf(this, GenericError.prototype)
  }
}