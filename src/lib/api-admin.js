const Router = require('koa-router')

const router = new Router({
    prefix: '/admin'
})

router.get('/apis', (ctx, next)=>{
    ctx.res.end( JSON.stringify([{
        method: "GET",
        path: "/balal",
        params: "param1",
        response: "test response",
        description: "interface description"
    }]))
})

module.exports=router;