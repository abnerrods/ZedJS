import * as _ from 'lodash'
import { IErrors } from '.'
import { SERVICE_UNAVAILABLE } from 'http-status-codes'
import { RateLimit } from '../models/rate-limit/rate-limit'

const message = 'Riot games api unavailable check: https://developer.riotgames.com/api-status/'

export class ServiceUnavailable extends Error implements IErrors {
  readonly status: number
  readonly name = 'RiotUnavailable'

  constructor (
    public readonly rateLimits: RateLimit,
    public readonly error: Error
  ) {
    super(message)
    this.status = SERVICE_UNAVAILABLE
    this.error = error
    Object.setPrototypeOf(this, ServiceUnavailable.prototype)
  }
}