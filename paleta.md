/* ==========================================
   PALETA DE COLORES OFICIAL
   BISONTE INDUSTRIAL USA LLC
   ========================================== */

/* 
   Sistema de colores plateado/gris profesional
   Sin acento naranja - Todo monocromático elegante
*/

/* ==========================================
   COLORES PRINCIPALES
   ========================================== */

:root {
  /* === BLANCOS Y PLATEADOS CLAROS === */
  --white: #ffffff;                   /* Blanco puro */
  --silver-white: #f5f5f5;            /* Casi blanco plateado */
  --silver-extra-light: #eeeeee;      /* Plata extra clara */
  --silver-light: #e8e8e8;            /* Plata clara ⭐ TEXTO PRINCIPAL */
  --silver-soft: #dddddd;             /* Plata suave */
  
  /* === PLATEADOS MEDIOS === */
  --silver: #d4d4d4;                  /* Plata estándar ⭐ TEXTO SECUNDARIO */
  --silver-medium: #c0c0c0;           /* Plata media ⭐ ICONOS Y ACENTOS */
  --silver-cool: #b8b8b8;             /* Plata fría */
  
  /* === GRISES CLAROS === */
  --gray-light: #a8a8a8;              /* Gris claro plateado ⭐ SUBTÍTULOS */
  --gray-soft: #9c9c9c;               /* Gris suave */
  
  /* === GRISES MEDIOS === */
  --gray-medium: #8c8c8c;             /* Gris medio */
  --gray: #707070;                    /* Gris estándar */
  --gray-steel: #606060;              /* Gris acero */
  
  /* === GRISES OSCUROS === */
  --gray-dark: #505050;               /* Gris oscuro */
  --gray-deep: #454545;               /* Gris profundo */
  
  /* === CARBONES === */
  --charcoal-light: #3a3a3a;          /* Carbón claro */
  --charcoal: #2d2d2d;                /* Carbón ⭐ FONDOS SECUNDARIOS */
  --charcoal-dark: #242424;           /* Carbón oscuro */
  
  /* === NEGROS === */
  --almost-black: #1a1a1a;            /* Casi negro ⭐ NAVBAR/FOOTER */
  --black-soft: #0d0d0d;              /* Negro suave */
  --black: #000000;                   /* Negro puro */
}

/* ==========================================
   APLICACIONES ESPECÍFICAS
   ========================================== */

:root {
  /* === NAVBAR === */
  --navbar-bg-start: #1a1a1a;         /* Fondo gradiente inicio */
  --navbar-bg-end: #2d2d2d;           /* Fondo gradiente fin */
  --navbar-text: #e8e8e8;             /* Texto principal */
  --navbar-text-hover: #ffffff;       /* Texto hover */
  --navbar-border: rgba(192, 192, 192, 0.1);
  
  /* === FOOTER === */
  --footer-bg-start: #1a1a1a;         /* Fondo gradiente inicio */
  --footer-bg-end: #0d0d0d;           /* Fondo gradiente fin */
  --footer-text: #e8e8e8;             /* Texto principal */
  --footer-text-secondary: #d4d4d4;   /* Texto secundario */
  --footer-text-muted: #a8a8a8;       /* Texto apagado */
  
  /* === TÍTULOS === */
  --title-gradient-start: #ffffff;
  --title-gradient-mid: #c0c0c0;
  --title-gradient-end: #a8a8a8;
  
  /* === BOTONES === */
  --button-bg: #c0c0c0;
  --button-bg-hover: #e8e8e8;
  --button-text: #1a1a1a;
  --button-border: rgba(192, 192, 192, 0.3);
  
  /* === CARDS / TARJETAS === */
  --card-bg: #2d2d2d;
  --card-border: rgba(192, 192, 192, 0.1);
  --card-border-hover: rgba(192, 192, 192, 0.3);
  
  /* === ENLACES === */
  --link-normal: #d4d4d4;
  --link-hover: #ffffff;
  --link-underline: #c0c0c0;
}

/* ==========================================
   SOMBRAS
   ========================================== */

:root {
  /* === SOMBRAS PLATEADAS === */
  --shadow-silver-xs: 0 2px 8px rgba(192, 192, 192, 0.1);
  --shadow-silver-sm: 0 4px 15px rgba(192, 192, 192, 0.2);
  --shadow-silver-md: 0 8px 30px rgba(160, 160, 160, 0.4);
  --shadow-silver-lg: 0 12px 45px rgba(192, 192, 192, 0.6);
  --shadow-silver-xl: 0 20px 60px rgba(192, 192, 192, 0.8);
  
  /* === SOMBRAS OSCURAS === */
  --shadow-dark-xs: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-dark-sm: 0 2px 10px rgba(0, 0, 0, 0.2);
  --shadow-dark-md: 0 4px 20px rgba(0, 0, 0, 0.3);
  --shadow-dark-lg: 0 8px 40px rgba(0, 0, 0, 0.5);
  --shadow-dark-xl: 0 20px 60px rgba(0, 0, 0, 0.7);
  
  /* === TEXT SHADOWS === */
  --text-shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.3);
  --text-shadow-medium: 0 2px 10px rgba(0, 0, 0, 0.5);
  --text-shadow-strong: 0 4px 20px rgba(0, 0, 0, 0.7);
}

/* ==========================================
   GRADIENTES PREDEFINIDOS
   ========================================== */

:root {
  /* === GRADIENTES DE FONDO === */
  --gradient-dark: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  --gradient-darker: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
  --gradient-charcoal: linear-gradient(135deg, #3a3a3a 0%, #2d2d2d 100%);
  
  /* === GRADIENTES DE TEXTO === */
  --gradient-silver: linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #a8a8a8 100%);
  --gradient-silver-bright: linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%);
  --gradient-gray: linear-gradient(135deg, #c0c0c0 0%, #8c8c8c 100%);
  
  /* === GRADIENTES DE BORDES === */
  --gradient-border-silver: linear-gradient(90deg, transparent 0%, rgba(192, 192, 192, 0.5) 50%, transparent 100%);
  --gradient-border-white: linear-gradient(90deg, #c0c0c0 0%, #ffffff 100%);
}

/* ==========================================
   GUÍA DE USO RÁPIDA
   ========================================== */

/*
  📋 JERARQUÍA DE TEXTOS:
  ----------------------
  Título Principal:     var(--silver-light) o gradient-silver
  Título Secundario:    var(--silver-medium)
  Subtítulo:           var(--gray-light)
  Texto Normal:        var(--silver)
  Texto Secundario:    var(--gray-medium)
  Texto Apagado:       var(--gray)

  🎨 FONDOS:
  ----------
  Navbar/Header:       var(--gradient-dark)
  Footer:              var(--gradient-darker)
  Cards:               var(--card-bg)
  Overlays:            rgba(26, 26, 26, 0.95)

  ✨ EFECTOS:
  -----------
  Hover Cards:         var(--shadow-silver-md)
  Hover Buttons:       var(--shadow-silver-sm)
  Text Shadow:         var(--text-shadow-medium)
  Logo Shadow:         var(--shadow-silver-md)

  🔗 INTERACTIVOS:
  ----------------
  Links Normal:        var(--link-normal)
  Links Hover:         var(--link-hover)
  Buttons:             var(--button-bg)
  Buttons Hover:       var(--button-bg-hover)
  Icons:               var(--silver-medium)
  Icons Hover:         var(--white)

  📦 COMPONENTES:
  ---------------
  Borders:             var(--card-border)
  Borders Hover:       var(--card-border-hover)
  Separators:          var(--gradient-border-silver)
*/

/* ==========================================
   EJEMPLOS DE USO
   ========================================== */

/* Título con gradiente plateado */
.title-silver {
  background: var(--gradient-silver);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: var(--text-shadow-medium);
}

/* Navbar profesional */
.navbar {
  background: var(--gradient-dark);
  color: var(--navbar-text);
  border-bottom: 1px solid var(--navbar-border);
  box-shadow: var(--shadow-dark-md);
}

/* Footer profesional */
.footer {
  background: var(--gradient-darker);
  color: var(--footer-text);
  border-top: 1px solid var(--card-border);
}

/* Card con hover */
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-silver-sm);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--card-border-hover);
  box-shadow: var(--shadow-silver-md);
  transform: translateY(-4px);
}

/* Botón plateado */
.button-silver {
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--button-border);
  box-shadow: var(--shadow-silver-sm);
}

.button-silver:hover {
  background: var(--button-bg-hover);
  box-shadow: var(--shadow-silver-md);
  transform: translateY(-2px);
}

/* Separador decorativo */
.separator {
  height: 1px;
  background: var(--gradient-border-silver);
}