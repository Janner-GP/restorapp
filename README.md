# 🍽️ RestorApp

Aplicación web para la gestión de un restaurante desarrollada con **Express** y  **JavaScript Vanilla** , integrada con  **PostgreSQL** , **n8n** y servicios de  **IA** .

---

## 🚀 Características

* CRUD de productos
* API REST con Express
* Base de datos PostgreSQL
* Integración con webhooks de n8n
* Uso de IA para automatizaciones o procesamiento de datos
* Frontend en JavaScript Vanilla

---

## 🛠️ Tecnologías

* Node.js
* Express
* PostgreSQL
* n8n
* IA (API externa)
* JavaScript Vanilla

---

## 📦 Instalación

1. Clonar el repositorio:

<pre class="overflow-visible! px-0!" data-start="649" data-end="726"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git </span><span>clone</span><span> https://github.com/tuusuario/restorapp.git
</span><span>cd</span><span> restorapp
</span></span></code></div></div></pre>

2. Instalar dependencias:

<pre class="overflow-visible! px-0!" data-start="755" data-end="778"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
</span></span></code></div></div></pre>

3. Crear archivo `.env` en la raíz del proyecto:

<pre class="overflow-visible! px-0!" data-start="830" data-end="944"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span>PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=restorapp_db
</span></code></div></div></pre>

4. Ejecutar el servidor:

<pre class="overflow-visible! px-0!" data-start="972" data-end="1006"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>node backend/server.js
</span></span></code></div></div></pre>

---

## 🔗 Integración con n8n

Los endpoints pueden ser consumidos desde un webhook configurado en n8n para automatizar procesos del restaurante.

---

## 👨‍💻 Proyecto académico

Desarrollado como práctica de backend con integración de automatización e inteligencia artificial.
