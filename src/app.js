const Koa = require('koa')

const apiRouter = require('./lib/api')
const adminApiRouter = require('./lib/api-admin')

const app = new Koa();
app.use(apiRouter.routes());
app.use(adminApiRouter.routes());


module.exports = {
    start(port){
        app.listen(port, err=>{
            if(err){
                console.log(err);
                return false;
            }
            console.log(`server has started at port ${port}`)
            console.log(`Please visit http://127.0.0.1:${port}`)
        })
    }
}