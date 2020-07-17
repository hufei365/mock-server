const Router = require('koa-router')

const router = new Router({
    prefix: '/api'
})

router.get('/servertime', (ctx, next)=>{
    ctx.res.end(`Current time is ${new Date()}`)
})

module.exports=router;