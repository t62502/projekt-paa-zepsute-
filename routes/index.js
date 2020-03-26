var router = require('koa-router')();

router.get('/', async (ctx, next) => {
  tasks = await store.listTasks()
  await ctx.render('index', { tasks })
});


});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
const store = require('../store')

