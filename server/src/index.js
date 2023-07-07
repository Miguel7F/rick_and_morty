const {PORT}=require('./utils/port')

require('./server')
.listen(PORT, () => {
   console.log(`http://localhost:${PORT}`);
})