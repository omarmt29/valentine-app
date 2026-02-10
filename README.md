# 💖 Valentine App

Una aplicación web hecha con **React + Vite + Supabase** que permite crear páginas personalizadas de San Valentín usando una **URL única (slug)**.  
Cada enlace muestra un mensaje especial para una persona y una interacción divertida donde decir **NO es casi imposible 😈**.

---

## ✨ Características

- 🔗 **Rutas dinámicas por slug**  
  Ejemplos:
    /omar
    /ana
    /juan-perez


    
- 💘 Botón **YES** que se agranda al pasar el mouse  
- 🏃 Botón **NO** que huye cuando intentan presionarlo  
- 🎉 Al hacer click en **YES**, aparece un GIF romántico  
- 🗄️ Datos obtenidos dinámicamente desde **Supabase**
- ⚡ SPA con **React Router**
- 🌐 Funciona al navegar dentro de la app y al entrar directo por URL

---

## 🛠️ Tecnologías

- ⚛️ React  
- ⚡ Vite  
- 🌐 React Router DOM  
- 🗄️ Supabase  
- 🎨 CSS inline  

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/valentine-app.git
cd valentine-app

Instala dependencias:

npm install

Crea un archivo .env en la raíz del proyecto:

VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key
