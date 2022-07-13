import { Request, Response } from 'express'
import { controller, get } from './decorators'

@controller('')
class MainController {
  @get('/')
  getRoot(req: Request, res: Response) {
      res.send(`
        <div>
          <div>Hello World!</div>
        </div>
      `)
    }
  }
