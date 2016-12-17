import 'babel-polyfill';
import express from 'express';

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}

app.get('/', (req, res) => {
  console.log('app.get: /')
  const test = 'app.get: /'
  return res.status(200).json(test)
})

app.get('/:id', (req, res) => {
  console.log((`app.get /${req.params.id}`))
  const test = (`app.get /${req.params.id}`)
  return res.status(200).json(test)
})

app.post('/:id', (req, res) => {
  console.log((`app.post /${req.params.id}`))
  const test = (`app.post /${req.params.id}`)
  return res.status(200).json(test)
})

app.delete('/:id', (req, res) => {
  console.log(`app.delete /${req.params.id}`)
  const test = `app.delete /${req.params.id}`
  return status(200).json(test)
})
