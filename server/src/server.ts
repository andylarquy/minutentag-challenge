import { app } from 'api/app'

app.listen(process.env.PORT, () => console.log(`Server running in port ${process.env.PORT}`))
