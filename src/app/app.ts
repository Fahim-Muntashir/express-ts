import express, { NextFunction, Request, Response } from 'express';

const app = express()
const port = 3000

// parsers
app.use(express.json())
app.use(express.text())


const logger = (req: Request,res: Response, next: NextFunction) => { 
  console.log(req.);
  next();
}

app.get('/:useId/:subid',logger, (req:Request, res:Response) => {
  res.send('Hello Wsssssssorld!')
} 
)

app.get('/:useId/:subid',logger, (req:Request, res:Response) => {
  console.log(req.body);
  res.send({
    message:'successfully received data'
  })
})

export default app;