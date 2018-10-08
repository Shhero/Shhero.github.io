const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();


// app.use(ctx => {
//     ctx.body = 'hello world';
// })


router.get('/', (ctx, next) => {
    ctx.body = 'hello hehe'
})

  //路由
router.get('/page/content', (ctx, next) => {
    const params = ctx.query;
    console.log('-------这是前端传过来的参数', params);
    if (params.age >= 18) {
        ctx.body = {
            msg : `${params.age}同学,你已经成年了哦`
        }
    } else {
        ctx.body = {
            msg : `${params.age}同学,你还是未成年了哦`
        }
    }
   
})


app.use(router.routes()).use(router.allowedMethods());



app.listen(3000, () => {
    console.log('Start App On 8080');
})


