import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curso Vue",
  description: "Documentación del Curso de Vue",
  base: '/curso_vue/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://vuejs.org/images/logo.png',
    
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Backend', link: 'https://github.com/xixay/curso_vue_proyecto_base_backend' },
      { text: 'Frontend', link: 'https://github.com/xixay/curso_vue_proyecto_base_frontend' },
      { text: 'Producción', link: 'https://github.com/xixay/docker-node-vue-production' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xixay/curso_vue' }
    ]
  }
})
