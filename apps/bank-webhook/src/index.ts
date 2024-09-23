import prisma from '@repo/prismadb/client'
import express from 'express'

const app=express()
app.use(express.json())


app.post('/hdfcwebhook',async(req,res)=>{
    const paymentinfo = {
      token: req.body.token,
      userId: req.body.userId,
      amount: req.body.amount,
    }
    try {
    await prisma.$transaction([
         prisma.balance.update({
        where:{
            userId:Number(paymentinfo.userId)
        },
        data:{
            amount:{
                increment:Number(paymentinfo.amount)
            }
        }

    }),
     prisma.onRampTransaction.update({
        where:{
            token:paymentinfo.token
        },
        data:{
            status:"Success"
        }
    }),
   ])
    return res.status(200).json({
      message: "captured",
    })
    } catch (error) {
        console.log(error)

        
    }
    return res.status(411).json({
        message:"Not captured"
    })
    

})
app.get('/',(req,res)=>{
  
    res.send("hey what's up")
})
app.listen(5000,()=>{
    console.log(`running on port 5000`)
})