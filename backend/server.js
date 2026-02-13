import app from './app.js';
import { ENV } from './src/config/env.js';

app.listen(ENV.PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${ENV.PORT}`);
});
