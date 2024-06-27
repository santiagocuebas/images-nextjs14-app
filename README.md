# NJImages
NJImages es una aplicación web, basada en [este proyecto](https://github.com/fazt/nodejs-imgshare), con las que puedes compartir imagenes y comentarios.

## Variables
### Cliente
- `NEXT_PUBLIC_DIR`, la dirección http del servidor.
### Servidor
- `PORT`, el puerto del servidor, por default es `4200`.
- `ORIGIN`, la dirección http del cliente.
- `MONGO_URI`, la dirección de mongodb.

## Instalación Manual
```
git clone -b njimages-local --single-branch https://github.com/santiagocuebas/images-next14-app
cd images-next14-app
pnpm run todo

git clone -b images-api-local --single-branch https://github.com/santiagocuebas/nodejs-images-api 
cd nodejs-images-api 
pnpm run todo
```

## Recursos
- Node.js
- Express
- MongoDB
- TypeScript
- Nextjs
- Tailwind.css
