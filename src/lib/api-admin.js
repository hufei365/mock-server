const Router = require('koa-router')
const formidable = require('formidable');

const router = new Router({
    prefix: '/admin'
})

router.get('/apis', (ctx, next)=>{
    ctx.res.statusCode = 200;
    ctx.res.end( setResponse( [{
        method: "GET",
        path: "/balal",
        params: "param1",
        response: "test response",
        description: "interface description"
    }]))
})
.post('/add_api', (ctx, next)=>{
    ctx.res.statusCode = 200;

    ctx.res.end( setResponse( {result: "OK"}),)
})
.post('/upload_file', async (ctx, next)=>{
    console.log( 'upload OK')
    const form = formidable({ multiples: true });
 
    // not very elegant, but that's for now if you don't want touse `koa-better-body`
    // or other middlewares.
    await new Promise((resolve, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
 
        ctx.set('Content-Type', 'application/json');
        ctx.status = 200;
        ctx.state = { fields, files };
        ctx.body = JSON.stringify(ctx.state, null, 2);
        resolve();
      });
    });
    ctx.res.statusCode = 200;
    ctx.res.end( setResponse( ctx.body ))
})

module.exports=router;

function setResponse(data = {}, code = 0,  msg = "OK"){
    return JSON.stringify({
        code,
        data,
        msg
    })
}