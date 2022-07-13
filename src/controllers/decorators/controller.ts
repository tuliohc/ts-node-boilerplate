import 'reflect-metadata'
import express from 'express'
import { MetadataKeys } from '../enums/meta-data-keys.enum'
import { Methods } from '../enums/methods.enum'

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = express.Router()

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      )
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      )
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        []

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          routeHandler
        )
      }
    }
  }
}
