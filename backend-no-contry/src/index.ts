import app from './app';

const PORT_SERVER: number = parseInt(process.env.PORT_SERVER || "")
const PORT_SECUNDARY: number = 4000

const PORT: number = PORT_SERVER || PORT_SECUNDARY

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))