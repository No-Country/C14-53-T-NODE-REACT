import app from './app';

const PORT_SERVER = process.env.PORT_SERVER
const PORT_SECUNDARY = 4000

const PORT = PORT_SERVER || PORT_SECUNDARY

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

