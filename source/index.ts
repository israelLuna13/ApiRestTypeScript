import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())//middleware que transforma la req.body a json

app.use('/api/diaries',diaryRouter)

app.get('/ping',(_req,res)=>{
    console.log('Somone pinged here');
    res.send('pong')
});

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);    
})