import * as HttpCodes from 'http-status-codes'
import { IErrors } from '.'

const message = 'Api key not found'

export class ApiKeyNotFound extends Error implements IErrors {
  readonly status = HttpCodes.NOT_IMPLEMENTED
  readonly name = 'ApiKeyNotFound'

  constructor () {
    super(message)
    Object.setPrototypeOf(this, ApiKeyNotFound.prototype)
  }
}