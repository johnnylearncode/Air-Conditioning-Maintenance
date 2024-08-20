const express = require('express')
const methodOverride = require('method-override')
const port=3000;
const app = express()



const route = require('./routes')


route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})