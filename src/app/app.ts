import express, { NextFunction, Request, Response } from 'express';

const app = express()
const port = 3000

// parsers
app.use(express.json())
app.use(express.text())


// router

const userRouter = express.Router();
app.use('/api/v1/user', userRouter);

userRouter.get('/created-user', (req: Request, res: Response) => {
  
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user is created succesfully",
    data:"user",
  })
})




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