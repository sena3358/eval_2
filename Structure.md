# Project Structure

```
├── back-sqlite
│   ├── data
│   │   └── app.db
│   ├── src
│   │   └── main
│   │       ├── java
│   │       │   └── com
│   │       │       └── example
│   │       ├── libs
│   │       │   └── sqlite-jdbc-3.45.3.0.jar
│   │       └── resources
│   │           └── application.properties
│   ├── target
│   │   ├── classes
│   │   │   ├── com
│   │   │   │   └── example
│   │   │   │       └── backsqlite
│   │   │   └── application.properties
│   │   ├── generated-sources
│   │   │   └── annotations
│   │   ├── maven-archiver
│   │   │   └── pom.properties
│   │   ├── maven-status
│   │   │   └── maven-compiler-plugin
│   │   │       └── compile
│   │   │           └── default-compile
│   │   ├── back-sqlite-0.0.1-SNAPSHOT.jar
│   │   └── back-sqlite-0.0.1-SNAPSHOT.jar.original
│   ├── pom.xml
│   └── README.md
├── docs
│   └── GUIDE-PACKAGES-ET-FONCTIONNALITES.md
└── newApp
    ├── dist
    │   ├── assets
    │   │   ├── bootstrap-icons-BeopsB42.woff
    │   │   ├── bootstrap-icons-mSm7cUeB.woff2
    │   │   ├── index-Bpq2l___.css
    │   │   └── index-CotRi1EC.js
    │   ├── favicon.svg
    │   ├── icons.svg
    │   └── index.html
    ├── public
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src
    │   ├── assets
    │   │   ├── hero.png
    │   │   ├── vite.svg
    │   │   └── vue.svg
    │   ├── components
    │   │   ├── auth
    │   │   │   └── LoginForm.vue
    │   │   ├── dataReset
    │   │   │   └── DataResetPanel.vue
    │   │   ├── testApi
    │   │   │   └── GlpiTestPanel.vue
    │   │   └── testBackSqlite
    │   │       └── SqliteTestPanel.vue
    │   ├── composables
    │   │   ├── auth
    │   │   │   └── useAuth.js
    │   │   ├── dataReset
    │   │   │   └── useDataReset.js
    │   │   ├── testApi
    │   │   │   └── useGlpiTest.js
    │   │   └── testBackSqlite
    │   │       └── useSqliteTest.js
    │   ├── layout
    │   │   ├── FooterBar.vue
    │   │   ├── HeaderBar.vue
    │   │   └── SidebarNav.vue
    │   ├── pages
    │   │   ├── auth
    │   │   │   └── LoginPage.vue
    │   │   ├── dataReset
    │   │   │   └── DataResetPage.vue
    │   │   ├── testApi
    │   │   │   └── GlpiTestPage.vue
    │   │   └── testBackSqlite
    │   │       └── SqliteTestPage.vue
    │   ├── routes
    │   │   └── index.js
    │   ├── services
    │   │   ├── auth
    │   │   │   └── authSession.js
    │   │   ├── dataReset
    │   │   │   ├── glpiResetApi.js
    │   │   │   └── resetConfig.js
    │   │   ├── navigation
    │   │   │   └── navigationService.js
    │   │   ├── testApi
    │   │   │   └── glpiApi.js
    │   │   └── testBackSqlite
    │   │       └── sqliteApi.js
    │   ├── App.vue
    │   └── main.js
    ├── index.html
    ├── INSTALL-XAMPP-WINDOWS.md
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```

# File Contents

## newApp/dist/assets/bootstrap-icons-BeopsB42.woff

```woff
[Binary file content not included]
```

## newApp/dist/assets/bootstrap-icons-mSm7cUeB.woff2

```woff2
[Binary file content not included]
```

## newApp/dist/assets/index-Bpq2l___.css

```css
:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, #ffffff26, #fff0);--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:#212529bf;--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:#21252980;--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:#0000002d;--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem #00000026;--bs-box-shadow-sm:0 .125rem .25rem #00000013;--bs-box-shadow-lg:0 1rem 3rem #0000002d;--bs-box-shadow-inset:inset 0 1px 2px #00000013;--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:#0d6efd40;--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}[data-bs-theme=dark]{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--bs-body-color:#dee2e6;--bs-body-color-rgb:222,226,230;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#fff;--bs-emphasis-color-rgb:255,255,255;--bs-secondary-color:#dee2e6bf;--bs-secondary-color-rgb:222,226,230;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:#dee2e680;--bs-tertiary-color-rgb:222,226,230;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-primary-text-emphasis:#6ea8fe;--bs-secondary-text-emphasis:#a7acb1;--bs-success-text-emphasis:#75b798;--bs-info-text-emphasis:#6edff6;--bs-warning-text-emphasis:#ffda6a;--bs-danger-text-emphasis:#ea868f;--bs-light-text-emphasis:#f8f9fa;--bs-dark-text-emphasis:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#161719;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#41464b;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#087990;--bs-warning-border-subtle:#997404;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-heading-color:inherit;--bs-link-color:#6ea8fe;--bs-link-hover-color:#8bb9fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:139,185,254;--bs-code-color:#e685b5;--bs-highlight-color:#dee2e6;--bs-highlight-bg:#664d03;--bs-border-color:#495057;--bs-border-color-translucent:#ffffff26;--bs-form-valid-color:#75b798;--bs-form-valid-border-color:#75b798;--bs-form-invalid-color:#ea868f;--bs-form-invalid-border-color:#ea868f}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;margin:0}hr{color:inherit;border:0;border-top:var(--bs-border-width) solid;opacity:.25;margin:1rem 0}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color:var(--bs-heading-color);margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (width>=1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (width>=1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (width>=1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (width>=1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}address{font-style:normal;line-height:inherit;margin-bottom:1rem}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{color:var(--bs-highlight-color);background-color:var(--bs-highlight-bg);padding:.1875em}sub,sup{vertical-align:baseline;font-size:.75em;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{margin-top:0;margin-bottom:1rem;font-size:.875em;display:block;overflow:auto}pre code{font-size:inherit;color:inherit;word-break:normal}code{color:var(--bs-code-color);word-wrap:break-word;font-size:.875em}a>code{color:inherit}kbd{color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem;padding:.1875rem .375rem;font-size:.875em}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{color:var(--bs-secondary-color);text-align:left;padding-top:.5rem;padding-bottom:.5rem}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{border-style:none;padding:0}textarea{resize:vertical}fieldset{border:0;min-width:0;margin:0;padding:0}legend{float:left;width:100%;line-height:inherit;margin-bottom:.5rem;padding:0;font-size:calc(1.275rem + .3vw)}@media (width>=1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field{padding:0}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit-hour-field{padding:0}::-webkit-datetime-edit-minute{padding:0}::-webkit-datetime-edit-month-field{padding:0}::-webkit-datetime-edit-text{padding:0}::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button{cursor:pointer;filter:grayscale()}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{cursor:pointer;display:list-item}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (width>=1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (width>=1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (width>=1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (width>=1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (width>=1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (width>=1200px){.display-6{font-size:2.5rem}}.list-unstyled,.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{text-transform:uppercase;font-size:.875em}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{color:#6c757d;margin-top:-1rem;margin-bottom:1rem;font-size:.875em}.blockquote-footer:before{content:"— "}.img-fluid{max-width:100%;height:auto}.img-thumbnail{background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);max-width:100%;height:auto;padding:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{color:var(--bs-secondary-color);font-size:.875em}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-left:auto;margin-right:auto}@media (width>=576px){.container,.container-sm{max-width:540px}}@media (width>=768px){.container,.container-md,.container-sm{max-width:720px}}@media (width>=992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (width>=1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (width>=1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x));flex-wrap:wrap;display:flex}.row>*{width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y);flex-shrink:0}.col{flex:1 0 0}.row-cols-auto>*{flex:none;width:auto}.row-cols-1>*{flex:none;width:100%}.row-cols-2>*{flex:none;width:50%}.row-cols-3>*{flex:none;width:33.3333%}.row-cols-4>*{flex:none;width:25%}.row-cols-5>*{flex:none;width:20%}.row-cols-6>*{flex:none;width:16.6667%}.col-auto{flex:none;width:auto}.col-1{flex:none;width:8.33333%}.col-2{flex:none;width:16.6667%}.col-3{flex:none;width:25%}.col-4{flex:none;width:33.3333%}.col-5{flex:none;width:41.6667%}.col-6{flex:none;width:50%}.col-7{flex:none;width:58.3333%}.col-8{flex:none;width:66.6667%}.col-9{flex:none;width:75%}.col-10{flex:none;width:83.3333%}.col-11{flex:none;width:91.6667%}.col-12{flex:none;width:100%}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.6667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333%}.offset-5{margin-left:41.6667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333%}.offset-8{margin-left:66.6667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333%}.offset-11{margin-left:91.6667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:.25rem}.g-1,.gy-1{--bs-gutter-y:.25rem}.g-2,.gx-2{--bs-gutter-x:.5rem}.g-2,.gy-2{--bs-gutter-y:.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (width>=576px){.col-sm{flex:1 0 0}.row-cols-sm-auto>*{flex:none;width:auto}.row-cols-sm-1>*{flex:none;width:100%}.row-cols-sm-2>*{flex:none;width:50%}.row-cols-sm-3>*{flex:none;width:33.3333%}.row-cols-sm-4>*{flex:none;width:25%}.row-cols-sm-5>*{flex:none;width:20%}.row-cols-sm-6>*{flex:none;width:16.6667%}.col-sm-auto{flex:none;width:auto}.col-sm-1{flex:none;width:8.33333%}.col-sm-2{flex:none;width:16.6667%}.col-sm-3{flex:none;width:25%}.col-sm-4{flex:none;width:33.3333%}.col-sm-5{flex:none;width:41.6667%}.col-sm-6{flex:none;width:50%}.col-sm-7{flex:none;width:58.3333%}.col-sm-8{flex:none;width:66.6667%}.col-sm-9{flex:none;width:75%}.col-sm-10{flex:none;width:83.3333%}.col-sm-11{flex:none;width:91.6667%}.col-sm-12{flex:none;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.6667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333%}.offset-sm-5{margin-left:41.6667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333%}.offset-sm-8{margin-left:66.6667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333%}.offset-sm-11{margin-left:91.6667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (width>=768px){.col-md{flex:1 0 0}.row-cols-md-auto>*{flex:none;width:auto}.row-cols-md-1>*{flex:none;width:100%}.row-cols-md-2>*{flex:none;width:50%}.row-cols-md-3>*{flex:none;width:33.3333%}.row-cols-md-4>*{flex:none;width:25%}.row-cols-md-5>*{flex:none;width:20%}.row-cols-md-6>*{flex:none;width:16.6667%}.col-md-auto{flex:none;width:auto}.col-md-1{flex:none;width:8.33333%}.col-md-2{flex:none;width:16.6667%}.col-md-3{flex:none;width:25%}.col-md-4{flex:none;width:33.3333%}.col-md-5{flex:none;width:41.6667%}.col-md-6{flex:none;width:50%}.col-md-7{flex:none;width:58.3333%}.col-md-8{flex:none;width:66.6667%}.col-md-9{flex:none;width:75%}.col-md-10{flex:none;width:83.3333%}.col-md-11{flex:none;width:91.6667%}.col-md-12{flex:none;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.6667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333%}.offset-md-5{margin-left:41.6667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333%}.offset-md-8{margin-left:66.6667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333%}.offset-md-11{margin-left:91.6667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (width>=992px){.col-lg{flex:1 0 0}.row-cols-lg-auto>*{flex:none;width:auto}.row-cols-lg-1>*{flex:none;width:100%}.row-cols-lg-2>*{flex:none;width:50%}.row-cols-lg-3>*{flex:none;width:33.3333%}.row-cols-lg-4>*{flex:none;width:25%}.row-cols-lg-5>*{flex:none;width:20%}.row-cols-lg-6>*{flex:none;width:16.6667%}.col-lg-auto{flex:none;width:auto}.col-lg-1{flex:none;width:8.33333%}.col-lg-2{flex:none;width:16.6667%}.col-lg-3{flex:none;width:25%}.col-lg-4{flex:none;width:33.3333%}.col-lg-5{flex:none;width:41.6667%}.col-lg-6{flex:none;width:50%}.col-lg-7{flex:none;width:58.3333%}.col-lg-8{flex:none;width:66.6667%}.col-lg-9{flex:none;width:75%}.col-lg-10{flex:none;width:83.3333%}.col-lg-11{flex:none;width:91.6667%}.col-lg-12{flex:none;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.6667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333%}.offset-lg-5{margin-left:41.6667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333%}.offset-lg-8{margin-left:66.6667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333%}.offset-lg-11{margin-left:91.6667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (width>=1200px){.col-xl{flex:1 0 0}.row-cols-xl-auto>*{flex:none;width:auto}.row-cols-xl-1>*{flex:none;width:100%}.row-cols-xl-2>*{flex:none;width:50%}.row-cols-xl-3>*{flex:none;width:33.3333%}.row-cols-xl-4>*{flex:none;width:25%}.row-cols-xl-5>*{flex:none;width:20%}.row-cols-xl-6>*{flex:none;width:16.6667%}.col-xl-auto{flex:none;width:auto}.col-xl-1{flex:none;width:8.33333%}.col-xl-2{flex:none;width:16.6667%}.col-xl-3{flex:none;width:25%}.col-xl-4{flex:none;width:33.3333%}.col-xl-5{flex:none;width:41.6667%}.col-xl-6{flex:none;width:50%}.col-xl-7{flex:none;width:58.3333%}.col-xl-8{flex:none;width:66.6667%}.col-xl-9{flex:none;width:75%}.col-xl-10{flex:none;width:83.3333%}.col-xl-11{flex:none;width:91.6667%}.col-xl-12{flex:none;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.6667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333%}.offset-xl-5{margin-left:41.6667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333%}.offset-xl-8{margin-left:66.6667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333%}.offset-xl-11{margin-left:91.6667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (width>=1400px){.col-xxl{flex:1 0 0}.row-cols-xxl-auto>*{flex:none;width:auto}.row-cols-xxl-1>*{flex:none;width:100%}.row-cols-xxl-2>*{flex:none;width:50%}.row-cols-xxl-3>*{flex:none;width:33.3333%}.row-cols-xxl-4>*{flex:none;width:25%}.row-cols-xxl-5>*{flex:none;width:20%}.row-cols-xxl-6>*{flex:none;width:16.6667%}.col-xxl-auto{flex:none;width:auto}.col-xxl-1{flex:none;width:8.33333%}.col-xxl-2{flex:none;width:16.6667%}.col-xxl-3{flex:none;width:25%}.col-xxl-4{flex:none;width:33.3333%}.col-xxl-5{flex:none;width:41.6667%}.col-xxl-6{flex:none;width:50%}.col-xxl-7{flex:none;width:58.3333%}.col-xxl-8{flex:none;width:66.6667%}.col-xxl-9{flex:none;width:75%}.col-xxl-10{flex:none;width:83.3333%}.col-xxl-11{flex:none;width:91.6667%}.col-xxl-12{flex:none;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333%}.offset-xxl-2{margin-left:16.6667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.3333%}.offset-xxl-5{margin-left:41.6667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.3333%}.offset-xxl-8{margin-left:66.6667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.3333%}.offset-xxl-11{margin-left:91.6667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color-type:initial;--bs-table-bg-type:initial;--bs-table-color-state:initial;--bs-table-bg-state:initial;--bs-table-color:var(--bs-emphasis-color);--bs-table-bg:var(--bs-body-bg);--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-emphasis-color);--bs-table-striped-bg:rgba(var(--bs-emphasis-color-rgb), .05);--bs-table-active-color:var(--bs-emphasis-color);--bs-table-active-bg:rgba(var(--bs-emphasis-color-rgb), .1);--bs-table-hover-color:var(--bs-emphasis-color);--bs-table-hover-bg:rgba(var(--bs-emphasis-color-rgb), .075);vertical-align:top;border-color:var(--bs-table-border-color);width:100%;margin-bottom:1rem}.table>:not(caption)>*>*{color:var(--bs-table-color-state,var(--bs-table-color-type,var(--bs-table-color)));background-color:var(--bs-table-bg);border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,var(--bs-table-accent-bg)));padding:.5rem}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:calc(var(--bs-border-width) * 2) solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:var(--bs-border-width) 0}.table-bordered>:not(caption)>*>*{border-width:0 var(--bs-border-width)}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*,.table-striped-columns>:not(caption)>tr>:nth-child(2n){--bs-table-color-type:var(--bs-table-striped-color);--bs-table-bg-type:var(--bs-table-striped-bg)}.table-active{--bs-table-color-state:var(--bs-table-active-color);--bs-table-bg-state:var(--bs-table-active-bg)}.table-hover>tbody>tr:hover>*{--bs-table-color-state:var(--bs-table-hover-color);--bs-table-bg-state:var(--bs-table-hover-bg)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#a6b5cc;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#b5b6b7;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#a7b9b1;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#a6c3ca;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#ccc2a4;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#c6acae;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#c6c7c8;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#4d5154;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{-webkit-overflow-scrolling:touch;overflow-x:auto}@media (width<=575.98px){.table-responsive-sm{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (width<=767.98px){.table-responsive-md{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (width<=991.98px){.table-responsive-lg{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (width<=1199.98px){.table-responsive-xl{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (width<=1399.98px){.table-responsive-xxl{-webkit-overflow-scrolling:touch;overflow-x:auto}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + var(--bs-border-width));padding-bottom:calc(.375rem + var(--bs-border-width));font-size:inherit;margin-bottom:0;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + var(--bs-border-width));padding-bottom:calc(.5rem + var(--bs-border-width));font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + var(--bs-border-width));padding-bottom:calc(.25rem + var(--bs-border-width));font-size:.875rem}.form-text{color:var(--bs-secondary-color);margin-top:.25rem;font-size:.875em}.form-control{width:100%;color:var(--bs-body-color);appearance:none;background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);background-clip:padding-box;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;display:block}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-control::-webkit-date-and-time-value{min-width:85px;height:1.5em;margin:0}.form-control::-webkit-datetime-edit{padding:0;display:block}.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}.form-control::-webkit-file-upload-button{-webkit-margin-end:.75rem;margin:-.375rem -.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;margin-inline-end:.75rem;padding:.375rem .75rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{-webkit-margin-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;margin:-.375rem -.75rem;margin-inline-end:.75rem;padding:.375rem .75rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:var(--bs-secondary-bg)}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}.form-control-plaintext{width:100%;color:var(--bs-body-color);border:solid #0000;border-width:var(--bs-border-width) 0;background-color:#0000;margin-bottom:0;padding:.375rem 0;line-height:1.5;display:block}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2));border-radius:var(--bs-border-radius-sm);padding:.25rem .5rem;font-size:.875rem}.form-control-sm::file-selector-button{-webkit-margin-end:.5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem;padding:.25rem .5rem}.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));border-radius:var(--bs-border-radius-lg);padding:.5rem 1rem;font-size:1.25rem}.form-control-lg::file-selector-button{-webkit-margin-end:1rem;margin:-.5rem -1rem;margin-inline-end:1rem;padding:.5rem 1rem}textarea.form-control{min-height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2))}textarea.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}textarea.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}.form-control-color{width:3rem;height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2));padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border-radius:var(--bs-border-radius);border:0!important}.form-control-color::-webkit-color-swatch{border-radius:var(--bs-border-radius);border:0!important}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}.form-select{--bs-form-select-bg-img:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");width:100%;color:var(--bs-body-color);appearance:none;background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);background-position:right .75rem center;background-repeat:no-repeat;background-size:16px 12px;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;display:block}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-select[multiple],.form-select[size]:not([size="1"]){background-image:none;padding-right:.75rem}.form-select:disabled{background-color:var(--bs-secondary-bg)}.form-select:-moz-focusring{color:#0000;text-shadow:0 0 0 var(--bs-body-color)}.form-select-sm{border-radius:var(--bs-border-radius-sm);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.form-select-lg{border-radius:var(--bs-border-radius-lg);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")}.form-check{min-height:1.5rem;margin-bottom:.125rem;padding-left:1.5em;display:block}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{text-align:right;padding-left:0;padding-right:1.5em}.form-check-reverse .form-check-input{float:right;margin-left:0;margin-right:-1.5em}.form-check-input{--bs-form-check-bg:var(--bs-body-bg);vertical-align:top;appearance:none;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);border:var(--bs-border-width) solid var(--bs-border-color);-webkit-print-color-adjust:exact;print-color-adjust:exact;color-adjust:exact;background-position:50%;background-repeat:no-repeat;background-size:contain;flex-shrink:0;width:1em;height:1em;margin-top:.25em}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e")}.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=checkbox]:indeterminate{--bs-form-check-bg-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");background-color:#0d6efd;border-color:#0d6efd}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-image:var(--bs-form-switch-bg);background-position:0;border-radius:2em;width:2em;margin-left:-2.5em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch .form-check-input:checked{--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");background-position:100%}.form-switch.form-check-reverse{padding-left:0;padding-right:2.5em}.form-switch.form-check-reverse .form-check-input{margin-left:0;margin-right:-2.5em}.form-check-inline{margin-right:1rem;display:inline-block}.btn-check{clip:rect(0,0,0,0);pointer-events:none;position:absolute}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}.form-range{appearance:none;background-color:#0000;width:100%;height:1.5rem;padding:0}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem #0d6efd40}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem #0d6efd40}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;width:1rem;height:1rem;margin-top:-.25rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{color:#0000;cursor:pointer;background-color:var(--bs-secondary-bg);border-color:#0000;border-radius:1rem;width:100%;height:.5rem}.form-range::-moz-range-thumb{appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;width:1rem;height:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{color:#0000;cursor:pointer;background-color:var(--bs-secondary-bg);border-color:#0000;border-radius:1rem;width:100%;height:.5rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:var(--bs-secondary-color)}.form-range:disabled::-moz-range-thumb{background-color:var(--bs-secondary-color)}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + calc(var(--bs-border-width) * 2));min-height:calc(3.5rem + calc(var(--bs-border-width) * 2));line-height:1.25}.form-floating>label{z-index:2;max-width:100%;height:100%;color:rgba(var(--bs-body-color-rgb),.65);text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:var(--bs-border-width) solid transparent;transform-origin:0 0;padding:1rem .75rem;transition:opacity .1s ease-in-out,transform .1s ease-in-out;position:absolute;top:0;left:0;overflow:hidden}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:#0000}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown),:-webkit-any(.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown),:is(.form-floating>.form-control-plaintext:autofill,.form-floating>.form-control:autofill){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem;padding-left:.75rem}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{transform:scale(.85)translateY(-.5rem)translate(.15rem)}.form-floating>.form-control:-webkit-autofill~label{transform:scale(.85)translateY(-.5rem)translate(.15rem)}.form-floating>textarea:focus~label:after,.form-floating>textarea:not(:placeholder-shown)~label:after{z-index:-1;content:"";background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius);height:1.5em;position:absolute;inset:1rem .375rem}.form-floating>textarea:disabled~label:after{background-color:var(--bs-secondary-bg)}.form-floating>.form-control-plaintext~label{border-width:var(--bs-border-width) 0}.form-floating>.form-control:disabled~label,.form-floating>:disabled~label{color:#6c757d}.input-group{flex-wrap:wrap;align-items:stretch;width:100%;display:flex;position:relative}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{flex:auto;width:1%;min-width:0;position:relative}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{z-index:2;position:relative}.input-group .btn:focus{z-index:5}.input-group-text{color:var(--bs-body-color);text-align:center;white-space:nowrap;background-color:var(--bs-tertiary-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;display:flex}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{border-radius:var(--bs-border-radius-lg);padding:.5rem 1rem;font-size:1.25rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{border-radius:var(--bs-border-radius-sm);padding:.25rem .5rem;font-size:.875rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:calc(-1 * var(--bs-border-width));border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{width:100%;color:var(--bs-form-valid-color);margin-top:.25rem;font-size:.875em;display:none}.valid-tooltip{z-index:5;color:#fff;background-color:var(--bs-success);border-radius:var(--bs-border-radius);max-width:100%;margin-top:.1rem;padding:.25rem .5rem;font-size:.875rem;display:none;position:absolute;top:100%}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:var(--bs-form-valid-border-color);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);padding-right:calc(1.5em + .75rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{background-position:right calc(.375em + .1875rem) top calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:var(--bs-form-valid-border-color)}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e");background-position:right .75rem center,right 2.25rem center;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(1.5em + 3.75rem)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:var(--bs-form-valid-border-color)}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:var(--bs-form-valid-color)}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:var(--bs-form-valid-color)}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{width:100%;color:var(--bs-form-invalid-color);margin-top:.25rem;font-size:.875em;display:none}.invalid-tooltip{z-index:5;color:#fff;background-color:var(--bs-danger);border-radius:var(--bs-border-radius);max-width:100%;margin-top:.1rem;padding:.25rem .5rem;font-size:.875rem;display:none;position:absolute;top:100%}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:var(--bs-form-invalid-border-color);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);padding-right:calc(1.5em + .75rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{background-position:right calc(.375em + .1875rem) top calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:var(--bs-form-invalid-border-color)}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-position:right .75rem center,right 2.25rem center;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(1.5em + 3.75rem)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:var(--bs-form-invalid-border-color)}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:var(--bs-form-invalid-color)}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:var(--bs-form-invalid-color)}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:.75rem;--bs-btn-padding-y:.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 #ffffff26,0 1px 1px #00000013;--bs-btn-disabled-opacity:.65;--bs-btn-focus-box-shadow:0 0 0 .25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;display:inline-block}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check+.btn:hover{color:var(--bs-btn-color);background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);outline:0}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);outline:0}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible,.btn-check:checked:focus-visible+.btn{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px #00000020;--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:0 0 0 #000;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:var(--bs-border-radius-lg)}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:.25rem;--bs-btn-padding-x:.5rem;--bs-btn-font-size:.875rem;--bs-btn-border-radius:var(--bs-border-radius-sm)}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;transition:height .35s;overflow:hidden}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{vertical-align:.255em;content:"";border:.3em solid #0000;border-top-color:currentColor;border-bottom:0;margin-left:.255em;display:inline-block}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:.5rem;--bs-dropdown-spacer:.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:var(--bs-body-color);--bs-dropdown-bg:var(--bs-body-bg);--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:var(--bs-border-radius);--bs-dropdown-border-width:var(--bs-border-width);--bs-dropdown-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:.5rem;--bs-dropdown-box-shadow:var(--bs-box-shadow);--bs-dropdown-link-color:var(--bs-body-color);--bs-dropdown-link-hover-color:var(--bs-body-color);--bs-dropdown-link-hover-bg:var(--bs-tertiary-bg);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:var(--bs-tertiary-color);--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:.5rem;z-index:var(--bs-dropdown-zindex);min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;background-color:var(--bs-dropdown-bg);border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius);background-clip:padding-box;margin:0;list-style:none;display:none;position:absolute}.dropdown-menu[data-bs-popper]{margin-top:var(--bs-dropdown-spacer);top:100%;left:0}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{left:auto;right:0}@media (width>=576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{left:auto;right:0}}@media (width>=768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{left:auto;right:0}}@media (width>=992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{left:auto;right:0}}@media (width>=1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{left:auto;right:0}}@media (width>=1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{left:auto;right:0}}.dropup .dropdown-menu[data-bs-popper]{margin-top:0;margin-bottom:var(--bs-dropdown-spacer);top:auto;bottom:100%}.dropup .dropdown-toggle:after{vertical-align:.255em;content:"";border:.3em solid #0000;border-top:0;border-bottom-color:currentColor;margin-left:.255em;display:inline-block}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{margin-top:0;margin-left:var(--bs-dropdown-spacer);top:0;left:100%;right:auto}.dropend .dropdown-toggle:after{vertical-align:.255em;content:"";border:.3em solid #0000;border-left-color:currentColor;border-right:0;margin-left:.255em;display:inline-block}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{margin-top:0;margin-right:var(--bs-dropdown-spacer);top:0;left:auto;right:100%}.dropstart .dropdown-toggle:after{vertical-align:.255em;content:"";margin-left:.255em;display:none}.dropstart .dropdown-toggle:before{vertical-align:.255em;content:"";border-top:.3em solid #0000;border-bottom:.3em solid #0000;border-right:.3em solid;margin-right:.255em;display:inline-block}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1;overflow:hidden}.dropdown-item{width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;color:var(--bs-dropdown-link-color);text-align:inherit;white-space:nowrap;border-radius:var(--bs-dropdown-item-border-radius,0);background-color:#0000;border:0;font-weight:400;text-decoration:none;display:block}.dropdown-item:focus,.dropdown-item:hover{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);background-color:var(--bs-dropdown-link-active-bg);text-decoration:none}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:#0000}.dropdown-menu.show{display:block}.dropdown-header{padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);color:var(--bs-dropdown-header-color);white-space:nowrap;margin-bottom:0;font-size:.875rem;display:block}.dropdown-item-text{padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color);display:block}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:#ffffff26;--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{vertical-align:middle;display:inline-flex;position:relative}.btn-group-vertical>.btn,.btn-group>.btn{flex:auto;position:relative}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{flex-wrap:wrap;justify-content:flex-start;display:flex}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:var(--bs-border-radius)}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:calc(-1 * var(--bs-border-width))}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{flex-direction:column;justify-content:center;align-items:flex-start}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:calc(-1 * var(--bs-border-width))}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:nth-child(n+3),.btn-group-vertical>:not(.btn-check)+.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);flex-wrap:wrap;margin-bottom:0;padding-left:0;list-style:none;display:flex}.nav-link{padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);background:0 0;border:0;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;display:block}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.nav-link.disabled,.nav-link:disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width:var(--bs-border-width);--bs-nav-tabs-border-color:var(--bs-border-color);--bs-nav-tabs-border-radius:var(--bs-border-radius);--bs-nav-tabs-link-hover-border-color:var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);--bs-nav-tabs-link-active-color:var(--bs-emphasis-color);--bs-nav-tabs-link-active-bg:var(--bs-body-bg);--bs-nav-tabs-link-active-border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(-1 * var(--bs-nav-tabs-border-width));border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(-1 * var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius:var(--bs-border-radius);--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-underline{--bs-nav-underline-gap:1rem;--bs-nav-underline-border-width:.125rem;--bs-nav-underline-link-active-color:var(--bs-emphasis-color);gap:var(--bs-nav-underline-gap)}.nav-underline .nav-link{border-bottom:var(--bs-nav-underline-border-width) solid transparent;padding-left:0;padding-right:0}.nav-underline .nav-link:focus,.nav-underline .nav-link:hover{border-bottom-color:currentColor}.nav-underline .nav-link.active,.nav-underline .show>.nav-link{color:var(--bs-nav-underline-link-active-color);border-bottom-color:currentColor;font-weight:700}.nav-fill .nav-item,.nav-fill>.nav-link{text-align:center;flex:auto}.nav-justified .nav-item,.nav-justified>.nav-link{text-align:center;flex-grow:1;flex-basis:0}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), .65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), .8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), .3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:.5rem;--bs-navbar-toggler-padding-y:.25rem;--bs-navbar-toggler-padding-x:.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), .15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:.25rem;--bs-navbar-toggler-transition:box-shadow .15s ease-in-out;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);flex-wrap:wrap;justify-content:space-between;align-items:center;display:flex;position:relative}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{flex-wrap:inherit;justify-content:space-between;align-items:center;display:flex}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);white-space:nowrap;text-decoration:none}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);flex-direction:column;margin-bottom:0;padding-left:0;list-style:none;display:flex}.navbar-nav .nav-link.active,.navbar-nav .nav-link.show{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{color:var(--bs-navbar-color);padding-top:.5rem;padding-bottom:.5rem}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-grow:1;flex-basis:100%;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);color:var(--bs-navbar-color);border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition);background-color:#0000;line-height:1}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width);outline:0;text-decoration:none}.navbar-toggler-icon{vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-position:50%;background-repeat:no-repeat;background-size:100%;width:1.5em;height:1.5em;display:inline-block}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (width>=576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{flex-basis:auto;display:flex!important}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{z-index:auto;flex-grow:1;transition:none;position:static;visibility:visible!important;background-color:#0000!important;border:0!important;width:auto!important;height:auto!important;transform:none!important}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible}}@media (width>=768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{flex-basis:auto;display:flex!important}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{z-index:auto;flex-grow:1;transition:none;position:static;visibility:visible!important;background-color:#0000!important;border:0!important;width:auto!important;height:auto!important;transform:none!important}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible}}@media (width>=992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{flex-basis:auto;display:flex!important}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{z-index:auto;flex-grow:1;transition:none;position:static;visibility:visible!important;background-color:#0000!important;border:0!important;width:auto!important;height:auto!important;transform:none!important}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible}}@media (width>=1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{flex-basis:auto;display:flex!important}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{z-index:auto;flex-grow:1;transition:none;position:static;visibility:visible!important;background-color:#0000!important;border:0!important;width:auto!important;height:auto!important;transform:none!important}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible}}@media (width>=1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{flex-basis:auto;display:flex!important}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{z-index:auto;flex-grow:1;transition:none;position:static;visibility:visible!important;background-color:#0000!important;border:0!important;width:auto!important;height:auto!important;transform:none!important}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{flex-basis:auto;display:flex!important}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{z-index:auto;flex-grow:1;transition:none;position:static;visibility:visible!important;background-color:#0000!important;border:0!important;width:auto!important;height:auto!important;transform:none!important}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible}.navbar-dark,.navbar[data-bs-theme=dark]{--bs-navbar-color:#ffffff8c;--bs-navbar-hover-color:#ffffffbf;--bs-navbar-disabled-color:#ffffff40;--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:#ffffff1a;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}[data-bs-theme=dark] .navbar-toggler-icon{--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y:.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb), .03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:.75rem;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-color:var(--bs-card-bg);border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius);background-clip:border-box;flex-direction:column;display:flex;position:relative}.card>hr{margin-left:0;margin-right:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius);border-top-width:0}.card>.list-group:last-child{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius);border-bottom-width:0}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color);flex:auto}.card-title{margin-bottom:var(--bs-card-title-spacer-y);color:var(--bs-card-title-color)}.card-subtitle{margin-top:calc(-.5 * var(--bs-card-title-spacer-y));color:var(--bs-card-subtitle-color);margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color);margin-bottom:0}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-bottom:calc(-1 * var(--bs-card-cap-padding-y));margin-left:calc(-.5 * var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-left:calc(-.5 * var(--bs-card-cap-padding-x))}.card-img-overlay{padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius);position:absolute;inset:0}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (width>=576px){.card-group{flex-flow:wrap;display:flex}.card-group>.card{flex:1 0 0;margin-bottom:0}.card-group>.card+.card{border-left:0;margin-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child)>.card-header,.card-group>.card:not(:last-child)>.card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child)>.card-footer,.card-group>.card:not(:last-child)>.card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child)>.card-header,.card-group>.card:not(:first-child)>.card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child)>.card-footer,.card-group>.card:not(:first-child)>.card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform .2s ease-in-out;--bs-accordion-btn-active-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e");--bs-accordion-btn-focus-box-shadow:0 0 0 .25rem #0d6efd40;--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text-emphasis);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}.accordion-button{width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);overflow-anchor:none;transition:var(--bs-accordion-transition);border:0;border-radius:0;align-items:center;font-size:1rem;display:flex;position:relative}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed):after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button:after{width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);content:"";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition);flex-shrink:0;margin-left:auto}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;box-shadow:var(--bs-accordion-btn-focus-box-shadow);outline:0}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type>.accordion-header .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type>.accordion-header .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type>.accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush>.accordion-item{border-left:0;border-right:0;border-radius:0}.accordion-flush>.accordion-item:first-child{border-top:0}.accordion-flush>.accordion-item:last-child{border-bottom:0}.accordion-flush>.accordion-item>.accordion-collapse,.accordion-flush>.accordion-item>.accordion-header .accordion-button,.accordion-flush>.accordion-item>.accordion-header .accordion-button.collapsed{border-radius:0}[data-bs-theme=dark] .accordion-button:after{--bs-accordion-btn-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e");--bs-accordion-btn-active-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e")}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:var(--bs-secondary-color);--bs-breadcrumb-item-padding-x:.5rem;--bs-breadcrumb-item-active-color:var(--bs-secondary-color);padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius);flex-wrap:wrap;list-style:none;display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item:before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider,"/")}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:.75rem;--bs-pagination-padding-y:.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:var(--bs-body-bg);--bs-pagination-border-width:var(--bs-border-width);--bs-pagination-border-color:var(--bs-border-color);--bs-pagination-border-radius:var(--bs-border-radius);--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:var(--bs-tertiary-bg);--bs-pagination-hover-border-color:var(--bs-border-color);--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:var(--bs-secondary-bg);--bs-pagination-focus-box-shadow:0 0 0 .25rem #0d6efd40;--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:var(--bs-secondary-color);--bs-pagination-disabled-bg:var(--bs-secondary-bg);--bs-pagination-disabled-border-color:var(--bs-border-color);padding-left:0;list-style:none;display:flex}.page-link{padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;display:block;position:relative}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);box-shadow:var(--bs-pagination-focus-box-shadow);outline:0}.active>.page-link,.page-link.active{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.disabled>.page-link,.page-link.disabled{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:calc(-1 * var(--bs-border-width))}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:var(--bs-border-radius-lg)}.pagination-sm{--bs-pagination-padding-x:.5rem;--bs-pagination-padding-y:.25rem;--bs-pagination-font-size:.875rem;--bs-pagination-border-radius:var(--bs-border-radius-sm)}.badge{--bs-badge-padding-x:.65em;--bs-badge-padding-y:.35em;--bs-badge-font-size:.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:var(--bs-border-radius);padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius);line-height:1;display:inline-block}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius);position:relative}.alert-heading{color:inherit}.alert-link{color:var(--bs-alert-link-color);font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{z-index:2;padding:1.25rem 1rem;position:absolute;top:0;right:0}.alert-primary{--bs-alert-color:var(--bs-primary-text-emphasis);--bs-alert-bg:var(--bs-primary-bg-subtle);--bs-alert-border-color:var(--bs-primary-border-subtle);--bs-alert-link-color:var(--bs-primary-text-emphasis)}.alert-secondary{--bs-alert-color:var(--bs-secondary-text-emphasis);--bs-alert-bg:var(--bs-secondary-bg-subtle);--bs-alert-border-color:var(--bs-secondary-border-subtle);--bs-alert-link-color:var(--bs-secondary-text-emphasis)}.alert-success{--bs-alert-color:var(--bs-success-text-emphasis);--bs-alert-bg:var(--bs-success-bg-subtle);--bs-alert-border-color:var(--bs-success-border-subtle);--bs-alert-link-color:var(--bs-success-text-emphasis)}.alert-info{--bs-alert-color:var(--bs-info-text-emphasis);--bs-alert-bg:var(--bs-info-bg-subtle);--bs-alert-border-color:var(--bs-info-border-subtle);--bs-alert-link-color:var(--bs-info-text-emphasis)}.alert-warning{--bs-alert-color:var(--bs-warning-text-emphasis);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text-emphasis)}.alert-danger{--bs-alert-color:var(--bs-danger-text-emphasis);--bs-alert-bg:var(--bs-danger-bg-subtle);--bs-alert-border-color:var(--bs-danger-border-subtle);--bs-alert-link-color:var(--bs-danger-text-emphasis)}.alert-light{--bs-alert-color:var(--bs-light-text-emphasis);--bs-alert-bg:var(--bs-light-bg-subtle);--bs-alert-border-color:var(--bs-light-border-subtle);--bs-alert-link-color:var(--bs-light-text-emphasis)}.alert-dark{--bs-alert-color:var(--bs-dark-text-emphasis);--bs-alert-bg:var(--bs-dark-bg-subtle);--bs-alert-border-color:var(--bs-dark-border-subtle);--bs-alert-link-color:var(--bs-dark-text-emphasis)}@keyframes progress-bar-stripes{0%{background-position-x:var(--bs-progress-height)}}.progress,.progress-stacked{--bs-progress-height:1rem;--bs-progress-font-size:.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width .6s ease;height:var(--bs-progress-height);font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius);display:flex;overflow:hidden}.progress-bar{color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition);flex-direction:column;justify-content:center;display:flex;overflow:hidden}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,#ffffff26 25%,#0000 25% 50%,#ffffff26 50% 75%,#0000 75%,#0000);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-stacked>.progress{overflow:visible}.progress-stacked>.progress>.progress-bar{width:100%}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color:var(--bs-body-color);--bs-list-group-bg:var(--bs-body-bg);--bs-list-group-border-color:var(--bs-border-color);--bs-list-group-border-width:var(--bs-border-width);--bs-list-group-border-radius:var(--bs-border-radius);--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:.5rem;--bs-list-group-action-color:var(--bs-secondary-color);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-tertiary-bg);--bs-list-group-action-active-color:var(--bs-body-color);--bs-list-group-action-active-bg:var(--bs-secondary-bg);--bs-list-group-disabled-color:var(--bs-secondary-color);--bs-list-group-disabled-bg:var(--bs-body-bg);--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;border-radius:var(--bs-list-group-border-radius);flex-direction:column;margin-bottom:0;padding-left:0;display:flex}.list-group-numbered{counter-reset:section;list-style-type:none}.list-group-numbered>.list-group-item:before{content:counters(section, ".") ". ";counter-increment:section}.list-group-item{padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);text-decoration:none;display:block;position:relative}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(-1 * var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:not(.active):focus,.list-group-item-action:not(.active):hover{z-index:1;color:var(--bs-list-group-action-hover-color);background-color:var(--bs-list-group-action-hover-bg);text-decoration:none}.list-group-item-action:not(.active):active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}@media (width>=576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (width>=768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (width>=992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (width>=1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (width>=1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{--bs-list-group-color:var(--bs-primary-text-emphasis);--bs-list-group-bg:var(--bs-primary-bg-subtle);--bs-list-group-border-color:var(--bs-primary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-primary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-primary-border-subtle);--bs-list-group-active-color:var(--bs-primary-bg-subtle);--bs-list-group-active-bg:var(--bs-primary-text-emphasis);--bs-list-group-active-border-color:var(--bs-primary-text-emphasis)}.list-group-item-secondary{--bs-list-group-color:var(--bs-secondary-text-emphasis);--bs-list-group-bg:var(--bs-secondary-bg-subtle);--bs-list-group-border-color:var(--bs-secondary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-secondary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-secondary-border-subtle);--bs-list-group-active-color:var(--bs-secondary-bg-subtle);--bs-list-group-active-bg:var(--bs-secondary-text-emphasis);--bs-list-group-active-border-color:var(--bs-secondary-text-emphasis)}.list-group-item-success{--bs-list-group-color:var(--bs-success-text-emphasis);--bs-list-group-bg:var(--bs-success-bg-subtle);--bs-list-group-border-color:var(--bs-success-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-success-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-success-border-subtle);--bs-list-group-active-color:var(--bs-success-bg-subtle);--bs-list-group-active-bg:var(--bs-success-text-emphasis);--bs-list-group-active-border-color:var(--bs-success-text-emphasis)}.list-group-item-info{--bs-list-group-color:var(--bs-info-text-emphasis);--bs-list-group-bg:var(--bs-info-bg-subtle);--bs-list-group-border-color:var(--bs-info-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-info-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-info-border-subtle);--bs-list-group-active-color:var(--bs-info-bg-subtle);--bs-list-group-active-bg:var(--bs-info-text-emphasis);--bs-list-group-active-border-color:var(--bs-info-text-emphasis)}.list-group-item-warning{--bs-list-group-color:var(--bs-warning-text-emphasis);--bs-list-group-bg:var(--bs-warning-bg-subtle);--bs-list-group-border-color:var(--bs-warning-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-warning-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-warning-border-subtle);--bs-list-group-active-color:var(--bs-warning-bg-subtle);--bs-list-group-active-bg:var(--bs-warning-text-emphasis);--bs-list-group-active-border-color:var(--bs-warning-text-emphasis)}.list-group-item-danger{--bs-list-group-color:var(--bs-danger-text-emphasis);--bs-list-group-bg:var(--bs-danger-bg-subtle);--bs-list-group-border-color:var(--bs-danger-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-danger-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-danger-border-subtle);--bs-list-group-active-color:var(--bs-danger-bg-subtle);--bs-list-group-active-bg:var(--bs-danger-text-emphasis);--bs-list-group-active-border-color:var(--bs-danger-text-emphasis)}.list-group-item-light{--bs-list-group-color:var(--bs-light-text-emphasis);--bs-list-group-bg:var(--bs-light-bg-subtle);--bs-list-group-border-color:var(--bs-light-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-light-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-light-border-subtle);--bs-list-group-active-color:var(--bs-light-bg-subtle);--bs-list-group-active-bg:var(--bs-light-text-emphasis);--bs-list-group-active-border-color:var(--bs-light-text-emphasis)}.list-group-item-dark{--bs-list-group-color:var(--bs-dark-text-emphasis);--bs-list-group-bg:var(--bs-dark-bg-subtle);--bs-list-group-border-color:var(--bs-dark-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-dark-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-dark-border-subtle);--bs-list-group-active-color:var(--bs-dark-bg-subtle);--bs-list-group-active-bg:var(--bs-dark-text-emphasis);--bs-list-group-active-border-color:var(--bs-dark-text-emphasis)}.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e");--bs-btn-close-opacity:.5;--bs-btn-close-hover-opacity:.75;--bs-btn-close-focus-shadow:0 0 0 .25rem #0d6efd40;--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:.25;box-sizing:content-box;width:1em;height:1em;color:var(--bs-btn-close-color);background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;filter:var(--bs-btn-close-filter);opacity:var(--bs-btn-close-opacity);border:0;border-radius:.375rem;padding:.25em}.btn-close:hover{color:var(--bs-btn-close-color);opacity:var(--bs-btn-close-hover-opacity);text-decoration:none}.btn-close:focus{box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity);outline:0}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;user-select:none;opacity:var(--bs-btn-close-disabled-opacity)}.btn-close-white{--bs-btn-close-filter:invert(1) grayscale(100%) brightness(200%)}:root,[data-bs-theme=light]{--bs-btn-close-filter: }[data-bs-theme=dark]{--bs-btn-close-filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:.75rem;--bs-toast-padding-y:.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb), .85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb), .85);--bs-toast-header-border-color:var(--bs-border-color-translucent);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius);background-clip:padding-box}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex:1090;z-index:var(--bs-toast-zindex);pointer-events:none;width:max-content;max-width:100%;position:absolute}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));background-clip:padding-box;align-items:center;display:flex}.toast-header .btn-close{margin-right:calc(-.5 * var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:.5rem;--bs-modal-color:var(--bs-body-color);--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:var(--bs-box-shadow-sm);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);z-index:var(--bs-modal-zindex);outline:0;width:100%;height:100%;display:none;position:fixed;top:0;left:0;overflow:hidden auto}.modal-dialog{width:auto;margin:var(--bs-modal-margin);pointer-events:none;position:relative}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin) * 2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{min-height:calc(100% - var(--bs-modal-margin) * 2);align-items:center;display:flex}.modal-content{width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);background-clip:padding-box;outline:0;flex-direction:column;display:flex;position:relative}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:.5;z-index:var(--bs-backdrop-zindex);background-color:var(--bs-backdrop-bg);width:100vw;height:100vh;position:fixed;top:0;left:0}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius);flex-shrink:0;align-items:center;display:flex}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);margin-top:calc(-.5 * var(--bs-modal-header-padding-y));margin-right:calc(-.5 * var(--bs-modal-header-padding-x));margin-bottom:calc(-.5 * var(--bs-modal-header-padding-y));margin-left:auto}.modal-title{line-height:var(--bs-modal-title-line-height);margin-bottom:0}.modal-body{padding:var(--bs-modal-padding);flex:auto;position:relative}.modal-footer{padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius);flex-wrap:wrap;flex-shrink:0;justify-content:flex-end;align-items:center;display:flex}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * .5)}@media (width>=576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:var(--bs-box-shadow)}.modal-dialog{max-width:var(--bs-modal-width);margin-left:auto;margin-right:auto}.modal-sm{--bs-modal-width:300px}}@media (width>=992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (width>=1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (width<=575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (width<=767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (width<=991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (width<=1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (width<=1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:.5rem;--bs-tooltip-padding-y:.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:.9;--bs-tooltip-arrow-width:.8rem;--bs-tooltip-arrow-height:.4rem;z-index:var(--bs-tooltip-zindex);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);text-align:left;text-align:start;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-style:normal;font-weight:400;line-height:1.5;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0;text-decoration:none;display:block}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height);display:block}.tooltip .tooltip-arrow:before{content:"";border-style:solid;border-color:#0000;position:absolute}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:calc(-1 * var(--bs-tooltip-arrow-height))}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-top-color:var(--bs-tooltip-bg);top:-1px}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{border-width:calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-right-color:var(--bs-tooltip-bg);right:-1px}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:calc(-1 * var(--bs-tooltip-arrow-height))}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{border-width:0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg);bottom:-1px}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{border-width:calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg);left:-1px}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:var(--bs-box-shadow);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color:inherit;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);text-align:left;text-align:start;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-style:normal;font-weight:400;line-height:1.5;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius);background-clip:padding-box;text-decoration:none;display:block}.popover .popover-arrow{width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height);display:block}.popover .popover-arrow:after,.popover .popover-arrow:before{content:"";border:0 solid #0000;display:block;position:absolute}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:after,.bs-popover-top>.popover-arrow:before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{border-top-color:var(--bs-popover-arrow-border);bottom:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:after,.bs-popover-end>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{border-right-color:var(--bs-popover-arrow-border);left:0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:before{border-width:0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{border-bottom-color:var(--bs-popover-arrow-border);top:0}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{width:var(--bs-popover-arrow-width);margin-left:calc(-.5 * var(--bs-popover-arrow-width));content:"";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg);display:block;position:absolute;top:0;left:50%}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:after,.bs-popover-start>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{border-left-color:var(--bs-popover-arrow-border);right:0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius);margin-bottom:0}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{width:100%;position:relative;overflow:hidden}.carousel-inner:after{clear:both;content:"";display:block}.carousel-item{float:left;backface-visibility:hidden;width:100%;margin-right:-100%;transition:transform .6s ease-in-out;display:none;position:relative}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translate(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translate(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{z-index:1;color:#fff;text-align:center;width:15%;filter:var(--bs-carousel-control-icon-filter);opacity:.5;background:0 0;border:0;justify-content:center;align-items:center;padding:0;transition:opacity .15s;display:flex;position:absolute;top:0;bottom:0}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;opacity:.9;outline:0;text-decoration:none}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;width:2rem;height:2rem;display:inline-block}.carousel-control-prev-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e")}.carousel-control-next-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e")}.carousel-indicators{z-index:2;justify-content:center;margin-bottom:1rem;margin-left:15%;margin-right:15%;padding:0;display:flex;position:absolute;bottom:0;left:0;right:0}.carousel-indicators [data-bs-target]{box-sizing:content-box;text-indent:-999px;cursor:pointer;background-color:var(--bs-carousel-indicator-active-bg);opacity:.5;background-clip:padding-box;border:10px solid #0000;border-left:0;border-right:0;flex:0 auto;width:30px;height:3px;margin-left:3px;margin-right:3px;padding:0;transition:opacity .6s}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{color:var(--bs-carousel-caption-color);text-align:center;padding-top:1.25rem;padding-bottom:1.25rem;position:absolute;bottom:1.25rem;left:15%;right:15%}.carousel-dark{--bs-carousel-indicator-active-bg:#000;--bs-carousel-caption-color:#000;--bs-carousel-control-icon-filter:invert(1) grayscale(100)}:root,[data-bs-theme=light]{--bs-carousel-indicator-active-bg:#fff;--bs-carousel-caption-color:#fff;--bs-carousel-control-icon-filter: }[data-bs-theme=dark]{--bs-carousel-indicator-active-bg:#000;--bs-carousel-caption-color:#000;--bs-carousel-control-icon-filter:invert(1) grayscale(100)}.spinner-border,.spinner-grow{width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);border-radius:50%;flex-shrink:0;display:inline-block}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-.125em;--bs-spinner-border-width:.25em;--bs-spinner-animation-speed:.75s;--bs-spinner-animation-name:spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:#0000}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-.125em;--bs-spinner-animation-speed:.75s;--bs-spinner-animation-name:spinner-grow;opacity:0;background-color:currentColor}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:var(--bs-box-shadow-sm);--bs-offcanvas-transition:transform .3s ease-in-out;--bs-offcanvas-title-line-height:1.5}@media (width<=575.98px){.offcanvas-sm{z-index:var(--bs-offcanvas-zindex);max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);transition:var(--bs-offcanvas-transition);background-clip:padding-box;outline:0;flex-direction:column;display:flex;position:fixed;bottom:0}}@media (width<=575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (width<=575.98px){.offcanvas-sm.offcanvas-start{width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;left:0;transform:translate(-100%)}.offcanvas-sm.offcanvas-end{width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;right:0;transform:translate(100%)}.offcanvas-sm.offcanvas-top{height:var(--bs-offcanvas-height);border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;top:0;left:0;right:0;transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom{height:var(--bs-offcanvas-height);border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;left:0;right:0;transform:translateY(100%)}.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (width>=576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:#0000!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible;background-color:#0000!important}}@media (width<=767.98px){.offcanvas-md{z-index:var(--bs-offcanvas-zindex);max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);transition:var(--bs-offcanvas-transition);background-clip:padding-box;outline:0;flex-direction:column;display:flex;position:fixed;bottom:0}}@media (width<=767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (width<=767.98px){.offcanvas-md.offcanvas-start{width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;left:0;transform:translate(-100%)}.offcanvas-md.offcanvas-end{width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;right:0;transform:translate(100%)}.offcanvas-md.offcanvas-top{height:var(--bs-offcanvas-height);border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;top:0;left:0;right:0;transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom{height:var(--bs-offcanvas-height);border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;left:0;right:0;transform:translateY(100%)}.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (width>=768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:#0000!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible;background-color:#0000!important}}@media (width<=991.98px){.offcanvas-lg{z-index:var(--bs-offcanvas-zindex);max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);transition:var(--bs-offcanvas-transition);background-clip:padding-box;outline:0;flex-direction:column;display:flex;position:fixed;bottom:0}}@media (width<=991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (width<=991.98px){.offcanvas-lg.offcanvas-start{width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;left:0;transform:translate(-100%)}.offcanvas-lg.offcanvas-end{width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;right:0;transform:translate(100%)}.offcanvas-lg.offcanvas-top{height:var(--bs-offcanvas-height);border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;top:0;left:0;right:0;transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom{height:var(--bs-offcanvas-height);border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;left:0;right:0;transform:translateY(100%)}.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (width>=992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:#0000!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible;background-color:#0000!important}}@media (width<=1199.98px){.offcanvas-xl{z-index:var(--bs-offcanvas-zindex);max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);transition:var(--bs-offcanvas-transition);background-clip:padding-box;outline:0;flex-direction:column;display:flex;position:fixed;bottom:0}}@media (width<=1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (width<=1199.98px){.offcanvas-xl.offcanvas-start{width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;left:0;transform:translate(-100%)}.offcanvas-xl.offcanvas-end{width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;right:0;transform:translate(100%)}.offcanvas-xl.offcanvas-top{height:var(--bs-offcanvas-height);border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;top:0;left:0;right:0;transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom{height:var(--bs-offcanvas-height);border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;left:0;right:0;transform:translateY(100%)}.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (width>=1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:#0000!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible;background-color:#0000!important}}@media (width<=1399.98px){.offcanvas-xxl{z-index:var(--bs-offcanvas-zindex);max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);transition:var(--bs-offcanvas-transition);background-clip:padding-box;outline:0;flex-direction:column;display:flex;position:fixed;bottom:0}}@media (width<=1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (width<=1399.98px){.offcanvas-xxl.offcanvas-start{width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;left:0;transform:translate(-100%)}.offcanvas-xxl.offcanvas-end{width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;right:0;transform:translate(100%)}.offcanvas-xxl.offcanvas-top{height:var(--bs-offcanvas-height);border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;top:0;left:0;right:0;transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom{height:var(--bs-offcanvas-height);border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;left:0;right:0;transform:translateY(100%)}.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (width>=1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:#0000!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{flex-grow:0;padding:0;display:flex;overflow-y:visible;background-color:#0000!important}}.offcanvas{z-index:var(--bs-offcanvas-zindex);max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);transition:var(--bs-offcanvas-transition);background-clip:padding-box;outline:0;flex-direction:column;display:flex;position:fixed;bottom:0}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;left:0;transform:translate(-100%)}.offcanvas.offcanvas-end{width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;right:0;transform:translate(100%)}.offcanvas.offcanvas-top{height:var(--bs-offcanvas-height);border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;top:0;left:0;right:0;transform:translateY(-100%)}.offcanvas.offcanvas-bottom{height:var(--bs-offcanvas-height);border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);max-height:100%;left:0;right:0;transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{z-index:1040;background-color:#000;width:100vw;height:100vh;position:fixed;top:0;left:0}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);align-items:center;display:flex}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);margin-top:calc(-.5 * var(--bs-offcanvas-padding-y));margin-right:calc(-.5 * var(--bs-offcanvas-padding-x));margin-bottom:calc(-.5 * var(--bs-offcanvas-padding-y));margin-left:auto}.offcanvas-title{line-height:var(--bs-offcanvas-title-line-height);margin-bottom:0}.offcanvas-body{padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);flex-grow:1;overflow-y:auto}.placeholder{vertical-align:middle;cursor:wait;opacity:.5;background-color:currentColor;min-height:1em;display:inline-block}.placeholder.btn:before{content:"";display:inline-block}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:2s ease-in-out infinite placeholder-glow}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{animation:2s linear infinite placeholder-wave;-webkit-mask-image:linear-gradient(130deg,#000 55%,#000c 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,#000c 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%}@keyframes placeholder-wave{to{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.clearfix:after{clear:both;content:"";display:block}.text-bg-primary{color:#fff!important;background-color:RGBA(var(--bs-primary-rgb),var(--bs-bg-opacity,1))!important}.text-bg-secondary{color:#fff!important;background-color:RGBA(var(--bs-secondary-rgb),var(--bs-bg-opacity,1))!important}.text-bg-success{color:#fff!important;background-color:RGBA(var(--bs-success-rgb),var(--bs-bg-opacity,1))!important}.text-bg-info{color:#000!important;background-color:RGBA(var(--bs-info-rgb),var(--bs-bg-opacity,1))!important}.text-bg-warning{color:#000!important;background-color:RGBA(var(--bs-warning-rgb),var(--bs-bg-opacity,1))!important}.text-bg-danger{color:#fff!important;background-color:RGBA(var(--bs-danger-rgb),var(--bs-bg-opacity,1))!important}.text-bg-light{color:#000!important;background-color:RGBA(var(--bs-light-rgb),var(--bs-bg-opacity,1))!important}.text-bg-dark{color:#fff!important;background-color:RGBA(var(--bs-dark-rgb),var(--bs-bg-opacity,1))!important}.link-primary{color:RGBA(var(--bs-primary-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important}.link-primary:focus,.link-primary:hover{color:RGBA(10,88,202,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important}.link-secondary{color:RGBA(var(--bs-secondary-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important}.link-secondary:focus,.link-secondary:hover{color:RGBA(86,94,100,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important}.link-success{color:RGBA(var(--bs-success-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important}.link-success:focus,.link-success:hover{color:RGBA(20,108,67,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important}.link-info{color:RGBA(var(--bs-info-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important}.link-info:focus,.link-info:hover{color:RGBA(61,213,243,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important}.link-warning{color:RGBA(var(--bs-warning-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important}.link-warning:focus,.link-warning:hover{color:RGBA(255,205,57,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important}.link-danger{color:RGBA(var(--bs-danger-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important}.link-danger:focus,.link-danger:hover{color:RGBA(176,42,55,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important}.link-light{color:RGBA(var(--bs-light-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important}.link-light:focus,.link-light:hover{color:RGBA(249,250,251,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important}.link-dark{color:RGBA(var(--bs-dark-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important}.link-dark:focus,.link-dark:hover{color:RGBA(26,30,33,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important}.link-body-emphasis{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-body-emphasis:focus,.link-body-emphasis:hover{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,.75))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,.75))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,.75))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,.75))!important}.focus-ring:focus{box-shadow:var(--bs-focus-ring-x,0) var(--bs-focus-ring-y,0) var(--bs-focus-ring-blur,0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);outline:0}.icon-link{-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,.5));-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,.5));text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,.5));text-underline-offset:.25em;backface-visibility:hidden;align-items:center;gap:.375rem;display:inline-flex}.icon-link>.bi{fill:currentColor;flex-shrink:0;width:1em;height:1em;transition:transform .2s ease-in-out}@media (prefers-reduced-motion:reduce){.icon-link>.bi{transition:none}}.icon-link-hover:focus-visible>.bi,.icon-link-hover:hover>.bi{transform:var(--bs-icon-link-transform,translate3d(.25em,0,0))}.ratio{width:100%;position:relative}.ratio:before{padding-top:var(--bs-aspect-ratio);content:"";display:block}.ratio>*{width:100%;height:100%;position:absolute;top:0;left:0}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571%}.fixed-top{z-index:1030;position:fixed;top:0;left:0;right:0}.fixed-bottom{z-index:1030;position:fixed;bottom:0;left:0;right:0}.sticky-top{z-index:1020;position:sticky;top:0}.sticky-bottom{z-index:1020;position:sticky;bottom:0}@media (width>=576px){.sticky-sm-top{z-index:1020;position:sticky;top:0}.sticky-sm-bottom{z-index:1020;position:sticky;bottom:0}}@media (width>=768px){.sticky-md-top{z-index:1020;position:sticky;top:0}.sticky-md-bottom{z-index:1020;position:sticky;bottom:0}}@media (width>=992px){.sticky-lg-top{z-index:1020;position:sticky;top:0}.sticky-lg-bottom{z-index:1020;position:sticky;bottom:0}}@media (width>=1200px){.sticky-xl-top{z-index:1020;position:sticky;top:0}.sticky-xl-bottom{z-index:1020;position:sticky;bottom:0}}@media (width>=1400px){.sticky-xxl-top{z-index:1020;position:sticky;top:0}.sticky-xxl-bottom{z-index:1020;position:sticky;bottom:0}}.hstack{flex-direction:row;align-self:stretch;align-items:center;display:flex}.vstack{flex-direction:column;flex:auto;align-self:stretch;display:flex}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important}.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption),.visually-hidden:not(caption){position:absolute!important}.visually-hidden *,.visually-hidden-focusable:not(:focus):not(:focus-within) *{overflow:hidden!important}.stretched-link:after{z-index:1;content:"";position:absolute;inset:0}.text-truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.vr{width:var(--bs-border-width);opacity:.25;background-color:currentColor;align-self:stretch;min-height:1em;display:inline-block}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.object-fit-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-none{-o-object-fit:none!important;object-fit:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.overflow-x-auto{overflow-x:auto!important}.overflow-x-hidden{overflow-x:hidden!important}.overflow-x-visible{overflow-x:visible!important}.overflow-x-scroll{overflow-x:scroll!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-hidden{overflow-y:hidden!important}.overflow-y-visible{overflow-y:visible!important}.overflow-y-scroll{overflow-y:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-inline-grid{display:inline-grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:var(--bs-box-shadow)!important}.shadow-sm{box-shadow:var(--bs-box-shadow-sm)!important}.shadow-lg{box-shadow:var(--bs-box-shadow-lg)!important}.shadow-none{box-shadow:none!important}.focus-ring-primary{--bs-focus-ring-color:rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity))}.focus-ring-secondary{--bs-focus-ring-color:rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity))}.focus-ring-success{--bs-focus-ring-color:rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity))}.focus-ring-info{--bs-focus-ring-color:rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity))}.focus-ring-warning{--bs-focus-ring-color:rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity))}.focus-ring-danger{--bs-focus-ring-color:rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity))}.focus-ring-light{--bs-focus-ring-color:rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity))}.focus-ring-dark{--bs-focus-ring-color:rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity))}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translate(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-black{--bs-border-opacity:1;border-color:rgba(var(--bs-black-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-primary-subtle{border-color:var(--bs-primary-border-subtle)!important}.border-secondary-subtle{border-color:var(--bs-secondary-border-subtle)!important}.border-success-subtle{border-color:var(--bs-success-border-subtle)!important}.border-info-subtle{border-color:var(--bs-info-border-subtle)!important}.border-warning-subtle{border-color:var(--bs-warning-border-subtle)!important}.border-danger-subtle{border-color:var(--bs-danger-border-subtle)!important}.border-light-subtle{border-color:var(--bs-light-border-subtle)!important}.border-dark-subtle{border-color:var(--bs-dark-border-subtle)!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.border-opacity-10{--bs-border-opacity:.1}.border-opacity-25{--bs-border-opacity:.25}.border-opacity-50{--bs-border-opacity:.5}.border-opacity-75{--bs-border-opacity:.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-left:0!important;margin-right:0!important}.mx-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:1rem!important;margin-right:1rem!important}.mx-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-5{margin-left:3rem!important;margin-right:3rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-left:0!important;padding-right:0!important}.px-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-3{padding-left:1rem!important;padding-right:1rem!important}.px-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-5{padding-left:3rem!important;padding-right:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.row-gap-0{row-gap:0!important}.row-gap-1{row-gap:.25rem!important}.row-gap-2{row-gap:.5rem!important}.row-gap-3{row-gap:1rem!important}.row-gap-4{row-gap:1.5rem!important}.row-gap-5{row-gap:3rem!important}.column-gap-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-lighter{font-weight:lighter!important}.fw-light{font-weight:300!important}.fw-normal{font-weight:400!important}.fw-medium{font-weight:500!important}.fw-semibold{font-weight:600!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-black-50{--bs-text-opacity:1;color:#00000080!important}.text-white-50{--bs-text-opacity:1;color:#ffffff80!important}.text-body-secondary{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-body-tertiary{--bs-text-opacity:1;color:var(--bs-tertiary-color)!important}.text-body-emphasis{--bs-text-opacity:1;color:var(--bs-emphasis-color)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:.25}.text-opacity-50{--bs-text-opacity:.5}.text-opacity-75{--bs-text-opacity:.75}.text-opacity-100{--bs-text-opacity:1}.text-primary-emphasis{color:var(--bs-primary-text-emphasis)!important}.text-secondary-emphasis{color:var(--bs-secondary-text-emphasis)!important}.text-success-emphasis{color:var(--bs-success-text-emphasis)!important}.text-info-emphasis{color:var(--bs-info-text-emphasis)!important}.text-warning-emphasis{color:var(--bs-warning-text-emphasis)!important}.text-danger-emphasis{color:var(--bs-danger-text-emphasis)!important}.text-light-emphasis{color:var(--bs-light-text-emphasis)!important}.text-dark-emphasis{color:var(--bs-dark-text-emphasis)!important}.link-opacity-10,.link-opacity-10-hover:hover{--bs-link-opacity:.1}.link-opacity-25,.link-opacity-25-hover:hover{--bs-link-opacity:.25}.link-opacity-50,.link-opacity-50-hover:hover{--bs-link-opacity:.5}.link-opacity-75,.link-opacity-75-hover:hover{--bs-link-opacity:.75}.link-opacity-100,.link-opacity-100-hover:hover{--bs-link-opacity:1}.link-offset-1,.link-offset-1-hover:hover{text-underline-offset:.125em!important}.link-offset-2,.link-offset-2-hover:hover{text-underline-offset:.25em!important}.link-offset-3,.link-offset-3-hover:hover{text-underline-offset:.375em!important}.link-underline-primary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-secondary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-success{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important}.link-underline-info{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important}.link-underline-warning{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important}.link-underline-danger{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important}.link-underline-light{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important}.link-underline-dark{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important;-webkit-text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important}.link-underline{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-underline-opacity-0,.link-underline-opacity-0-hover:hover{--bs-link-underline-opacity:0}.link-underline-opacity-10,.link-underline-opacity-10-hover:hover{--bs-link-underline-opacity:.1}.link-underline-opacity-25,.link-underline-opacity-25-hover:hover{--bs-link-underline-opacity:.25}.link-underline-opacity-50,.link-underline-opacity-50-hover:hover{--bs-link-underline-opacity:.5}.link-underline-opacity-75,.link-underline-opacity-75-hover:hover{--bs-link-underline-opacity:.75}.link-underline-opacity-100,.link-underline-opacity-100-hover:hover{--bs-link-underline-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:#0000!important}.bg-body-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-bg-rgb),var(--bs-bg-opacity))!important}.bg-body-tertiary{--bs-bg-opacity:1;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}.bg-opacity-10{--bs-bg-opacity:.1}.bg-opacity-25{--bs-bg-opacity:.25}.bg-opacity-50{--bs-bg-opacity:.5}.bg-opacity-75{--bs-bg-opacity:.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-primary-subtle{background-color:var(--bs-primary-bg-subtle)!important}.bg-secondary-subtle{background-color:var(--bs-secondary-bg-subtle)!important}.bg-success-subtle{background-color:var(--bs-success-bg-subtle)!important}.bg-info-subtle{background-color:var(--bs-info-bg-subtle)!important}.bg-warning-subtle{background-color:var(--bs-warning-bg-subtle)!important}.bg-danger-subtle{background-color:var(--bs-danger-bg-subtle)!important}.bg-light-subtle{background-color:var(--bs-light-bg-subtle)!important}.bg-dark-subtle{background-color:var(--bs-dark-bg-subtle)!important}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:var(--bs-border-radius-xxl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-top-1{border-top-left-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-top-2{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-3{border-top-left-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-top-4{border-top-left-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-top-5{border-top-left-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}.rounded-top-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.rounded-top-pill{border-top-left-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-end{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-end-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-end-1{border-top-right-radius:var(--bs-border-radius-sm)!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important}.rounded-end-2{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-end-3{border-top-right-radius:var(--bs-border-radius-lg)!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important}.rounded-end-4{border-top-right-radius:var(--bs-border-radius-xl)!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important}.rounded-end-5{border-top-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-right-radius:var(--bs-border-radius-xxl)!important}.rounded-end-circle{border-top-right-radius:50%!important;border-bottom-right-radius:50%!important}.rounded-end-pill{border-top-right-radius:var(--bs-border-radius-pill)!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-bottom-1{border-bottom-right-radius:var(--bs-border-radius-sm)!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important}.rounded-bottom-2{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-bottom-3{border-bottom-right-radius:var(--bs-border-radius-lg)!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important}.rounded-bottom-4{border-bottom-right-radius:var(--bs-border-radius-xl)!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important}.rounded-bottom-5{border-bottom-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-left-radius:var(--bs-border-radius-xxl)!important}.rounded-bottom-circle{border-bottom-right-radius:50%!important;border-bottom-left-radius:50%!important}.rounded-bottom-pill{border-bottom-right-radius:var(--bs-border-radius-pill)!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-0{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.rounded-start-1{border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-top-left-radius:var(--bs-border-radius-sm)!important}.rounded-start-2{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-3{border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-top-left-radius:var(--bs-border-radius-lg)!important}.rounded-start-4{border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-top-left-radius:var(--bs-border-radius-xl)!important}.rounded-start-5{border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-top-left-radius:var(--bs-border-radius-xxl)!important}.rounded-start-circle{border-top-left-radius:50%!important;border-bottom-left-radius:50%!important}.rounded-start-pill{border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-top-left-radius:var(--bs-border-radius-pill)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}.z-n1{z-index:-1!important}.z-0{z-index:0!important}.z-1{z-index:1!important}.z-2{z-index:2!important}.z-3{z-index:3!important}@media (width>=576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.object-fit-sm-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-sm-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-sm-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-sm-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-sm-none{-o-object-fit:none!important;object-fit:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-inline-grid{display:inline-grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-left:0!important;margin-right:0!important}.mx-sm-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-sm-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-sm-3{margin-left:1rem!important;margin-right:1rem!important}.mx-sm-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-sm-5{margin-left:3rem!important;margin-right:3rem!important}.mx-sm-auto{margin-left:auto!important;margin-right:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-left:0!important;padding-right:0!important}.px-sm-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-sm-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-sm-3{padding-left:1rem!important;padding-right:1rem!important}.px-sm-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-sm-5{padding-left:3rem!important;padding-right:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.row-gap-sm-0{row-gap:0!important}.row-gap-sm-1{row-gap:.25rem!important}.row-gap-sm-2{row-gap:.5rem!important}.row-gap-sm-3{row-gap:1rem!important}.row-gap-sm-4{row-gap:1.5rem!important}.row-gap-sm-5{row-gap:3rem!important}.column-gap-sm-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-sm-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-sm-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-sm-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-sm-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-sm-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (width>=768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.object-fit-md-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-md-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-md-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-md-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-md-none{-o-object-fit:none!important;object-fit:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-inline-grid{display:inline-grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-left:0!important;margin-right:0!important}.mx-md-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-md-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-md-3{margin-left:1rem!important;margin-right:1rem!important}.mx-md-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-md-5{margin-left:3rem!important;margin-right:3rem!important}.mx-md-auto{margin-left:auto!important;margin-right:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-left:0!important;padding-right:0!important}.px-md-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-md-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-md-3{padding-left:1rem!important;padding-right:1rem!important}.px-md-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-md-5{padding-left:3rem!important;padding-right:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.row-gap-md-0{row-gap:0!important}.row-gap-md-1{row-gap:.25rem!important}.row-gap-md-2{row-gap:.5rem!important}.row-gap-md-3{row-gap:1rem!important}.row-gap-md-4{row-gap:1.5rem!important}.row-gap-md-5{row-gap:3rem!important}.column-gap-md-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-md-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-md-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-md-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-md-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-md-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (width>=992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.object-fit-lg-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-lg-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-lg-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-lg-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-lg-none{-o-object-fit:none!important;object-fit:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-inline-grid{display:inline-grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-left:0!important;margin-right:0!important}.mx-lg-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-lg-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-lg-3{margin-left:1rem!important;margin-right:1rem!important}.mx-lg-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-lg-5{margin-left:3rem!important;margin-right:3rem!important}.mx-lg-auto{margin-left:auto!important;margin-right:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-left:0!important;padding-right:0!important}.px-lg-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-lg-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-lg-3{padding-left:1rem!important;padding-right:1rem!important}.px-lg-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-lg-5{padding-left:3rem!important;padding-right:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.row-gap-lg-0{row-gap:0!important}.row-gap-lg-1{row-gap:.25rem!important}.row-gap-lg-2{row-gap:.5rem!important}.row-gap-lg-3{row-gap:1rem!important}.row-gap-lg-4{row-gap:1.5rem!important}.row-gap-lg-5{row-gap:3rem!important}.column-gap-lg-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-lg-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-lg-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-lg-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-lg-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-lg-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (width>=1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.object-fit-xl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xl-none{-o-object-fit:none!important;object-fit:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-inline-grid{display:inline-grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-left:0!important;margin-right:0!important}.mx-xl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xl-auto{margin-left:auto!important;margin-right:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-left:0!important;padding-right:0!important}.px-xl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.row-gap-xl-0{row-gap:0!important}.row-gap-xl-1{row-gap:.25rem!important}.row-gap-xl-2{row-gap:.5rem!important}.row-gap-xl-3{row-gap:1rem!important}.row-gap-xl-4{row-gap:1.5rem!important}.row-gap-xl-5{row-gap:3rem!important}.column-gap-xl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (width>=1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.object-fit-xxl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xxl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xxl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xxl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xxl-none{-o-object-fit:none!important;object-fit:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-inline-grid{display:inline-grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-left:0!important;margin-right:0!important}.mx-xxl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xxl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xxl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xxl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xxl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xxl-auto{margin-left:auto!important;margin-right:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-left:0!important;padding-right:0!important}.px-xxl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xxl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xxl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xxl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xxl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.row-gap-xxl-0{row-gap:0!important}.row-gap-xxl-1{row-gap:.25rem!important}.row-gap-xxl-2{row-gap:.5rem!important}.row-gap-xxl-3{row-gap:1rem!important}.row-gap-xxl-4{row-gap:1.5rem!important}.row-gap-xxl-5{row-gap:3rem!important}.column-gap-xxl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xxl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xxl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xxl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xxl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xxl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (width>=1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-inline-grid{display:inline-grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}@font-face{font-display:block;font-family:bootstrap-icons;src:url(/assets/bootstrap-icons-mSm7cUeB.woff2?e34853135f9e39acf64315236852cd5a)format("woff2"),url(/assets/bootstrap-icons-BeopsB42.woff?e34853135f9e39acf64315236852cd5a)format("woff")}.bi:before,[class^=bi-]:before,[class*=\ bi-]:before{font-variant:normal;text-transform:none;vertical-align:-.125em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;line-height:1;display:inline-block;font-family:bootstrap-icons!important;font-weight:400!important}.bi-123:before{content:""}.bi-alarm-fill:before{content:""}.bi-alarm:before{content:""}.bi-align-bottom:before{content:""}.bi-align-center:before{content:""}.bi-align-end:before{content:""}.bi-align-middle:before{content:""}.bi-align-start:before{content:""}.bi-align-top:before{content:""}.bi-alt:before{content:""}.bi-app-indicator:before{content:""}.bi-app:before{content:""}.bi-archive-fill:before{content:""}.bi-archive:before{content:""}.bi-arrow-90deg-down:before{content:""}.bi-arrow-90deg-left:before{content:""}.bi-arrow-90deg-right:before{content:""}.bi-arrow-90deg-up:before{content:""}.bi-arrow-bar-down:before{content:""}.bi-arrow-bar-left:before{content:""}.bi-arrow-bar-right:before{content:""}.bi-arrow-bar-up:before{content:""}.bi-arrow-clockwise:before{content:""}.bi-arrow-counterclockwise:before{content:""}.bi-arrow-down-circle-fill:before{content:""}.bi-arrow-down-circle:before{content:""}.bi-arrow-down-left-circle-fill:before{content:""}.bi-arrow-down-left-circle:before{content:""}.bi-arrow-down-left-square-fill:before{content:""}.bi-arrow-down-left-square:before{content:""}.bi-arrow-down-left:before{content:""}.bi-arrow-down-right-circle-fill:before{content:""}.bi-arrow-down-right-circle:before{content:""}.bi-arrow-down-right-square-fill:before{content:""}.bi-arrow-down-right-square:before{content:""}.bi-arrow-down-right:before{content:""}.bi-arrow-down-short:before{content:""}.bi-arrow-down-square-fill:before{content:""}.bi-arrow-down-square:before{content:""}.bi-arrow-down-up:before{content:""}.bi-arrow-down:before{content:""}.bi-arrow-left-circle-fill:before{content:""}.bi-arrow-left-circle:before{content:""}.bi-arrow-left-right:before{content:""}.bi-arrow-left-short:before{content:""}.bi-arrow-left-square-fill:before{content:""}.bi-arrow-left-square:before{content:""}.bi-arrow-left:before{content:""}.bi-arrow-repeat:before{content:""}.bi-arrow-return-left:before{content:""}.bi-arrow-return-right:before{content:""}.bi-arrow-right-circle-fill:before{content:""}.bi-arrow-right-circle:before{content:""}.bi-arrow-right-short:before{content:""}.bi-arrow-right-square-fill:before{content:""}.bi-arrow-right-square:before{content:""}.bi-arrow-right:before{content:""}.bi-arrow-up-circle-fill:before{content:""}.bi-arrow-up-circle:before{content:""}.bi-arrow-up-left-circle-fill:before{content:""}.bi-arrow-up-left-circle:before{content:""}.bi-arrow-up-left-square-fill:before{content:""}.bi-arrow-up-left-square:before{content:""}.bi-arrow-up-left:before{content:""}.bi-arrow-up-right-circle-fill:before{content:""}.bi-arrow-up-right-circle:before{content:""}.bi-arrow-up-right-square-fill:before{content:""}.bi-arrow-up-right-square:before{content:""}.bi-arrow-up-right:before{content:""}.bi-arrow-up-short:before{content:""}.bi-arrow-up-square-fill:before{content:""}.bi-arrow-up-square:before{content:""}.bi-arrow-up:before{content:""}.bi-arrows-angle-contract:before{content:""}.bi-arrows-angle-expand:before{content:""}.bi-arrows-collapse:before{content:""}.bi-arrows-expand:before{content:""}.bi-arrows-fullscreen:before{content:""}.bi-arrows-move:before{content:""}.bi-aspect-ratio-fill:before{content:""}.bi-aspect-ratio:before{content:""}.bi-asterisk:before{content:""}.bi-at:before{content:""}.bi-award-fill:before{content:""}.bi-award:before{content:""}.bi-back:before{content:""}.bi-backspace-fill:before{content:""}.bi-backspace-reverse-fill:before{content:""}.bi-backspace-reverse:before{content:""}.bi-backspace:before{content:""}.bi-badge-3d-fill:before{content:""}.bi-badge-3d:before{content:""}.bi-badge-4k-fill:before{content:""}.bi-badge-4k:before{content:""}.bi-badge-8k-fill:before{content:""}.bi-badge-8k:before{content:""}.bi-badge-ad-fill:before{content:""}.bi-badge-ad:before{content:""}.bi-badge-ar-fill:before{content:""}.bi-badge-ar:before{content:""}.bi-badge-cc-fill:before{content:""}.bi-badge-cc:before{content:""}.bi-badge-hd-fill:before{content:""}.bi-badge-hd:before{content:""}.bi-badge-tm-fill:before{content:""}.bi-badge-tm:before{content:""}.bi-badge-vo-fill:before{content:""}.bi-badge-vo:before{content:""}.bi-badge-vr-fill:before{content:""}.bi-badge-vr:before{content:""}.bi-badge-wc-fill:before{content:""}.bi-badge-wc:before{content:""}.bi-bag-check-fill:before{content:""}.bi-bag-check:before{content:""}.bi-bag-dash-fill:before{content:""}.bi-bag-dash:before{content:""}.bi-bag-fill:before{content:""}.bi-bag-plus-fill:before{content:""}.bi-bag-plus:before{content:""}.bi-bag-x-fill:before{content:""}.bi-bag-x:before{content:""}.bi-bag:before{content:""}.bi-bar-chart-fill:before{content:""}.bi-bar-chart-line-fill:before{content:""}.bi-bar-chart-line:before{content:""}.bi-bar-chart-steps:before{content:""}.bi-bar-chart:before{content:""}.bi-basket-fill:before{content:""}.bi-basket:before{content:""}.bi-basket2-fill:before{content:""}.bi-basket2:before{content:""}.bi-basket3-fill:before{content:""}.bi-basket3:before{content:""}.bi-battery-charging:before{content:""}.bi-battery-full:before{content:""}.bi-battery-half:before{content:""}.bi-battery:before{content:""}.bi-bell-fill:before{content:""}.bi-bell:before{content:""}.bi-bezier:before{content:""}.bi-bezier2:before{content:""}.bi-bicycle:before{content:""}.bi-binoculars-fill:before{content:""}.bi-binoculars:before{content:""}.bi-blockquote-left:before{content:""}.bi-blockquote-right:before{content:""}.bi-book-fill:before{content:""}.bi-book-half:before{content:""}.bi-book:before{content:""}.bi-bookmark-check-fill:before{content:""}.bi-bookmark-check:before{content:""}.bi-bookmark-dash-fill:before{content:""}.bi-bookmark-dash:before{content:""}.bi-bookmark-fill:before{content:""}.bi-bookmark-heart-fill:before{content:""}.bi-bookmark-heart:before{content:""}.bi-bookmark-plus-fill:before{content:""}.bi-bookmark-plus:before{content:""}.bi-bookmark-star-fill:before{content:""}.bi-bookmark-star:before{content:""}.bi-bookmark-x-fill:before{content:""}.bi-bookmark-x:before{content:""}.bi-bookmark:before{content:""}.bi-bookmarks-fill:before{content:""}.bi-bookmarks:before{content:""}.bi-bookshelf:before{content:""}.bi-bootstrap-fill:before{content:""}.bi-bootstrap-reboot:before{content:""}.bi-bootstrap:before{content:""}.bi-border-all:before{content:""}.bi-border-bottom:before{content:""}.bi-border-center:before{content:""}.bi-border-inner:before{content:""}.bi-border-left:before{content:""}.bi-border-middle:before{content:""}.bi-border-outer:before{content:""}.bi-border-right:before{content:""}.bi-border-style:before{content:""}.bi-border-top:before{content:""}.bi-border-width:before{content:""}.bi-border:before{content:""}.bi-bounding-box-circles:before{content:""}.bi-bounding-box:before{content:""}.bi-box-arrow-down-left:before{content:""}.bi-box-arrow-down-right:before{content:""}.bi-box-arrow-down:before{content:""}.bi-box-arrow-in-down-left:before{content:""}.bi-box-arrow-in-down-right:before{content:""}.bi-box-arrow-in-down:before{content:""}.bi-box-arrow-in-left:before{content:""}.bi-box-arrow-in-right:before{content:""}.bi-box-arrow-in-up-left:before{content:""}.bi-box-arrow-in-up-right:before{content:""}.bi-box-arrow-in-up:before{content:""}.bi-box-arrow-left:before{content:""}.bi-box-arrow-right:before{content:""}.bi-box-arrow-up-left:before{content:""}.bi-box-arrow-up-right:before{content:""}.bi-box-arrow-up:before{content:""}.bi-box-seam:before{content:""}.bi-box:before{content:""}.bi-braces:before{content:""}.bi-bricks:before{content:""}.bi-briefcase-fill:before{content:""}.bi-briefcase:before{content:""}.bi-brightness-alt-high-fill:before{content:""}.bi-brightness-alt-high:before{content:""}.bi-brightness-alt-low-fill:before{content:""}.bi-brightness-alt-low:before{content:""}.bi-brightness-high-fill:before{content:""}.bi-brightness-high:before{content:""}.bi-brightness-low-fill:before{content:""}.bi-brightness-low:before{content:""}.bi-broadcast-pin:before{content:""}.bi-broadcast:before{content:""}.bi-brush-fill:before{content:""}.bi-brush:before{content:""}.bi-bucket-fill:before{content:""}.bi-bucket:before{content:""}.bi-bug-fill:before{content:""}.bi-bug:before{content:""}.bi-building:before{content:""}.bi-bullseye:before{content:""}.bi-calculator-fill:before{content:""}.bi-calculator:before{content:""}.bi-calendar-check-fill:before{content:""}.bi-calendar-check:before{content:""}.bi-calendar-date-fill:before{content:""}.bi-calendar-date:before{content:""}.bi-calendar-day-fill:before{content:""}.bi-calendar-day:before{content:""}.bi-calendar-event-fill:before{content:""}.bi-calendar-event:before{content:""}.bi-calendar-fill:before{content:""}.bi-calendar-minus-fill:before{content:""}.bi-calendar-minus:before{content:""}.bi-calendar-month-fill:before{content:""}.bi-calendar-month:before{content:""}.bi-calendar-plus-fill:before{content:""}.bi-calendar-plus:before{content:""}.bi-calendar-range-fill:before{content:""}.bi-calendar-range:before{content:""}.bi-calendar-week-fill:before{content:""}.bi-calendar-week:before{content:""}.bi-calendar-x-fill:before{content:""}.bi-calendar-x:before{content:""}.bi-calendar:before{content:""}.bi-calendar2-check-fill:before{content:""}.bi-calendar2-check:before{content:""}.bi-calendar2-date-fill:before{content:""}.bi-calendar2-date:before{content:""}.bi-calendar2-day-fill:before{content:""}.bi-calendar2-day:before{content:""}.bi-calendar2-event-fill:before{content:""}.bi-calendar2-event:before{content:""}.bi-calendar2-fill:before{content:""}.bi-calendar2-minus-fill:before{content:""}.bi-calendar2-minus:before{content:""}.bi-calendar2-month-fill:before{content:""}.bi-calendar2-month:before{content:""}.bi-calendar2-plus-fill:before{content:""}.bi-calendar2-plus:before{content:""}.bi-calendar2-range-fill:before{content:""}.bi-calendar2-range:before{content:""}.bi-calendar2-week-fill:before{content:""}.bi-calendar2-week:before{content:""}.bi-calendar2-x-fill:before{content:""}.bi-calendar2-x:before{content:""}.bi-calendar2:before{content:""}.bi-calendar3-event-fill:before{content:""}.bi-calendar3-event:before{content:""}.bi-calendar3-fill:before{content:""}.bi-calendar3-range-fill:before{content:""}.bi-calendar3-range:before{content:""}.bi-calendar3-week-fill:before{content:""}.bi-calendar3-week:before{content:""}.bi-calendar3:before{content:""}.bi-calendar4-event:before{content:""}.bi-calendar4-range:before{content:""}.bi-calendar4-week:before{content:""}.bi-calendar4:before{content:""}.bi-camera-fill:before{content:""}.bi-camera-reels-fill:before{content:""}.bi-camera-reels:before{content:""}.bi-camera-video-fill:before{content:""}.bi-camera-video-off-fill:before{content:""}.bi-camera-video-off:before{content:""}.bi-camera-video:before{content:""}.bi-camera:before{content:""}.bi-camera2:before{content:""}.bi-capslock-fill:before{content:""}.bi-capslock:before{content:""}.bi-card-checklist:before{content:""}.bi-card-heading:before{content:""}.bi-card-image:before{content:""}.bi-card-list:before{content:""}.bi-card-text:before{content:""}.bi-caret-down-fill:before{content:""}.bi-caret-down-square-fill:before{content:""}.bi-caret-down-square:before{content:""}.bi-caret-down:before{content:""}.bi-caret-left-fill:before{content:""}.bi-caret-left-square-fill:before{content:""}.bi-caret-left-square:before{content:""}.bi-caret-left:before{content:""}.bi-caret-right-fill:before{content:""}.bi-caret-right-square-fill:before{content:""}.bi-caret-right-square:before{content:""}.bi-caret-right:before{content:""}.bi-caret-up-fill:before{content:""}.bi-caret-up-square-fill:before{content:""}.bi-caret-up-square:before{content:""}.bi-caret-up:before{content:""}.bi-cart-check-fill:before{content:""}.bi-cart-check:before{content:""}.bi-cart-dash-fill:before{content:""}.bi-cart-dash:before{content:""}.bi-cart-fill:before{content:""}.bi-cart-plus-fill:before{content:""}.bi-cart-plus:before{content:""}.bi-cart-x-fill:before{content:""}.bi-cart-x:before{content:""}.bi-cart:before{content:""}.bi-cart2:before{content:""}.bi-cart3:before{content:""}.bi-cart4:before{content:""}.bi-cash-stack:before{content:""}.bi-cash:before{content:""}.bi-cast:before{content:""}.bi-chat-dots-fill:before{content:""}.bi-chat-dots:before{content:""}.bi-chat-fill:before{content:""}.bi-chat-left-dots-fill:before{content:""}.bi-chat-left-dots:before{content:""}.bi-chat-left-fill:before{content:""}.bi-chat-left-quote-fill:before{content:""}.bi-chat-left-quote:before{content:""}.bi-chat-left-text-fill:before{content:""}.bi-chat-left-text:before{content:""}.bi-chat-left:before{content:""}.bi-chat-quote-fill:before{content:""}.bi-chat-quote:before{content:""}.bi-chat-right-dots-fill:before{content:""}.bi-chat-right-dots:before{content:""}.bi-chat-right-fill:before{content:""}.bi-chat-right-quote-fill:before{content:""}.bi-chat-right-quote:before{content:""}.bi-chat-right-text-fill:before{content:""}.bi-chat-right-text:before{content:""}.bi-chat-right:before{content:""}.bi-chat-square-dots-fill:before{content:""}.bi-chat-square-dots:before{content:""}.bi-chat-square-fill:before{content:""}.bi-chat-square-quote-fill:before{content:""}.bi-chat-square-quote:before{content:""}.bi-chat-square-text-fill:before{content:""}.bi-chat-square-text:before{content:""}.bi-chat-square:before{content:""}.bi-chat-text-fill:before{content:""}.bi-chat-text:before{content:""}.bi-chat:before{content:""}.bi-check-all:before{content:""}.bi-check-circle-fill:before{content:""}.bi-check-circle:before{content:""}.bi-check-square-fill:before{content:""}.bi-check-square:before{content:""}.bi-check:before{content:""}.bi-check2-all:before{content:""}.bi-check2-circle:before{content:""}.bi-check2-square:before{content:""}.bi-check2:before{content:""}.bi-chevron-bar-contract:before{content:""}.bi-chevron-bar-down:before{content:""}.bi-chevron-bar-expand:before{content:""}.bi-chevron-bar-left:before{content:""}.bi-chevron-bar-right:before{content:""}.bi-chevron-bar-up:before{content:""}.bi-chevron-compact-down:before{content:""}.bi-chevron-compact-left:before{content:""}.bi-chevron-compact-right:before{content:""}.bi-chevron-compact-up:before{content:""}.bi-chevron-contract:before{content:""}.bi-chevron-double-down:before{content:""}.bi-chevron-double-left:before{content:""}.bi-chevron-double-right:before{content:""}.bi-chevron-double-up:before{content:""}.bi-chevron-down:before{content:""}.bi-chevron-expand:before{content:""}.bi-chevron-left:before{content:""}.bi-chevron-right:before{content:""}.bi-chevron-up:before{content:""}.bi-circle-fill:before{content:""}.bi-circle-half:before{content:""}.bi-circle-square:before{content:""}.bi-circle:before{content:""}.bi-clipboard-check:before{content:""}.bi-clipboard-data:before{content:""}.bi-clipboard-minus:before{content:""}.bi-clipboard-plus:before{content:""}.bi-clipboard-x:before{content:""}.bi-clipboard:before{content:""}.bi-clock-fill:before{content:""}.bi-clock-history:before{content:""}.bi-clock:before{content:""}.bi-cloud-arrow-down-fill:before{content:""}.bi-cloud-arrow-down:before{content:""}.bi-cloud-arrow-up-fill:before{content:""}.bi-cloud-arrow-up:before{content:""}.bi-cloud-check-fill:before{content:""}.bi-cloud-check:before{content:""}.bi-cloud-download-fill:before{content:""}.bi-cloud-download:before{content:""}.bi-cloud-drizzle-fill:before{content:""}.bi-cloud-drizzle:before{content:""}.bi-cloud-fill:before{content:""}.bi-cloud-fog-fill:before{content:""}.bi-cloud-fog:before{content:""}.bi-cloud-fog2-fill:before{content:""}.bi-cloud-fog2:before{content:""}.bi-cloud-hail-fill:before{content:""}.bi-cloud-hail:before{content:""}.bi-cloud-haze-fill:before{content:""}.bi-cloud-haze:before{content:""}.bi-cloud-haze2-fill:before{content:""}.bi-cloud-lightning-fill:before{content:""}.bi-cloud-lightning-rain-fill:before{content:""}.bi-cloud-lightning-rain:before{content:""}.bi-cloud-lightning:before{content:""}.bi-cloud-minus-fill:before{content:""}.bi-cloud-minus:before{content:""}.bi-cloud-moon-fill:before{content:""}.bi-cloud-moon:before{content:""}.bi-cloud-plus-fill:before{content:""}.bi-cloud-plus:before{content:""}.bi-cloud-rain-fill:before{content:""}.bi-cloud-rain-heavy-fill:before{content:""}.bi-cloud-rain-heavy:before{content:""}.bi-cloud-rain:before{content:""}.bi-cloud-slash-fill:before{content:""}.bi-cloud-slash:before{content:""}.bi-cloud-sleet-fill:before{content:""}.bi-cloud-sleet:before{content:""}.bi-cloud-snow-fill:before{content:""}.bi-cloud-snow:before{content:""}.bi-cloud-sun-fill:before{content:""}.bi-cloud-sun:before{content:""}.bi-cloud-upload-fill:before{content:""}.bi-cloud-upload:before{content:""}.bi-cloud:before{content:""}.bi-clouds-fill:before{content:""}.bi-clouds:before{content:""}.bi-cloudy-fill:before{content:""}.bi-cloudy:before{content:""}.bi-code-slash:before{content:""}.bi-code-square:before{content:""}.bi-code:before{content:""}.bi-collection-fill:before{content:""}.bi-collection-play-fill:before{content:""}.bi-collection-play:before{content:""}.bi-collection:before{content:""}.bi-columns-gap:before{content:""}.bi-columns:before{content:""}.bi-command:before{content:""}.bi-compass-fill:before{content:""}.bi-compass:before{content:""}.bi-cone-striped:before{content:""}.bi-cone:before{content:""}.bi-controller:before{content:""}.bi-cpu-fill:before{content:""}.bi-cpu:before{content:""}.bi-credit-card-2-back-fill:before{content:""}.bi-credit-card-2-back:before{content:""}.bi-credit-card-2-front-fill:before{content:""}.bi-credit-card-2-front:before{content:""}.bi-credit-card-fill:before{content:""}.bi-credit-card:before{content:""}.bi-crop:before{content:""}.bi-cup-fill:before{content:""}.bi-cup-straw:before{content:""}.bi-cup:before{content:""}.bi-cursor-fill:before{content:""}.bi-cursor-text:before{content:""}.bi-cursor:before{content:""}.bi-dash-circle-dotted:before{content:""}.bi-dash-circle-fill:before{content:""}.bi-dash-circle:before{content:""}.bi-dash-square-dotted:before{content:""}.bi-dash-square-fill:before{content:""}.bi-dash-square:before{content:""}.bi-dash:before{content:""}.bi-diagram-2-fill:before{content:""}.bi-diagram-2:before{content:""}.bi-diagram-3-fill:before{content:""}.bi-diagram-3:before{content:""}.bi-diamond-fill:before{content:""}.bi-diamond-half:before{content:""}.bi-diamond:before{content:""}.bi-dice-1-fill:before{content:""}.bi-dice-1:before{content:""}.bi-dice-2-fill:before{content:""}.bi-dice-2:before{content:""}.bi-dice-3-fill:before{content:""}.bi-dice-3:before{content:""}.bi-dice-4-fill:before{content:""}.bi-dice-4:before{content:""}.bi-dice-5-fill:before{content:""}.bi-dice-5:before{content:""}.bi-dice-6-fill:before{content:""}.bi-dice-6:before{content:""}.bi-disc-fill:before{content:""}.bi-disc:before{content:""}.bi-discord:before{content:""}.bi-display-fill:before{content:""}.bi-display:before{content:""}.bi-distribute-horizontal:before{content:""}.bi-distribute-vertical:before{content:""}.bi-door-closed-fill:before{content:""}.bi-door-closed:before{content:""}.bi-door-open-fill:before{content:""}.bi-door-open:before{content:""}.bi-dot:before{content:""}.bi-download:before{content:""}.bi-droplet-fill:before{content:""}.bi-droplet-half:before{content:""}.bi-droplet:before{content:""}.bi-earbuds:before{content:""}.bi-easel-fill:before{content:""}.bi-easel:before{content:""}.bi-egg-fill:before{content:""}.bi-egg-fried:before{content:""}.bi-egg:before{content:""}.bi-eject-fill:before{content:""}.bi-eject:before{content:""}.bi-emoji-angry-fill:before{content:""}.bi-emoji-angry:before{content:""}.bi-emoji-dizzy-fill:before{content:""}.bi-emoji-dizzy:before{content:""}.bi-emoji-expressionless-fill:before{content:""}.bi-emoji-expressionless:before{content:""}.bi-emoji-frown-fill:before{content:""}.bi-emoji-frown:before{content:""}.bi-emoji-heart-eyes-fill:before{content:""}.bi-emoji-heart-eyes:before{content:""}.bi-emoji-laughing-fill:before{content:""}.bi-emoji-laughing:before{content:""}.bi-emoji-neutral-fill:before{content:""}.bi-emoji-neutral:before{content:""}.bi-emoji-smile-fill:before{content:""}.bi-emoji-smile-upside-down-fill:before{content:""}.bi-emoji-smile-upside-down:before{content:""}.bi-emoji-smile:before{content:""}.bi-emoji-sunglasses-fill:before{content:""}.bi-emoji-sunglasses:before{content:""}.bi-emoji-wink-fill:before{content:""}.bi-emoji-wink:before{content:""}.bi-envelope-fill:before{content:""}.bi-envelope-open-fill:before{content:""}.bi-envelope-open:before{content:""}.bi-envelope:before{content:""}.bi-eraser-fill:before{content:""}.bi-eraser:before{content:""}.bi-exclamation-circle-fill:before{content:""}.bi-exclamation-circle:before{content:""}.bi-exclamation-diamond-fill:before{content:""}.bi-exclamation-diamond:before{content:""}.bi-exclamation-octagon-fill:before{content:""}.bi-exclamation-octagon:before{content:""}.bi-exclamation-square-fill:before{content:""}.bi-exclamation-square:before{content:""}.bi-exclamation-triangle-fill:before{content:""}.bi-exclamation-triangle:before{content:""}.bi-exclamation:before{content:""}.bi-exclude:before{content:""}.bi-eye-fill:before{content:""}.bi-eye-slash-fill:before{content:""}.bi-eye-slash:before{content:""}.bi-eye:before{content:""}.bi-eyedropper:before{content:""}.bi-eyeglasses:before{content:""}.bi-facebook:before{content:""}.bi-file-arrow-down-fill:before{content:""}.bi-file-arrow-down:before{content:""}.bi-file-arrow-up-fill:before{content:""}.bi-file-arrow-up:before{content:""}.bi-file-bar-graph-fill:before{content:""}.bi-file-bar-graph:before{content:""}.bi-file-binary-fill:before{content:""}.bi-file-binary:before{content:""}.bi-file-break-fill:before{content:""}.bi-file-break:before{content:""}.bi-file-check-fill:before{content:""}.bi-file-check:before{content:""}.bi-file-code-fill:before{content:""}.bi-file-code:before{content:""}.bi-file-diff-fill:before{content:""}.bi-file-diff:before{content:""}.bi-file-earmark-arrow-down-fill:before{content:""}.bi-file-earmark-arrow-down:before{content:""}.bi-file-earmark-arrow-up-fill:before{content:""}.bi-file-earmark-arrow-up:before{content:""}.bi-file-earmark-bar-graph-fill:before{content:""}.bi-file-earmark-bar-graph:before{content:""}.bi-file-earmark-binary-fill:before{content:""}.bi-file-earmark-binary:before{content:""}.bi-file-earmark-break-fill:before{content:""}.bi-file-earmark-break:before{content:""}.bi-file-earmark-check-fill:before{content:""}.bi-file-earmark-check:before{content:""}.bi-file-earmark-code-fill:before{content:""}.bi-file-earmark-code:before{content:""}.bi-file-earmark-diff-fill:before{content:""}.bi-file-earmark-diff:before{content:""}.bi-file-earmark-easel-fill:before{content:""}.bi-file-earmark-easel:before{content:""}.bi-file-earmark-excel-fill:before{content:""}.bi-file-earmark-excel:before{content:""}.bi-file-earmark-fill:before{content:""}.bi-file-earmark-font-fill:before{content:""}.bi-file-earmark-font:before{content:""}.bi-file-earmark-image-fill:before{content:""}.bi-file-earmark-image:before{content:""}.bi-file-earmark-lock-fill:before{content:""}.bi-file-earmark-lock:before{content:""}.bi-file-earmark-lock2-fill:before{content:""}.bi-file-earmark-lock2:before{content:""}.bi-file-earmark-medical-fill:before{content:""}.bi-file-earmark-medical:before{content:""}.bi-file-earmark-minus-fill:before{content:""}.bi-file-earmark-minus:before{content:""}.bi-file-earmark-music-fill:before{content:""}.bi-file-earmark-music:before{content:""}.bi-file-earmark-person-fill:before{content:""}.bi-file-earmark-person:before{content:""}.bi-file-earmark-play-fill:before{content:""}.bi-file-earmark-play:before{content:""}.bi-file-earmark-plus-fill:before{content:""}.bi-file-earmark-plus:before{content:""}.bi-file-earmark-post-fill:before{content:""}.bi-file-earmark-post:before{content:""}.bi-file-earmark-ppt-fill:before{content:""}.bi-file-earmark-ppt:before{content:""}.bi-file-earmark-richtext-fill:before{content:""}.bi-file-earmark-richtext:before{content:""}.bi-file-earmark-ruled-fill:before{content:""}.bi-file-earmark-ruled:before{content:""}.bi-file-earmark-slides-fill:before{content:""}.bi-file-earmark-slides:before{content:""}.bi-file-earmark-spreadsheet-fill:before{content:""}.bi-file-earmark-spreadsheet:before{content:""}.bi-file-earmark-text-fill:before{content:""}.bi-file-earmark-text:before{content:""}.bi-file-earmark-word-fill:before{content:""}.bi-file-earmark-word:before{content:""}.bi-file-earmark-x-fill:before{content:""}.bi-file-earmark-x:before{content:""}.bi-file-earmark-zip-fill:before{content:""}.bi-file-earmark-zip:before{content:""}.bi-file-earmark:before{content:""}.bi-file-easel-fill:before{content:""}.bi-file-easel:before{content:""}.bi-file-excel-fill:before{content:""}.bi-file-excel:before{content:""}.bi-file-fill:before{content:""}.bi-file-font-fill:before{content:""}.bi-file-font:before{content:""}.bi-file-image-fill:before{content:""}.bi-file-image:before{content:""}.bi-file-lock-fill:before{content:""}.bi-file-lock:before{content:""}.bi-file-lock2-fill:before{content:""}.bi-file-lock2:before{content:""}.bi-file-medical-fill:before{content:""}.bi-file-medical:before{content:""}.bi-file-minus-fill:before{content:""}.bi-file-minus:before{content:""}.bi-file-music-fill:before{content:""}.bi-file-music:before{content:""}.bi-file-person-fill:before{content:""}.bi-file-person:before{content:""}.bi-file-play-fill:before{content:""}.bi-file-play:before{content:""}.bi-file-plus-fill:before{content:""}.bi-file-plus:before{content:""}.bi-file-post-fill:before{content:""}.bi-file-post:before{content:""}.bi-file-ppt-fill:before{content:""}.bi-file-ppt:before{content:""}.bi-file-richtext-fill:before{content:""}.bi-file-richtext:before{content:""}.bi-file-ruled-fill:before{content:""}.bi-file-ruled:before{content:""}.bi-file-slides-fill:before{content:""}.bi-file-slides:before{content:""}.bi-file-spreadsheet-fill:before{content:""}.bi-file-spreadsheet:before{content:""}.bi-file-text-fill:before{content:""}.bi-file-text:before{content:""}.bi-file-word-fill:before{content:""}.bi-file-word:before{content:""}.bi-file-x-fill:before{content:""}.bi-file-x:before{content:""}.bi-file-zip-fill:before{content:""}.bi-file-zip:before{content:""}.bi-file:before{content:""}.bi-files-alt:before{content:""}.bi-files:before{content:""}.bi-film:before{content:""}.bi-filter-circle-fill:before{content:""}.bi-filter-circle:before{content:""}.bi-filter-left:before{content:""}.bi-filter-right:before{content:""}.bi-filter-square-fill:before{content:""}.bi-filter-square:before{content:""}.bi-filter:before{content:""}.bi-flag-fill:before{content:""}.bi-flag:before{content:""}.bi-flower1:before{content:""}.bi-flower2:before{content:""}.bi-flower3:before{content:""}.bi-folder-check:before{content:""}.bi-folder-fill:before{content:""}.bi-folder-minus:before{content:""}.bi-folder-plus:before{content:""}.bi-folder-symlink-fill:before{content:""}.bi-folder-symlink:before{content:""}.bi-folder-x:before{content:""}.bi-folder:before{content:""}.bi-folder2-open:before{content:""}.bi-folder2:before{content:""}.bi-fonts:before{content:""}.bi-forward-fill:before{content:""}.bi-forward:before{content:""}.bi-front:before{content:""}.bi-fullscreen-exit:before{content:""}.bi-fullscreen:before{content:""}.bi-funnel-fill:before{content:""}.bi-funnel:before{content:""}.bi-gear-fill:before{content:""}.bi-gear-wide-connected:before{content:""}.bi-gear-wide:before{content:""}.bi-gear:before{content:""}.bi-gem:before{content:""}.bi-geo-alt-fill:before{content:""}.bi-geo-alt:before{content:""}.bi-geo-fill:before{content:""}.bi-geo:before{content:""}.bi-gift-fill:before{content:""}.bi-gift:before{content:""}.bi-github:before{content:""}.bi-globe:before{content:""}.bi-globe2:before{content:""}.bi-google:before{content:""}.bi-graph-down:before{content:""}.bi-graph-up:before{content:""}.bi-grid-1x2-fill:before{content:""}.bi-grid-1x2:before{content:""}.bi-grid-3x2-gap-fill:before{content:""}.bi-grid-3x2-gap:before{content:""}.bi-grid-3x2:before{content:""}.bi-grid-3x3-gap-fill:before{content:""}.bi-grid-3x3-gap:before{content:""}.bi-grid-3x3:before{content:""}.bi-grid-fill:before{content:""}.bi-grid:before{content:""}.bi-grip-horizontal:before{content:""}.bi-grip-vertical:before{content:""}.bi-hammer:before{content:""}.bi-hand-index-fill:before{content:""}.bi-hand-index-thumb-fill:before{content:""}.bi-hand-index-thumb:before{content:""}.bi-hand-index:before{content:""}.bi-hand-thumbs-down-fill:before{content:""}.bi-hand-thumbs-down:before{content:""}.bi-hand-thumbs-up-fill:before{content:""}.bi-hand-thumbs-up:before{content:""}.bi-handbag-fill:before{content:""}.bi-handbag:before{content:""}.bi-hash:before{content:""}.bi-hdd-fill:before{content:""}.bi-hdd-network-fill:before{content:""}.bi-hdd-network:before{content:""}.bi-hdd-rack-fill:before{content:""}.bi-hdd-rack:before{content:""}.bi-hdd-stack-fill:before{content:""}.bi-hdd-stack:before{content:""}.bi-hdd:before{content:""}.bi-headphones:before{content:""}.bi-headset:before{content:""}.bi-heart-fill:before{content:""}.bi-heart-half:before{content:""}.bi-heart:before{content:""}.bi-heptagon-fill:before{content:""}.bi-heptagon-half:before{content:""}.bi-heptagon:before{content:""}.bi-hexagon-fill:before{content:""}.bi-hexagon-half:before{content:""}.bi-hexagon:before{content:""}.bi-hourglass-bottom:before{content:""}.bi-hourglass-split:before{content:""}.bi-hourglass-top:before{content:""}.bi-hourglass:before{content:""}.bi-house-door-fill:before{content:""}.bi-house-door:before{content:""}.bi-house-fill:before{content:""}.bi-house:before{content:""}.bi-hr:before{content:""}.bi-hurricane:before{content:""}.bi-image-alt:before{content:""}.bi-image-fill:before{content:""}.bi-image:before{content:""}.bi-images:before{content:""}.bi-inbox-fill:before{content:""}.bi-inbox:before{content:""}.bi-inboxes-fill:before{content:""}.bi-inboxes:before{content:""}.bi-info-circle-fill:before{content:""}.bi-info-circle:before{content:""}.bi-info-square-fill:before{content:""}.bi-info-square:before{content:""}.bi-info:before{content:""}.bi-input-cursor-text:before{content:""}.bi-input-cursor:before{content:""}.bi-instagram:before{content:""}.bi-intersect:before{content:""}.bi-journal-album:before{content:""}.bi-journal-arrow-down:before{content:""}.bi-journal-arrow-up:before{content:""}.bi-journal-bookmark-fill:before{content:""}.bi-journal-bookmark:before{content:""}.bi-journal-check:before{content:""}.bi-journal-code:before{content:""}.bi-journal-medical:before{content:""}.bi-journal-minus:before{content:""}.bi-journal-plus:before{content:""}.bi-journal-richtext:before{content:""}.bi-journal-text:before{content:""}.bi-journal-x:before{content:""}.bi-journal:before{content:""}.bi-journals:before{content:""}.bi-joystick:before{content:""}.bi-justify-left:before{content:""}.bi-justify-right:before{content:""}.bi-justify:before{content:""}.bi-kanban-fill:before{content:""}.bi-kanban:before{content:""}.bi-key-fill:before{content:""}.bi-key:before{content:""}.bi-keyboard-fill:before{content:""}.bi-keyboard:before{content:""}.bi-ladder:before{content:""}.bi-lamp-fill:before{content:""}.bi-lamp:before{content:""}.bi-laptop-fill:before{content:""}.bi-laptop:before{content:""}.bi-layer-backward:before{content:""}.bi-layer-forward:before{content:""}.bi-layers-fill:before{content:""}.bi-layers-half:before{content:""}.bi-layers:before{content:""}.bi-layout-sidebar-inset-reverse:before{content:""}.bi-layout-sidebar-inset:before{content:""}.bi-layout-sidebar-reverse:before{content:""}.bi-layout-sidebar:before{content:""}.bi-layout-split:before{content:""}.bi-layout-text-sidebar-reverse:before{content:""}.bi-layout-text-sidebar:before{content:""}.bi-layout-text-window-reverse:before{content:""}.bi-layout-text-window:before{content:""}.bi-layout-three-columns:before{content:""}.bi-layout-wtf:before{content:""}.bi-life-preserver:before{content:""}.bi-lightbulb-fill:before{content:""}.bi-lightbulb-off-fill:before{content:""}.bi-lightbulb-off:before{content:""}.bi-lightbulb:before{content:""}.bi-lightning-charge-fill:before{content:""}.bi-lightning-charge:before{content:""}.bi-lightning-fill:before{content:""}.bi-lightning:before{content:""}.bi-link-45deg:before{content:""}.bi-link:before{content:""}.bi-linkedin:before{content:""}.bi-list-check:before{content:""}.bi-list-nested:before{content:""}.bi-list-ol:before{content:""}.bi-list-stars:before{content:""}.bi-list-task:before{content:""}.bi-list-ul:before{content:""}.bi-list:before{content:""}.bi-lock-fill:before{content:""}.bi-lock:before{content:""}.bi-mailbox:before{content:""}.bi-mailbox2:before{content:""}.bi-map-fill:before{content:""}.bi-map:before{content:""}.bi-markdown-fill:before{content:""}.bi-markdown:before{content:""}.bi-mask:before{content:""}.bi-megaphone-fill:before{content:""}.bi-megaphone:before{content:""}.bi-menu-app-fill:before{content:""}.bi-menu-app:before{content:""}.bi-menu-button-fill:before{content:""}.bi-menu-button-wide-fill:before{content:""}.bi-menu-button-wide:before{content:""}.bi-menu-button:before{content:""}.bi-menu-down:before{content:""}.bi-menu-up:before{content:""}.bi-mic-fill:before{content:""}.bi-mic-mute-fill:before{content:""}.bi-mic-mute:before{content:""}.bi-mic:before{content:""}.bi-minecart-loaded:before{content:""}.bi-minecart:before{content:""}.bi-moisture:before{content:""}.bi-moon-fill:before{content:""}.bi-moon-stars-fill:before{content:""}.bi-moon-stars:before{content:""}.bi-moon:before{content:""}.bi-mouse-fill:before{content:""}.bi-mouse:before{content:""}.bi-mouse2-fill:before{content:""}.bi-mouse2:before{content:""}.bi-mouse3-fill:before{content:""}.bi-mouse3:before{content:""}.bi-music-note-beamed:before{content:""}.bi-music-note-list:before{content:""}.bi-music-note:before{content:""}.bi-music-player-fill:before{content:""}.bi-music-player:before{content:""}.bi-newspaper:before{content:""}.bi-node-minus-fill:before{content:""}.bi-node-minus:before{content:""}.bi-node-plus-fill:before{content:""}.bi-node-plus:before{content:""}.bi-nut-fill:before{content:""}.bi-nut:before{content:""}.bi-octagon-fill:before{content:""}.bi-octagon-half:before{content:""}.bi-octagon:before{content:""}.bi-option:before{content:""}.bi-outlet:before{content:""}.bi-paint-bucket:before{content:""}.bi-palette-fill:before{content:""}.bi-palette:before{content:""}.bi-palette2:before{content:""}.bi-paperclip:before{content:""}.bi-paragraph:before{content:""}.bi-patch-check-fill:before{content:""}.bi-patch-check:before{content:""}.bi-patch-exclamation-fill:before{content:""}.bi-patch-exclamation:before{content:""}.bi-patch-minus-fill:before{content:""}.bi-patch-minus:before{content:""}.bi-patch-plus-fill:before{content:""}.bi-patch-plus:before{content:""}.bi-patch-question-fill:before{content:""}.bi-patch-question:before{content:""}.bi-pause-btn-fill:before{content:""}.bi-pause-btn:before{content:""}.bi-pause-circle-fill:before{content:""}.bi-pause-circle:before{content:""}.bi-pause-fill:before{content:""}.bi-pause:before{content:""}.bi-peace-fill:before{content:""}.bi-peace:before{content:""}.bi-pen-fill:before{content:""}.bi-pen:before{content:""}.bi-pencil-fill:before{content:""}.bi-pencil-square:before{content:""}.bi-pencil:before{content:""}.bi-pentagon-fill:before{content:""}.bi-pentagon-half:before{content:""}.bi-pentagon:before{content:""}.bi-people-fill:before{content:""}.bi-people:before{content:""}.bi-percent:before{content:""}.bi-person-badge-fill:before{content:""}.bi-person-badge:before{content:""}.bi-person-bounding-box:before{content:""}.bi-person-check-fill:before{content:""}.bi-person-check:before{content:""}.bi-person-circle:before{content:""}.bi-person-dash-fill:before{content:""}.bi-person-dash:before{content:""}.bi-person-fill:before{content:""}.bi-person-lines-fill:before{content:""}.bi-person-plus-fill:before{content:""}.bi-person-plus:before{content:""}.bi-person-square:before{content:""}.bi-person-x-fill:before{content:""}.bi-person-x:before{content:""}.bi-person:before{content:""}.bi-phone-fill:before{content:""}.bi-phone-landscape-fill:before{content:""}.bi-phone-landscape:before{content:""}.bi-phone-vibrate-fill:before{content:""}.bi-phone-vibrate:before{content:""}.bi-phone:before{content:""}.bi-pie-chart-fill:before{content:""}.bi-pie-chart:before{content:""}.bi-pin-angle-fill:before{content:""}.bi-pin-angle:before{content:""}.bi-pin-fill:before{content:""}.bi-pin:before{content:""}.bi-pip-fill:before{content:""}.bi-pip:before{content:""}.bi-play-btn-fill:before{content:""}.bi-play-btn:before{content:""}.bi-play-circle-fill:before{content:""}.bi-play-circle:before{content:""}.bi-play-fill:before{content:""}.bi-play:before{content:""}.bi-plug-fill:before{content:""}.bi-plug:before{content:""}.bi-plus-circle-dotted:before{content:""}.bi-plus-circle-fill:before{content:""}.bi-plus-circle:before{content:""}.bi-plus-square-dotted:before{content:""}.bi-plus-square-fill:before{content:""}.bi-plus-square:before{content:""}.bi-plus:before{content:""}.bi-power:before{content:""}.bi-printer-fill:before{content:""}.bi-printer:before{content:""}.bi-puzzle-fill:before{content:""}.bi-puzzle:before{content:""}.bi-question-circle-fill:before{content:""}.bi-question-circle:before{content:""}.bi-question-diamond-fill:before{content:""}.bi-question-diamond:before{content:""}.bi-question-octagon-fill:before{content:""}.bi-question-octagon:before{content:""}.bi-question-square-fill:before{content:""}.bi-question-square:before{content:""}.bi-question:before{content:""}.bi-rainbow:before{content:""}.bi-receipt-cutoff:before{content:""}.bi-receipt:before{content:""}.bi-reception-0:before{content:""}.bi-reception-1:before{content:""}.bi-reception-2:before{content:""}.bi-reception-3:before{content:""}.bi-reception-4:before{content:""}.bi-record-btn-fill:before{content:""}.bi-record-btn:before{content:""}.bi-record-circle-fill:before{content:""}.bi-record-circle:before{content:""}.bi-record-fill:before{content:""}.bi-record:before{content:""}.bi-record2-fill:before{content:""}.bi-record2:before{content:""}.bi-reply-all-fill:before{content:""}.bi-reply-all:before{content:""}.bi-reply-fill:before{content:""}.bi-reply:before{content:""}.bi-rss-fill:before{content:""}.bi-rss:before{content:""}.bi-rulers:before{content:""}.bi-save-fill:before{content:""}.bi-save:before{content:""}.bi-save2-fill:before{content:""}.bi-save2:before{content:""}.bi-scissors:before{content:""}.bi-screwdriver:before{content:""}.bi-search:before{content:""}.bi-segmented-nav:before{content:""}.bi-server:before{content:""}.bi-share-fill:before{content:""}.bi-share:before{content:""}.bi-shield-check:before{content:""}.bi-shield-exclamation:before{content:""}.bi-shield-fill-check:before{content:""}.bi-shield-fill-exclamation:before{content:""}.bi-shield-fill-minus:before{content:""}.bi-shield-fill-plus:before{content:""}.bi-shield-fill-x:before{content:""}.bi-shield-fill:before{content:""}.bi-shield-lock-fill:before{content:""}.bi-shield-lock:before{content:""}.bi-shield-minus:before{content:""}.bi-shield-plus:before{content:""}.bi-shield-shaded:before{content:""}.bi-shield-slash-fill:before{content:""}.bi-shield-slash:before{content:""}.bi-shield-x:before{content:""}.bi-shield:before{content:""}.bi-shift-fill:before{content:""}.bi-shift:before{content:""}.bi-shop-window:before{content:""}.bi-shop:before{content:""}.bi-shuffle:before{content:""}.bi-signpost-2-fill:before{content:""}.bi-signpost-2:before{content:""}.bi-signpost-fill:before{content:""}.bi-signpost-split-fill:before{content:""}.bi-signpost-split:before{content:""}.bi-signpost:before{content:""}.bi-sim-fill:before{content:""}.bi-sim:before{content:""}.bi-skip-backward-btn-fill:before{content:""}.bi-skip-backward-btn:before{content:""}.bi-skip-backward-circle-fill:before{content:""}.bi-skip-backward-circle:before{content:""}.bi-skip-backward-fill:before{content:""}.bi-skip-backward:before{content:""}.bi-skip-end-btn-fill:before{content:""}.bi-skip-end-btn:before{content:""}.bi-skip-end-circle-fill:before{content:""}.bi-skip-end-circle:before{content:""}.bi-skip-end-fill:before{content:""}.bi-skip-end:before{content:""}.bi-skip-forward-btn-fill:before{content:""}.bi-skip-forward-btn:before{content:""}.bi-skip-forward-circle-fill:before{content:""}.bi-skip-forward-circle:before{content:""}.bi-skip-forward-fill:before{content:""}.bi-skip-forward:before{content:""}.bi-skip-start-btn-fill:before{content:""}.bi-skip-start-btn:before{content:""}.bi-skip-start-circle-fill:before{content:""}.bi-skip-start-circle:before{content:""}.bi-skip-start-fill:before{content:""}.bi-skip-start:before{content:""}.bi-slack:before{content:""}.bi-slash-circle-fill:before{content:""}.bi-slash-circle:before{content:""}.bi-slash-square-fill:before{content:""}.bi-slash-square:before{content:""}.bi-slash:before{content:""}.bi-sliders:before{content:""}.bi-smartwatch:before{content:""}.bi-snow:before{content:""}.bi-snow2:before{content:""}.bi-snow3:before{content:""}.bi-sort-alpha-down-alt:before{content:""}.bi-sort-alpha-down:before{content:""}.bi-sort-alpha-up-alt:before{content:""}.bi-sort-alpha-up:before{content:""}.bi-sort-down-alt:before{content:""}.bi-sort-down:before{content:""}.bi-sort-numeric-down-alt:before{content:""}.bi-sort-numeric-down:before{content:""}.bi-sort-numeric-up-alt:before{content:""}.bi-sort-numeric-up:before{content:""}.bi-sort-up-alt:before{content:""}.bi-sort-up:before{content:""}.bi-soundwave:before{content:""}.bi-speaker-fill:before{content:""}.bi-speaker:before{content:""}.bi-speedometer:before{content:""}.bi-speedometer2:before{content:""}.bi-spellcheck:before{content:""}.bi-square-fill:before{content:""}.bi-square-half:before{content:""}.bi-square:before{content:""}.bi-stack:before{content:""}.bi-star-fill:before{content:""}.bi-star-half:before{content:""}.bi-star:before{content:""}.bi-stars:before{content:""}.bi-stickies-fill:before{content:""}.bi-stickies:before{content:""}.bi-sticky-fill:before{content:""}.bi-sticky:before{content:""}.bi-stop-btn-fill:before{content:""}.bi-stop-btn:before{content:""}.bi-stop-circle-fill:before{content:""}.bi-stop-circle:before{content:""}.bi-stop-fill:before{content:""}.bi-stop:before{content:""}.bi-stoplights-fill:before{content:""}.bi-stoplights:before{content:""}.bi-stopwatch-fill:before{content:""}.bi-stopwatch:before{content:""}.bi-subtract:before{content:""}.bi-suit-club-fill:before{content:""}.bi-suit-club:before{content:""}.bi-suit-diamond-fill:before{content:""}.bi-suit-diamond:before{content:""}.bi-suit-heart-fill:before{content:""}.bi-suit-heart:before{content:""}.bi-suit-spade-fill:before{content:""}.bi-suit-spade:before{content:""}.bi-sun-fill:before{content:""}.bi-sun:before{content:""}.bi-sunglasses:before{content:""}.bi-sunrise-fill:before{content:""}.bi-sunrise:before{content:""}.bi-sunset-fill:before{content:""}.bi-sunset:before{content:""}.bi-symmetry-horizontal:before{content:""}.bi-symmetry-vertical:before{content:""}.bi-table:before{content:""}.bi-tablet-fill:before{content:""}.bi-tablet-landscape-fill:before{content:""}.bi-tablet-landscape:before{content:""}.bi-tablet:before{content:""}.bi-tag-fill:before{content:""}.bi-tag:before{content:""}.bi-tags-fill:before{content:""}.bi-tags:before{content:""}.bi-telegram:before{content:""}.bi-telephone-fill:before{content:""}.bi-telephone-forward-fill:before{content:""}.bi-telephone-forward:before{content:""}.bi-telephone-inbound-fill:before{content:""}.bi-telephone-inbound:before{content:""}.bi-telephone-minus-fill:before{content:""}.bi-telephone-minus:before{content:""}.bi-telephone-outbound-fill:before{content:""}.bi-telephone-outbound:before{content:""}.bi-telephone-plus-fill:before{content:""}.bi-telephone-plus:before{content:""}.bi-telephone-x-fill:before{content:""}.bi-telephone-x:before{content:""}.bi-telephone:before{content:""}.bi-terminal-fill:before{content:""}.bi-terminal:before{content:""}.bi-text-center:before{content:""}.bi-text-indent-left:before{content:""}.bi-text-indent-right:before{content:""}.bi-text-left:before{content:""}.bi-text-paragraph:before{content:""}.bi-text-right:before{content:""}.bi-textarea-resize:before{content:""}.bi-textarea-t:before{content:""}.bi-textarea:before{content:""}.bi-thermometer-half:before{content:""}.bi-thermometer-high:before{content:""}.bi-thermometer-low:before{content:""}.bi-thermometer-snow:before{content:""}.bi-thermometer-sun:before{content:""}.bi-thermometer:before{content:""}.bi-three-dots-vertical:before{content:""}.bi-three-dots:before{content:""}.bi-toggle-off:before{content:""}.bi-toggle-on:before{content:""}.bi-toggle2-off:before{content:""}.bi-toggle2-on:before{content:""}.bi-toggles:before{content:""}.bi-toggles2:before{content:""}.bi-tools:before{content:""}.bi-tornado:before{content:""}.bi-trash-fill:before{content:""}.bi-trash:before{content:""}.bi-trash2-fill:before{content:""}.bi-trash2:before{content:""}.bi-tree-fill:before{content:""}.bi-tree:before{content:""}.bi-triangle-fill:before{content:""}.bi-triangle-half:before{content:""}.bi-triangle:before{content:""}.bi-trophy-fill:before{content:""}.bi-trophy:before{content:""}.bi-tropical-storm:before{content:""}.bi-truck-flatbed:before{content:""}.bi-truck:before{content:""}.bi-tsunami:before{content:""}.bi-tv-fill:before{content:""}.bi-tv:before{content:""}.bi-twitch:before{content:""}.bi-twitter:before{content:""}.bi-type-bold:before{content:""}.bi-type-h1:before{content:""}.bi-type-h2:before{content:""}.bi-type-h3:before{content:""}.bi-type-italic:before{content:""}.bi-type-strikethrough:before{content:""}.bi-type-underline:before{content:""}.bi-type:before{content:""}.bi-ui-checks-grid:before{content:""}.bi-ui-checks:before{content:""}.bi-ui-radios-grid:before{content:""}.bi-ui-radios:before{content:""}.bi-umbrella-fill:before{content:""}.bi-umbrella:before{content:""}.bi-union:before{content:""}.bi-unlock-fill:before{content:""}.bi-unlock:before{content:""}.bi-upc-scan:before{content:""}.bi-upc:before{content:""}.bi-upload:before{content:""}.bi-vector-pen:before{content:""}.bi-view-list:before{content:""}.bi-view-stacked:before{content:""}.bi-vinyl-fill:before{content:""}.bi-vinyl:before{content:""}.bi-voicemail:before{content:""}.bi-volume-down-fill:before{content:""}.bi-volume-down:before{content:""}.bi-volume-mute-fill:before{content:""}.bi-volume-mute:before{content:""}.bi-volume-off-fill:before{content:""}.bi-volume-off:before{content:""}.bi-volume-up-fill:before{content:""}.bi-volume-up:before{content:""}.bi-vr:before{content:""}.bi-wallet-fill:before{content:""}.bi-wallet:before{content:""}.bi-wallet2:before{content:""}.bi-watch:before{content:""}.bi-water:before{content:""}.bi-whatsapp:before{content:""}.bi-wifi-1:before{content:""}.bi-wifi-2:before{content:""}.bi-wifi-off:before{content:""}.bi-wifi:before{content:""}.bi-wind:before{content:""}.bi-window-dock:before{content:""}.bi-window-sidebar:before{content:""}.bi-window:before{content:""}.bi-wrench:before{content:""}.bi-x-circle-fill:before{content:""}.bi-x-circle:before{content:""}.bi-x-diamond-fill:before{content:""}.bi-x-diamond:before{content:""}.bi-x-octagon-fill:before{content:""}.bi-x-octagon:before{content:""}.bi-x-square-fill:before{content:""}.bi-x-square:before{content:""}.bi-x:before{content:""}.bi-youtube:before{content:""}.bi-zoom-in:before{content:""}.bi-zoom-out:before{content:""}.bi-bank:before{content:""}.bi-bank2:before{content:""}.bi-bell-slash-fill:before{content:""}.bi-bell-slash:before{content:""}.bi-cash-coin:before{content:""}.bi-check-lg:before{content:""}.bi-coin:before{content:""}.bi-currency-bitcoin:before{content:""}.bi-currency-dollar:before{content:""}.bi-currency-euro:before{content:""}.bi-currency-exchange:before{content:""}.bi-currency-pound:before{content:""}.bi-currency-yen:before{content:""}.bi-dash-lg:before{content:""}.bi-exclamation-lg:before{content:""}.bi-file-earmark-pdf-fill:before{content:""}.bi-file-earmark-pdf:before{content:""}.bi-file-pdf-fill:before{content:""}.bi-file-pdf:before{content:""}.bi-gender-ambiguous:before{content:""}.bi-gender-female:before{content:""}.bi-gender-male:before{content:""}.bi-gender-trans:before{content:""}.bi-headset-vr:before{content:""}.bi-info-lg:before{content:""}.bi-mastodon:before{content:""}.bi-messenger:before{content:""}.bi-piggy-bank-fill:before{content:""}.bi-piggy-bank:before{content:""}.bi-pin-map-fill:before{content:""}.bi-pin-map:before{content:""}.bi-plus-lg:before{content:""}.bi-question-lg:before{content:""}.bi-recycle:before{content:""}.bi-reddit:before{content:""}.bi-safe-fill:before{content:""}.bi-safe2-fill:before{content:""}.bi-safe2:before{content:""}.bi-sd-card-fill:before{content:""}.bi-sd-card:before{content:""}.bi-skype:before{content:""}.bi-slash-lg:before{content:""}.bi-translate:before{content:""}.bi-x-lg:before{content:""}.bi-safe:before{content:""}.bi-apple:before{content:""}.bi-microsoft:before{content:""}.bi-windows:before{content:""}.bi-behance:before{content:""}.bi-dribbble:before{content:""}.bi-line:before{content:""}.bi-medium:before{content:""}.bi-paypal:before{content:""}.bi-pinterest:before{content:""}.bi-signal:before{content:""}.bi-snapchat:before{content:""}.bi-spotify:before{content:""}.bi-stack-overflow:before{content:""}.bi-strava:before{content:""}.bi-wordpress:before{content:""}.bi-vimeo:before{content:""}.bi-activity:before{content:""}.bi-easel2-fill:before{content:""}.bi-easel2:before{content:""}.bi-easel3-fill:before{content:""}.bi-easel3:before{content:""}.bi-fan:before{content:""}.bi-fingerprint:before{content:""}.bi-graph-down-arrow:before{content:""}.bi-graph-up-arrow:before{content:""}.bi-hypnotize:before{content:""}.bi-magic:before{content:""}.bi-person-rolodex:before{content:""}.bi-person-video:before{content:""}.bi-person-video2:before{content:""}.bi-person-video3:before{content:""}.bi-person-workspace:before{content:""}.bi-radioactive:before{content:""}.bi-webcam-fill:before{content:""}.bi-webcam:before{content:""}.bi-yin-yang:before{content:""}.bi-bandaid-fill:before{content:""}.bi-bandaid:before{content:""}.bi-bluetooth:before{content:""}.bi-body-text:before{content:""}.bi-boombox:before{content:""}.bi-boxes:before{content:""}.bi-dpad-fill:before{content:""}.bi-dpad:before{content:""}.bi-ear-fill:before{content:""}.bi-ear:before{content:""}.bi-envelope-check-fill:before{content:""}.bi-envelope-check:before{content:""}.bi-envelope-dash-fill:before{content:""}.bi-envelope-dash:before{content:""}.bi-envelope-exclamation-fill:before{content:""}.bi-envelope-exclamation:before{content:""}.bi-envelope-plus-fill:before{content:""}.bi-envelope-plus:before{content:""}.bi-envelope-slash-fill:before{content:""}.bi-envelope-slash:before{content:""}.bi-envelope-x-fill:before{content:""}.bi-envelope-x:before{content:""}.bi-explicit-fill:before{content:""}.bi-explicit:before{content:""}.bi-git:before{content:""}.bi-infinity:before{content:""}.bi-list-columns-reverse:before{content:""}.bi-list-columns:before{content:""}.bi-meta:before{content:""}.bi-nintendo-switch:before{content:""}.bi-pc-display-horizontal:before{content:""}.bi-pc-display:before{content:""}.bi-pc-horizontal:before{content:""}.bi-pc:before{content:""}.bi-playstation:before{content:""}.bi-plus-slash-minus:before{content:""}.bi-projector-fill:before{content:""}.bi-projector:before{content:""}.bi-qr-code-scan:before{content:""}.bi-qr-code:before{content:""}.bi-quora:before{content:""}.bi-quote:before{content:""}.bi-robot:before{content:""}.bi-send-check-fill:before{content:""}.bi-send-check:before{content:""}.bi-send-dash-fill:before{content:""}.bi-send-dash:before{content:""}.bi-send-exclamation-fill:before{content:""}.bi-send-exclamation:before{content:""}.bi-send-fill:before{content:""}.bi-send-plus-fill:before{content:""}.bi-send-plus:before{content:""}.bi-send-slash-fill:before{content:""}.bi-send-slash:before{content:""}.bi-send-x-fill:before{content:""}.bi-send-x:before{content:""}.bi-send:before{content:""}.bi-steam:before{content:""}.bi-terminal-dash:before{content:""}.bi-terminal-plus:before{content:""}.bi-terminal-split:before{content:""}.bi-ticket-detailed-fill:before{content:""}.bi-ticket-detailed:before{content:""}.bi-ticket-fill:before{content:""}.bi-ticket-perforated-fill:before{content:""}.bi-ticket-perforated:before{content:""}.bi-ticket:before{content:""}.bi-tiktok:before{content:""}.bi-window-dash:before{content:""}.bi-window-desktop:before{content:""}.bi-window-fullscreen:before{content:""}.bi-window-plus:before{content:""}.bi-window-split:before{content:""}.bi-window-stack:before{content:""}.bi-window-x:before{content:""}.bi-xbox:before{content:""}.bi-ethernet:before{content:""}.bi-hdmi-fill:before{content:""}.bi-hdmi:before{content:""}.bi-usb-c-fill:before{content:""}.bi-usb-c:before{content:""}.bi-usb-fill:before{content:""}.bi-usb-plug-fill:before{content:""}.bi-usb-plug:before{content:""}.bi-usb-symbol:before{content:""}.bi-usb:before{content:""}.bi-boombox-fill:before{content:""}.bi-displayport:before{content:""}.bi-gpu-card:before{content:""}.bi-memory:before{content:""}.bi-modem-fill:before{content:""}.bi-modem:before{content:""}.bi-motherboard-fill:before{content:""}.bi-motherboard:before{content:""}.bi-optical-audio-fill:before{content:""}.bi-optical-audio:before{content:""}.bi-pci-card:before{content:""}.bi-router-fill:before{content:""}.bi-router:before{content:""}.bi-thunderbolt-fill:before{content:""}.bi-thunderbolt:before{content:""}.bi-usb-drive-fill:before{content:""}.bi-usb-drive:before{content:""}.bi-usb-micro-fill:before{content:""}.bi-usb-micro:before{content:""}.bi-usb-mini-fill:before{content:""}.bi-usb-mini:before{content:""}.bi-cloud-haze2:before{content:""}.bi-device-hdd-fill:before{content:""}.bi-device-hdd:before{content:""}.bi-device-ssd-fill:before{content:""}.bi-device-ssd:before{content:""}.bi-displayport-fill:before{content:""}.bi-mortarboard-fill:before{content:""}.bi-mortarboard:before{content:""}.bi-terminal-x:before{content:""}.bi-arrow-through-heart-fill:before{content:""}.bi-arrow-through-heart:before{content:""}.bi-badge-sd-fill:before{content:""}.bi-badge-sd:before{content:""}.bi-bag-heart-fill:before{content:""}.bi-bag-heart:before{content:""}.bi-balloon-fill:before{content:""}.bi-balloon-heart-fill:before{content:""}.bi-balloon-heart:before{content:""}.bi-balloon:before{content:""}.bi-box2-fill:before{content:""}.bi-box2-heart-fill:before{content:""}.bi-box2-heart:before{content:""}.bi-box2:before{content:""}.bi-braces-asterisk:before{content:""}.bi-calendar-heart-fill:before{content:""}.bi-calendar-heart:before{content:""}.bi-calendar2-heart-fill:before{content:""}.bi-calendar2-heart:before{content:""}.bi-chat-heart-fill:before{content:""}.bi-chat-heart:before{content:""}.bi-chat-left-heart-fill:before{content:""}.bi-chat-left-heart:before{content:""}.bi-chat-right-heart-fill:before{content:""}.bi-chat-right-heart:before{content:""}.bi-chat-square-heart-fill:before{content:""}.bi-chat-square-heart:before{content:""}.bi-clipboard-check-fill:before{content:""}.bi-clipboard-data-fill:before{content:""}.bi-clipboard-fill:before{content:""}.bi-clipboard-heart-fill:before{content:""}.bi-clipboard-heart:before{content:""}.bi-clipboard-minus-fill:before{content:""}.bi-clipboard-plus-fill:before{content:""}.bi-clipboard-pulse:before{content:""}.bi-clipboard-x-fill:before{content:""}.bi-clipboard2-check-fill:before{content:""}.bi-clipboard2-check:before{content:""}.bi-clipboard2-data-fill:before{content:""}.bi-clipboard2-data:before{content:""}.bi-clipboard2-fill:before{content:""}.bi-clipboard2-heart-fill:before{content:""}.bi-clipboard2-heart:before{content:""}.bi-clipboard2-minus-fill:before{content:""}.bi-clipboard2-minus:before{content:""}.bi-clipboard2-plus-fill:before{content:""}.bi-clipboard2-plus:before{content:""}.bi-clipboard2-pulse-fill:before{content:""}.bi-clipboard2-pulse:before{content:""}.bi-clipboard2-x-fill:before{content:""}.bi-clipboard2-x:before{content:""}.bi-clipboard2:before{content:""}.bi-emoji-kiss-fill:before{content:""}.bi-emoji-kiss:before{content:""}.bi-envelope-heart-fill:before{content:""}.bi-envelope-heart:before{content:""}.bi-envelope-open-heart-fill:before{content:""}.bi-envelope-open-heart:before{content:""}.bi-envelope-paper-fill:before{content:""}.bi-envelope-paper-heart-fill:before{content:""}.bi-envelope-paper-heart:before{content:""}.bi-envelope-paper:before{content:""}.bi-filetype-aac:before{content:""}.bi-filetype-ai:before{content:""}.bi-filetype-bmp:before{content:""}.bi-filetype-cs:before{content:""}.bi-filetype-css:before{content:""}.bi-filetype-csv:before{content:""}.bi-filetype-doc:before{content:""}.bi-filetype-docx:before{content:""}.bi-filetype-exe:before{content:""}.bi-filetype-gif:before{content:""}.bi-filetype-heic:before{content:""}.bi-filetype-html:before{content:""}.bi-filetype-java:before{content:""}.bi-filetype-jpg:before{content:""}.bi-filetype-js:before{content:""}.bi-filetype-jsx:before{content:""}.bi-filetype-key:before{content:""}.bi-filetype-m4p:before{content:""}.bi-filetype-md:before{content:""}.bi-filetype-mdx:before{content:""}.bi-filetype-mov:before{content:""}.bi-filetype-mp3:before{content:""}.bi-filetype-mp4:before{content:""}.bi-filetype-otf:before{content:""}.bi-filetype-pdf:before{content:""}.bi-filetype-php:before{content:""}.bi-filetype-png:before{content:""}.bi-filetype-ppt:before{content:""}.bi-filetype-psd:before{content:""}.bi-filetype-py:before{content:""}.bi-filetype-raw:before{content:""}.bi-filetype-rb:before{content:""}.bi-filetype-sass:before{content:""}.bi-filetype-scss:before{content:""}.bi-filetype-sh:before{content:""}.bi-filetype-svg:before{content:""}.bi-filetype-tiff:before{content:""}.bi-filetype-tsx:before{content:""}.bi-filetype-ttf:before{content:""}.bi-filetype-txt:before{content:""}.bi-filetype-wav:before{content:""}.bi-filetype-woff:before{content:""}.bi-filetype-xls:before{content:""}.bi-filetype-xml:before{content:""}.bi-filetype-yml:before{content:""}.bi-heart-arrow:before{content:""}.bi-heart-pulse-fill:before{content:""}.bi-heart-pulse:before{content:""}.bi-heartbreak-fill:before{content:""}.bi-heartbreak:before{content:""}.bi-hearts:before{content:""}.bi-hospital-fill:before{content:""}.bi-hospital:before{content:""}.bi-house-heart-fill:before{content:""}.bi-house-heart:before{content:""}.bi-incognito:before{content:""}.bi-magnet-fill:before{content:""}.bi-magnet:before{content:""}.bi-person-heart:before{content:""}.bi-person-hearts:before{content:""}.bi-phone-flip:before{content:""}.bi-plugin:before{content:""}.bi-postage-fill:before{content:""}.bi-postage-heart-fill:before{content:""}.bi-postage-heart:before{content:""}.bi-postage:before{content:""}.bi-postcard-fill:before{content:""}.bi-postcard-heart-fill:before{content:""}.bi-postcard-heart:before{content:""}.bi-postcard:before{content:""}.bi-search-heart-fill:before{content:""}.bi-search-heart:before{content:""}.bi-sliders2-vertical:before{content:""}.bi-sliders2:before{content:""}.bi-trash3-fill:before{content:""}.bi-trash3:before{content:""}.bi-valentine:before{content:""}.bi-valentine2:before{content:""}.bi-wrench-adjustable-circle-fill:before{content:""}.bi-wrench-adjustable-circle:before{content:""}.bi-wrench-adjustable:before{content:""}.bi-filetype-json:before{content:""}.bi-filetype-pptx:before{content:""}.bi-filetype-xlsx:before{content:""}.bi-1-circle-fill:before{content:""}.bi-1-circle:before{content:""}.bi-1-square-fill:before{content:""}.bi-1-square:before{content:""}.bi-2-circle-fill:before{content:""}.bi-2-circle:before{content:""}.bi-2-square-fill:before{content:""}.bi-2-square:before{content:""}.bi-3-circle-fill:before{content:""}.bi-3-circle:before{content:""}.bi-3-square-fill:before{content:""}.bi-3-square:before{content:""}.bi-4-circle-fill:before{content:""}.bi-4-circle:before{content:""}.bi-4-square-fill:before{content:""}.bi-4-square:before{content:""}.bi-5-circle-fill:before{content:""}.bi-5-circle:before{content:""}.bi-5-square-fill:before{content:""}.bi-5-square:before{content:""}.bi-6-circle-fill:before{content:""}.bi-6-circle:before{content:""}.bi-6-square-fill:before{content:""}.bi-6-square:before{content:""}.bi-7-circle-fill:before{content:""}.bi-7-circle:before{content:""}.bi-7-square-fill:before{content:""}.bi-7-square:before{content:""}.bi-8-circle-fill:before{content:""}.bi-8-circle:before{content:""}.bi-8-square-fill:before{content:""}.bi-8-square:before{content:""}.bi-9-circle-fill:before{content:""}.bi-9-circle:before{content:""}.bi-9-square-fill:before{content:""}.bi-9-square:before{content:""}.bi-airplane-engines-fill:before{content:""}.bi-airplane-engines:before{content:""}.bi-airplane-fill:before{content:""}.bi-airplane:before{content:""}.bi-alexa:before{content:""}.bi-alipay:before{content:""}.bi-android:before{content:""}.bi-android2:before{content:""}.bi-box-fill:before{content:""}.bi-box-seam-fill:before{content:""}.bi-browser-chrome:before{content:""}.bi-browser-edge:before{content:""}.bi-browser-firefox:before{content:""}.bi-browser-safari:before{content:""}.bi-c-circle-fill:before{content:""}.bi-c-circle:before{content:""}.bi-c-square-fill:before{content:""}.bi-c-square:before{content:""}.bi-capsule-pill:before{content:""}.bi-capsule:before{content:""}.bi-car-front-fill:before{content:""}.bi-car-front:before{content:""}.bi-cassette-fill:before{content:""}.bi-cassette:before{content:""}.bi-cc-circle-fill:before{content:""}.bi-cc-circle:before{content:""}.bi-cc-square-fill:before{content:""}.bi-cc-square:before{content:""}.bi-cup-hot-fill:before{content:""}.bi-cup-hot:before{content:""}.bi-currency-rupee:before{content:""}.bi-dropbox:before{content:""}.bi-escape:before{content:""}.bi-fast-forward-btn-fill:before{content:""}.bi-fast-forward-btn:before{content:""}.bi-fast-forward-circle-fill:before{content:""}.bi-fast-forward-circle:before{content:""}.bi-fast-forward-fill:before{content:""}.bi-fast-forward:before{content:""}.bi-filetype-sql:before{content:""}.bi-fire:before{content:""}.bi-google-play:before{content:""}.bi-h-circle-fill:before{content:""}.bi-h-circle:before{content:""}.bi-h-square-fill:before{content:""}.bi-h-square:before{content:""}.bi-indent:before{content:""}.bi-lungs-fill:before{content:""}.bi-lungs:before{content:""}.bi-microsoft-teams:before{content:""}.bi-p-circle-fill:before{content:""}.bi-p-circle:before{content:""}.bi-p-square-fill:before{content:""}.bi-p-square:before{content:""}.bi-pass-fill:before{content:""}.bi-pass:before{content:""}.bi-prescription:before{content:""}.bi-prescription2:before{content:""}.bi-r-circle-fill:before{content:""}.bi-r-circle:before{content:""}.bi-r-square-fill:before{content:""}.bi-r-square:before{content:""}.bi-repeat-1:before{content:""}.bi-repeat:before{content:""}.bi-rewind-btn-fill:before{content:""}.bi-rewind-btn:before{content:""}.bi-rewind-circle-fill:before{content:""}.bi-rewind-circle:before{content:""}.bi-rewind-fill:before{content:""}.bi-rewind:before{content:""}.bi-train-freight-front-fill:before{content:""}.bi-train-freight-front:before{content:""}.bi-train-front-fill:before{content:""}.bi-train-front:before{content:""}.bi-train-lightrail-front-fill:before{content:""}.bi-train-lightrail-front:before{content:""}.bi-truck-front-fill:before{content:""}.bi-truck-front:before{content:""}.bi-ubuntu:before{content:""}.bi-unindent:before{content:""}.bi-unity:before{content:""}.bi-universal-access-circle:before{content:""}.bi-universal-access:before{content:""}.bi-virus:before{content:""}.bi-virus2:before{content:""}.bi-wechat:before{content:""}.bi-yelp:before{content:""}.bi-sign-stop-fill:before{content:""}.bi-sign-stop-lights-fill:before{content:""}.bi-sign-stop-lights:before{content:""}.bi-sign-stop:before{content:""}.bi-sign-turn-left-fill:before{content:""}.bi-sign-turn-left:before{content:""}.bi-sign-turn-right-fill:before{content:""}.bi-sign-turn-right:before{content:""}.bi-sign-turn-slight-left-fill:before{content:""}.bi-sign-turn-slight-left:before{content:""}.bi-sign-turn-slight-right-fill:before{content:""}.bi-sign-turn-slight-right:before{content:""}.bi-sign-yield-fill:before{content:""}.bi-sign-yield:before{content:""}.bi-ev-station-fill:before{content:""}.bi-ev-station:before{content:""}.bi-fuel-pump-diesel-fill:before{content:""}.bi-fuel-pump-diesel:before{content:""}.bi-fuel-pump-fill:before{content:""}.bi-fuel-pump:before{content:""}.bi-0-circle-fill:before{content:""}.bi-0-circle:before{content:""}.bi-0-square-fill:before{content:""}.bi-0-square:before{content:""}.bi-rocket-fill:before{content:""}.bi-rocket-takeoff-fill:before{content:""}.bi-rocket-takeoff:before{content:""}.bi-rocket:before{content:""}.bi-stripe:before{content:""}.bi-subscript:before{content:""}.bi-superscript:before{content:""}.bi-trello:before{content:""}.bi-envelope-at-fill:before{content:""}.bi-envelope-at:before{content:""}.bi-regex:before{content:""}.bi-text-wrap:before{content:""}.bi-sign-dead-end-fill:before{content:""}.bi-sign-dead-end:before{content:""}.bi-sign-do-not-enter-fill:before{content:""}.bi-sign-do-not-enter:before{content:""}.bi-sign-intersection-fill:before{content:""}.bi-sign-intersection-side-fill:before{content:""}.bi-sign-intersection-side:before{content:""}.bi-sign-intersection-t-fill:before{content:""}.bi-sign-intersection-t:before{content:""}.bi-sign-intersection-y-fill:before{content:""}.bi-sign-intersection-y:before{content:""}.bi-sign-intersection:before{content:""}.bi-sign-merge-left-fill:before{content:""}.bi-sign-merge-left:before{content:""}.bi-sign-merge-right-fill:before{content:""}.bi-sign-merge-right:before{content:""}.bi-sign-no-left-turn-fill:before{content:""}.bi-sign-no-left-turn:before{content:""}.bi-sign-no-parking-fill:before{content:""}.bi-sign-no-parking:before{content:""}.bi-sign-no-right-turn-fill:before{content:""}.bi-sign-no-right-turn:before{content:""}.bi-sign-railroad-fill:before{content:""}.bi-sign-railroad:before{content:""}.bi-building-add:before{content:""}.bi-building-check:before{content:""}.bi-building-dash:before{content:""}.bi-building-down:before{content:""}.bi-building-exclamation:before{content:""}.bi-building-fill-add:before{content:""}.bi-building-fill-check:before{content:""}.bi-building-fill-dash:before{content:""}.bi-building-fill-down:before{content:""}.bi-building-fill-exclamation:before{content:""}.bi-building-fill-gear:before{content:""}.bi-building-fill-lock:before{content:""}.bi-building-fill-slash:before{content:""}.bi-building-fill-up:before{content:""}.bi-building-fill-x:before{content:""}.bi-building-fill:before{content:""}.bi-building-gear:before{content:""}.bi-building-lock:before{content:""}.bi-building-slash:before{content:""}.bi-building-up:before{content:""}.bi-building-x:before{content:""}.bi-buildings-fill:before{content:""}.bi-buildings:before{content:""}.bi-bus-front-fill:before{content:""}.bi-bus-front:before{content:""}.bi-ev-front-fill:before{content:""}.bi-ev-front:before{content:""}.bi-globe-americas:before{content:""}.bi-globe-asia-australia:before{content:""}.bi-globe-central-south-asia:before{content:""}.bi-globe-europe-africa:before{content:""}.bi-house-add-fill:before{content:""}.bi-house-add:before{content:""}.bi-house-check-fill:before{content:""}.bi-house-check:before{content:""}.bi-house-dash-fill:before{content:""}.bi-house-dash:before{content:""}.bi-house-down-fill:before{content:""}.bi-house-down:before{content:""}.bi-house-exclamation-fill:before{content:""}.bi-house-exclamation:before{content:""}.bi-house-gear-fill:before{content:""}.bi-house-gear:before{content:""}.bi-house-lock-fill:before{content:""}.bi-house-lock:before{content:""}.bi-house-slash-fill:before{content:""}.bi-house-slash:before{content:""}.bi-house-up-fill:before{content:""}.bi-house-up:before{content:""}.bi-house-x-fill:before{content:""}.bi-house-x:before{content:""}.bi-person-add:before{content:""}.bi-person-down:before{content:""}.bi-person-exclamation:before{content:""}.bi-person-fill-add:before{content:""}.bi-person-fill-check:before{content:""}.bi-person-fill-dash:before{content:""}.bi-person-fill-down:before{content:""}.bi-person-fill-exclamation:before{content:""}.bi-person-fill-gear:before{content:""}.bi-person-fill-lock:before{content:""}.bi-person-fill-slash:before{content:""}.bi-person-fill-up:before{content:""}.bi-person-fill-x:before{content:""}.bi-person-gear:before{content:""}.bi-person-lock:before{content:""}.bi-person-slash:before{content:""}.bi-person-up:before{content:""}.bi-scooter:before{content:""}.bi-taxi-front-fill:before{content:""}.bi-taxi-front:before{content:""}.bi-amd:before{content:""}.bi-database-add:before{content:""}.bi-database-check:before{content:""}.bi-database-dash:before{content:""}.bi-database-down:before{content:""}.bi-database-exclamation:before{content:""}.bi-database-fill-add:before{content:""}.bi-database-fill-check:before{content:""}.bi-database-fill-dash:before{content:""}.bi-database-fill-down:before{content:""}.bi-database-fill-exclamation:before{content:""}.bi-database-fill-gear:before{content:""}.bi-database-fill-lock:before{content:""}.bi-database-fill-slash:before{content:""}.bi-database-fill-up:before{content:""}.bi-database-fill-x:before{content:""}.bi-database-fill:before{content:""}.bi-database-gear:before{content:""}.bi-database-lock:before{content:""}.bi-database-slash:before{content:""}.bi-database-up:before{content:""}.bi-database-x:before{content:""}.bi-database:before{content:""}.bi-houses-fill:before{content:""}.bi-houses:before{content:""}.bi-nvidia:before{content:""}.bi-person-vcard-fill:before{content:""}.bi-person-vcard:before{content:""}.bi-sina-weibo:before{content:""}.bi-tencent-qq:before{content:""}.bi-wikipedia:before{content:""}.bi-alphabet-uppercase:before{content:""}.bi-alphabet:before{content:""}.bi-amazon:before{content:""}.bi-arrows-collapse-vertical:before{content:""}.bi-arrows-expand-vertical:before{content:""}.bi-arrows-vertical:before{content:""}.bi-arrows:before{content:""}.bi-ban-fill:before{content:""}.bi-ban:before{content:""}.bi-bing:before{content:""}.bi-cake:before{content:""}.bi-cake2:before{content:""}.bi-cookie:before{content:""}.bi-copy:before{content:""}.bi-crosshair:before{content:""}.bi-crosshair2:before{content:""}.bi-emoji-astonished-fill:before{content:""}.bi-emoji-astonished:before{content:""}.bi-emoji-grimace-fill:before{content:""}.bi-emoji-grimace:before{content:""}.bi-emoji-grin-fill:before{content:""}.bi-emoji-grin:before{content:""}.bi-emoji-surprise-fill:before{content:""}.bi-emoji-surprise:before{content:""}.bi-emoji-tear-fill:before{content:""}.bi-emoji-tear:before{content:""}.bi-envelope-arrow-down-fill:before{content:""}.bi-envelope-arrow-down:before{content:""}.bi-envelope-arrow-up-fill:before{content:""}.bi-envelope-arrow-up:before{content:""}.bi-feather:before{content:""}.bi-feather2:before{content:""}.bi-floppy-fill:before{content:""}.bi-floppy:before{content:""}.bi-floppy2-fill:before{content:""}.bi-floppy2:before{content:""}.bi-gitlab:before{content:""}.bi-highlighter:before{content:""}.bi-marker-tip:before{content:""}.bi-nvme-fill:before{content:""}.bi-nvme:before{content:""}.bi-opencollective:before{content:""}.bi-pci-card-network:before{content:""}.bi-pci-card-sound:before{content:""}.bi-radar:before{content:""}.bi-send-arrow-down-fill:before{content:""}.bi-send-arrow-down:before{content:""}.bi-send-arrow-up-fill:before{content:""}.bi-send-arrow-up:before{content:""}.bi-sim-slash-fill:before{content:""}.bi-sim-slash:before{content:""}.bi-sourceforge:before{content:""}.bi-substack:before{content:""}.bi-threads-fill:before{content:""}.bi-threads:before{content:""}.bi-transparency:before{content:""}.bi-twitter-x:before{content:""}.bi-type-h4:before{content:""}.bi-type-h5:before{content:""}.bi-type-h6:before{content:""}.bi-backpack-fill:before{content:""}.bi-backpack:before{content:""}.bi-backpack2-fill:before{content:""}.bi-backpack2:before{content:""}.bi-backpack3-fill:before{content:""}.bi-backpack3:before{content:""}.bi-backpack4-fill:before{content:""}.bi-backpack4:before{content:""}.bi-brilliance:before{content:""}.bi-cake-fill:before{content:""}.bi-cake2-fill:before{content:""}.bi-duffle-fill:before{content:""}.bi-duffle:before{content:""}.bi-exposure:before{content:""}.bi-gender-neuter:before{content:""}.bi-highlights:before{content:""}.bi-luggage-fill:before{content:""}.bi-luggage:before{content:""}.bi-mailbox-flag:before{content:""}.bi-mailbox2-flag:before{content:""}.bi-noise-reduction:before{content:""}.bi-passport-fill:before{content:""}.bi-passport:before{content:""}.bi-person-arms-up:before{content:""}.bi-person-raised-hand:before{content:""}.bi-person-standing-dress:before{content:""}.bi-person-standing:before{content:""}.bi-person-walking:before{content:""}.bi-person-wheelchair:before{content:""}.bi-shadows:before{content:""}.bi-suitcase-fill:before{content:""}.bi-suitcase-lg-fill:before{content:""}.bi-suitcase-lg:before{content:""}.bi-suitcase:before{content:"豈"}.bi-suitcase2-fill:before{content:"更"}.bi-suitcase2:before{content:"車"}.bi-vignette:before{content:"賈"}.bi-bluesky:before{content:""}.bi-tux:before{content:"滑"}.bi-beaker-fill:before{content:"串"}.bi-beaker:before{content:"句"}.bi-flask-fill:before{content:"龜"}.bi-flask-florence-fill:before{content:"龜"}.bi-flask-florence:before{content:"契"}.bi-flask:before{content:"金"}.bi-leaf-fill:before{content:"喇"}.bi-leaf:before{content:"奈"}.bi-measuring-cup-fill:before{content:"懶"}.bi-measuring-cup:before{content:"癩"}.bi-unlock2-fill:before{content:"羅"}.bi-unlock2:before{content:"蘿"}.bi-battery-low:before{content:"螺"}.bi-anthropic:before{content:"裸"}.bi-apple-music:before{content:"邏"}.bi-claude:before{content:"樂"}.bi-openai:before{content:"洛"}.bi-perplexity:before{content:"烙"}.bi-css:before{content:"珞"}.bi-javascript:before{content:"落"}.bi-typescript:before{content:"酪"}.bi-fork-knife:before{content:"駱"}.bi-globe-americas-fill:before{content:"亂"}.bi-globe-asia-australia-fill:before{content:"卵"}.bi-globe-central-south-asia-fill:before{content:"欄"}.bi-globe-europe-africa-fill:before{content:"爛"}.avatar[data-v-a969308e]{color:#fff;background:linear-gradient(135deg,#0d6efd,#6610f2);border-radius:50%;width:36px;height:36px;font-size:.8rem;font-weight:600}.sidebar[data-v-0bd14b17]{background:#1e293b;min-height:100%}.sidebar-brand[data-v-0bd14b17]{border-bottom:1px solid #ffffff14}.sidebar-brand-icon[data-v-0bd14b17]{color:#fff;background:linear-gradient(135deg,#0d6efd,#6610f2);border-radius:.6rem;width:36px;height:36px}.sidebar-heading[data-v-0bd14b17]{color:#64748b;letter-spacing:.05em;font-size:.7rem}.sidebar-link[data-v-0bd14b17]{color:#cbd5e1;border-radius:.5rem;padding:.55rem .75rem;transition:background-color .15s,color .15s}.sidebar-link[data-v-0bd14b17]:hover{color:#fff;background:#ffffff0f}.sidebar-link.active[data-v-0bd14b17]{color:#fff;background:#0d6efd}.sidebar-link.disabled[data-v-0bd14b17]{color:#64748b;pointer-events:none}.app-sidebar[data-v-c57a334a]{flex-shrink:0;width:250px}.min-vw-0[data-v-c57a334a]{min-width:0}

```

## newApp/dist/assets/index-CotRi1EC.js

```javascript
var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function t(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var n={},r=[],i=()=>{},a=()=>!1,o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),s=e=>e.startsWith(`onUpdate:`),c=Object.assign,l=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,d=(e,t)=>u.call(e,t),f=Array.isArray,p=e=>S(e)===`[object Map]`,m=e=>S(e)===`[object Set]`,h=e=>S(e)===`[object Date]`,g=e=>typeof e==`function`,_=e=>typeof e==`string`,v=e=>typeof e==`symbol`,y=e=>typeof e==`object`&&!!e,b=e=>(y(e)||g(e))&&g(e.then)&&g(e.catch),x=Object.prototype.toString,S=e=>x.call(e),C=e=>S(e).slice(8,-1),w=e=>S(e)===`[object Object]`,T=e=>_(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,E=t(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),D=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ee=/-\w/g,O=D(e=>e.replace(ee,e=>e.slice(1).toUpperCase())),te=/\B([A-Z])/g,k=D(e=>e.replace(te,`-$1`).toLowerCase()),A=D(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=D(e=>e?`on${A(e)}`:``),j=(e,t)=>!Object.is(e,t),M=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},re=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ie=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ae,oe=()=>ae||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function se(e){if(f(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=_(r)?le(r):se(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(_(e)||y(e))return e}var N=/;(?![^(]*\))/g,ce=/:([^]+)/,P=/\/\*[^]*?\*\//g;function le(e){let t={};return e.replace(P,``).split(N).forEach(e=>{if(e){let n=e.split(ce);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ue(e){let t=``;if(_(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){let r=ue(e[n]);r&&(t+=r+` `)}else if(y(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var de=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,fe=t(de);de+``;function pe(e){return!!e||e===``}function me(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=he(e[r],t[r]);return n}function he(e,t){if(e===t)return!0;let n=h(e),r=h(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=v(e),r=v(t),n||r)return e===t;if(n=f(e),r=f(t),n||r)return n&&r?me(e,t):!1;if(n=y(e),r=y(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!he(e[n],t[n]))return!1}}return String(e)===String(t)}function ge(e,t){return e.findIndex(e=>he(e,t))}var _e=e=>!!(e&&e.__v_isRef===!0),F=e=>_(e)?e:e==null?``:f(e)||y(e)&&(e.toString===x||!g(e.toString))?_e(e)?F(e.value):JSON.stringify(e,ve,2):String(e),ve=(e,t)=>_e(t)?ve(e,t.value):p(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ye(t,r)+` =>`]=n,e),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ye(e))}:v(t)?ye(t):y(t)&&!f(t)&&!w(t)?String(t):t,ye=(e,t=``)=>v(e)?`Symbol(${e.description??t})`:e,I,be=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&I&&(I.active?(this.parent=I,this.index=(I.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=I;try{return I=this,e()}finally{I=t}}}on(){++this._on===1&&(this.prevScope=I,I=this)}off(){if(this._on>0&&--this._on===0){if(I===this)I=this.prevScope;else{let e=I;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function xe(){return I}var L,Se=new WeakSet,Ce=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,I&&(I.active?I.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Se.has(this)&&(Se.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||De(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Be(this),Ae(this);let e=L,t=Ie;L=this,Ie=!0;try{return this.fn()}finally{je(this),L=e,Ie=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pe(e);this.deps=this.depsTail=void 0,Be(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Se.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Me(this)&&this.run()}get dirty(){return Me(this)}},we=0,Te,Ee;function De(e,t=!1){if(e.flags|=8,t){e.next=Ee,Ee=e;return}e.next=Te,Te=e}function Oe(){we++}function ke(){if(--we>0)return;if(Ee){let e=Ee;for(Ee=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Te;){let t=Te;for(Te=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ae(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function je(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Pe(r),Fe(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Me(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ne(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ne(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ve)||(e.globalVersion=Ve,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Me(e))))return;e.flags|=2;let t=e.dep,n=L,r=Ie;L=e,Ie=!0;try{Ae(e);let n=e.fn(e._value);(t.version===0||j(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{L=n,Ie=r,je(e),e.flags&=-3}}function Pe(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Pe(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fe(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ie=!0,Le=[];function Re(){Le.push(Ie),Ie=!1}function ze(){let e=Le.pop();Ie=e===void 0?!0:e}function Be(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=L;L=void 0;try{t()}finally{L=e}}}var Ve=0,He=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ue=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!L||!Ie||L===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==L)t=this.activeLink=new He(L,this),L.deps?(t.prevDep=L.depsTail,L.depsTail.nextDep=t,L.depsTail=t):L.deps=L.depsTail=t,We(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=L.depsTail,t.nextDep=void 0,L.depsTail.nextDep=t,L.depsTail=t,L.deps===t&&(L.deps=e)}return t}trigger(e){this.version++,Ve++,this.notify(e)}notify(e){Oe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ke()}}};function We(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)We(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ge=new WeakMap,Ke=Symbol(``),qe=Symbol(``),Je=Symbol(``);function R(e,t,n){if(Ie&&L){let t=Ge.get(e);t||Ge.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ue),r.map=t,r.key=n),r.track()}}function Ye(e,t,n,r,i,a){let o=Ge.get(e);if(!o){Ve++;return}let s=e=>{e&&e.trigger()};if(Oe(),t===`clear`)o.forEach(s);else{let i=f(e),a=i&&T(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Je||!v(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Je)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ke)),p(e)&&s(o.get(qe)));break;case`delete`:i||(s(o.get(Ke)),p(e)&&s(o.get(qe)));break;case`set`:p(e)&&s(o.get(Ke));break}}ke()}function Xe(e){let t=B(e);return t===e?t:(R(t,`iterate`,Je),Pt(e)?t:t.map(Lt))}function Ze(e){return R(e=B(e),`iterate`,Je),e}function Qe(e,t){return Nt(e)?Rt(Mt(e)?Lt(t):t):Lt(t)}var $e={__proto__:null,[Symbol.iterator](){return et(this,Symbol.iterator,e=>Qe(this,e))},concat(...e){return Xe(this).concat(...e.map(e=>f(e)?Xe(e):e))},entries(){return et(this,`entries`,e=>(e[1]=Qe(this,e[1]),e))},every(e,t){return z(this,`every`,e,t,void 0,arguments)},filter(e,t){return z(this,`filter`,e,t,e=>e.map(e=>Qe(this,e)),arguments)},find(e,t){return z(this,`find`,e,t,e=>Qe(this,e),arguments)},findIndex(e,t){return z(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return z(this,`findLast`,e,t,e=>Qe(this,e),arguments)},findLastIndex(e,t){return z(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return z(this,`forEach`,e,t,void 0,arguments)},includes(...e){return rt(this,`includes`,e)},indexOf(...e){return rt(this,`indexOf`,e)},join(e){return Xe(this).join(e)},lastIndexOf(...e){return rt(this,`lastIndexOf`,e)},map(e,t){return z(this,`map`,e,t,void 0,arguments)},pop(){return it(this,`pop`)},push(...e){return it(this,`push`,e)},reduce(e,...t){return nt(this,`reduce`,e,t)},reduceRight(e,...t){return nt(this,`reduceRight`,e,t)},shift(){return it(this,`shift`)},some(e,t){return z(this,`some`,e,t,void 0,arguments)},splice(...e){return it(this,`splice`,e)},toReversed(){return Xe(this).toReversed()},toSorted(e){return Xe(this).toSorted(e)},toSpliced(...e){return Xe(this).toSpliced(...e)},unshift(...e){return it(this,`unshift`,e)},values(){return et(this,`values`,e=>Qe(this,e))}};function et(e,t,n){let r=Ze(e),i=r[t]();return r!==e&&!Pt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var tt=Array.prototype;function z(e,t,n,r,i,a){let o=Ze(e),s=o!==e&&!Pt(e),c=o[t];if(c!==tt[t]){let t=c.apply(e,a);return s?Lt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Qe(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function nt(e,t,n,r){let i=Ze(e),a=i!==e&&!Pt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Qe(e,t)),n.call(this,t,Qe(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Qe(e,c):c}function rt(e,t,n){let r=B(e);R(r,`iterate`,Je);let i=r[t](...n);return(i===-1||i===!1)&&Ft(n[0])?(n[0]=B(n[0]),r[t](...n)):i}function it(e,t,n=[]){Re(),Oe();let r=B(e)[t].apply(e,n);return ke(),ze(),r}var at=t(`__proto__,__v_isRef,__isVue`),ot=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(v));function st(e){v(e)||(e=String(e));let t=B(this);return R(t,`has`,e),t.hasOwnProperty(e)}var ct=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Et:Tt:i?wt:Ct).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=f(e);if(!r){let e;if(a&&(e=$e[t]))return e;if(t===`hasOwnProperty`)return st}let o=Reflect.get(e,t,V(e)?e:n);if((v(t)?ot.has(t):at(t))||(r||R(e,`get`,t),i))return o;if(V(o)){let e=a&&T(t)?o:o.value;return r&&y(e)?At(e):e}return y(o)?r?At(o):Ot(o):o}},lt=class extends ct{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=f(e)&&T(t);if(!this._isShallow){let e=Nt(i);if(!Pt(n)&&!Nt(n)&&(i=B(i),n=B(n)),!a&&V(i)&&!V(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:d(e,t),s=Reflect.set(e,t,n,V(e)?e:r);return e===B(r)&&(o?j(n,i)&&Ye(e,`set`,t,n,i):Ye(e,`add`,t,n)),s}deleteProperty(e,t){let n=d(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ye(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!v(t)||!ot.has(t))&&R(e,`has`,t),n}ownKeys(e){return R(e,`iterate`,f(e)?`length`:Ke),Reflect.ownKeys(e)}},ut=class extends ct{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},dt=new lt,ft=new ut,pt=new lt(!0),mt=e=>e,ht=e=>Reflect.getPrototypeOf(e);function gt(e,t,n){return function(...r){let i=this.__v_raw,a=B(i),o=p(a),s=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?mt:t?Rt:Lt;return!t&&R(a,`iterate`,l?qe:Ke),c(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function _t(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function vt(e,t){let n={get(n){let r=this.__v_raw,i=B(r),a=B(n);e||(j(n,a)&&R(i,`get`,n),R(i,`get`,a));let{has:o}=ht(i),s=t?mt:e?Rt:Lt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&R(B(t),`iterate`,Ke),t.size},has(t){let n=this.__v_raw,r=B(n),i=B(t);return e||(j(t,i)&&R(r,`has`,t),R(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=B(a),s=t?mt:e?Rt:Lt;return!e&&R(o,`iterate`,Ke),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return c(n,e?{add:_t(`add`),set:_t(`set`),delete:_t(`delete`),clear:_t(`clear`)}:{add(e){let n=B(this),r=ht(n),i=B(e),a=!t&&!Pt(e)&&!Nt(e)?i:e;return r.has.call(n,a)||j(e,a)&&r.has.call(n,e)||j(i,a)&&r.has.call(n,i)||(n.add(a),Ye(n,`add`,a,a)),this},set(e,n){!t&&!Pt(n)&&!Nt(n)&&(n=B(n));let r=B(this),{has:i,get:a}=ht(r),o=i.call(r,e);o||=(e=B(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?j(n,s)&&Ye(r,`set`,e,n,s):Ye(r,`add`,e,n),this},delete(e){let t=B(this),{has:n,get:r}=ht(t),i=n.call(t,e);i||=(e=B(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ye(t,`delete`,e,void 0,a),o},clear(){let e=B(this),t=e.size!==0,n=e.clear();return t&&Ye(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=gt(r,e,t)}),n}function yt(e,t){let n=vt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(d(n,r)&&r in t?n:t,r,i)}var bt={get:yt(!1,!1)},xt={get:yt(!1,!0)},St={get:yt(!0,!1)},Ct=new WeakMap,wt=new WeakMap,Tt=new WeakMap,Et=new WeakMap;function Dt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Ot(e){return Nt(e)?e:jt(e,!1,dt,bt,Ct)}function kt(e){return jt(e,!1,pt,xt,wt)}function At(e){return jt(e,!0,ft,St,Tt)}function jt(e,t,n,r,i){if(!y(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Dt(C(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Mt(e){return Nt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function Pt(e){return!!(e&&e.__v_isShallow)}function Ft(e){return e?!!e.__v_raw:!1}function B(e){let t=e&&e.__v_raw;return t?B(t):e}function It(e){return!d(e,`__v_skip`)&&Object.isExtensible(e)&&re(e,`__v_skip`,!0),e}var Lt=e=>y(e)?Ot(e):e,Rt=e=>y(e)?At(e):e;function V(e){return e?e.__v_isRef===!0:!1}function H(e){return Bt(e,!1)}function zt(e){return Bt(e,!0)}function Bt(e,t){return V(e)?e:new Vt(e,t)}var Vt=class{constructor(e,t){this.dep=new Ue,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:B(e),this._value=t?e:Lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Pt(e)||Nt(e);e=n?e:B(e),j(e,t)&&(this._rawValue=e,this._value=n?e:Lt(e),this.dep.trigger())}};function U(e){return V(e)?e.value:e}var Ht={get:(e,t,n)=>t===`__v_raw`?e:U(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return V(i)&&!V(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ut(e){return Mt(e)?e:new Proxy(e,Ht)}var Wt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ue(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ve-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&L!==this)return De(this,!0),!0}get value(){let e=this.dep.track();return Ne(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Gt(e,t,n=!1){let r,i;return g(e)?r=e:(r=e.get,i=e.set),new Wt(r,i,n)}var Kt={},qt=new WeakMap,Jt=void 0;function Yt(e,t=!1,n=Jt){if(n){let t=qt.get(n);t||qt.set(n,t=[]),t.push(e)}}function Xt(e,t,r=n){let{immediate:a,deep:o,once:s,scheduler:c,augmentJob:u,call:d}=r,p=e=>o?e:Pt(e)||o===!1||o===0?Zt(e,1):Zt(e),m,h,_,v,y=!1,b=!1;if(V(e)?(h=()=>e.value,y=Pt(e)):Mt(e)?(h=()=>p(e),y=!0):f(e)?(b=!0,y=e.some(e=>Mt(e)||Pt(e)),h=()=>e.map(e=>{if(V(e))return e.value;if(Mt(e))return p(e);if(g(e))return d?d(e,2):e()})):h=g(e)?t?d?()=>d(e,2):e:()=>{if(_){Re();try{_()}finally{ze()}}let t=Jt;Jt=m;try{return d?d(e,3,[v]):e(v)}finally{Jt=t}}:i,t&&o){let e=h,t=o===!0?1/0:o;h=()=>Zt(e(),t)}let x=xe(),S=()=>{m.stop(),x&&x.active&&l(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Kt):Kt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(t){let e=m.run();if(o||y||(b?e.some((e,t)=>j(e,C[t])):j(e,C))){_&&_();let n=Jt;Jt=m;try{let n=[e,C===Kt?void 0:b&&C[0]===Kt?[]:C,v];C=e,d?d(t,3,n):t(...n)}finally{Jt=n}}}else m.run()};return u&&u(w),m=new Ce(h),m.scheduler=c?()=>c(w,!1):w,v=e=>Yt(e,!1,m),_=m.onStop=()=>{let e=qt.get(m);if(e){if(d)d(e,4);else for(let t of e)t();qt.delete(m)}},t?a?w(!0):C=m.run():c?c(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Zt(e,t=1/0,n){if(t<=0||!y(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,V(e))Zt(e.value,t,n);else if(f(e))for(let r=0;r<e.length;r++)Zt(e[r],t,n);else if(m(e)||p(e))e.forEach(e=>{Zt(e,t,n)});else if(w(e)){for(let r in e)Zt(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Zt(e[r],t,n)}return e}function Qt(e,t,n,r){try{return r?e(...r):e()}catch(e){en(e,t,n)}}function $t(e,t,n,r){if(g(e)){let i=Qt(e,t,n,r);return i&&b(i)&&i.catch(e=>{en(e,t,n)}),i}if(f(e)){let i=[];for(let a=0;a<e.length;a++)i.push($t(e[a],t,n,r));return i}}function en(e,t,r,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||n;if(t){let n=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;n;){let t=n.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}n=n.parent}if(o){Re(),Qt(o,null,10,[e,i,a]),ze();return}}tn(e,r,a,i,s)}function tn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var nn=[],rn=-1,an=[],on=null,sn=0,cn=Promise.resolve(),ln=null;function un(e){let t=ln||cn;return e?t.then(this?e.bind(this):e):t}function dn(e){let t=rn+1,n=nn.length;for(;t<n;){let r=t+n>>>1,i=nn[r],a=_n(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function fn(e){if(!(e.flags&1)){let t=_n(e),n=nn[nn.length-1];!n||!(e.flags&2)&&t>=_n(n)?nn.push(e):nn.splice(dn(t),0,e),e.flags|=1,pn()}}function pn(){ln||=cn.then(vn)}function mn(e){f(e)?an.push(...e):on&&e.id===-1?on.splice(sn+1,0,e):e.flags&1||(an.push(e),e.flags|=1),pn()}function hn(e,t,n=rn+1){for(;n<nn.length;n++){let t=nn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;nn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function gn(e){if(an.length){let e=[...new Set(an)].sort((e,t)=>_n(e)-_n(t));if(an.length=0,on){on.push(...e);return}for(on=e,sn=0;sn<on.length;sn++){let e=on[sn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}on=null,sn=0}}var _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function vn(e){try{for(rn=0;rn<nn.length;rn++){let e=nn[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<nn.length;rn++){let e=nn[rn];e&&(e.flags&=-2)}rn=-1,nn.length=0,gn(e),ln=null,(nn.length||an.length)&&vn(e)}}var yn=null,bn=null;function xn(e){let t=yn;return yn=e,bn=e&&e.type.__scopeId||null,t}function Sn(e,t=yn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ni(-1);let i=xn(t),a;try{a=e(...n)}finally{xn(i),r._d&&Ni(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Cn(e,t){if(yn===null)return e;let r=ha(yn),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=n]=t[e];a&&(g(a)&&(a={mounted:a,updated:a}),a.deep&&Zt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function wn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Re(),$t(c,n,8,[e.el,s,e,t]),ze())}}function Tn(e,t){if($i){let n=$i.provides,r=$i.parent&&$i.parent.provides;r===n&&(n=$i.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){let r=ea();if(r||Ir){let i=Ir?Ir._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&g(t)?t.call(r&&r.proxy):t}}var Dn=Symbol.for(`v-scx`),On=()=>En(Dn);function kn(e,t,n){return An(e,t,n)}function An(e,t,r=n){let{immediate:a,deep:o,flush:s,once:l}=r,u=c({},r),d=t&&a||!t&&s!==`post`,f;if(oa){if(s===`sync`){let e=On();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=i,e.resume=i,e.pause=i,e}}let p=$i;u.call=(e,t,n)=>$t(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{pi(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():fn(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Xt(e,t,u);return oa&&(f?f.push(h):d&&h()),h}function jn(e,t,n){let r=this.proxy,i=_(e)?e.includes(`.`)?Mn(r,e):()=>r[e]:e.bind(r,r),a;g(t)?a=t:(a=t.handler,n=t);let o=ra(this),s=An(i,a.bind(r),n);return o(),s}function Mn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Nn=Symbol(`_vte`),Pn=e=>e.__isTeleport,Fn=Symbol(`_leaveCb`);function In(e,t){e.shapeFlag&6&&e.component?(e.transition=t,In(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ln(e,t){return g(e)?c({name:e.name},t,{setup:e}):e}function Rn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function zn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Bn=new WeakMap;function Vn(e,t,r,i,o=!1){if(f(e)){e.forEach((e,n)=>Vn(e,t&&(f(t)?t[n]:t),r,i,o));return}if(Un(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Vn(e,t,r,i.component.subTree);return}let s=i.shapeFlag&4?ha(i.component):i.el,c=o?null:s,{i:u,r:p}=e,m=t&&t.r,h=u.refs===n?u.refs={}:u.refs,v=u.setupState,y=B(v),b=v===n?a:e=>zn(h,e)?!1:d(y,e),x=(e,t)=>!(t&&zn(h,t));if(m!=null&&m!==p){if(Hn(t),_(m))h[m]=null,b(m)&&(v[m]=null);else if(V(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(g(p))Qt(p,u,12,[c,h]);else{let t=_(p),n=V(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:h[p]:x(p)||!e.k?p.value:h[e.k];if(o)f(n)&&l(n,s);else if(f(n))n.includes(s)||n.push(s);else if(t)h[p]=[s],b(p)&&(v[p]=h[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(h[e.k]=t)}}else t?(h[p]=c,b(p)&&(v[p]=c)):n&&(x(p,e.k)&&(p.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),Bn.delete(e)};t.id=-1,Bn.set(e,t),pi(t,r)}else Hn(e),i()}}}function Hn(e){let t=Bn.get(e);t&&(t.flags|=8,Bn.delete(e))}oe().requestIdleCallback,oe().cancelIdleCallback;var Un=e=>!!e.type.__asyncLoader,Wn=e=>e.type.__isKeepAlive;function Gn(e,t){qn(e,`a`,t)}function Kn(e,t){qn(e,`da`,t)}function qn(e,t,n=$i){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Yn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Wn(e.parent.vnode)&&Jn(r,t,n,e),e=e.parent}}function Jn(e,t,n,r){let i=Yn(t,e,r,!0);nr(()=>{l(r[t],i)},n)}function Yn(e,t,n=$i,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Re();let i=ra(n),a=$t(t,n,e,r);return i(),ze(),a};return r?i.unshift(a):i.push(a),a}}var Xn=e=>(t,n=$i)=>{(!oa||e===`sp`)&&Yn(e,(...e)=>t(...e),n)},Zn=Xn(`bm`),Qn=Xn(`m`),$n=Xn(`bu`),er=Xn(`u`),tr=Xn(`bum`),nr=Xn(`um`),rr=Xn(`sp`),ir=Xn(`rtg`),ar=Xn(`rtc`);function or(e,t=$i){Yn(`ec`,e,t)}var sr=`components`;function cr(e,t){return ur(sr,e,!0,t)||e}var lr=Symbol.for(`v-ndc`);function ur(e,t,n=!0,r=!1){let i=yn||$i;if(i){let n=i.type;if(e===sr){let e=ga(n,!1);if(e&&(e===t||e===O(t)||e===A(O(t))))return n}let a=dr(i[e]||n[e],t)||dr(i.appContext[e],t);return!a&&r?n:a}}function dr(e,t){return e&&(e[t]||e[O(t)]||e[A(O(t))])}function fr(e,t,n,r){let i,a=n&&n[r],o=f(e);if(o||_(e)){let n=o&&Mt(e),r=!1,s=!1;n&&(r=!Pt(e),s=Nt(e),e=Ze(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Rt(Lt(e[n])):Lt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(y(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var pr=e=>e?aa(e)?ha(e):pr(e.parent):null,mr=c(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Cr(e),$forceUpdate:e=>e.f||=()=>{fn(e.update)},$nextTick:e=>e.n||=un.bind(e.proxy),$watch:e=>jn.bind(e)}),hr=(e,t)=>e!==n&&!e.__isScriptSetup&&d(e,t),gr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return r[t];case 3:return o[t]}else if(hr(i,t))return s[t]=1,i[t];else if(a!==n&&d(a,t))return s[t]=2,a[t];else if(d(o,t))return s[t]=3,o[t];else if(r!==n&&d(r,t))return s[t]=4,r[t];else vr&&(s[t]=0)}let u=mr[t],f,p;if(u)return t===`$attrs`&&R(e.attrs,`get`,``),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(r!==n&&d(r,t))return s[t]=4,r[t];if(p=l.config.globalProperties,d(p,t))return p[t]},set({_:e},t,r){let{data:i,setupState:a,ctx:o}=e;return hr(a,t)?(a[t]=r,!0):i!==n&&d(i,t)?(i[t]=r,!0):d(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==n&&c[0]!==`$`&&d(e,c)||hr(t,c)||d(o,c)||d(i,c)||d(mr,c)||d(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?d(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function _r(e){return f(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var vr=!0;function yr(e){let t=Cr(e),n=e.proxy,r=e.ctx;vr=!1,t.beforeCreate&&xr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:h,updated:_,activated:v,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:E,renderTriggered:D,errorCaptured:ee,serverPrefetch:O,expose:te,inheritAttrs:k,components:A,directives:ne,filters:j}=t;if(u&&br(u,r,null),s)for(let e in s){let t=s[e];g(t)&&(r[e]=t.bind(n))}if(a){let t=a.call(n,n);y(t)&&(e.data=Ot(t))}if(vr=!0,o)for(let e in o){let t=o[e],a=X({get:g(t)?t.bind(n,n):g(t.get)?t.get.bind(n,n):i,set:!g(t)&&g(t.set)?t.set.bind(n):i});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Sr(c[e],r,n,e);if(l){let e=g(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Tn(t,e[t])})}d&&xr(d,e,`c`);function M(e,t){f(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(M(Zn,p),M(Qn,m),M($n,h),M(er,_),M(Gn,v),M(Kn,b),M(or,ee),M(ar,E),M(ir,D),M(tr,S),M(nr,w),M(rr,O),f(te))if(te.length){let t=e.exposed||={};te.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===i&&(e.render=T),k!=null&&(e.inheritAttrs=k),A&&(e.components=A),ne&&(e.directives=ne),O&&Rn(e)}function br(e,t,n=i){f(e)&&(e=Or(e));for(let n in e){let r=e[n],i;i=y(r)?`default`in r?En(r.from||n,r.default,!0):En(r.from||n):En(r),V(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function xr(e,t,n){$t(f(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Sr(e,t,n,r){let i=r.includes(`.`)?Mn(n,r):()=>n[r];if(_(e)){let n=t[e];g(n)&&kn(i,n)}else if(g(e))kn(i,e.bind(n));else if(y(e))if(f(e))e.forEach(e=>Sr(e,t,n,r));else{let r=g(e.handler)?e.handler.bind(n):t[e.handler];g(r)&&kn(i,r,e)}}function Cr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>wr(c,e,o,!0)),wr(c,t,o)),y(t)&&a.set(t,c),c}function wr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&wr(e,a,n,!0),i&&i.forEach(t=>wr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Tr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Tr={data:Er,props:jr,emits:jr,methods:Ar,computed:Ar,beforeCreate:kr,created:kr,beforeMount:kr,mounted:kr,beforeUpdate:kr,updated:kr,beforeDestroy:kr,beforeUnmount:kr,destroyed:kr,unmounted:kr,activated:kr,deactivated:kr,errorCaptured:kr,serverPrefetch:kr,components:Ar,directives:Ar,watch:Mr,provide:Er,inject:Dr};function Er(e,t){return t?e?function(){return c(g(e)?e.call(this,this):e,g(t)?t.call(this,this):t)}:t:e}function Dr(e,t){return Ar(Or(e),Or(t))}function Or(e){if(f(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function kr(e,t){return e?[...new Set([].concat(e,t))]:t}function Ar(e,t){return e?c(Object.create(null),e,t):t}function jr(e,t){return e?f(e)&&f(t)?[...new Set([...e,...t])]:c(Object.create(null),_r(e),_r(t??{})):t}function Mr(e,t){if(!e)return t;if(!t)return e;let n=c(Object.create(null),e);for(let r in t)n[r]=kr(e[r],t[r]);return n}function Nr(){return{app:null,config:{isNativeTag:a,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Pr=0;function Fr(e,t){return function(n,r=null){g(n)||(n=c({},n)),r!=null&&!y(r)&&(r=null);let i=Nr(),a=new WeakSet,o=[],s=!1,l=i.app={_uid:Pr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ya,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&g(e.install)?(a.add(e),e.install(l,...t)):g(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,c){if(!s){let u=l._ceVNode||J(n,r);return u.appContext=i,c===!0?c=`svg`:c===!1&&(c=void 0),o&&t?t(u,a):e(u,a,c),s=!0,l._container=a,a.__vue_app__=l,ha(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&($t(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Ir;Ir=l;try{return e()}finally{Ir=t}}};return l}}var Ir=null,Lr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${k(t)}Modifiers`];function Rr(e,t,...r){if(e.isUnmounted)return;let i=e.vnode.props||n,a=r,o=t.startsWith(`update:`),s=o&&Lr(i,t.slice(7));s&&(s.trim&&(a=r.map(e=>_(e)?e.trim():e)),s.number&&(a=r.map(ie)));let c,l=i[c=ne(t)]||i[c=ne(O(t))];!l&&o&&(l=i[c=ne(k(t))]),l&&$t(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,$t(u,e,6,a)}}var zr=new WeakMap;function Br(e,t,n=!1){let r=n?zr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!g(e)){let r=e=>{let n=Br(e,t,!0);n&&(s=!0,c(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(y(e)&&r.set(e,null),null):(f(a)?a.forEach(e=>o[e]=null):c(o,a),y(e)&&r.set(e,o),o)}function Vr(e,t){return!e||!o(t)?!1:(t=t.slice(2).replace(/Once$/,``),d(e,t[0].toLowerCase()+t.slice(1))||d(e,k(t))||d(e,t))}function Hr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=xn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Gi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Gi(e.length>1?e(f,{attrs:c,slots:o,emit:l}):e(f,null)),y=t.props?c:Ur(c)}}catch(t){Ai.length=0,en(t,e,1),v=J(Oi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(s)&&(y=Wr(y,a)),b=Hi(b,y,!1,!0))}return n.dirs&&(b=Hi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&In(b,n.transition),v=b,xn(_),v}var Ur=e=>{let t;for(let n in e)(n===`class`||n===`style`||o(n))&&((t||={})[n]=e[n]);return t},Wr=(e,t)=>{let n={};for(let r in e)(!s(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Gr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(qr(o,r,n)&&!Vr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Kr(r,o,l):!0:!!o;return!1}function Kr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(qr(t,e,a)&&!Vr(n,a))return!0}return!1}function qr(e,t,n){let r=e[n],i=t[n];return n===`style`&&y(r)&&y(i)?!he(r,i):r!==i}function Jr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Yr={},Xr=()=>Object.create(Yr),Zr=e=>Object.getPrototypeOf(e)===Yr;function Qr(e,t,n,r=!1){let i={},a=Xr();e.propsDefaults=Object.create(null),ei(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:kt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function $r(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=B(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Vr(e.emitsOptions,o))continue;let u=t[o];if(c)if(d(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=O(o);i[t]=ti(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{ei(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!d(t,a)&&((r=k(a))===a||!d(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ti(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!d(t,e))&&(delete a[e],l=!0)}l&&Ye(e.attrs,`set`,``)}function ei(e,t,r,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let n in t){if(E(n))continue;let l=t[n],u;a&&d(a,u=O(n))?!o||!o.includes(u)?r[u]=l:(c||={})[u]=l:Vr(e.emitsOptions,n)||(!(n in i)||l!==i[n])&&(i[n]=l,s=!0)}if(o){let t=B(r),i=c||n;for(let n=0;n<o.length;n++){let s=o[n];r[s]=ti(a,t,s,i[s],e,!d(i,s))}}return s}function ti(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=d(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&g(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ra(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===k(n))&&(r=!0))}return r}var ni=new WeakMap;function ri(e,t,i=!1){let a=i?ni:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,l={},u=[],p=!1;if(!g(e)){let n=e=>{p=!0;let[n,r]=ri(e,t,!0);c(l,n),r&&u.push(...r)};!i&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!s&&!p)return y(e)&&a.set(e,r),r;if(f(s))for(let e=0;e<s.length;e++){let t=O(s[e]);ii(t)&&(l[t]=n)}else if(s)for(let e in s){let t=O(e);if(ii(t)){let n=s[e],r=l[t]=f(n)||g(n)?{type:n}:c({},n),i=r.type,a=!1,o=!0;if(f(i))for(let e=0;e<i.length;++e){let t=i[e],n=g(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=g(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||d(r,`default`))&&u.push(t)}}let m=[l,u];return y(e)&&a.set(e,m),m}function ii(e){return e[0]!==`$`&&!E(e)}var ai=e=>e===`_`||e===`_ctx`||e===`$stable`,oi=e=>f(e)?e.map(Gi):[Gi(e)],si=(e,t,n)=>{if(t._n)return t;let r=Sn((...e)=>oi(t(...e)),n);return r._c=!1,r},ci=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ai(n))continue;let i=e[n];if(g(i))t[n]=si(n,i,r);else if(i!=null){let e=oi(i);t[n]=()=>e}}},li=(e,t)=>{let n=oi(t);e.slots.default=()=>n},ui=(e,t,n)=>{for(let r in t)(n||!ai(r))&&(e[r]=t[r])},di=(e,t,n)=>{let r=e.slots=Xr();if(e.vnode.shapeFlag&32){let e=t._;e?(ui(r,t,n),n&&re(r,`_`,e,!0)):ci(t,r)}else t&&li(e,t)},fi=(e,t,r)=>{let{vnode:i,slots:a}=e,o=!0,s=n;if(i.shapeFlag&32){let e=t._;e?r&&e===1?o=!1:ui(a,t,r):(o=!t.$stable,ci(t,a)),s=t}else t&&(li(e,t),s={default:1});if(o)for(let e in a)!ai(e)&&s[e]==null&&delete a[e]},pi=Ti;function mi(e){return hi(e)}function hi(e,t){let a=oe();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=i,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Li(e,t)&&(r=me(e),le(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Di:y(e,t,n,r);break;case Oi:b(e,t,n,r);break;case ki:e??x(t,n,r,o);break;case Ei:A(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?ne(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,_e)}u!=null&&i?Vn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Vn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),O(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&ee(e.children,d,null,r,i,gi(e,a),s,u),_&&wn(e,null,r,`created`),D(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!E(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Yi(f,r,e)}_&&wn(e,null,r,`beforeMount`);let v=vi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&pi(()=>{try{f&&Yi(f,r,e),v&&g.enter(d),_&&wn(e,null,r,`mounted`)}finally{}},i)},D=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||wi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ee=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Ki(e[l]):Gi(e[l]),t,n,r,i,a,o,s)},O=(e,t,r,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||n,h=t.props||n,g;if(r&&_i(r,!1),(g=h.onVnodeBeforeUpdate)&&Yi(g,r,t,e),f&&wn(t,e,r,`beforeUpdate`),r&&_i(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?te(e.dynamicChildren,d,l,r,i,gi(t,a),o):s||se(e,t,l,null,r,i,gi(t,a),o,!1),u>0){if(u&16)k(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==t.children&&p(l,t.children)}else !s&&d==null&&k(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&pi(()=>{g&&Yi(g,r,t,e),f&&wn(t,e,r,`updated`)},i)},te=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===Ei||!Li(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},k=(e,t,r,i,a)=>{if(t!==r){if(t!==n)for(let n in t)!E(n)&&!(n in r)&&c(e,n,t[n],null,a,i);for(let n in r){if(E(n))continue;let o=r[n],s=t[n];o!==s&&n!==`value`&&c(e,n,s,o,a,i)}`value`in r&&c(e,`value`,t.value,r.value,a)}},A=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),ee(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(te(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&yi(e,t,!0)):se(e,t,n,f,i,a,s,c,l)},ne=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,a,o,c):re(e,t,c)},j=(e,t,n,r,i,a,o)=>{let s=e.component=Qi(e,r,i);if(Wn(e)&&(s.ctx.renderer=_e),sa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o),!e.el){let r=s.subTree=J(Oi);b(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},re=(e,t,n)=>{let r=t.component=e.component;if(Gr(e,t,n))if(r.asyncDep&&!r.asyncResolved){ae(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=xi(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{pi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;_i(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&M(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Yi(d,s,t,c),_i(e,!0);let f=Hr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),me(p),e,i,a),t.el=f.el,u===null&&Jr(e,f.el),r&&pi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&pi(()=>Yi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Un(t);if(_i(e,!1),l&&M(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Yi(o,d,t),_i(e,!0),s&&ve){let t=()=>{e.subTree=Hr(e),ve(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Hr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&pi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;pi(()=>Yi(o,d,e),i)}(t.shapeFlag&256||d&&Un(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&pi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ce(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>fn(u),_i(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,$r(e,t.props,r,n),fi(e,t.children,n),Re(),hn(e),ze()},se=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ce(l,d,n,r,i,a,o,s,c);return}else if(f&256){N(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&pe(l,i,a),d!==l&&p(n,d)):u&16?m&16?ce(l,d,n,r,i,a,o,s,c):pe(l,i,a,!0):(u&8&&p(n,``),m&16&&ee(d,n,r,i,a,o,s,c))},N=(e,t,n,i,a,o,s,c,l)=>{e||=r,t||=r;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?Ki(t[p]):Gi(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?pe(e,a,o,!0,!1,f):ee(t,n,i,a,o,s,c,l,f)},ce=(e,t,n,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?Ki(t[u]):Gi(t[u]);if(Li(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?Ki(t[p]):Gi(t[p]);if(Li(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,r=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ki(t[u]):Gi(t[u]),n,r,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)le(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ki(t[u]):Gi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){le(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Li(r,t[_])){i=_;break}i===void 0?le(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let w=x?bi(C):r;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,r=t[e],f=t[e+1],p=e+1<d?f.el||Ci(f):i;C[u]===0?v(null,r,n,p,a,o,s,c,l):x&&(_<0||u!==w[_]?P(r,n,p,2):_--)}}},P=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){P(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,_e);return}if(c===Ei){o(a,t,n);for(let e=0;e<u.length;e++)P(u[e],t,n,r);o(e.anchor,t,n);return}if(c===ki){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[Fn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),pi(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Fn];a._isLeaving&&a[Fn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},le=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Re(),Vn(s,null,n,e,!0),ze()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Un(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Yi(_,t,e),u&6)fe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&wn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,_e,r):l&&!l.hasOnce&&(a!==Ei||d>0&&d&64)?pe(l,t,n,!1,!0):(a===Ei&&d&384||!i&&u&16)&&pe(c,t,n),r&&ue(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&pi(()=>{_&&Yi(_,t,e),h&&wn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ue=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===Ei){de(n,r);return}if(t===ki){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},de=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},fe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Si(c),Si(l),r&&M(r),i.stop(),a&&(a.flags|=8,le(o,e,t,n)),s&&pi(s,t),pi(()=>{e.isUnmounted=!0},t)},pe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)le(e[o],t,n,r,i)},me=e=>{if(e.shapeFlag&6)return me(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Nn];return n?h(n):t},he=!1,ge=(e,t,n)=>{let r;e==null?t._vnode&&(le(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,he||=(he=!0,hn(r),gn(),!1)},_e={p:v,um:le,m:P,r:ue,mt:j,mc:ee,pc:se,pbc:te,n:me,o:e},F,ve;return t&&([F,ve]=t(_e)),{render:ge,hydrate:F,createApp:Fr(ge,F)}}function gi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function _i({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function yi(e,t,n=!1){let r=e.children,i=t.children;if(f(r)&&f(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ki(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&yi(t,a)),a.type===Di&&(a.patchFlag===-1&&(a=i[e]=Ki(a)),a.el=t.el),a.type===Oi&&!a.el&&(a.el=t.el)}}function bi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function xi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xi(t)}function Si(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ci(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ci(t.subTree):null}var wi=e=>e.__isSuspense;function Ti(e,t){t&&t.pendingBranch?f(e)?t.effects.push(...e):t.effects.push(e):mn(e)}var Ei=Symbol.for(`v-fgt`),Di=Symbol.for(`v-txt`),Oi=Symbol.for(`v-cmt`),ki=Symbol.for(`v-stc`),Ai=[],W=null;function G(e=!1){Ai.push(W=e?null:[])}function ji(){Ai.pop(),W=Ai[Ai.length-1]||null}var Mi=1;function Ni(e,t=!1){Mi+=e,e<0&&W&&t&&(W.hasOnce=!0)}function Pi(e){return e.dynamicChildren=Mi>0?W||r:null,ji(),Mi>0&&W&&W.push(e),e}function K(e,t,n,r,i,a){return Pi(q(e,t,n,r,i,a,!0))}function Fi(e,t,n,r,i){return Pi(J(e,t,n,r,i,!0))}function Ii(e){return e?e.__v_isVNode===!0:!1}function Li(e,t){return e.type===t.type&&e.key===t.key}var Ri=({key:e})=>e??null,zi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:_(e)||V(e)||g(e)?{i:yn,r:e,k:t,f:!!n}:e);function q(e,t=null,n=null,r=0,i=null,a=e===Ei?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ri(t),ref:t&&zi(t),scopeId:bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yn};return s?(qi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=_(n)?8:16),Mi>0&&!o&&W&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&W.push(c),c}var J=Bi;function Bi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===lr)&&(e=Oi),Ii(e)){let r=Hi(e,t,!0);return n&&qi(r,n),Mi>0&&!a&&W&&(r.shapeFlag&6?W[W.indexOf(e)]=r:W.push(r)),r.patchFlag=-2,r}if(_a(e)&&(e=e.__vccOpts),t){t=Vi(t);let{class:e,style:n}=t;e&&!_(e)&&(t.class=ue(e)),y(n)&&(Ft(n)&&!f(n)&&(n=c({},n)),t.style=se(n))}let o=_(e)?1:wi(e)?128:Pn(e)?64:y(e)?4:g(e)?2:0;return q(e,t,n,r,i,o,a,!0)}function Vi(e){return e?Ft(e)||Zr(e)?c({},e):e:null}function Hi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ji(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ri(l),ref:t&&t.ref?n&&a?f(a)?a.concat(zi(t)):[a,zi(t)]:zi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ei?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hi(e.ssContent),ssFallback:e.ssFallback&&Hi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&In(u,c.clone(u)),u}function Ui(e=` `,t=0){return J(Di,null,e,t)}function Wi(e,t){let n=J(ki,null,e);return n.staticCount=t,n}function Y(e=``,t=!1){return t?(G(),Fi(Oi,null,e)):J(Oi,null,e)}function Gi(e){return e==null||typeof e==`boolean`?J(Oi):f(e)?J(Ei,null,e.slice()):Ii(e)?Ki(e):J(Di,null,String(e))}function Ki(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Hi(e)}function qi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(f(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),qi(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Zr(t)?t._ctx=yn:r===3&&yn&&(yn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else g(t)?(t={default:t,_ctx:yn},n=32):(t=String(t),r&64?(n=16,t=[Ui(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ji(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=ue([t.class,r.class]));else if(e===`style`)t.style=se([t.style,r.style]);else if(o(e)){let n=t[e],i=r[e];i&&n!==i&&!(f(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!s(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Yi(e,t,n,r=null){$t(e,t,7,[n,r])}var Xi=Nr(),Zi=0;function Qi(e,t,r){let i=e.type,a=(t?t.appContext:e.appContext)||Xi,o={uid:Zi++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new be(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ri(i,a),emitsOptions:Br(i,a),emit:null,emitted:null,propsDefaults:n,inheritAttrs:i.inheritAttrs,ctx:n,data:n,props:n,attrs:n,slots:n,refs:n,setupState:n,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Rr.bind(null,o),e.ce&&e.ce(o),o}var $i=null,ea=()=>$i||yn,ta,na;{let e=oe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ta=t(`__VUE_INSTANCE_SETTERS__`,e=>$i=e),na=t(`__VUE_SSR_SETTERS__`,e=>oa=e)}var ra=e=>{let t=$i;return ta(e),e.scope.on(),()=>{e.scope.off(),ta(t)}},ia=()=>{$i&&$i.scope.off(),ta(null)};function aa(e){return e.vnode.shapeFlag&4}var oa=!1;function sa(e,t=!1,n=!1){t&&na(t);let{props:r,children:i}=e.vnode,a=aa(e);Qr(e,r,a,t),di(e,i,n||t);let o=a?ca(e,t):void 0;return t&&na(!1),o}function ca(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gr);let{setup:r}=n;if(r){Re();let n=e.setupContext=r.length>1?ma(e):null,i=ra(e),a=Qt(r,e,0,[e.props,n]),o=b(a);if(ze(),i(),(o||e.sp)&&!Un(e)&&Rn(e),o){if(a.then(ia,ia),t)return a.then(n=>{la(e,n,t)}).catch(t=>{en(t,e,0)});e.asyncDep=a}else la(e,a,t)}else fa(e,t)}function la(e,t,n){g(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=Ut(t)),fa(e,n)}var ua,da;function fa(e,t,n){let r=e.type;if(!e.render){if(!t&&ua&&!r.render){let t=r.template||Cr(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=ua(t,c(c({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||i,da&&da(e)}{let t=ra(e);Re();try{yr(e)}finally{ze(),t()}}}var pa={get(e,t){return R(e,`get`,``),e[t]}};function ma(e){return{attrs:new Proxy(e.attrs,pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ha(e){return e.exposed?e.exposeProxy||=new Proxy(Ut(It(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mr)return mr[n](e)},has(e,t){return t in e||t in mr}}):e.proxy}function ga(e,t=!0){return g(e)?e.displayName||e.name:e.name||t&&e.__name}function _a(e){return g(e)&&`__vccOpts`in e}var X=(e,t)=>Gt(e,t,oa);function va(e,t,n){try{Ni(-1);let r=arguments.length;return r===2?y(t)&&!f(t)?Ii(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ii(n)&&(n=[n]),J(e,t,n))}finally{Ni(1)}}var ya=`3.5.35`,ba=void 0,xa=typeof window<`u`&&window.trustedTypes;if(xa)try{ba=xa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Sa=ba?e=>ba.createHTML(e):e=>e,Ca=`http://www.w3.org/2000/svg`,wa=`http://www.w3.org/1998/Math/MathML`,Ta=typeof document<`u`?document:null,Ea=Ta&&Ta.createElement(`template`),Da={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ta.createElementNS(Ca,e):t===`mathml`?Ta.createElementNS(wa,e):n?Ta.createElement(e,{is:n}):Ta.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ta.createTextNode(e),createComment:e=>Ta.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ta.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ea.innerHTML=Sa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ea.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Oa=Symbol(`_vtc`);function ka(e,t,n){let r=e[Oa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Aa=Symbol(`_vod`),ja=Symbol(`_vsh`),Ma=Symbol(``),Na=/(?:^|;)\s*display\s*:/;function Pa(e,t,n){let r=e.style,i=_(n),a=!1;if(n&&!i){if(t)if(_(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ia(r,t,``)}else for(let e in t)n[e]??Ia(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ia(r,i,``):Ba(e,i,!_(t)&&t?t[i]:void 0,o)||Ia(r,i,o)}}else if(i){if(t!==n){let e=r[Ma];e&&(n+=`;`+e),r.cssText=n,a=Na.test(n)}}else t&&e.removeAttribute(`style`);Aa in e&&(e[Aa]=a?r.display:``,e[ja]&&(r.display=`none`))}var Fa=/\s*!important$/;function Ia(e,t,n){if(f(n))n.forEach(n=>Ia(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=za(e,t);Fa.test(n)?e.setProperty(k(r),n.replace(Fa,``),`important`):e[r]=n}}var La=[`Webkit`,`Moz`,`ms`],Ra={};function za(e,t){let n=Ra[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return Ra[t]=r;r=A(r);for(let n=0;n<La.length;n++){let i=La[n]+r;if(i in e)return Ra[t]=i}return t}function Ba(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&_(r)&&n===r}var Va=`http://www.w3.org/1999/xlink`;function Ha(e,t,n,r,i,a=fe(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Va,t.slice(6,t.length)):e.setAttributeNS(Va,t,n):n==null||a&&!pe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:v(n)?String(n):n)}function Ua(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Sa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=pe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Wa(e,t,n,r){e.addEventListener(t,n,r)}function Ga(e,t,n,r){e.removeEventListener(t,n,r)}var Ka=Symbol(`_vei`);function qa(e,t,n,r,i=null){let a=e[Ka]||(e[Ka]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ya(t);r?Wa(e,n,a[t]=$a(r,i),s):o&&(Ga(e,n,o,s),a[t]=void 0)}}var Ja=/(?:Once|Passive|Capture)$/;function Ya(e){let t;if(Ja.test(e)){t={};let n;for(;n=e.match(Ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):k(e.slice(2)),t]}var Xa=0,Za=Promise.resolve(),Qa=()=>Xa||=(Za.then(()=>Xa=0),Date.now());function $a(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(f(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&$t(e,t,5,a)}}else $t(r,t,5,[e])};return n.value=e,n.attached=Qa(),n}var eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,to=(e,t,n,r,i,a)=>{let c=i===`svg`;t===`class`?ka(e,r,c):t===`style`?Pa(e,n,r):o(t)?s(t)||qa(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):no(e,t,r,c))?(Ua(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ha(e,t,r,c,a,t!==`value`)):e._isVueCE&&(ro(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!_(r)))?Ua(e,O(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ha(e,t,r,c))};function no(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&eo(t)&&g(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return eo(t)&&_(n)?!1:t in e}function ro(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var io=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return f(t)?e=>M(t,e):t};function ao(e){e.target.composing=!0}function oo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var so=Symbol(`_assign`);function co(e,t,n){return t&&(e=e.trim()),n&&(e=ie(e)),e}var lo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[so]=io(i);let a=r||i.props&&i.props.type===`number`;Wa(e,t?`change`:`input`,t=>{t.target.composing||e[so](co(e.value,n,a))}),(n||a)&&Wa(e,`change`,()=>{e.value=co(e.value,n,a)}),t||(Wa(e,`compositionstart`,ao),Wa(e,`compositionend`,oo),Wa(e,`change`,oo))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[so]=io(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?ie(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},uo={deep:!0,created(e,t,n){e[so]=io(n),Wa(e,`change`,()=>{let t=e._modelValue,n=ho(e),r=e.checked,i=e[so];if(f(t)){let e=ge(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(m(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(go(e,r))})},mounted:fo,beforeUpdate(e,t,n){e[so]=io(n),fo(e,t,n)}};function fo(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(f(t))i=ge(t,r.props.value)>-1;else if(m(t))i=t.has(r.props.value);else{if(t===n)return;i=he(t,go(e,!0))}e.checked!==i&&(e.checked=i)}var po={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=m(t);Wa(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?ie(ho(e)):ho(e));e[so](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,un(()=>{e._assigning=!1})}),e[so]=io(r)},mounted(e,{value:t}){mo(e,t)},beforeUpdate(e,t,n){e[so]=io(n)},updated(e,{value:t}){e._assigning||mo(e,t)}};function mo(e,t){let n=e.multiple,r=f(t);if(!(n&&!r&&!m(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=ho(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=ge(t,o)>-1}else a.selected=t.has(o);else if(he(ho(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ho(e){return`_value`in e?e._value:e.value}function go(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var _o=[`ctrl`,`shift`,`alt`,`meta`],vo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>_o.some(n=>e[`${n}Key`]&&!t.includes(n))},yo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=vo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},bo=c({patchProp:to},Da),xo;function So(){return xo||=mi(bo)}var Co=((...e)=>{let t=So().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=To(e);if(!r)return;let i=t._component;!g(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,wo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function wo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function To(e){return _(e)?document.querySelector(e):e}e(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).bootstrap=r()})(e,function(){let e=new Map,t={set(t,n,r){e.has(t)||e.set(t,new Map);let i=e.get(t);i.has(n)||i.size===0?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;let r=e.get(t);r.delete(n),r.size===0&&e.delete(t)}},n=`transitionend`,r=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),i=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{e.dispatchEvent(new Event(n))},o=e=>!(!e||typeof e!=`object`)&&(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),s=e=>o(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(r(e)):null,c=e=>{if(!o(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains(`disabled`)||(e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled),u=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?u(e.parentNode):null},d=()=>{},f=e=>{e.offsetHeight},p=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,m=[],h=()=>document.documentElement.dir===`rtl`,g=e=>{var t=()=>{let t=p();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}};document.readyState===`loading`?(m.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of m)e()}),m.push(t)):t()},_=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n,v=(e,t,r=!0)=>{if(!r)return void _(e);let i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return Number.parseFloat(t)||Number.parseFloat(n)?(t=t.split(`,`)[0],n=n.split(`,`)[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5,o=!1,s=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,s),_(e))};t.addEventListener(n,s),setTimeout(()=>{o||a(t)},i)},y=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},b=/[^.]*(?=\..*)\.|.*/,x=/\..*/,S=/::\d+$/,C={},w=1,T={mouseenter:`mouseover`,mouseleave:`mouseout`},E=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function D(e,t){return t&&`${t}::${w++}`||e.uidEvent||w++}function ee(e){let t=D(e);return e.uidEvent=t,C[t]=C[t]||{},C[t]}function O(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function te(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=j(e);return E.has(a)||(a=e),[r,i,a]}function k(e,t,n,r,i){if(typeof t!=`string`||!e)return;let[a,o,s]=te(t,n,r);t in T&&(o=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(o));let c=ee(e),l=c[s]||(c[s]={}),u=O(l,o,a?n:null);if(u)return void(u.oneOff=u.oneOff&&i);let d=D(o,t.replace(b,``)),f=a?function(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return re(i,{delegateTarget:o}),r.oneOff&&M.off(e,i.type,t,n),n.apply(o,[i])}}(e,n,o):function(e,t){return function n(r){return re(r,{delegateTarget:e}),n.oneOff&&M.off(e,r.type,t),t.apply(e,[r])}}(e,o);f.delegationSelector=a?n:null,f.callable=o,f.oneOff=i,f.uidEvent=d,l[d]=f,e.addEventListener(s,f,a)}function A(e,t,n,r,i){let a=O(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function ne(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&A(e,t,n,o.callable,o.delegationSelector)}function j(e){return e=e.replace(x,``),T[e]||e}let M={on(e,t,n,r){k(e,t,n,r,!1)},one(e,t,n,r){k(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!=`string`||!e)return;let[i,a,o]=te(t,n,r),s=o!==t,c=ee(e),l=c[o]||{},u=t.startsWith(`.`);if(a===void 0){if(u)for(let n of Object.keys(c))ne(e,c,n,t.slice(1));for(let[n,r]of Object.entries(l)){let i=n.replace(S,``);s&&!t.includes(i)||A(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;A(e,c,o,a,i?n:null)}},trigger(e,t,n){if(typeof t!=`string`||!e)return null;let r=p(),i=null,a=!0,o=!0,s=!1;t!==j(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),a=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),s=i.isDefaultPrevented());let c=re(new Event(t,{bubbles:a,cancelable:!0}),n);return s&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function re(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function ie(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function ae(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}let oe={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${ae(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${ae(t)}`)},getDataAttributes(e){if(!e)return{};let t={},n=Object.keys(e.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let r of n){let n=r.replace(/^bs/,``);n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=ie(e.dataset[r])}return t},getDataAttribute:(e,t)=>ie(e.getAttribute(`data-bs-${ae(t)}`))};class se{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let n=o(t)?oe.getDataAttribute(t,`config`):{};return{...this.constructor.Default,...typeof n==`object`?n:{},...o(t)?oe.getDataAttributes(t):{},...typeof e==`object`?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[n,r]of Object.entries(t)){let t=e[n],a=o(t)?`element`:i(t);if(!new RegExp(r).test(a))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`)}}}class N extends se{constructor(e,n){super(),(e=s(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),M.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){v(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(s(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return`5.3.8`}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}let ce=e=>{let t=e.getAttribute(`data-bs-target`);if(!t||t===`#`){let n=e.getAttribute(`href`);if(!n||!n.includes(`#`)&&!n.startsWith(`.`))return null;n.includes(`#`)&&!n.startsWith(`#`)&&(n=`#${n.split(`#`)[1]}`),t=n&&n!==`#`?n.trim():null}return t?t.split(`,`).map(e=>r(e)).join(`,`):null},P={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){let t=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(t,e).filter(e=>!l(e)&&c(e))},getSelectorFromElement(e){let t=ce(e);return t&&P.findOne(t)?t:null},getElementFromSelector(e){let t=ce(e);return t?P.findOne(t):null},getMultipleElementsFromSelector(e){let t=ce(e);return t?P.find(t):[]}},le=(e,t=`hide`)=>{let n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;M.on(document,n,`[data-bs-dismiss="${r}"]`,function(n){if([`A`,`AREA`].includes(this.tagName)&&n.preventDefault(),l(this))return;let i=P.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},ue=`.bs.alert`,de=`close${ue}`,fe=`closed${ue}`;class pe extends N{static get NAME(){return`alert`}close(){if(M.trigger(this._element,de).defaultPrevented)return;this._element.classList.remove(`show`);let e=this._element.classList.contains(`fade`);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),M.trigger(this._element,fe),this.dispose()}static jQueryInterface(e){return this.each(function(){let t=pe.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}le(pe,`close`),g(pe);let me=`[data-bs-toggle="button"]`;class he extends N{static get NAME(){return`button`}toggle(){this._element.setAttribute(`aria-pressed`,this._element.classList.toggle(`active`))}static jQueryInterface(e){return this.each(function(){let t=he.getOrCreateInstance(this);e===`toggle`&&t[e]()})}}M.on(document,`click.bs.button.data-api`,me,e=>{e.preventDefault();let t=e.target.closest(me);he.getOrCreateInstance(t).toggle()}),g(he);let ge=`.bs.swipe`,_e=`touchstart${ge}`,F=`touchmove${ge}`,ve=`touchend${ge}`,ye=`pointerdown${ge}`,I=`pointerup${ge}`,be={endCallback:null,leftCallback:null,rightCallback:null},xe={endCallback:`(function|null)`,leftCallback:`(function|null)`,rightCallback:`(function|null)`};class L extends se{constructor(e,t){super(),this._element=e,e&&L.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return be}static get DefaultType(){return xe}static get NAME(){return`swipe`}dispose(){M.off(this._element,ge)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),_(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&_(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(M.on(this._element,ye,e=>this._start(e)),M.on(this._element,I,e=>this._end(e)),this._element.classList.add(`pointer-event`)):(M.on(this._element,_e,e=>this._start(e)),M.on(this._element,F,e=>this._move(e)),M.on(this._element,ve,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===`pen`||e.pointerType===`touch`)}static isSupported(){return`ontouchstart`in document.documentElement||navigator.maxTouchPoints>0}}let Se=`.bs.carousel`,Ce=`.data-api`,we=`next`,Te=`prev`,Ee=`left`,De=`right`,Oe=`slide${Se}`,ke=`slid${Se}`,Ae=`keydown${Se}`,je=`mouseenter${Se}`,Me=`mouseleave${Se}`,Ne=`dragstart${Se}`,Pe=`load${Se}${Ce}`,Fe=`click${Se}${Ce}`,Ie=`carousel`,Le=`active`,Re={ArrowLeft:De,ArrowRight:Ee},ze={interval:5e3,keyboard:!0,pause:`hover`,ride:!1,touch:!0,wrap:!0},Be={interval:`(number|boolean)`,keyboard:`boolean`,pause:`(string|boolean)`,ride:`(boolean|string)`,touch:`boolean`,wrap:`boolean`};class Ve extends N{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=P.findOne(`.carousel-indicators`,this._element),this._addEventListeners(),this._config.ride===Ie&&this.cycle()}static get Default(){return ze}static get DefaultType(){return Be}static get NAME(){return`carousel`}next(){this._slide(we)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(Te)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?M.one(this._element,ke,()=>this.cycle()):this.cycle())}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void M.one(this._element,ke,()=>this.to(e));let n=this._getItemIndex(this._getActive());if(n===e)return;let r=e>n?we:Te;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&M.on(this._element,Ae,e=>this._keydown(e)),this._config.pause===`hover`&&(M.on(this._element,je,()=>this.pause()),M.on(this._element,Me,()=>this._maybeEnableCycle())),this._config.touch&&L.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of P.find(`.carousel-item img`,this._element))M.on(e,Ne,e=>e.preventDefault());let e={leftCallback:()=>this._slide(this._directionToOrder(Ee)),rightCallback:()=>this._slide(this._directionToOrder(De)),endCallback:()=>{this._config.pause===`hover`&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new L(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=Re[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=P.findOne(`.active`,this._indicatorsElement);t.classList.remove(Le),t.removeAttribute(`aria-current`);let n=P.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Le),n.setAttribute(`aria-current`,`true`))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute(`data-bs-interval`),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let n=this._getActive(),r=e===we,i=t||y(this._getItems(),n,r,this._config.wrap);if(i===n)return;let a=this._getItemIndex(i),o=t=>M.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:a});if(o(Oe).defaultPrevented||!n||!i)return;let s=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;let c=r?`carousel-item-start`:`carousel-item-end`,l=r?`carousel-item-next`:`carousel-item-prev`;i.classList.add(l),f(i),n.classList.add(c),i.classList.add(c),this._queueCallback(()=>{i.classList.remove(c,l),i.classList.add(Le),n.classList.remove(Le,l,c),this._isSliding=!1,o(ke)},n,this._isAnimated()),s&&this.cycle()}_isAnimated(){return this._element.classList.contains(`slide`)}_getActive(){return P.findOne(`.active.carousel-item`,this._element)}_getItems(){return P.find(`.carousel-item`,this._element)}_clearInterval(){this._interval&&=(clearInterval(this._interval),null)}_directionToOrder(e){return h()?e===Ee?Te:we:e===Ee?we:Te}_orderToDirection(e){return h()?e===Te?Ee:De:e===Te?De:Ee}static jQueryInterface(e){return this.each(function(){let t=Ve.getOrCreateInstance(this,e);if(typeof e!=`number`){if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)})}}M.on(document,Fe,`[data-bs-slide], [data-bs-slide-to]`,function(e){let t=P.getElementFromSelector(this);if(!t||!t.classList.contains(Ie))return;e.preventDefault();let n=Ve.getOrCreateInstance(t),r=this.getAttribute(`data-bs-slide-to`);r?(n.to(r),n._maybeEnableCycle()):oe.getDataAttribute(this,`slide`)===`next`?(n.next(),n._maybeEnableCycle()):(n.prev(),n._maybeEnableCycle())}),M.on(window,Pe,()=>{let e=P.find(`[data-bs-ride="carousel"]`);for(let t of e)Ve.getOrCreateInstance(t)}),g(Ve);let He=`.bs.collapse`,Ue=`show${He}`,We=`shown${He}`,Ge=`hide${He}`,Ke=`hidden${He}`,qe=`click${He}.data-api`,Je=`show`,R=`collapse`,Ye=`collapsing`,Xe=`:scope .${R} .${R}`,Ze=`[data-bs-toggle="collapse"]`,Qe={parent:null,toggle:!0},$e={parent:`(null|element)`,toggle:`boolean`};class et extends N{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let n=P.find(Ze);for(let e of n){let t=P.getSelectorFromElement(e),n=P.find(t).filter(e=>e===this._element);t!==null&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Qe}static get DefaultType(){return $e}static get NAME(){return`collapse`}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(`.collapse.show, .collapse.collapsing`).filter(e=>e!==this._element).map(e=>et.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning||M.trigger(this._element,Ue).defaultPrevented)return;for(let t of e)t.hide();let t=this._getDimension();this._element.classList.remove(R),this._element.classList.add(Ye),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ye),this._element.classList.add(R,Je),this._element.style[t]=``,M.trigger(this._element,We)},this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown()||M.trigger(this._element,Ge).defaultPrevented)return;let e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,f(this._element),this._element.classList.add(Ye),this._element.classList.remove(R,Je);for(let e of this._triggerArray){let t=P.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]=``,this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ye),this._element.classList.add(R),M.trigger(this._element,Ke)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(Je)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=s(e.parent),e}_getDimension(){return this._element.classList.contains(`collapse-horizontal`)?`width`:`height`}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(Ze);for(let t of e){let e=P.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=P.find(Xe,this._config.parent);return P.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle(`collapsed`,!t),n.setAttribute(`aria-expanded`,t)}static jQueryInterface(e){let t={};return typeof e==`string`&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let n=et.getOrCreateInstance(this,t);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e]()}})}}M.on(document,qe,Ze,function(e){(e.target.tagName===`A`||e.delegateTarget&&e.delegateTarget.tagName===`A`)&&e.preventDefault();for(let e of P.getMultipleElementsFromSelector(this))et.getOrCreateInstance(e,{toggle:!1}).toggle()}),g(et);var tt=`top`,z=`bottom`,nt=`right`,rt=`left`,it=`auto`,at=[tt,z,nt,rt],ot=`start`,st=`end`,ct=`clippingParents`,lt=`viewport`,ut=`popper`,dt=`reference`,ft=at.reduce(function(e,t){return e.concat([t+`-`+ot,t+`-`+st])},[]),pt=[].concat(at,[it]).reduce(function(e,t){return e.concat([t,t+`-`+ot,t+`-`+st])},[]),mt=`beforeRead`,ht=`read`,gt=`afterRead`,_t=`beforeMain`,vt=`main`,yt=`afterMain`,bt=`beforeWrite`,xt=`write`,St=`afterWrite`,Ct=[mt,ht,gt,_t,vt,yt,bt,xt,St];function wt(e){return e?(e.nodeName||``).toLowerCase():null}function Tt(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Et(e){return e instanceof Tt(e).Element||e instanceof Element}function Dt(e){return e instanceof Tt(e).HTMLElement||e instanceof HTMLElement}function Ot(e){return typeof ShadowRoot<`u`&&(e instanceof Tt(e).ShadowRoot||e instanceof ShadowRoot)}let kt={name:`applyStyles`,enabled:!0,phase:`write`,fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];Dt(i)&&wt(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?``:t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});Dt(r)&&wt(r)&&(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}},requires:[`computeStyles`]};function At(e){return e.split(`-`)[0]}var jt=Math.max,Mt=Math.min,Nt=Math.round;function Pt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function Ft(){return!/^((?!chrome|android).)*safari/i.test(Pt())}function B(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&Dt(e)&&(i=e.offsetWidth>0&&Nt(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Nt(r.height)/e.offsetHeight||1);var o=(Et(e)?Tt(e):window).visualViewport,s=!Ft()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function It(e){var t=B(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Lt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ot(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Rt(e){return Tt(e).getComputedStyle(e)}function V(e){return[`table`,`td`,`th`].indexOf(wt(e))>=0}function H(e){return((Et(e)?e.ownerDocument:e.document)||window.document).documentElement}function zt(e){return wt(e)===`html`?e:e.assignedSlot||e.parentNode||(Ot(e)?e.host:null)||H(e)}function Bt(e){return Dt(e)&&Rt(e).position!==`fixed`?e.offsetParent:null}function Vt(e){for(var t=Tt(e),n=Bt(e);n&&V(n)&&Rt(n).position===`static`;)n=Bt(n);return n&&(wt(n)===`html`||wt(n)===`body`&&Rt(n).position===`static`)?t:n||function(e){var t=/firefox/i.test(Pt());if(/Trident/i.test(Pt())&&Dt(e)&&Rt(e).position===`fixed`)return null;var n=zt(e);for(Ot(n)&&(n=n.host);Dt(n)&&[`html`,`body`].indexOf(wt(n))<0;){var r=Rt(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}(e)||t}function U(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function Ht(e,t,n){return jt(e,Mt(t,n))}function Ut(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Wt(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}let Gt={name:`arrow`,enabled:!0,phase:`main`,fn:function(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=At(n.placement),c=U(s),l=[rt,nt].indexOf(s)>=0?`height`:`width`;if(a&&o){var u=function(e,t){return Ut(typeof(e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e)==`number`?Wt(e,at):e)}(i.padding,n),d=It(a),f=c===`y`?tt:rt,p=c===`y`?z:nt,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Vt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=Ht(y,x,b),C=c;n.modifiersData[r]=((t={})[C]=S,t.centerOffset=S-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r!=`string`||(r=t.elements.popper.querySelector(r)))&&Lt(t.elements.popper,r)&&(t.elements.arrow=r)},requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Kt(e){return e.split(`-`)[1]}var qt={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function Jt(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=rt,b=tt,x=window;if(l){var S=Vt(n),C=`clientHeight`,w=`clientWidth`;S===Tt(n)&&Rt(S=H(n)).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`),(i===tt||(i===rt||i===nt)&&a===st)&&(b=z,h-=(d&&S===x&&x.visualViewport?x.visualViewport.height:S[C])-r.height,h*=c?1:-1),i!==rt&&(i!==tt&&i!==z||a!==st)||(y=nt,p-=(d&&S===x&&x.visualViewport?x.visualViewport.width:S[w])-r.width,p*=c?1:-1)}var T,E=Object.assign({position:s},l&&qt),D=!0===u?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:Nt(n*i)/i||0,y:Nt(r*i)/i||0}}({x:p,y:h},Tt(n)):{x:p,y:h};return p=D.x,h=D.y,c?Object.assign({},E,((T={})[b]=v?`0`:``,T[y]=_?`0`:``,T.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,T)):Object.assign({},E,((t={})[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}let Yt={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:At(t.placement),variation:Kt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Jt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Jt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var Xt={passive:!0};let Zt={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=Tt(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,Xt)}),s&&c.addEventListener(`resize`,n.update,Xt),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,Xt)}),s&&c.removeEventListener(`resize`,n.update,Xt)}},data:{}};var Qt={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function $t(e){return e.replace(/left|right|bottom|top/g,function(e){return Qt[e]})}var en={start:`end`,end:`start`};function tn(e){return e.replace(/start|end/g,function(e){return en[e]})}function nn(e){var t=Tt(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function rn(e){return B(H(e)).left+nn(e).scrollLeft}function an(e){var t=Rt(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function on(e){return[`html`,`body`,`#document`].indexOf(wt(e))>=0?e.ownerDocument.body:Dt(e)&&an(e)?e:on(zt(e))}function sn(e,t){t===void 0&&(t=[]);var n=on(e),r=n===e.ownerDocument?.body,i=Tt(n),a=r?[i].concat(i.visualViewport||[],an(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(sn(zt(a)))}function cn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ln(e,t,n){return t===lt?cn(function(e,t){var n=Tt(e),r=H(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=Ft();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+rn(e),y:c}}(e,n)):Et(t)?function(e,t){var n=B(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):cn(function(e){var t=H(e),n=nn(e),r=e.ownerDocument?.body,i=jt(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=jt(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+rn(e),s=-n.scrollTop;return Rt(r||t).direction===`rtl`&&(o+=jt(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}(H(e)))}function un(e){var t,n=e.reference,r=e.element,i=e.placement,a=i?At(i):null,o=i?Kt(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(a){case tt:t={x:s,y:n.y-r.height};break;case z:t={x:s,y:n.y+n.height};break;case nt:t={x:n.x+n.width,y:c};break;case rt:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=a?U(a):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(o){case ot:t[l]=t[l]-(n[u]/2-r[u]/2);break;case st:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function dn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?ct:s,l=n.rootBoundary,u=l===void 0?lt:l,d=n.elementContext,f=d===void 0?ut:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Ut(typeof g==`number`?Wt(g,at):g),v=f===ut?dt:ut,y=e.rects.popper,b=e.elements[m?v:f],x=function(e,t,n,r){var i=t===`clippingParents`?function(e){var t=sn(zt(e)),n=[`absolute`,`fixed`].indexOf(Rt(e).position)>=0&&Dt(e)?Vt(e):e;return Et(n)?t.filter(function(e){return Et(e)&&Lt(e,n)&&wt(e)!==`body`}):[]}(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=ln(e,n,r);return t.top=jt(i.top,t.top),t.right=Mt(i.right,t.right),t.bottom=Mt(i.bottom,t.bottom),t.left=jt(i.left,t.left),t},ln(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(Et(b)?b:b.contextElement||H(e.elements.popper),c,u,o),S=B(e.elements.reference),C=un({reference:S,element:y,placement:i}),w=cn(Object.assign({},y,C)),T=f===ut?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===ut&&D){var ee=D[i];Object.keys(E).forEach(function(e){var t=[nt,z].indexOf(e)>=0?1:-1,n=[tt,z].indexOf(e)>=0?`y`:`x`;E[e]+=ee[n]*t})}return E}function fn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?pt:c,u=Kt(r),d=u?s?ft:ft.filter(function(e){return Kt(e)===u}):at,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=dn(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[At(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}let pn={name:`flip`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=At(g),v=c||(_!==g&&m?function(e){if(At(e)===it)return[];var t=$t(e);return[tn(e),t,tn(t)]}(g):[$t(g)]),y=[g].concat(v).reduce(function(e,n){return e.concat(At(n)===it?fn(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=At(E),ee=Kt(E)===ot,O=[tt,z].indexOf(D)>=0,te=O?`width`:`height`,k=dn(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),A=O?ee?nt:rt:ee?z:tt;b[te]>x[te]&&(A=$t(A));var ne=$t(A),j=[];if(a&&j.push(k[D]<=0),s&&j.push(k[A]<=0,k[ne]<=0),j.every(function(e){return e})){w=E,C=!1;break}S.set(E,j)}if(C)for(var M=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},re=m?3:1;re>0&&M(re)!==`break`;re--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}},requiresIfExists:[`offset`],data:{_skip:!1}};function mn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function hn(e){return[tt,nt,z,rt].some(function(t){return e[t]>=0})}let gn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=dn(t,{elementContext:`reference`}),s=dn(t,{altBoundary:!0}),c=mn(o,r),l=mn(s,i,a),u=hn(c),d=hn(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}},_n={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=pt.reduce(function(e,n){return e[n]=function(e,t,n){var r=At(e),i=[rt,tt].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[rt,nt].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}},vn={name:`popperOffsets`,enabled:!0,phase:`read`,fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=un({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})},data:{}},yn={name:`preventOverflow`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=dn(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=At(t.placement),v=Kt(t.placement),y=!v,b=U(_),x=b===`x`?`y`:`x`,S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ee={x:0,y:0};if(S){if(a){var O=b===`y`?tt:rt,te=b===`y`?z:nt,k=b===`y`?`height`:`width`,A=S[b],ne=A+g[O],j=A-g[te],M=p?-w[k]/2:0,re=v===ot?C[k]:w[k],ie=v===ot?-w[k]:-C[k],ae=t.elements.arrow,oe=p&&ae?It(ae):{width:0,height:0},se=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:{top:0,right:0,bottom:0,left:0},N=se[O],ce=se[te],P=Ht(0,C[k],oe[k]),le=y?C[k]/2-M-P-N-E.mainAxis:re-P-N-E.mainAxis,ue=y?-C[k]/2+M+P+ce+E.mainAxis:ie+P+ce+E.mainAxis,de=t.elements.arrow&&Vt(t.elements.arrow),fe=de?b===`y`?de.clientTop||0:de.clientLeft||0:0,pe=D?.[b]??0,me=A+ue-pe,he=Ht(p?Mt(ne,A+le-pe-fe):ne,A,p?jt(j,me):j);S[b]=he,ee[b]=he-A}if(s){var ge=b===`x`?tt:rt,_e=b===`x`?z:nt,F=S[x],ve=x===`y`?`height`:`width`,ye=F+g[ge],I=F-g[_e],be=[tt,rt].indexOf(_)!==-1,xe=D?.[x]??0,L=be?ye:F-C[ve]-w[ve]-xe+E.altAxis,Se=be?F+C[ve]+w[ve]-xe-E.altAxis:I,Ce=p&&be?function(e,t,n){var r=Ht(e,t,n);return r>n?n:r}(L,F,Se):Ht(p?L:ye,F,p?Se:I);S[x]=Ce,ee[x]=Ce-F}t.modifiersData[r]=ee}},requiresIfExists:[`offset`]};function bn(e,t,n){n===void 0&&(n=!1);var r,i,a=Dt(t),o=Dt(t)&&function(e){var t=e.getBoundingClientRect(),n=Nt(t.width)/e.offsetWidth||1,r=Nt(t.height)/e.offsetHeight||1;return n!==1||r!==1}(t),s=H(t),c=B(e,o,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&((wt(t)!==`body`||an(s))&&(l=(r=t)!==Tt(r)&&Dt(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:nn(r)),Dt(t)?((u=B(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=rn(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function xn(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||i(e)}),r}var Sn={placement:`bottom`,modifiers:[],strategy:`absolute`};function Cn(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function wn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?Sn:i;return function(e,t,n){n===void 0&&(n=a);var i,o,s={placement:`bottom`,orderedModifiers:[],options:Object.assign({},Sn,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(n){var i=typeof n==`function`?n(s.options):n;d(),s.options=Object.assign({},a,s.options,i),s.scrollParents={reference:Et(e)?sn(e):e.contextElement?sn(e.contextElement):[],popper:sn(t)};var o,l,f=function(e){var t=xn(e);return Ct.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((o=[].concat(r,s.options.modifiers),l=o.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(l).map(function(e){return l[e]})));return s.orderedModifiers=f.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,i=e.effect;if(typeof i==`function`){var a=i({state:s,name:t,instance:u,options:r});c.push(a||function(){})}}),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;if(Cn(t,n)){s.rects={reference:bn(t,Vt(n),s.options.strategy===`fixed`),popper:It(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],a=i.fn,o=i.options,c=o===void 0?{}:o,d=i.name;typeof a==`function`&&(s=a({state:s,options:c,name:d,instance:u})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){u.forceUpdate(),e(s)})},function(){return o||=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(i())})}),o}),destroy:function(){d(),l=!0}};if(!Cn(e,t))return u;function d(){c.forEach(function(e){return e()}),c=[]}return u.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u}}var Tn=wn(),En=wn({defaultModifiers:[Zt,vn,Yt,kt]}),Dn=wn({defaultModifiers:[Zt,vn,Yt,kt,_n,pn,yn,Gt,gn]});let On=Object.freeze(Object.defineProperty({__proto__:null,afterMain:yt,afterRead:gt,afterWrite:St,applyStyles:kt,arrow:Gt,auto:it,basePlacements:at,beforeMain:_t,beforeRead:mt,beforeWrite:bt,bottom:z,clippingParents:ct,computeStyles:Yt,createPopper:Dn,createPopperBase:Tn,createPopperLite:En,detectOverflow:dn,end:st,eventListeners:Zt,flip:pn,hide:gn,left:rt,main:vt,modifierPhases:Ct,offset:_n,placements:pt,popper:ut,popperGenerator:wn,popperOffsets:vn,preventOverflow:yn,read:ht,reference:dt,right:nt,start:ot,top:tt,variationPlacements:ft,viewport:lt,write:xt},Symbol.toStringTag,{value:`Module`})),kn=`.bs.dropdown`,An=`.data-api`,jn=`ArrowDown`,Mn=`hide${kn}`,Nn=`hidden${kn}`,Pn=`show${kn}`,Fn=`shown${kn}`,In=`click${kn}${An}`,Ln=`keydown${kn}${An}`,Rn=`keyup${kn}${An}`,zn=`show`,Bn=`[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)`,Vn=`${Bn}.${zn}`,Hn=`.dropdown-menu`,Un=h()?`top-end`:`top-start`,Wn=h()?`top-start`:`top-end`,Gn=h()?`bottom-end`:`bottom-start`,Kn=h()?`bottom-start`:`bottom-end`,qn=h()?`left-start`:`right-start`,Jn=h()?`right-start`:`left-start`,Yn={autoClose:!0,boundary:`clippingParents`,display:`dynamic`,offset:[0,2],popperConfig:null,reference:`toggle`},Xn={autoClose:`(boolean|string)`,boundary:`(string|element)`,display:`string`,offset:`(array|string|function)`,popperConfig:`(null|object|function)`,reference:`(string|element|object)`};class Zn extends N{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=P.next(this._element,Hn)[0]||P.prev(this._element,Hn)[0]||P.findOne(Hn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Yn}static get DefaultType(){return Xn}static get NAME(){return`dropdown`}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;let e={relatedTarget:this._element};if(!M.trigger(this._element,Pn,e).defaultPrevented){if(this._createPopper(),`ontouchstart`in document.documentElement&&!this._parent.closest(`.navbar-nav`))for(let e of[].concat(...document.body.children))M.on(e,`mouseover`,d);this._element.focus(),this._element.setAttribute(`aria-expanded`,!0),this._menu.classList.add(zn),this._element.classList.add(zn),M.trigger(this._element,Fn,e)}}hide(){if(l(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!M.trigger(this._element,Mn,e).defaultPrevented){if(`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))M.off(e,`mouseover`,d);this._popper&&this._popper.destroy(),this._menu.classList.remove(zn),this._element.classList.remove(zn),this._element.setAttribute(`aria-expanded`,`false`),oe.removeDataAttribute(this._menu,`popper`),M.trigger(this._element,Nn,e)}}_getConfig(e){if(typeof(e=super._getConfig(e)).reference==`object`&&!o(e.reference)&&typeof e.reference.getBoundingClientRect!=`function`)throw TypeError(`DROPDOWN: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(On===void 0)throw TypeError(`Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)`);let e=this._element;this._config.reference===`parent`?e=this._parent:o(this._config.reference)?e=s(this._config.reference):typeof this._config.reference==`object`&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=Dn(e,this._menu,t)}_isShown(){return this._menu.classList.contains(zn)}_getPlacement(){let e=this._parent;if(e.classList.contains(`dropend`))return qn;if(e.classList.contains(`dropstart`))return Jn;if(e.classList.contains(`dropup-center`))return`top`;if(e.classList.contains(`dropdown-center`))return`bottom`;let t=getComputedStyle(this._menu).getPropertyValue(`--bs-position`).trim()===`end`;return e.classList.contains(`dropup`)?t?Wn:Un:t?Kn:Gn}_detectNavbar(){return this._element.closest(`.navbar`)!==null}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`offset`,options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display===`static`)&&(oe.setDataAttribute(this._menu,`popper`,`static`),e.modifiers=[{name:`applyStyles`,enabled:!1}]),{...e,..._(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){let n=P.find(`.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)`,this._menu).filter(e=>c(e));n.length&&y(n,t,e===jn,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){let t=Zn.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===2||e.type===`keyup`&&e.key!==`Tab`)return;let t=P.find(Vn);for(let n of t){let t=Zn.getInstance(n);if(!t||!1===t._config.autoClose)continue;let r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||t._config.autoClose===`inside`&&!i||t._config.autoClose===`outside`&&i||t._menu.contains(e.target)&&(e.type===`keyup`&&e.key===`Tab`||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let a={relatedTarget:t._element};e.type===`click`&&(a.clickEvent=e),t._completeHide(a)}}static dataApiKeydownHandler(e){let t=/input|textarea/i.test(e.target.tagName),n=e.key===`Escape`,r=[`ArrowUp`,jn].includes(e.key);if(!r&&!n||t&&!n)return;e.preventDefault();let i=this.matches(Bn)?this:P.prev(this,Bn)[0]||P.next(this,Bn)[0]||P.findOne(Bn,e.delegateTarget.parentNode),a=Zn.getOrCreateInstance(i);if(r)return e.stopPropagation(),a.show(),void a._selectMenuItem(e);a._isShown()&&(e.stopPropagation(),a.hide(),i.focus())}}M.on(document,Ln,Bn,Zn.dataApiKeydownHandler),M.on(document,Ln,Hn,Zn.dataApiKeydownHandler),M.on(document,In,Zn.clearMenus),M.on(document,Rn,Zn.clearMenus),M.on(document,In,Bn,function(e){e.preventDefault(),Zn.getOrCreateInstance(this).toggle()}),g(Zn);let Qn=`backdrop`,$n=`show`,er=`mousedown.bs.${Qn}`,tr={className:`modal-backdrop`,clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:`body`},nr={className:`string`,clickCallback:`(function|null)`,isAnimated:`boolean`,isVisible:`boolean`,rootElement:`(element|string)`};class rr extends se{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return tr}static get DefaultType(){return nr}static get NAME(){return Qn}show(e){if(!this._config.isVisible)return void _(e);this._append();let t=this._getElement();this._config.isAnimated&&f(t),t.classList.add($n),this._emulateAnimation(()=>{_(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove($n),this._emulateAnimation(()=>{this.dispose(),_(e)})):_(e)}dispose(){this._isAppended&&=(M.off(this._element,er),this._element.remove(),!1)}_getElement(){if(!this._element){let e=document.createElement(`div`);e.className=this._config.className,this._config.isAnimated&&e.classList.add(`fade`),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=s(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),M.on(e,er,()=>{_(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){v(e,this._getElement(),this._config.isAnimated)}}let ir=`.bs.focustrap`,ar=`focusin${ir}`,or=`keydown.tab${ir}`,sr=`backward`,cr={autofocus:!0,trapElement:null},lr={autofocus:`boolean`,trapElement:`element`};class ur extends se{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return cr}static get DefaultType(){return lr}static get NAME(){return`focustrap`}activate(){this._isActive||=(this._config.autofocus&&this._config.trapElement.focus(),M.off(document,ir),M.on(document,ar,e=>this._handleFocusin(e)),M.on(document,or,e=>this._handleKeydown(e)),!0)}deactivate(){this._isActive&&(this._isActive=!1,M.off(document,ir))}_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let n=P.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===sr?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===`Tab`&&(this._lastTabNavDirection=e.shiftKey?sr:`forward`)}}let dr=`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,fr=`.sticky-top`,pr=`padding-right`,mr=`margin-right`;class hr{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,pr,t=>t+e),this._setElementAttributes(dr,pr,t=>t+e),this._setElementAttributes(fr,mr,t=>t-e)}reset(){this._resetElementAttributes(this._element,`overflow`),this._resetElementAttributes(this._element,pr),this._resetElementAttributes(dr,pr),this._resetElementAttributes(fr,mr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,`overflow`),this._element.style.overflow=`hidden`}_setElementAttributes(e,t,n){let r=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);let i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)})}_saveInitialAttribute(e,t){let n=e.style.getPropertyValue(t);n&&oe.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let n=oe.getDataAttribute(e,t);n===null?e.style.removeProperty(t):(oe.removeDataAttribute(e,t),e.style.setProperty(t,n))})}_applyManipulationCallback(e,t){if(o(e))t(e);else for(let n of P.find(e,this._element))t(n)}}let gr=`.bs.modal`,_r=`hide${gr}`,vr=`hidePrevented${gr}`,yr=`hidden${gr}`,br=`show${gr}`,xr=`shown${gr}`,Sr=`resize${gr}`,Cr=`click.dismiss${gr}`,wr=`mousedown.dismiss${gr}`,Tr=`keydown.dismiss${gr}`,Er=`click${gr}.data-api`,Dr=`modal-open`,Or=`show`,kr=`modal-static`,Ar={backdrop:!0,focus:!0,keyboard:!0},jr={backdrop:`(boolean|string)`,focus:`boolean`,keyboard:`boolean`};class Mr extends N{constructor(e,t){super(e,t),this._dialog=P.findOne(`.modal-dialog`,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new hr,this._addEventListeners()}static get Default(){return Ar}static get DefaultType(){return jr}static get NAME(){return`modal`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||M.trigger(this._element,br,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Dr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(M.trigger(this._element,_r).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Or),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){M.off(window,gr),M.off(this._dialog,gr),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new rr({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ur({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display=`block`,this._element.removeAttribute(`aria-hidden`),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.scrollTop=0;let t=P.findOne(`.modal-body`,this._dialog);t&&(t.scrollTop=0),f(this._element),this._element.classList.add(Or),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,M.trigger(this._element,xr,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){M.on(this._element,Tr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),M.on(window,Sr,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),M.on(this._element,wr,e=>{M.one(this._element,Cr,t=>{this._element===e.target&&this._element===t.target&&(this._config.backdrop===`static`?this._triggerBackdropTransition():this._config.backdrop&&this.hide())})})}_hideModal(){this._element.style.display=`none`,this._element.setAttribute(`aria-hidden`,!0),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Dr),this._resetAdjustments(),this._scrollBar.reset(),M.trigger(this._element,yr)})}_isAnimated(){return this._element.classList.contains(`fade`)}_triggerBackdropTransition(){if(M.trigger(this._element,vr).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;t===`hidden`||this._element.classList.contains(kr)||(e||(this._element.style.overflowY=`hidden`),this._element.classList.add(kr),this._queueCallback(()=>{this._element.classList.remove(kr),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=h()?`paddingLeft`:`paddingRight`;this._element.style[e]=`${t}px`}if(!n&&e){let e=h()?`paddingRight`:`paddingLeft`;this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft=``,this._element.style.paddingRight=``}static jQueryInterface(e,t){return this.each(function(){let n=Mr.getOrCreateInstance(this,e);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e](t)}})}}M.on(document,Er,`[data-bs-toggle="modal"]`,function(e){let t=P.getElementFromSelector(this);[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),M.one(t,br,e=>{e.defaultPrevented||M.one(t,yr,()=>{c(this)&&this.focus()})});let n=P.findOne(`.modal.show`);n&&Mr.getInstance(n).hide(),Mr.getOrCreateInstance(t).toggle(this)}),le(Mr),g(Mr);let Nr=`.bs.offcanvas`,Pr=`.data-api`,Fr=`load${Nr}${Pr}`,Ir=`show`,Lr=`showing`,Rr=`hiding`,zr=`.offcanvas.show`,Br=`show${Nr}`,Vr=`shown${Nr}`,Hr=`hide${Nr}`,Ur=`hidePrevented${Nr}`,Wr=`hidden${Nr}`,Gr=`resize${Nr}`,Kr=`click${Nr}${Pr}`,qr=`keydown.dismiss${Nr}`,Jr={backdrop:!0,keyboard:!0,scroll:!1},Yr={backdrop:`(boolean|string)`,keyboard:`boolean`,scroll:`boolean`};class Xr extends N{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Jr}static get DefaultType(){return Yr}static get NAME(){return`offcanvas`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||M.trigger(this._element,Br,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new hr().hide(),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.classList.add(Lr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ir),this._element.classList.remove(Lr),M.trigger(this._element,Vr,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(M.trigger(this._element,Hr).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Rr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ir,Rr),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._config.scroll||new hr().reset(),M.trigger(this._element,Wr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=!!this._config.backdrop;return new rr({className:`offcanvas-backdrop`,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{this._config.backdrop===`static`?M.trigger(this._element,Ur):this.hide()}:null})}_initializeFocusTrap(){return new ur({trapElement:this._element})}_addEventListeners(){M.on(this._element,qr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():M.trigger(this._element,Ur))})}static jQueryInterface(e){return this.each(function(){let t=Xr.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}M.on(document,Kr,`[data-bs-toggle="offcanvas"]`,function(e){let t=P.getElementFromSelector(this);if([`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this))return;M.one(t,Wr,()=>{c(this)&&this.focus()});let n=P.findOne(zr);n&&n!==t&&Xr.getInstance(n).hide(),Xr.getOrCreateInstance(t).toggle(this)}),M.on(window,Fr,()=>{for(let e of P.find(zr))Xr.getOrCreateInstance(e).show()}),M.on(window,Gr,()=>{for(let e of P.find(`[aria-modal][class*=show][class*=offcanvas-]`))getComputedStyle(e).position!==`fixed`&&Xr.getOrCreateInstance(e).hide()}),le(Xr),g(Xr);let Zr={"*":[`class`,`dir`,`id`,`lang`,`role`,/^aria-[\w-]*$/i],a:[`target`,`href`,`title`,`rel`],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:[`src`,`srcset`,`alt`,`title`,`width`,`height`],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Qr=new Set([`background`,`cite`,`href`,`itemtype`,`longdesc`,`poster`,`src`,`xlink:href`]),$r=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,ei=(e,t)=>{let n=e.nodeName.toLowerCase();return t.includes(n)?!Qr.has(n)||!!$r.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))},ti={allowList:Zr,content:{},extraClass:``,html:!1,sanitize:!0,sanitizeFn:null,template:`<div></div>`},ni={allowList:`object`,content:`object`,extraClass:`(string|function)`,html:`boolean`,sanitize:`boolean`,sanitizeFn:`(null|function)`,template:`string`},ri={entry:`(string|element|function|null)`,selector:`(string|element)`};class ii extends se{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return ti}static get DefaultType(){return ni}static get NAME(){return`TemplateFactory`}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement(`div`);e.innerHTML=this._maybeSanitize(this._config.template);for(let[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);let t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(` `)),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},ri)}_setContent(e,t,n){let r=P.findOne(n,e);r&&((t=this._resolvePossibleFunction(t))?o(t)?this._putElementInTemplate(s(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&typeof n==`function`)return n(e);let r=new window.DOMParser().parseFromString(e,`text/html`),i=[].concat(...r.body.querySelectorAll(`*`));for(let e of i){let n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}let r=[].concat(...e.attributes),i=[].concat(t[`*`]||[],t[n]||[]);for(let t of r)ei(t,i)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return _(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML=``,void t.append(e);t.textContent=e.textContent}}let ai=new Set([`sanitize`,`allowList`,`sanitizeFn`]),oi=`fade`,si=`show`,ci=`.modal`,li=`hide.bs.modal`,ui=`hover`,di=`focus`,fi=`click`,pi={AUTO:`auto`,TOP:`top`,RIGHT:h()?`left`:`right`,BOTTOM:`bottom`,LEFT:h()?`right`:`left`},mi={allowList:Zr,animation:!0,boundary:`clippingParents`,container:!1,customClass:``,delay:0,fallbackPlacements:[`top`,`right`,`bottom`,`left`],html:!1,offset:[0,6],placement:`top`,popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:`<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,title:``,trigger:`hover focus`},hi={allowList:`object`,animation:`boolean`,boundary:`(string|element)`,container:`(string|element|boolean)`,customClass:`(string|function)`,delay:`(number|object)`,fallbackPlacements:`array`,html:`boolean`,offset:`(array|string|function)`,placement:`(string|function)`,popperConfig:`(null|object|function)`,sanitize:`boolean`,sanitizeFn:`(null|function)`,selector:`(string|boolean)`,template:`string`,title:`(string|element|function)`,trigger:`string`};class gi extends N{constructor(e,t){if(On===void 0)throw TypeError(`Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)`);super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return mi}static get DefaultType(){return hi}static get NAME(){return`tooltip`}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),M.off(this._element.closest(ci),li,this._hideModalHandler),this._element.getAttribute(`data-bs-original-title`)&&this._element.setAttribute(`title`,this._element.getAttribute(`data-bs-original-title`)),this._disposePopper(),super.dispose()}show(){if(this._element.style.display===`none`)throw Error(`Please use show on visible elements`);if(!this._isWithContent()||!this._isEnabled)return;let e=M.trigger(this._element,this.constructor.eventName(`show`)),t=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();let n=this._getTipElement();this._element.setAttribute(`aria-describedby`,n.getAttribute(`id`));let{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),M.trigger(this._element,this.constructor.eventName(`inserted`))),this._popper=this._createPopper(n),n.classList.add(si),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))M.on(e,`mouseover`,d);this._queueCallback(()=>{M.trigger(this._element,this.constructor.eventName(`shown`)),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!M.trigger(this._element,this.constructor.eventName(`hide`)).defaultPrevented){if(this._getTipElement().classList.remove(si),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))M.off(e,`mouseover`,d);this._activeTrigger[fi]=!1,this._activeTrigger[di]=!1,this._activeTrigger[ui]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute(`aria-describedby`),M.trigger(this._element,this.constructor.eventName(`hidden`)))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||=this._createTipElement(this._newContent||this._getContentForTemplate()),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(oi,si),t.classList.add(`bs-${this.constructor.NAME}-auto`);let n=(e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute(`id`,n),this._isAnimated()&&t.classList.add(oi),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ii({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute(`data-bs-original-title`)}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(oi)}_isShown(){return this.tip&&this.tip.classList.contains(si)}_createPopper(e){let t=pi[_(this._config.placement,[this,e,this._element]).toUpperCase()];return Dn(this._element,e,this._getPopperConfig(t))}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_resolvePossibleFunction(e){return _(e,[this._element,this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:`flip`,options:{fallbackPlacements:this._config.fallbackPlacements}},{name:`offset`,options:{offset:this._getOffset()}},{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`arrow`,options:{element:`.${this.constructor.NAME}-arrow`}},{name:`preSetPlacement`,enabled:!0,phase:`beforeMain`,fn:e=>{this._getTipElement().setAttribute(`data-popper-placement`,e.state.placement)}}]};return{...t,..._(this._config.popperConfig,[void 0,t])}}_setListeners(){let e=this._config.trigger.split(` `);for(let t of e)if(t===`click`)M.on(this._element,this.constructor.eventName(`click`),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[fi]=!(t._isShown()&&t._activeTrigger[fi]),t.toggle()});else if(t!==`manual`){let e=t===ui?this.constructor.eventName(`mouseenter`):this.constructor.eventName(`focusin`),n=t===ui?this.constructor.eventName(`mouseleave`):this.constructor.eventName(`focusout`);M.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusin`?di:ui]=!0,t._enter()}),M.on(this._element,n,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusout`?di:ui]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},M.on(this._element.closest(ci),li,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute(`title`);e&&(this._element.getAttribute(`aria-label`)||this._element.textContent.trim()||this._element.setAttribute(`aria-label`,e),this._element.setAttribute(`data-bs-original-title`,e),this._element.removeAttribute(`title`))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=oe.getDataAttributes(this._element);for(let e of Object.keys(t))ai.has(e)&&delete t[e];return e={...t,...typeof e==`object`&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:s(e.container),typeof e.delay==`number`&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title==`number`&&(e.title=e.title.toString()),typeof e.content==`number`&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger=`manual`,e}_disposePopper(){this._popper&&=(this._popper.destroy(),null),this.tip&&=(this.tip.remove(),null)}static jQueryInterface(e){return this.each(function(){let t=gi.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(gi);let _i={...gi.Default,content:``,offset:[0,8],placement:`right`,template:`<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,trigger:`click`},vi={...gi.DefaultType,content:`(null|string|element|function)`};class yi extends gi{static get Default(){return _i}static get DefaultType(){return vi}static get NAME(){return`popover`}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){let t=yi.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(yi);let bi=`.bs.scrollspy`,xi=`activate${bi}`,Si=`click${bi}`,Ci=`load${bi}.data-api`,wi=`active`,Ti=`[href]`,Ei=`.nav-link`,Di=`${Ei}, .nav-item > ${Ei}, .list-group-item`,Oi={offset:null,rootMargin:`0px 0px -25%`,smoothScroll:!1,target:null,threshold:[.1,.5,1]},ki={offset:`(number|null)`,rootMargin:`string`,smoothScroll:`boolean`,target:`element`,threshold:`array`};class Ai extends N{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY===`visible`?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Oi}static get DefaultType(){return ki}static get NAME(){return`scrollspy`}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=s(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold==`string`&&(e.threshold=e.threshold.split(`,`).map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(M.off(this._config.target,Si),M.on(this._config.target,Si,Ti,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:`smooth`});n.scrollTop=r}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(let a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}let e=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(a),!r)return}else i||e||n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=P.find(Ti,this._config.target);for(let t of e){if(!t.hash||l(t))continue;let e=P.findOne(decodeURI(t.hash),this._element);c(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(wi),this._activateParents(e),M.trigger(this._element,xi,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(`dropdown-item`))P.findOne(`.dropdown-toggle`,e.closest(`.dropdown`)).classList.add(wi);else for(let t of P.parents(e,`.nav, .list-group`))for(let e of P.prev(t,Di))e.classList.add(wi)}_clearActiveClass(e){e.classList.remove(wi);let t=P.find(`${Ti}.${wi}`,e);for(let e of t)e.classList.remove(wi)}static jQueryInterface(e){return this.each(function(){let t=Ai.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}M.on(window,Ci,()=>{for(let e of P.find(`[data-bs-spy="scroll"]`))Ai.getOrCreateInstance(e)}),g(Ai);let W=`.bs.tab`,G=`hide${W}`,ji=`hidden${W}`,Mi=`show${W}`,Ni=`shown${W}`,Pi=`click${W}`,K=`keydown${W}`,Fi=`load${W}`,Ii=`ArrowRight`,Li=`ArrowDown`,Ri=`Home`,zi=`active`,q=`fade`,J=`show`,Bi=`.dropdown-toggle`,Vi=`:not(${Bi})`,Hi=`[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]`,Ui=`.nav-link${Vi}, .list-group-item${Vi}, [role="tab"]${Vi}, ${Hi}`,Wi=`.${zi}[data-bs-toggle="tab"], .${zi}[data-bs-toggle="pill"], .${zi}[data-bs-toggle="list"]`;class Y extends N{constructor(e){super(e),this._parent=this._element.closest(`.list-group, .nav, [role="tablist"]`),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),M.on(this._element,K,e=>this._keydown(e)))}static get NAME(){return`tab`}show(){let e=this._element;if(this._elemIsActive(e))return;let t=this._getActiveElem(),n=t?M.trigger(t,G,{relatedTarget:e}):null;M.trigger(e,Mi,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(zi),this._activate(P.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.removeAttribute(`tabindex`),e.setAttribute(`aria-selected`,!0),this._toggleDropDown(e,!0),M.trigger(e,Ni,{relatedTarget:t})):e.classList.add(J)},e,e.classList.contains(q)))}_deactivate(e,t){e&&(e.classList.remove(zi),e.blur(),this._deactivate(P.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.setAttribute(`aria-selected`,!1),e.setAttribute(`tabindex`,`-1`),this._toggleDropDown(e,!1),M.trigger(e,ji,{relatedTarget:t})):e.classList.remove(J)},e,e.classList.contains(q)))}_keydown(e){if(![`ArrowLeft`,Ii,`ArrowUp`,Li,Ri,`End`].includes(e.key))return;e.stopPropagation(),e.preventDefault();let t=this._getChildren().filter(e=>!l(e)),n;if([Ri,`End`].includes(e.key))n=t[e.key===Ri?0:t.length-1];else{let r=[Ii,Li].includes(e.key);n=y(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Y.getOrCreateInstance(n).show())}_getChildren(){return P.find(Ui,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,`role`,`tablist`);for(let e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute(`aria-selected`,t),n!==e&&this._setAttributeIfNotExists(n,`role`,`presentation`),t||e.setAttribute(`tabindex`,`-1`),this._setAttributeIfNotExists(e,`role`,`tab`),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=P.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,`role`,`tabpanel`),e.id&&this._setAttributeIfNotExists(t,`aria-labelledby`,`${e.id}`))}_toggleDropDown(e,t){let n=this._getOuterElement(e);if(!n.classList.contains(`dropdown`))return;let r=(e,r)=>{let i=P.findOne(e,n);i&&i.classList.toggle(r,t)};r(Bi,zi),r(`.dropdown-menu`,J),n.setAttribute(`aria-expanded`,t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(zi)}_getInnerElement(e){return e.matches(Ui)?e:P.findOne(Ui,e)}_getOuterElement(e){return e.closest(`.nav-item, .list-group-item`)||e}static jQueryInterface(e){return this.each(function(){let t=Y.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}M.on(document,Pi,Hi,function(e){[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this)||Y.getOrCreateInstance(this).show()}),M.on(window,Fi,()=>{for(let e of P.find(Wi))Y.getOrCreateInstance(e)}),g(Y);let Gi=`.bs.toast`,Ki=`mouseover${Gi}`,qi=`mouseout${Gi}`,Ji=`focusin${Gi}`,Yi=`focusout${Gi}`,Xi=`hide${Gi}`,Zi=`hidden${Gi}`,Qi=`show${Gi}`,$i=`shown${Gi}`,ea=`hide`,ta=`show`,na=`showing`,ra={animation:`boolean`,autohide:`boolean`,delay:`number`},ia={animation:!0,autohide:!0,delay:5e3};class aa extends N{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ia}static get DefaultType(){return ra}static get NAME(){return`toast`}show(){M.trigger(this._element,Qi).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add(`fade`),this._element.classList.remove(ea),f(this._element),this._element.classList.add(ta,na),this._queueCallback(()=>{this._element.classList.remove(na),M.trigger(this._element,$i),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(M.trigger(this._element,Xi).defaultPrevented||(this._element.classList.add(na),this._queueCallback(()=>{this._element.classList.add(ea),this._element.classList.remove(na,ta),M.trigger(this._element,Zi)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ta),super.dispose()}isShown(){return this._element.classList.contains(ta)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case`mouseover`:case`mouseout`:this._hasMouseInteraction=t;break;case`focusin`:case`focusout`:this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();let n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){M.on(this._element,Ki,e=>this._onInteraction(e,!0)),M.on(this._element,qi,e=>this._onInteraction(e,!1)),M.on(this._element,Ji,e=>this._onInteraction(e,!0)),M.on(this._element,Yi,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){let t=aa.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e](this)}})}}return le(aa),g(aa),{Alert:pe,Button:he,Carousel:Ve,Collapse:et,Dropdown:Zn,Modal:Mr,Offcanvas:Xr,Popover:yi,ScrollSpy:Ai,Tab:Y,Toast:aa,Tooltip:gi}})}))();var Eo=typeof document<`u`;function Do(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Oo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Do(e.default)}var Z=Object.assign;function ko(e,t){let n={};for(let r in t){let i=t[r];n[r]=jo(i)?i.map(e):e(i)}return n}var Ao=()=>{},jo=Array.isArray;function Mo(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var No=/#/g,Po=/&/g,Fo=/\//g,Io=/=/g,Lo=/\?/g,Ro=/\+/g,zo=/%5B/g,Bo=/%5D/g,Vo=/%5E/g,Ho=/%60/g,Uo=/%7B/g,Wo=/%7C/g,Go=/%7D/g,Ko=/%20/g;function qo(e){return e==null?``:encodeURI(``+e).replace(Wo,`|`).replace(zo,`[`).replace(Bo,`]`)}function Jo(e){return qo(e).replace(Uo,`{`).replace(Go,`}`).replace(Vo,`^`)}function Yo(e){return qo(e).replace(Ro,`%2B`).replace(Ko,`+`).replace(No,`%23`).replace(Po,`%26`).replace(Ho,"`").replace(Uo,`{`).replace(Go,`}`).replace(Vo,`^`)}function Xo(e){return Yo(e).replace(Io,`%3D`)}function Zo(e){return qo(e).replace(No,`%23`).replace(Lo,`%3F`)}function Qo(e){return Zo(e).replace(Fo,`%2F`)}function $o(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var es=/\/$/,ts=e=>e.replace(es,``);function ns(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=us(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:$o(o)}}function rs(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function is(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function as(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&os(t.matched[r],n.matched[i])&&ss(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function os(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ss(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!cs(e[n],t[n]))return!1;return!0}function cs(e,t){return jo(e)?ls(e,t):jo(t)?ls(t,e):e?.valueOf()===t?.valueOf()}function ls(e,t){return jo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function us(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var ds={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},fs=function(e){return e.pop=`pop`,e.push=`push`,e}({}),ps=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function ms(e){if(!e)if(Eo){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),ts(e)}var hs=/^[^#]+#/;function gs(e,t){return e.replace(hs,`#`)+t}function _s(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var vs=()=>({left:window.scrollX,top:window.scrollY});function ys(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=_s(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function bs(e,t){return(history.state?history.state.position-t:-1)+e}var xs=new Map;function Ss(e,t){xs.set(e,t)}function Cs(e){let t=xs.get(e);return xs.delete(e),t}function ws(e){return typeof e==`string`||e&&typeof e==`object`}function Ts(e){return typeof e==`string`||typeof e==`symbol`}var Q=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Es=Symbol(``);Q.MATCHER_NOT_FOUND,Q.NAVIGATION_GUARD_REDIRECT,Q.NAVIGATION_ABORTED,Q.NAVIGATION_CANCELLED,Q.NAVIGATION_DUPLICATED;function Ds(e,t){return Z(Error(),{type:e,[Es]:!0},t)}function Os(e,t){return e instanceof Error&&Es in e&&(t==null||!!(e.type&t))}function ks(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Ro,` `),i=r.indexOf(`=`),a=$o(i<0?r:r.slice(0,i)),o=i<0?null:$o(r.slice(i+1));if(a in t){let e=t[a];jo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function As(e){let t=``;for(let n in e){let r=e[n];if(n=Xo(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(jo(r)?r.map(e=>e&&Yo(e)):[r&&Yo(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function js(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=jo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Ms=Symbol(``),Ns=Symbol(``),Ps=Symbol(``),Fs=Symbol(``),Is=Symbol(``);function Ls(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Rs(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Ds(Q.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):ws(e)?c(Ds(Q.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function zs(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Do(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Rs(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Oo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Rs(c,n,r,o,e,i)()}))}}return a}function Bs(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>os(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>os(e,s))||i.push(s))}return[n,r,i]}var Vs=()=>location.protocol+`//`+location.host;function Hs(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),is(n,``)}return is(n,e)+r+i}function Us(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Hs(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:fs.pop,direction:u?u>0?ps.forward:ps.back:ps.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(Z({},e.state,{scroll:vs()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Ws(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?vs():null}}function Gs(e){let{history:t,location:n}=window,r={value:Hs(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Vs()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Z({},t.state,Ws(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Z({},i.value,t.state,{forward:e,scroll:vs()});a(o.current,o,!0),a(e,Z({},Ws(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Ks(e){e=ms(e);let t=Gs(e),n=Us(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Z({location:``,base:e,go:r,createHref:gs.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var qs=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),$=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}($||{}),Js={type:qs.Static,value:``},Ys=/[a-zA-Z0-9_]/;function Xs(e){if(!e)return[[]];if(e===`/`)return[[Js]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=$.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===$.Static?a.push({type:qs.Static,value:l}):n===$.Param||n===$.ParamRegExp||n===$.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:qs.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==$.ParamRegExp){r=n,n=$.EscapeNext;continue}switch(n){case $.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=$.Param):f();break;case $.EscapeNext:f(),n=r;break;case $.Param:c===`(`?n=$.ParamRegExp:Ys.test(c)?f():(d(),n=$.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case $.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=$.ParamRegExpEnd:u+=c;break;case $.ParamRegExpEnd:d(),n=$.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===$.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Zs=`[^/]+?`,Qs={sensitive:!1,strict:!1,start:!0,end:!0},$s=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}($s||{}),ec=/[.+*?^${}()[\]/\\]/g;function tc(e,t){let n=Z({},Qs,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[$s.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=$s.Segment+(n.sensitive?$s.BonusCaseSensitive:0);if(o.type===qs.Static)r||(i+=`/`),i+=o.value.replace(ec,`\\$&`),s+=$s.Static;else if(o.type===qs.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Zs;if(u!==Zs){s+=$s.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=$s.Dynamic,c&&(s+=$s.BonusOptional),n&&(s+=$s.BonusRepeatable),u===`.*`&&(s+=$s.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=$s.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===qs.Static)n+=e.value;else if(e.type===qs.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(jo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=jo(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function nc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===$s.Static+$s.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$s.Static+$s.Segment?1:-1:0}function rc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=nc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(ic(r))return 1;if(ic(i))return-1}return i.length-r.length}function ic(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var ac={strict:!1,end:!0,sensitive:!1};function oc(e,t,n){let r=Z(tc(Xs(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function sc(e,t){let n=[],r=new Map;t=Mo(ac,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=lc(e);s.aliasOf=r&&r.record;let l=Mo(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(lc(Z({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=oc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!dc(d)&&o(e.name)),hc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Ao}function o(e){if(Ts(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=pc(e,n);n.splice(t,0,e),e.record.name&&!dc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Ds(Q.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=Z(cc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&cc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Ds(Q.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=Z({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:fc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function cc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function lc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:uc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function uc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function dc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fc(e){return e.reduce((e,t)=>Z(e,t.meta),{})}function pc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;rc(e,t[i])<0?r=i:n=i+1}let i=mc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function mc(e){let t=e;for(;t=t.parent;)if(hc(t)&&rc(e,t)===0)return t}function hc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function gc(e){let t=En(Ps),n=En(Fs),r=X(()=>{let n=U(e.to);return t.resolve(n)}),i=X(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(os.bind(null,i));if(o>-1)return o;let s=xc(e[t-2]);return t>1&&xc(i)===s&&a[a.length-1].path!==s?a.findIndex(os.bind(null,e[t-2])):o}),a=X(()=>i.value>-1&&bc(n.params,r.value.params)),o=X(()=>i.value>-1&&i.value===n.matched.length-1&&ss(n.params,r.value.params));function s(n={}){if(yc(n)){let n=t[U(e.replace)?`replace`:`push`](U(e.to)).catch(Ao);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:X(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function _c(e){return e.length===1?e[0]:e}var vc=Ln({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:gc,setup(e,{slots:t}){let n=Ot(gc(e)),{options:r}=En(Ps),i=X(()=>({[Sc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Sc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&_c(t.default(n));return e.custom?r:va(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function yc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!jo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function xc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Sc=(e,t,n)=>e??t??n,Cc=Ln({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=En(Is),i=X(()=>e.route||r.value),a=En(Ns,0),o=X(()=>{let e=U(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=X(()=>i.value.matched[o.value]);Tn(Ns,X(()=>o.value+1)),Tn(Ms,s),Tn(Is,i);let c=H();return kn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!os(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return wc(n.default,{Component:l,route:r});let u=o.props[a],d=va(l,Z({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return wc(n.default,{Component:d,route:r})||d}}});function wc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Tc=Cc;function Ec(e){let t=sc(e.routes,e),n=e.parseQuery||ks,r=e.stringifyQuery||As,i=e.history,a=Ls(),o=Ls(),s=Ls(),c=zt(ds),l=ds;Eo&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=ko.bind(null,e=>``+e),d=ko.bind(null,Qo),f=ko.bind(null,$o);function p(e,n){let r,i;return Ts(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=Z({},a||c.value),typeof e==`string`){let r=ns(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Z(r,o,{params:f(o.params),hash:$o(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=Z({},e,{path:ns(n,e.path,a.path).path});else{let t=Z({},e.params);for(let e in t)t[e]??delete t[e];o=Z({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=rs(r,Z({},e,{hash:Jo(l),path:s.path})),m=i.createHref(p);return Z({fullPath:p,hash:l,query:r===As?js(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ns(n,e,c.value.path):Z({},e)}function y(e,t){if(l!==e)return Ds(Q.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(Z(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),Z({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(Z(v(u),{state:typeof u==`object`?Z({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&as(r,i,n)&&(f=Ds(Q.NAVIGATION_DUPLICATED,{to:d,from:i}),ie(i,i,!0,!1)),(f?Promise.resolve(f):E(d,i)).catch(e=>Os(e)?Os(e,Q.NAVIGATION_GUARD_REDIRECT)?e:re(e):j(e,d,i)).then(e=>{if(e){if(Os(e,Q.NAVIGATION_GUARD_REDIRECT))return C(Z({replace:s},v(e.to),{state:typeof e.to==`object`?Z({},a,e.to.state):a,force:o}),t||d)}else e=ee(d,i,!0,s,a);return D(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=se.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function E(e,t){let n,[r,i,s]=Bs(e,t);n=zs(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Rs(r,e,t))});let c=w.bind(null,e,t);return n.push(c),ce(n).then(()=>{n=[];for(let r of a.list())n.push(Rs(r,e,t));return n.push(c),ce(n)}).then(()=>{n=zs(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Rs(r,e,t))});return n.push(c),ce(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(jo(r.beforeEnter))for(let i of r.beforeEnter)n.push(Rs(i,e,t));else n.push(Rs(r.beforeEnter,e,t));return n.push(c),ce(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=zs(s,`beforeRouteEnter`,e,t,T),n.push(c),ce(n))).then(()=>{n=[];for(let r of o.list())n.push(Rs(r,e,t));return n.push(c),ce(n)}).catch(e=>Os(e,Q.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function D(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function ee(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===ds,l=Eo?history.state:{};n&&(r||s?i.replace(e.fullPath,Z({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ie(e,t,n,s),re()}let O;function te(){O||=i.listen((e,t,n)=>{if(!N.listening)return;let r=_(e),a=S(r,N.currentRoute.value);if(a){C(Z(a,{replace:!0,force:!0}),r).catch(Ao);return}l=r;let o=c.value;Eo&&Ss(bs(o.fullPath,n.delta),vs()),E(r,o).catch(e=>Os(e,Q.NAVIGATION_ABORTED|Q.NAVIGATION_CANCELLED)?e:Os(e,Q.NAVIGATION_GUARD_REDIRECT)?(C(Z(v(e.to),{force:!0}),r).then(e=>{Os(e,Q.NAVIGATION_ABORTED|Q.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===fs.pop&&i.go(-1,!1)}).catch(Ao),Promise.reject()):(n.delta&&i.go(-n.delta,!1),j(e,r,o))).then(e=>{e||=ee(r,o,!1),e&&(n.delta&&!Os(e,Q.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===fs.pop&&Os(e,Q.NAVIGATION_ABORTED|Q.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),D(r,o,e)}).catch(Ao)})}let k=Ls(),A=Ls(),ne;function j(e,t,n){re(e);let r=A.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function M(){return ne&&c.value!==ds?Promise.resolve():new Promise((e,t)=>{k.add([e,t])})}function re(e){return ne||(ne=!e,te(),k.list().forEach(([t,n])=>e?n(e):t()),k.reset()),e}function ie(t,n,r,i){let{scrollBehavior:a}=e;if(!Eo||!a)return Promise.resolve();let o=!r&&Cs(bs(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return un().then(()=>a(t,n,o)).then(e=>e&&ys(e)).catch(e=>j(e,t,n))}let ae=e=>i.go(e),oe,se=new Set,N={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:A.add,isReady:M,install(e){e.component(`RouterLink`,vc),e.component(`RouterView`,Tc),e.config.globalProperties.$router=N,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>U(c)}),Eo&&!oe&&c.value===ds&&(oe=!0,b(i.location).catch(e=>{}));let t={};for(let e in ds)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Ps,N),e.provide(Fs,kt(t)),e.provide(Is,c);let n=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(l=ds,O&&O(),O=null,c.value=ds,oe=!1,ne=!1),n()}}};function ce(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return N}function Dc(){return En(Ps)}function Oc(e){return En(Fs)}var kc=(e=>e.replace(/\/+$/,``))(`/glpi`),Ac=`lB8FPEEslAhsUYQp79DhTVi7GhP7d7gvFt85bRBZ`;console.log(`🔍 Debug env:`,{baseUrl:kc,appToken:Ac,fullEnv:{BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_GLPI_API_BASE_URL:`/glpi`,VITE_GLPI_API_KEY:`lB8FPEEslAhsUYQp79DhTVi7GhP7d7gvFt85bRBZ`,VITE_SQLITE_API_BASE_URL:`/api`}});var jc=e=>{if(!kc)throw Error(`VITE_GLPI_API_BASE_URL manquante dans le fichier .env`);return e.startsWith(`http://`)||e.startsWith(`https://`)?e:`${kc}${e.startsWith(`/`)?e:`/${e}`}`},Mc=async e=>{let t=(e.headers.get(`content-type`)||``).includes(`application/json`)?await e.json():await e.text();return{ok:e.ok,status:e.status,statusText:e.statusText,headers:Object.fromEntries(e.headers.entries()),data:t}},Nc=(e,t)=>{let n=`${e}:${t}`;return typeof btoa==`function`?btoa(unescape(encodeURIComponent(n))):Buffer.from(n,`utf-8`).toString(`base64`)},Pc=()=>{let e=async(e,{method:t=`GET`,body:n,sessionToken:r,userToken:i,credentials:a}={})=>{let o=jc(e),s={Accept:`application/json`};s[`App-Token`]=Ac,r&&(s[`Session-Token`]=r),i&&(s.Authorization=`user_token ${i}`),a?.login&&(s.Authorization=`Basic ${Nc(a.login,a.password||``)}`);let c;return n!==void 0&&t!==`GET`&&(s[`Content-Type`]=`application/json`,c=JSON.stringify(n)),{url:o,requestHeaders:s,...await Mc(await fetch(o,{method:t,headers:s,body:c}))}};return{baseUrl:kc,appToken:Ac,request:e,initSession:t=>e(`/initSession`,{method:`GET`,userToken:t}),initSessionWithCredentials:(t,n)=>e(`/initSession`,{method:`GET`,credentials:{login:t,password:n}}),killSession:t=>e(`/killSession`,{method:`GET`,sessionToken:t}),getFullSession:t=>e(`/getFullSession`,{method:`GET`,sessionToken:t})}},Fc=`glpi.auth.session`,Ic=Ot((()=>{try{let e=localStorage.getItem(Fc);if(!e)return{sessionToken:``,user:null};let t=JSON.parse(e);return{sessionToken:t.sessionToken||``,user:t.user||null}}catch{return{sessionToken:``,user:null}}})()),Lc=()=>{try{localStorage.setItem(Fc,JSON.stringify({sessionToken:Ic.sessionToken,user:Ic.user}))}catch{}},Rc=X(()=>!!Ic.sessionToken),zc=(e,t=null)=>{Ic.sessionToken=e||``,Ic.user=t,Lc()},Bc=()=>{Ic.sessionToken=``,Ic.user=null;try{localStorage.removeItem(Fc)}catch{}},Vc=At(Ic),Hc=()=>{let e=Pc(),t=H(``),n=H(``),r=H(``),i=H(!1),a=X(()=>!e.baseUrl||!e.appToken),o=async t=>{try{let n=await e.getFullSession(t);if(n.ok&&n.data?.session){let e=n.data.session;return{id:e.glpiID??null,name:e.glpifriendlyname||e.glpiname||`Utilisateur`,activeProfile:e.glpiactiveprofile?.name||``,entity:e.glpiactive_entity_name||``}}}catch{}return null};return{login:t,password:n,errorText:r,loading:i,missingConfig:a,isAuthenticated:Rc,authState:Vc,signIn:async()=>{if(r.value=``,a.value)return r.value=`Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.`,!1;if(!t.value.trim()||!n.value)return r.value=`Renseigne ton identifiant et ton mot de passe.`,!1;i.value=!0;try{let i=await e.initSessionWithCredentials(t.value.trim(),n.value);if(!i.ok||!i.data?.session_token)return r.value=Uc(i.data)||`Echec de la connexion (${i.status} ${i.statusText}).`,!1;let a=i.data.session_token;return zc(a,await o(a)),n.value=``,!0}catch(e){return r.value=e?.message||`Erreur reseau pendant la connexion.`,!1}finally{i.value=!1}},signOut:async()=>{let t=Vc.sessionToken;if(t)try{await e.killSession(t)}catch{}Bc()}}},Uc=e=>Array.isArray(e)&&e.length>1?e[1]:e?.message?e.message:``,Wc=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Gc={class:`navbar navbar-expand bg-white border-bottom px-3 px-lg-4 py-2`},Kc={class:`container-fluid p-0`},qc={class:`d-flex align-items-center gap-3 ms-auto`},Jc={class:`dropdown`},Yc={class:`btn d-flex align-items-center gap-2 dropdown-toggle`,type:`button`,"data-bs-toggle":`dropdown`,"aria-expanded":`false`},Xc={class:`avatar d-inline-flex align-items-center justify-content-center`},Zc={class:`text-start d-none d-sm-block lh-sm`},Qc={class:`d-block fw-semibold small`},$c={class:`d-block text-muted`,style:{"font-size":`0.75rem`}},el={class:`dropdown-menu dropdown-menu-end shadow-sm`},tl={class:`dropdown-item-text small text-muted`},nl=Wc({__name:`HeaderBar`,setup(e){let t=Dc(),{authState:n,signOut:r}=Hc(),i=X(()=>n.user?.name||`Utilisateur`),a=X(()=>n.user?.activeProfile||`GLPI`),o=X(()=>i.value.split(` `).map(e=>e.charAt(0)).join(``).slice(0,2).toUpperCase()),s=async()=>{await r(),t.push({name:`login`})};return(e,t)=>(G(),K(`header`,Gc,[q(`div`,Kc,[t[3]||=q(`span`,{class:`navbar-brand fw-semibold mb-0 d-none d-md-inline`},` Console d'administration `,-1),q(`div`,qc,[q(`div`,Jc,[q(`button`,Yc,[q(`span`,Xc,F(o.value),1),q(`span`,Zc,[q(`span`,Qc,F(i.value),1),q(`span`,$c,F(a.value),1)])]),q(`ul`,el,[q(`li`,null,[q(`span`,tl,[t[0]||=Ui(` Connecte en tant que `,-1),q(`strong`,null,F(i.value),1)])]),t[2]||=q(`li`,null,[q(`hr`,{class:`dropdown-divider`})],-1),q(`li`,null,[q(`button`,{class:`dropdown-item text-danger`,type:`button`,onClick:s},[...t[1]||=[q(`i`,{class:`bi bi-box-arrow-right me-2`},null,-1),Ui(`Se deconnecter `,-1)]])])])])])])]))}},[[`__scopeId`,`data-v-a969308e`]]),rl=[{title:`Tableau de bord`,items:[{key:`glpi`,label:`Test GLPI`,to:`/glpi`,icon:`bi-hdd-network`,disabled:!1},{key:`sqlite`,label:`Test SQLite`,to:`/sqlite`,icon:`bi-database`,disabled:!1}]},{title:`Maintenance`,items:[{key:`reset`,label:`Reinitialisation`,to:`/reset`,icon:`bi-trash3`,disabled:!1}]}],il=()=>rl,al={class:`sidebar d-flex flex-column h-100`},ol={class:`flex-grow-1 overflow-auto px-2 pb-3`},sl={class:`sidebar-heading text-uppercase px-2 mt-2 mb-2`},cl={class:`nav flex-column gap-1`},ll={key:1,class:`nav-link sidebar-link disabled d-flex align-items-center gap-2`},ul=Wc({__name:`SidebarNav`,setup(e){let t=Oc(),n=il(),r=e=>t.path===e.to;return(e,t)=>{let i=cr(`router-link`);return G(),K(`nav`,al,[t[0]||=q(`div`,{class:`sidebar-brand d-flex align-items-center gap-2 px-3 py-3`},[q(`span`,{class:`sidebar-brand-icon d-inline-flex align-items-center justify-content-center`},[q(`i`,{class:`bi bi-shield-lock`})]),q(`span`,{class:`fw-semibold text-white`},`AdminGLPI`)],-1),q(`div`,ol,[(G(!0),K(Ei,null,fr(U(n),e=>(G(),K(`div`,{key:e.title,class:`mb-3`},[q(`h6`,sl,F(e.title),1),q(`ul`,cl,[(G(!0),K(Ei,null,fr(e.items,e=>(G(),K(`li`,{key:e.key,class:`nav-item`},[e.disabled?(G(),K(`span`,ll,[q(`i`,{class:ue([`bi`,e.icon])},null,2),q(`span`,null,F(e.label),1)])):(G(),Fi(i,{key:0,to:e.to,class:ue([`nav-link sidebar-link d-flex align-items-center gap-2`,{active:r(e)}])},{default:Sn(()=>[q(`i`,{class:ue([`bi`,e.icon])},null,2),q(`span`,null,F(e.label),1)]),_:2},1032,[`to`,`class`]))]))),128))])]))),128))])])}}},[[`__scopeId`,`data-v-0bd14b17`]]),dl={class:`border-top bg-white py-3 px-3 px-lg-4`},fl={class:`container-fluid p-0 d-flex flex-wrap align-items-center justify-content-between gap-2`},pl={class:`text-muted small`},ml={__name:`FooterBar`,setup(e){let t=new Date().getFullYear();return(e,n)=>(G(),K(`footer`,dl,[q(`div`,fl,[q(`span`,pl,` © `+F(U(t))+` AdminGLPI · Interface d'administration `,1),n[0]||=q(`div`,{class:`d-flex align-items-center gap-3 small`},[q(`a`,{href:`#`,class:`text-decoration-none text-muted`},[q(`i`,{class:`bi bi-question-circle me-1`}),Ui(`Aide `)]),q(`span`,{class:`badge text-bg-light border`},`Version 0.1`)],-1)])]))}},hl={key:1,class:`app-shell d-flex min-vh-100 bg-light`},gl={class:`app-sidebar d-none d-lg-block`},_l={class:`d-flex flex-column flex-grow-1 min-vw-0`},vl={class:`flex-grow-1 p-3 p-lg-4`},yl=Wc({__name:`App`,setup(e){let t=Oc(),n=X(()=>t.meta.layout===`blank`);return(e,t)=>n.value?(G(),Fi(U(Tc),{key:0})):(G(),K(`div`,hl,[q(`aside`,gl,[J(ul)]),q(`div`,_l,[J(nl),q(`main`,vl,[J(U(Tc))]),J(ml)])]))}},[[`__scopeId`,`data-v-c57a334a`]]),bl=(e=>e.replace(/\/+$/,``))(`/api`),xl=e=>{if(!bl)throw Error(`VITE_SQLITE_API_BASE_URL manquante dans le fichier .env`);return e.startsWith(`http://`)||e.startsWith(`https://`)?e:`${bl}${e.startsWith(`/`)?e:`/${e}`}`},Sl=async e=>{let t=(e.headers.get(`content-type`)||``).includes(`application/json`)?await e.json():await e.text();return{ok:e.ok,status:e.status,statusText:e.statusText,data:t}},Cl=()=>{let e=async(e,{method:t=`GET`,body:n}={})=>{let r=xl(e),i={Accept:`application/json`},a;return n!==void 0&&t!==`GET`&&(i[`Content-Type`]=`application/json`,a=JSON.stringify(n)),{url:r,requestHeaders:i,...await Sl(await fetch(r,{method:t,headers:i,body:a}))}};return{baseUrl:bl,request:e,testConnection:()=>e(`/sqlite/test`)}},wl=()=>{let e=Cl(),t=H(``),n=H(``),r=H(!1),i=H(``);return{baseUrl:e.baseUrl,responseText:t,errorText:n,loading:r,lastRequest:i,runTest:async()=>{n.value=``,t.value=``,r.value=!0;try{let n=await e.testConnection();t.value=JSON.stringify(n,null,2),i.value=`${n.status} ${n.statusText}`}catch(e){n.value=e?.message||`Echec de la connexion SQLite`}finally{r.value=!1}}}},Tl={class:`card shadow-sm`},El={class:`card-body d-flex flex-column gap-3`},Dl={class:`d-flex flex-wrap align-items-center gap-2`},Ol={key:0,class:`d-flex align-items-center gap-2`},kl={key:1,class:`badge text-bg-info`},Al={key:0,class:`alert alert-danger mb-0`},jl={class:`border rounded bg-light p-3 overflow-auto`,"aria-live":`polite`},Ml={class:`mb-0 small`},Nl={__name:`SqliteTestPanel`,setup(e){let{responseText:t,errorText:n,loading:r,lastRequest:i,runTest:a}=wl();return(e,o)=>(G(),K(`section`,Tl,[q(`div`,El,[o[2]||=q(`div`,{class:`d-flex align-items-center gap-2`},[q(`span`,{class:`badge rounded-pill text-bg-primary`},`Test`),q(`h2`,{class:`h5 mb-0`},`Connexion locale`)],-1),o[3]||=q(`p`,{class:`text-muted mb-0`},` Envoie une requete au backend Spring Boot pour verifier la base SQLite locale. `,-1),q(`div`,Dl,[q(`button`,{class:`btn btn-primary`,type:`button`,onClick:o[0]||=(...e)=>U(a)&&U(a)(...e)},` Tester la connexion `),U(r)?(G(),K(`div`,Ol,[...o[1]||=[q(`div`,{class:`spinner-border spinner-border-sm`,role:`status`},null,-1),q(`span`,{class:`small text-muted`},`Test en cours...`,-1)]])):U(i)?(G(),K(`span`,kl,F(U(i)),1)):Y(``,!0)]),U(n)?(G(),K(`div`,Al,F(U(n)),1)):Y(``,!0),q(`div`,jl,[q(`pre`,Ml,F(U(t)||`Aucun test lance.`),1)])])]))}},Pl={class:`d-flex flex-column gap-3`},Fl={class:`d-flex flex-wrap gap-2 mt-3`},Il={class:`badge text-bg-secondary`},Ll={__name:`SqliteTestPage`,setup(e){let t=Cl();return(e,n)=>(G(),K(`section`,Pl,[q(`header`,null,[n[1]||=q(`p`,{class:`text-uppercase fw-semibold text-primary small mb-2`},`SQLite`,-1),n[2]||=q(`h1`,{class:`h3 fw-semibold`},`Test connexion SQLite locale`,-1),n[3]||=q(`p`,{class:`text-muted mt-2`},` Verifie la connexion du backend Spring Boot sur la base SQLite locale. `,-1),q(`div`,Fl,[q(`span`,Il,` Base: `+F(U(t).baseUrl||`Non configuree`),1),n[0]||=q(`span`,{class:`badge text-bg-success`},`Endpoint /api/sqlite/test`,-1)])]),J(Nl)]))}},Rl=()=>{let e=Pc(),t=H(`/getMyProfiles`),n=H(`GET`),r=H(`{"input": {}}`),i=H(``),a=H(``),o=H(!1),s=H(!0),c=H(``),l=H(``),u=H(!1),d=H(``),f=X(()=>n.value!==`GET`),p=X(()=>!e.baseUrl||!e.appToken),m=e=>JSON.stringify({url:e.url,status:e.status,statusText:e.statusText,ok:e.ok,data:e.data},null,2),h=()=>{if(!f.value)return;let e=r.value.trim();if(e)try{return JSON.parse(e)}catch{throw Error(`Corps JSON invalide`)}};return{endpoint:t,method:n,bodyText:r,userToken:i,sessionToken:a,useUserToken:o,useSessionToken:s,responseText:c,errorText:l,loading:u,lastRequest:d,showBody:f,missingConfig:p,runRequest:async()=>{if(l.value=``,c.value=``,p.value){l.value=`Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.`;return}u.value=!0;try{let r=await e.request(t.value,{method:n.value,body:h(),sessionToken:s.value?a.value.trim():``,userToken:o.value?i.value.trim():``});c.value=m(r),d.value=`${r.status} ${r.statusText}`}catch(e){l.value=e?.message||`Erreur reseau`}finally{u.value=!1}},startSession:async()=>{if(l.value=``,c.value=``,!i.value.trim()){l.value=`Ajoute un user token pour initier la session.`;return}u.value=!0;try{let t=await e.initSession(i.value.trim());c.value=m(t),d.value=`${t.status} ${t.statusText}`,t.data?.session_token&&(a.value=t.data.session_token,s.value=!0)}catch(e){l.value=e?.message||`Impossible de demarrer la session`}finally{u.value=!1}},clearSession:()=>{a.value=``,s.value=!1}}},zl={class:`row g-4`},Bl={class:`col-12 col-lg-5`},Vl={class:`card shadow-sm h-100`},Hl={class:`card-body d-flex flex-column gap-3`},Ul={class:`d-flex flex-column gap-2`},Wl={class:`form-check`},Gl={class:`form-check`},Kl={class:`d-flex flex-wrap gap-2`},ql={key:0,class:`alert alert-warning mb-0`},Jl={class:`col-12 col-lg-7`},Yl={class:`card shadow-sm h-100`},Xl={class:`card-body d-flex flex-column gap-3`},Zl={key:0},Ql={class:`d-flex flex-wrap align-items-center gap-2`},$l={key:0,class:`d-flex align-items-center gap-2`},eu={key:1,class:`badge text-bg-info`},tu={key:1,class:`alert alert-danger mb-0`},nu={class:`border rounded bg-light p-3 overflow-auto`,"aria-live":`polite`},ru={class:`mb-0 small`},iu={__name:`GlpiTestPanel`,setup(e){let{endpoint:t,method:n,bodyText:r,userToken:i,sessionToken:a,useUserToken:o,useSessionToken:s,responseText:c,errorText:l,loading:u,lastRequest:d,showBody:f,missingConfig:p,runRequest:m,startSession:h,clearSession:g}=Rl();return(e,_)=>(G(),K(`section`,zl,[q(`div`,Bl,[q(`div`,Vl,[q(`div`,Hl,[_[14]||=q(`div`,{class:`d-flex align-items-center gap-2`},[q(`span`,{class:`badge rounded-pill text-bg-primary`},`1`),q(`h2`,{class:`h5 mb-0`},`Session GLPI`)],-1),_[15]||=q(`p`,{class:`text-muted mb-0`},` Initie une session avec le user token, puis reutilise le Session-Token pour les autres endpoints. `,-1),q(`div`,null,[_[10]||=q(`label`,{for:`userToken`,class:`form-label`},`User token`,-1),Cn(q(`input`,{id:`userToken`,"onUpdate:modelValue":_[0]||=e=>V(i)?i.value=e:null,type:`text`,class:`form-control`,placeholder:`User token GLPI`,autocomplete:`off`},null,512),[[lo,U(i)]])]),q(`div`,null,[_[11]||=q(`label`,{for:`sessionToken`,class:`form-label`},`Session token`,-1),Cn(q(`input`,{id:`sessionToken`,"onUpdate:modelValue":_[1]||=e=>V(a)?a.value=e:null,type:`text`,class:`form-control`,placeholder:`Session-Token`,autocomplete:`off`},null,512),[[lo,U(a)]])]),q(`div`,Ul,[q(`div`,Wl,[Cn(q(`input`,{id:`useUserToken`,"onUpdate:modelValue":_[2]||=e=>V(o)?o.value=e:null,class:`form-check-input`,type:`checkbox`},null,512),[[uo,U(o)]]),_[12]||=q(`label`,{class:`form-check-label`,for:`useUserToken`},` Utiliser User-Token dans la requete `,-1)]),q(`div`,Gl,[Cn(q(`input`,{id:`useSessionToken`,"onUpdate:modelValue":_[3]||=e=>V(s)?s.value=e:null,class:`form-check-input`,type:`checkbox`},null,512),[[uo,U(s)]]),_[13]||=q(`label`,{class:`form-check-label`,for:`useSessionToken`},` Utiliser Session-Token dans la requete `,-1)])]),q(`div`,Kl,[q(`button`,{class:`btn btn-primary`,type:`button`,onClick:_[4]||=(...e)=>U(h)&&U(h)(...e)},` Initier la session `),q(`button`,{class:`btn btn-outline-secondary`,type:`button`,onClick:_[5]||=(...e)=>U(g)&&U(g)(...e)},` Vider le session token `)]),U(p)?(G(),K(`div`,ql,` .env incomplet: ajoute VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY. `)):Y(``,!0)])])]),q(`div`,Jl,[q(`div`,Yl,[q(`div`,Xl,[_[21]||=q(`div`,{class:`d-flex align-items-center gap-2`},[q(`span`,{class:`badge rounded-pill text-bg-secondary`},`2`),q(`h2`,{class:`h5 mb-0`},`Requete`)],-1),q(`div`,null,[_[16]||=q(`label`,{for:`endpoint`,class:`form-label`},`Endpoint`,-1),Cn(q(`input`,{id:`endpoint`,"onUpdate:modelValue":_[6]||=e=>V(t)?t.value=e:null,type:`text`,class:`form-control`,placeholder:`/getMyProfiles`,autocomplete:`off`},null,512),[[lo,U(t)]])]),q(`div`,null,[_[18]||=q(`label`,{for:`method`,class:`form-label`},`Methode`,-1),Cn(q(`select`,{id:`method`,"onUpdate:modelValue":_[7]||=e=>V(n)?n.value=e:null,class:`form-select`},[..._[17]||=[q(`option`,null,`GET`,-1),q(`option`,null,`POST`,-1),q(`option`,null,`PUT`,-1),q(`option`,null,`PATCH`,-1),q(`option`,null,`DELETE`,-1)]],512),[[po,U(n)]])]),U(f)?(G(),K(`div`,Zl,[_[19]||=q(`label`,{for:`body`,class:`form-label`},`Body JSON`,-1),Cn(q(`textarea`,{id:`body`,"onUpdate:modelValue":_[8]||=e=>V(r)?r.value=e:null,class:`form-control`,rows:`6`},null,512),[[lo,U(r)]])])):Y(``,!0),q(`div`,Ql,[q(`button`,{class:`btn btn-success`,type:`button`,onClick:_[9]||=(...e)=>U(m)&&U(m)(...e)},` Envoyer la requete `),U(u)?(G(),K(`div`,$l,[..._[20]||=[q(`div`,{class:`spinner-border spinner-border-sm`,role:`status`},null,-1),q(`span`,{class:`small text-muted`},`Chargement...`,-1)]])):U(d)?(G(),K(`span`,eu,F(U(d)),1)):Y(``,!0)]),U(l)?(G(),K(`div`,tu,F(U(l)),1)):Y(``,!0),q(`div`,nu,[q(`pre`,ru,F(U(c)||`Aucune reponse pour le moment.`),1)])])])])]))}},au={class:`d-flex flex-column gap-3`},ou={class:`d-flex flex-wrap gap-2 mt-3`},su={class:`badge text-bg-secondary`},cu={__name:`GlpiTestPage`,setup(e){let t=Pc();return(e,n)=>(G(),K(`section`,au,[q(`header`,null,[n[1]||=q(`p`,{class:`text-uppercase fw-semibold text-primary small mb-2`},`GLPI API`,-1),n[2]||=q(`h1`,{class:`h3 fw-semibold`},`Test rapide des endpoints`,-1),n[3]||=q(`p`,{class:`text-muted mt-2`},` Cette page sert uniquement a verifier que l'API repond et que les tokens sont corrects avant de demarrer le vrai projet. `,-1),q(`div`,ou,[q(`span`,su,` Base: `+F(U(t).baseUrl||`Non configuree`),1),n[0]||=q(`span`,{class:`badge text-bg-success`},`App-Token actif`,-1)])]),J(iu),n[4]||=q(`section`,{class:`card border-0 shadow-sm`},[q(`div`,{class:`card-body`},[q(`h3`,{class:`h5 mb-3`},`Conseils rapides`),q(`ul`,{class:`mb-0`},[q(`li`,null,`Initie la session avec le user token.`),q(`li`,null,`Utilise le Session-Token pour les requetes suivantes.`),q(`li`,null,`Teste un endpoint simple comme /getMyProfiles.`)])])],-1)]))}},lu=200,uu=e=>Array.isArray(e)&&typeof e[0]==`string`&&e[0].startsWith(`ERROR`),du=e=>uu(e)?e[1]||e[0]:``,fu=()=>{let e=Pc(),t=(e={})=>({sessionToken:Vc.sessionToken,...e});return{listEntities:async()=>{let n=await e.request(`/Entity?range=0-9999`,t());if(!n.ok||uu(n.data))throw Error(du(n.data)||`Impossible de charger les entites (${n.status}).`);return Array.isArray(n.data)?n.data:[]},changeActiveEntities:(n,r=!1)=>e.request(`/changeActiveEntities`,t({method:`POST`,body:{entities_id:n,is_recursive:r}})),listItemIds:async n=>{let r=[],i=0;for(;;){let a=i+lu-1,o=await e.request(`/${n}?only_id=true&range=${i}-${a}`,t());if(uu(o.data)||!o.ok&&o.status!==206)break;let s=Array.isArray(o.data)?o.data:[];for(let e of s)e&&e.id!=null&&r.push(e.id);let c=null,l=o.headers?.[`content-range`];if(l&&l.includes(`/`)&&(c=Number.parseInt(l.split(`/`)[1],10)),i+=lu,s.length<lu||c!=null&&i>=c)break}return r},deleteItems:(n,r,{forcePurge:i=!0}={})=>e.request(`/${n}`,t({method:`DELETE`,body:{input:r.map(e=>({id:e})),force_purge:i}})),glpiErrorMessage:du}},pu=[{itemtype:`Ticket`,label:`Tickets`,weight:10},{itemtype:`Problem`,label:`Problemes`,weight:11},{itemtype:`Change`,label:`Changements`,weight:12},{itemtype:`Computer`,label:`Ordinateurs`,weight:30},{itemtype:`Monitor`,label:`Ecrans`,weight:31},{itemtype:`NetworkEquipment`,label:`Equipements reseau`,weight:32},{itemtype:`Peripheral`,label:`Peripheriques`,weight:33},{itemtype:`Phone`,label:`Telephones`,weight:34},{itemtype:`Printer`,label:`Imprimantes`,weight:35},{itemtype:`SoftwareLicense`,label:`Licences logicielles`,weight:40},{itemtype:`Software`,label:`Logiciels`,weight:41},{itemtype:`Document`,label:`Documents`,weight:50},{itemtype:`Contract`,label:`Contrats`,weight:51},{itemtype:`Supplier`,label:`Fournisseurs`,weight:52},{itemtype:`Contact`,label:`Contacts`,weight:53},{itemtype:`Budget`,label:`Budgets`,weight:54}],mu=e=>[...e].sort((e,t)=>e.weight-t.weight),hu=(e,t)=>{let n=[];for(let r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},gu=()=>{let e=fu(),t=H([]),n=Ot(new Set),r=H(!1),i=Ot(Object.fromEntries(pu.map(e=>[e.itemtype,!0]))),a=H(!1),o=H(!1),s=H(!1),c=H(``),l=H([]),u=H(null),d=Ot({current:0,total:0,label:``}),f=X(()=>mu(pu.filter(e=>i[e.itemtype]))),p=X(()=>!s.value&&a.value&&n.size>0&&f.value.length>0),m=(e,t)=>{l.value.push({time:new Date().toLocaleTimeString(),level:e,message:t})},h=e=>{n.has(e)?n.delete(e):n.add(e)},g=e=>n.has(e),_=()=>{t.value.forEach(e=>n.add(e.id))},v=()=>n.clear(),y=async()=>{c.value=``,o.value=!0;try{t.value=(await e.listEntities()).map(e=>({id:e.id,name:e.completename||e.name||`Entite ${e.id}`,level:e.level??1})).sort((e,t)=>e.name.localeCompare(t.name))}catch(e){c.value=e?.message||`Chargement des entites impossible.`}finally{o.value=!1}},b=async(t,n)=>{let r=await e.listItemIds(t);if(r.length===0)return{deleted:0,failed:0,remaining:0};let i=0,a=0;for(let o of hu(r,100)){let r=await e.deleteItems(t,o);r.ok?i+=o.length:(a+=o.length,m(`warning`,`${n} : echec d'un lot (${r.status}) ${e.glpiErrorMessage(r.data)}`))}return{deleted:i,failed:a,remaining:r.length}},x=async(t,n)=>{m(`info`,`Entite "${t.name}" : activation du contexte...`);let i=await e.changeActiveEntities(t.id,r.value);if(!i.ok){m(`danger`,`Entite "${t.name}" : activation impossible (${i.status}).`);return}for(let e=1;e<=4;e+=1){let r=0;for(let i of f.value){d.label=`${t.name} - passe ${e} - ${i.label}`;let{deleted:a,failed:o}=await b(i.itemtype,i.label);r+=a,n.deleted+=a,n.failed+=o,a>0&&m(`success`,`${i.label} : ${a} supprime(s) (passe ${e}).`)}if(r===0)break}};return{entities:t,selectedEntityIds:n,includeSubEntities:r,itemtypeSelection:i,resettableItemtypes:pu,confirmChecked:a,loadingEntities:o,running:s,errorText:c,logs:l,summary:u,progress:d,canRun:p,toggleEntity:h,isEntitySelected:g,selectAllEntities:_,clearEntities:v,loadEntities:y,runReset:async()=>{if(c.value=``,l.value=[],u.value=null,!p.value){c.value=`Selectionne au moins une entite, un type de donnees et confirme l'action.`;return}s.value=!0;let e={deleted:0,failed:0},r=t.value.filter(e=>n.has(e.id));d.current=0,d.total=r.length;try{m(`info`,`Demarrage de la reinitialisation (${r.length} entite(s)).`);for(let t of r)await x(t,e),d.current+=1;u.value={...e,entities:r.length},m(`info`,`Termine : ${e.deleted} item(s) supprime(s), ${e.failed} echec(s).`)}catch(e){c.value=e?.message||`Erreur pendant la reinitialisation.`,m(`danger`,c.value)}finally{s.value=!1,d.label=``}}}},_u={class:`row g-4`},vu={class:`col-12 col-lg-6`},yu={class:`card shadow-sm h-100`},bu={class:`card-body d-flex flex-column gap-3`},xu={class:`d-flex align-items-center justify-content-between`},Su=[`disabled`],Cu={class:`d-flex flex-wrap gap-2`},wu=[`disabled`],Tu=[`disabled`],Eu={key:0,class:`d-flex align-items-center gap-2`},Du={key:1,class:`border rounded p-2 overflow-auto`,style:{"max-height":`280px`}},Ou={key:0,class:`text-muted small mb-0`},ku=[`id`,`checked`,`disabled`,`onChange`],Au=[`for`],ju={class:`text-muted small`},Mu={class:`form-check form-switch`},Nu=[`disabled`],Pu={class:`col-12 col-lg-6`},Fu={class:`card shadow-sm h-100`},Iu={class:`card-body d-flex flex-column gap-3`},Lu={class:`row row-cols-1 row-cols-sm-2 g-1`},Ru={class:`form-check`},zu=[`id`,`onUpdate:modelValue`,`disabled`],Bu=[`for`],Vu={class:`col-12`},Hu={class:`card border-danger shadow-sm`},Uu={class:`card-body d-flex flex-column gap-3`},Wu={class:`form-check`},Gu=[`disabled`],Ku={class:`d-flex flex-wrap align-items-center gap-3`},qu=[`disabled`],Ju={key:0,class:`spinner-border spinner-border-sm me-2`,role:`status`},Yu={key:1,class:`bi bi-trash3 me-1`},Xu={key:0,class:`flex-grow-1`,style:{"min-width":`200px`}},Zu={class:`d-flex justify-content-between small text-muted`},Qu={class:`progress`,role:`progressbar`},$u={key:0,class:`alert alert-danger mb-0`},ed={key:0,class:`col-12`},td={class:`card shadow-sm`},nd={class:`card-body`},rd={class:`border rounded bg-light p-3 overflow-auto`,style:{"max-height":`320px`}},id={class:`text-muted`},ad={__name:`DataResetPanel`,setup(e){let{entities:t,includeSubEntities:n,itemtypeSelection:r,resettableItemtypes:i,confirmChecked:a,loadingEntities:o,running:s,errorText:c,logs:l,summary:u,progress:d,canRun:f,isEntitySelected:p,toggleEntity:m,selectAllEntities:h,clearEntities:g,loadEntities:_,runReset:v}=gu(),y={info:`text-body-secondary`,success:`text-success`,warning:`text-warning-emphasis`,danger:`text-danger`};return Qn(_),(e,b)=>(G(),K(`div`,_u,[q(`div`,vu,[q(`div`,yu,[q(`div`,bu,[q(`div`,xu,[b[7]||=q(`div`,{class:`d-flex align-items-center gap-2`},[q(`span`,{class:`badge rounded-pill text-bg-primary`},`1`),q(`h2`,{class:`h5 mb-0`},`Entites a reinitialiser`)],-1),q(`button`,{class:`btn btn-sm btn-outline-secondary`,type:`button`,disabled:U(o)||U(s),onClick:b[0]||=(...e)=>U(_)&&U(_)(...e)},[...b[6]||=[q(`i`,{class:`bi bi-arrow-clockwise me-1`},null,-1),Ui(`Recharger `,-1)]],8,Su)]),q(`div`,Cu,[q(`button`,{class:`btn btn-sm btn-outline-primary`,type:`button`,disabled:U(s)||!U(t).length,onClick:b[1]||=(...e)=>U(h)&&U(h)(...e)},` Tout cocher `,8,wu),q(`button`,{class:`btn btn-sm btn-outline-secondary`,type:`button`,disabled:U(s),onClick:b[2]||=(...e)=>U(g)&&U(g)(...e)},` Tout decocher `,8,Tu)]),U(o)?(G(),K(`div`,Eu,[...b[8]||=[q(`div`,{class:`spinner-border spinner-border-sm`,role:`status`},null,-1),q(`span`,{class:`small text-muted`},`Chargement des entites...`,-1)]])):(G(),K(`div`,Du,[U(t).length?Y(``,!0):(G(),K(`p`,Ou,` Aucune entite chargee. `)),(G(!0),K(Ei,null,fr(U(t),e=>(G(),K(`div`,{key:e.id,class:`form-check`},[q(`input`,{id:`entity-${e.id}`,class:`form-check-input`,type:`checkbox`,checked:U(p)(e.id),disabled:U(s),onChange:t=>U(m)(e.id)},null,40,ku),q(`label`,{class:`form-check-label`,for:`entity-${e.id}`},[Ui(F(e.name)+` `,1),q(`span`,ju,`(#`+F(e.id)+`)`,1)],8,Au)]))),128))])),q(`div`,Mu,[Cn(q(`input`,{id:`includeSub`,"onUpdate:modelValue":b[3]||=e=>V(n)?n.value=e:null,class:`form-check-input`,type:`checkbox`,disabled:U(s)},null,8,Nu),[[uo,U(n)]]),b[9]||=q(`label`,{class:`form-check-label`,for:`includeSub`},` Inclure les sous-entites (recursif) `,-1)])])])]),q(`div`,Pu,[q(`div`,Fu,[q(`div`,Iu,[b[10]||=q(`div`,{class:`d-flex align-items-center gap-2`},[q(`span`,{class:`badge rounded-pill text-bg-secondary`},`2`),q(`h2`,{class:`h5 mb-0`},`Types de donnees a purger`)],-1),b[11]||=q(`p`,{class:`text-muted small mb-0`},` La suppression se fait dans l'ordre des dependances, en plusieurs passes, avec purge definitive (force_purge) pour eviter les erreurs de liaison. `,-1),q(`div`,Lu,[(G(!0),K(Ei,null,fr(U(i),e=>(G(),K(`div`,{key:e.itemtype,class:`col`},[q(`div`,Ru,[Cn(q(`input`,{id:`itemtype-${e.itemtype}`,"onUpdate:modelValue":t=>U(r)[e.itemtype]=t,class:`form-check-input`,type:`checkbox`,disabled:U(s)},null,8,zu),[[uo,U(r)[e.itemtype]]]),q(`label`,{class:`form-check-label`,for:`itemtype-${e.itemtype}`},F(e.label),9,Bu)])]))),128))])])])]),q(`div`,Vu,[q(`div`,Hu,[q(`div`,Uu,[b[15]||=q(`div`,{class:`d-flex align-items-center gap-2 text-danger`},[q(`i`,{class:`bi bi-exclamation-triangle-fill fs-5`}),q(`h2`,{class:`h5 mb-0`},`Zone sensible`)],-1),b[16]||=q(`p`,{class:`mb-0 small`},[Ui(` Cette action supprime `),q(`strong`,null,`definitivement`),Ui(` les donnees des entites cochees. Elle est irreversible. `)],-1),q(`div`,Wu,[Cn(q(`input`,{id:`confirmReset`,"onUpdate:modelValue":b[4]||=e=>V(a)?a.value=e:null,class:`form-check-input`,type:`checkbox`,disabled:U(s)},null,8,Gu),[[uo,U(a)]]),b[12]||=q(`label`,{class:`form-check-label`,for:`confirmReset`},` Je comprends que cette suppression est definitive. `,-1)]),q(`div`,Ku,[q(`button`,{class:`btn btn-danger`,type:`button`,disabled:!U(f),onClick:b[5]||=(...e)=>U(v)&&U(v)(...e)},[U(s)?(G(),K(`span`,Ju)):(G(),K(`i`,Yu)),Ui(` `+F(U(s)?`Suppression en cours...`:`Lancer la reinitialisation`),1)],8,qu),U(s)&&U(d).total?(G(),K(`div`,Xu,[q(`div`,Zu,[q(`span`,null,F(U(d).label),1),q(`span`,null,F(U(d).current)+`/`+F(U(d).total),1)]),q(`div`,Qu,[q(`div`,{class:`progress-bar progress-bar-striped progress-bar-animated bg-danger`,style:se({width:`${U(d).current/U(d).total*100}%`})},null,4)])])):Y(``,!0)]),U(c)?(G(),K(`div`,$u,F(U(c)),1)):Y(``,!0),U(u)?(G(),K(`div`,{key:1,class:ue([`alert mb-0`,U(u).failed?`alert-warning`:`alert-success`])},[Ui(F(U(u).entities)+` entite(s) traitee(s) : `,1),q(`strong`,null,F(U(u).deleted),1),b[13]||=Ui(` item(s) supprime(s), `,-1),q(`strong`,null,F(U(u).failed),1),b[14]||=Ui(` echec(s). `,-1)],2)):Y(``,!0)])])]),U(l).length?(G(),K(`div`,ed,[q(`div`,td,[q(`div`,nd,[b[17]||=q(`h3`,{class:`h6 mb-3`},[q(`i`,{class:`bi bi-list-ul me-1`}),Ui(`Journal d'execution `)],-1),q(`div`,rd,[(G(!0),K(Ei,null,fr(U(l),(e,t)=>(G(),K(`p`,{key:t,class:ue([`mb-1 small font-monospace`,y[e.level]])},[q(`span`,id,`[`+F(e.time)+`]`,1),Ui(` `+F(e.message),1)],2))),128))])])])])):Y(``,!0)]))}},od={class:`d-flex flex-column gap-3`},sd={__name:`DataResetPage`,setup(e){return(e,t)=>(G(),K(`section`,od,[t[0]||=q(`header`,null,[q(`p`,{class:`text-uppercase fw-semibold text-danger small mb-2`},`Maintenance`),q(`h1`,{class:`h3 fw-semibold`},`Reinitialisation des donnees`),q(`p`,{class:`text-muted mt-2 mb-0`},` Selectionne une ou plusieurs entites GLPI, choisis les types de donnees a purger, puis lance la suppression. Seuls les endpoints DELETE de l'API GLPI sont utilises, avec une purge ordonnee en plusieurs passes pour resoudre les dependances. `)],-1),J(ad)]))}},cd={key:0,class:`alert alert-warning mb-0`},ld={class:`input-group`},ud={class:`input-group`},dd={key:1,class:`alert alert-danger mb-0`},fd=[`disabled`],pd={key:0,class:`spinner-border spinner-border-sm me-2`,role:`status`},md={__name:`LoginForm`,setup(e){let t=Dc(),n=Oc(),{login:r,password:i,errorText:a,loading:o,missingConfig:s,signIn:c}=Hc(),l=async()=>{if(await c()){let e=n.query.redirect;t.push(typeof e==`string`?e:`/`)}};return(e,t)=>(G(),K(`form`,{class:`d-flex flex-column gap-3`,onSubmit:yo(l,[`prevent`])},[U(s)?(G(),K(`div`,cd,` .env incomplet : ajoute VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY. `)):Y(``,!0),q(`div`,null,[t[3]||=q(`label`,{for:`login`,class:`form-label`},`Identifiant`,-1),q(`div`,ld,[t[2]||=q(`span`,{class:`input-group-text`},[q(`i`,{class:`bi bi-person`})],-1),Cn(q(`input`,{id:`login`,"onUpdate:modelValue":t[0]||=e=>V(r)?r.value=e:null,type:`text`,class:`form-control`,placeholder:`Nom d'utilisateur GLPI`,autocomplete:`username`,required:``},null,512),[[lo,U(r)]])])]),q(`div`,null,[t[5]||=q(`label`,{for:`password`,class:`form-label`},`Mot de passe`,-1),q(`div`,ud,[t[4]||=q(`span`,{class:`input-group-text`},[q(`i`,{class:`bi bi-lock`})],-1),Cn(q(`input`,{id:`password`,"onUpdate:modelValue":t[1]||=e=>V(i)?i.value=e:null,type:`password`,class:`form-control`,placeholder:`Mot de passe`,autocomplete:`current-password`,required:``},null,512),[[lo,U(i)]])])]),U(a)?(G(),K(`div`,dd,F(U(a)),1)):Y(``,!0),q(`button`,{class:`btn btn-primary w-100`,type:`submit`,disabled:U(o)},[U(o)?(G(),K(`span`,pd)):Y(``,!0),Ui(` `+F(U(o)?`Connexion...`:`Se connecter`),1)],8,fd)],32))}},hd={class:`container py-5`},gd={class:`row justify-content-center align-items-center min-vh-100`},_d={class:`col-12 col-sm-10 col-md-6 col-lg-4`},vd={class:`card border-0 shadow-lg`},yd={class:`card-body p-4 p-md-5`},bd=[{path:`/login`,name:`login`,component:{__name:`LoginPage`,setup(e){return(e,t)=>(G(),K(`div`,hd,[q(`div`,gd,[q(`div`,_d,[q(`div`,vd,[q(`div`,yd,[t[0]||=Wi(`<div class="text-center mb-4"><div class="d-inline-flex align-items-center justify-content-center mb-3 rounded-4 bg-primary text-white shadow-sm p-3"><i class="bi bi-shield-lock fs-3"></i></div><h1 class="h4 fw-semibold mb-1">Console d&#39;administration</h1><p class="text-muted small mb-0"> Connexion via le compte GLPI </p></div>`,1),J(md)])])])])]))}},meta:{public:!0,layout:`blank`}},{path:`/`,redirect:`/sqlite`},{path:`/sqlite`,name:`sqlite-test`,component:Ll},{path:`/glpi`,name:`glpi-test`,component:cu},{path:`/reset`,name:`data-reset`,component:sd}],xd=Ec({history:Ks(),routes:bd});xd.beforeEach(e=>e.meta.public?e.name===`login`&&Rc.value?{path:`/`}:!0:Rc.value?!0:{name:`login`,query:{redirect:e.fullPath}});var Sd=Co(yl);Sd.use(xd),Sd.mount(`#app`);
```

## newApp/dist/favicon.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
```

## newApp/dist/icons.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>

```

## newApp/dist/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>newapp-vue</title>
    <script type="module" crossorigin src="/assets/index-CotRi1EC.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-Bpq2l___.css">
  </head>
  <body>
    <div id="app"></div>

  </body>
</html>

```

## newApp/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>newapp-vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>

```

## newApp/INSTALL-XAMPP-WINDOWS.md

````markdown
# Installation GLPI 11 sur XAMPP (Windows) — accès via `http://localhost/glpi`

Ce document liste **toutes** les modifications nécessaires pour faire fonctionner
GLPI 11 sous XAMPP (Windows) avec le CSS correct et accessible à l'adresse
`http://localhost/glpi`.

- **Environnement** : Windows 11, XAMPP (Apache 2.4.58, PHP 8.2.12)
- **Chemin GLPI** : `C:\xampp\htdocs\glpi`
- **Dossier web réel de GLPI 11** : `C:\xampp\htdocs\glpi\public`

> ⚠️ GLPI 11 (basé sur Symfony) n'a plus sa racine web à la racine du projet :
> c'est le sous-dossier `public/` qui doit être servi par Apache.

---

## Vue d'ensemble des problèmes rencontrés

1. **CSS cassé** — les URLs CSS contenaient le chemin disque complet
   (`/glpi/C:/xampp/htdocs/glpi/public/css_compiled/...`).
   → Bug GLPI sous Windows (séparateurs `\` vs `/`).
2. **Erreur 500** (`Request exceeded the limit of 10 internal redirects`) sur les
   pages routées comme `/glpi/front/central.php`.
   → `mod_rewrite` ne sait pas recalculer le chemin de base derrière un `Alias`.

---

## 1. Configuration Apache — Alias vers `public/`

### Fichier créé : `C:\xampp\apache\conf\extra\glpi.conf`

```apache
# GLPI 11 - accès via http://localhost/glpi
# Le dossier web de GLPI 11 est le sous-dossier "public".
Alias /glpi "C:/xampp/htdocs/glpi/public"

<Directory "C:/xampp/htdocs/glpi/public">
    Options -Indexes +FollowSymLinks
    AllowOverride All
    Require all granted
    DirectoryIndex index.php
</Directory>

# Bloque l'accès web direct au code source de GLPI (hors public/)
<Directory "C:/xampp/htdocs/glpi/src">
    Require all denied
</Directory>
<Directory "C:/xampp/htdocs/glpi/config">
    Require all denied
</Directory>
<Directory "C:/xampp/htdocs/glpi/files">
    Require all denied
</Directory>
```

### Fichier modifié : `C:\xampp\apache\conf\httpd.conf`

Ajouter, juste après la ligne `Include conf/extra/httpd-vhosts.conf` :

```apache
# GLPI 11
Include conf/extra/glpi.conf
```

> L'`Alias` fait pointer l'URL `/glpi` **directement** sur le dossier `public/`.
> Ainsi GLPI calcule correctement `root_doc = /glpi` et charge le CSS depuis
> `/glpi/css_compiled/...` (qui existe physiquement dans `public/`).

---

## 2. Réécriture d'URL — `public/.htaccess`

### Fichier : `C:\xampp\htdocs\glpi\public\.htaccess`

```apache
RewriteEngine On

# Necessaire derriere un Alias Apache : indique a mod_rewrite le chemin
# d'URL de base, sinon la reecriture vers index.php part en boucle (erreur 500).
RewriteBase /glpi/

RewriteCond %{HTTP:Authorization} ^(.+)$
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP_AUTHORIZATION}]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

> La ligne **`RewriteBase /glpi/`** est la clé : elle corrige l'erreur 500
> (boucle de redirections internes) qui survient derrière un `Alias`.

---

## 3. Correction d'un bug GLPI sous Windows (CSS)

### Fichier : `src\Glpi\Application\View\Extension\FrontEndAssetsExtension.php`

**Cause** : `GLPI_ROOT` vaut `C:\xampp\htdocs\glpi` (antislashs Windows) alors que le
chemin du CSS compilé est normalisé en slashs (`C:/xampp/.../public/...`). Le
`str_replace` du cœur de GLPI ne trouvait donc jamais le préfixe et laissait le
chemin disque complet dans l'attribut `href` des feuilles de style.

Dans la méthode `cssPath()` (≈ ligne 144) :

**Avant :**
```php
if (!$is_debug && file_exists($compiled_file)) {
    $path = str_replace($this->root_dir . '/public', '', $compiled_file);
```

**Après :**
```php
if (!$is_debug && file_exists($compiled_file)) {
    // Normalize the root dir separators to match $compiled_file (which is
    // already normalized to forward slashes), otherwise the prefix is not
    // stripped on Windows where GLPI_ROOT uses backslashes.
    $normalized_root = str_replace(DIRECTORY_SEPARATOR, '/', $this->root_dir);
    $path = str_replace($normalized_root . '/public', '', $compiled_file);
```

> ⚠️ **Attention** : c'est une modification du **cœur de GLPI**. Elle sera
> **écrasée lors d'une mise à jour** de GLPI. Il est recommandé de signaler ce
> bug sur https://github.com/glpi-project/glpi pour une correction officielle.

---

## 4. Fichier `.htaccess` racine (repli, non utilisé)

### Fichier : `C:\xampp\htdocs\glpi\.htaccess`

Grâce à l'`Alias`, ce fichier n'est **pas utilisé**. Il est corrigé (ajout du `$1`
qui manquait) uniquement comme repli si l'on retire un jour l'`Alias` :

```apache
# Avec l'Alias Apache vers /public, ce fichier n'est PAS utilisé.
# Conservé uniquement comme repli : redirige tout vers le dossier public/
# en préservant le chemin demandé (le $1 manquait dans la version initiale).
RewriteEngine On
RewriteRule ^$ public/ [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ public/$1 [L]
```

---

## 5. Étapes finales

1. **Vider le cache GLPI** :
   ```powershell
   cd C:\xampp\htdocs\glpi
   C:\xampp\php\php.exe bin/console cache:clear
   ```

2. **Redémarrer Apache** depuis le panneau de contrôle XAMPP (Stop puis Start).

3. **Vérifier l'URL de l'application** dans GLPI :
   `Configuration → Générale → URL de l'application` = `http://localhost/glpi`

4. Dans le navigateur : ouvrir `http://localhost/glpi` puis faire **Ctrl + F5**
   (vidage du cache navigateur) pour recharger le CSS.

---

## 6. Récapitulatif des fichiers

| Fichier | Action |
|---|---|
| `C:\xampp\apache\conf\extra\glpi.conf` | **Créé** — Alias `/glpi` → `public/` + protections |
| `C:\xampp\apache\conf\httpd.conf` | **Modifié** — `Include conf/extra/glpi.conf` |
| `public\.htaccess` | **Modifié** — ajout de `RewriteBase /glpi/` |
| `src\Glpi\Application\View\Extension\FrontEndAssetsExtension.php` | **Modifié** — normalisation des séparateurs (bug Windows CSS) |
| `.htaccess` (racine) | **Modifié** — ajout du `$1` (repli non utilisé) |

---

## 7. Important à retenir

- GLPI étant dans le sous-dossier `/glpi`, **toutes les URLs prennent le préfixe
  `/glpi`** (c'est normal) :
  - Interface : `http://localhost/glpi`
  - API REST v2 / Swagger : `http://localhost/glpi/api.php/v2.3/doc`
  - API REST v1 : `http://localhost/glpi/apirest.php`
- Les liens **internes** générés par GLPI sont automatiquement corrects.
- Un 404 sur une URL **sans** `/glpi` est normal : il faut ajouter le préfixe.
<VirtualHost *:80>
    ServerName glpi.localhost
    DocumentRoot "C:/xampp/htdocs/glpi/public"

    <Directory "C:/xampp/htdocs/glpi/public">
        Require all granted
        
        RewriteEngine On
        # Assure que les en-têtes d'autorisation sont passés à PHP
        RewriteCond %{HTTP:Authorization} ^(.+)$
        RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP_AUTHORIZATION}]
        
        # Redirige toutes les requêtes vers le routeur de GLPI si le fichier n'existe pas
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^(.*)$ index.php [QSA,L]
    </Directory>
</VirtualHost>
````

## newApp/package-lock.json

```json
{
  "name": "newapp-vue",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "newapp-vue",
      "version": "0.0.0",
      "dependencies": {
        "bootstrap": "^5.3.3",
        "bootstrap-icons": "^1.13.1",
        "vue": "^3.5.34",
        "vue-router": "^4.4.0"
      },
      "devDependencies": {
        "@vitejs/plugin-vue": "^6.0.6",
        "vite": "^8.0.12"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.7.tgz",
      "integrity": "sha512-hnORnjP/1P/zFEndoeX+n+t1RwWRJiJpM/jO7FW32Kn9r5+sJB2JWOdYo4L6k78j15eCwY3Gm/7364B1EMwtNg==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.7"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.7.tgz",
      "integrity": "sha512-4zBIxpPzowiZpusoFkyGVwakdRJUyuH5PxQ/PrqghfdFWWasvnCdPfQXHrenDai+gyLARulZjZowCOj6fjT4pA==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "license": "MIT"
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.4.tgz",
      "integrity": "sha512-3NQNNgA1YSlJb/kMH1ildASP9HW7/7kYnRI2szWJaofaS1hWmbGI4H+d3+22aGzXXN9IJ+n+GiFVcGipJP18ow==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.1"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.133.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.133.0.tgz",
      "integrity": "sha512-KzkdCd6Uxqnf6l3HOw1xfatAlUURA0g14cvBYFyJ5SaNOQbOUvBr9PKArcPcrNIeRsBdgcUzOGrhKveVpvOIGA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@popperjs/core": {
      "version": "2.11.8",
      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.8.tgz",
      "integrity": "sha512-P1st0aksCrn9sGZhp8GMYwBnQsbvAWsZAX44oXNNvLHGqAOcoVxmjZiohstwQ7SqKnbR47akdNi+uleWD8+g6A==",
      "license": "MIT",
      "peer": true,
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/popperjs"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.0.3.tgz",
      "integrity": "sha512-454rs7jHngixp/NMxd5srYD57OnzSlZ/eFTETjORQHLwJG1lRtmNOJcBerZlfu4GjKqeq8aCCIQrMdHyhI51Hw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.0.3.tgz",
      "integrity": "sha512-PcAhP+ynjURNyy8SKGl5DQP94aGuB/7JrXJb/t7P+hanXvQVMWzUvRRhBAcg/lNRadBhoUPqSoP4xw5tR/KBEA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.0.3.tgz",
      "integrity": "sha512-9YpfeUvSE2RS7wysJ81uOZkXJz7f7Q55H2Gvp3VEw/EsahqDtrphrZ0EwDLK5vvKOzaCrBsjF8JmnMLcUt78Gg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.0.3.tgz",
      "integrity": "sha512-yB1IlAsSNHncV6SCTL27/MVGR5htvQsoGxIv5KMGXALp+Ll1wYsn+x98M9MW7qa+NdSbvrrY7ANI4wLJ0n1e6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.0.3.tgz",
      "integrity": "sha512-Yi30IVAAfLUCy2MseFjbB1jAMDl1VMCAas5StnYp8da9+CKvMd2H2cbEjWcw5NPaPqzvYkVIaF1nNUG+b7u/sw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.0.3.tgz",
      "integrity": "sha512-jsO7R8To+AdlYgUmN5sHSCZbfhtMBkO0WUx8iORQnPcMMdgr7qM2DQmMwgabs3GhNztdmoKkMKQFHD6DTMCIQw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.0.3.tgz",
      "integrity": "sha512-VWkUHwWriDciit80wleYwKILoR/KMvxh/IdwS/paX+ZgpuRpCrKLUdadJbc0NpBEiyhpYawsJ73j9aCvOH+f7Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.0.3.tgz",
      "integrity": "sha512-5f1laC0SlIR0yDbFCd8acUhvJIag6N3zC5P7oUPN6wX0aOma+uKJ0wBDH5aq7I1PVI2ttTlhJwzwRIBnLiSGEg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.0.3.tgz",
      "integrity": "sha512-Iq4ko0r4XsgbrF/LunNgHtAGLRRVE2kXonAXQ/MV0mC6jQpMOhW1SvtZja2EhC/kd05++bP78dsqBeIQyYJ6Yg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.0.3.tgz",
      "integrity": "sha512-B8m6tD5+/N5FeNQFbKlLA/2yVq9ycQP1SeedyEYYKWBNR3ZQbkvIUcNnDNM03lO1l5F2roiiFJGgvoLLyZXtSg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.0.3.tgz",
      "integrity": "sha512-pSdpdUJHkuCxun9LE7jvgUB9qsRgaiyNNCX7m/AvHTcq67AiT/Yhoxvw5zPfhrM8k/BfP8ce/hMOpthKDpEUow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.0.3.tgz",
      "integrity": "sha512-OXXS3RKJgX2uLwM+gYyuH5omcH8fL1LJs96pZGgtetVCahON57+d4SJHzTgZiOjxgGkSnpXpOsWuPDGAKAigEg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.0.3.tgz",
      "integrity": "sha512-JTtb8BWFynicNSoPrehsCzBtOKjZ6jhMiPFEmOiuXg1Fl8dn2KHQob+GuPSGR0dryQa1PQJbzjF3dqO/whhjLg==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.10.0",
        "@emnapi/runtime": "1.10.0",
        "@napi-rs/wasm-runtime": "^1.1.4"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.0.3.tgz",
      "integrity": "sha512-gEdFFEN70A/jxb2svrWsN3aDL7OUtmvlOy+6fa2jxG8K0wQ1ZbdeLGnidov6Yu5/733dI5ySfzFlQ/cb0bSz1g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.0.3.tgz",
      "integrity": "sha512-eXB7CHuaQdqmJcc3koCNtNPmT/bj2gc999kUFgBxG8Ac0NdgXc4rkCHhqrgrhN3zddvvvrgzj1e90SuSfmyIXA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.2",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.2.tgz",
      "integrity": "sha512-RoBvJ2X0wuKlWFIjrwffGw1IqZHKQqzIchKaadZZfnNpsAYp2mM0h36JtPCjNDAHGgYez/15uMBpfGwchhiMgg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@vitejs/plugin-vue": {
      "version": "6.0.7",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-6.0.7.tgz",
      "integrity": "sha512-km+p+XdSz9Sxm5rqUbqcSfZYaAniKxWBj1KURl+Jr7UaPvvX7BmaWMdP69I5rrFDeQGyxAG7NXdc57vz+snhWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "vue": "^3.2.25"
      }
    },
    "node_modules/@vue/compiler-core": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.5.35.tgz",
      "integrity": "sha512-BUmHaR1J+O+CKZ9uJucdVTEr1LHsdyvv7vG3eNRhK3CczEHeMd/LtsHAuD7PbrxvI2envCY2v7HI1vC1aBRzKw==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.3",
        "@vue/shared": "3.5.35",
        "entities": "^7.0.1",
        "estree-walker": "^2.0.2",
        "source-map-js": "^1.2.1"
      }
    },
    "node_modules/@vue/compiler-dom": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.5.35.tgz",
      "integrity": "sha512-k+bprkXxuqhVajgTx5mUHuir7TwQzUKOWR40ng1ncAqQRPnrLngGGgqVEEhOnTMlc8btHYVKmrP8s5Qyg0hvYA==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-core": "3.5.35",
        "@vue/shared": "3.5.35"
      }
    },
    "node_modules/@vue/compiler-sfc": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.5.35.tgz",
      "integrity": "sha512-G5VPMcXTSywXBgtFOZOnHKBxKSrwXUcvY1iaF5/hRcy7t0J6CH/d8ha9F4nzi00Fax1eLV0QHM7v4mQu68jydw==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.3",
        "@vue/compiler-core": "3.5.35",
        "@vue/compiler-dom": "3.5.35",
        "@vue/compiler-ssr": "3.5.35",
        "@vue/shared": "3.5.35",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.21",
        "postcss": "^8.5.15",
        "source-map-js": "^1.2.1"
      }
    },
    "node_modules/@vue/compiler-ssr": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.5.35.tgz",
      "integrity": "sha512-rGhAeXgdM7/ffTJGXT69rCCdTmjDewnFuUZfBQQHTdcEBeWdT5HCGY60y2ytLJr9/Dsu7IntUi5z/w0h6Rjnzw==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-dom": "3.5.35",
        "@vue/shared": "3.5.35"
      }
    },
    "node_modules/@vue/devtools-api": {
      "version": "6.6.4",
      "resolved": "https://registry.npmjs.org/@vue/devtools-api/-/devtools-api-6.6.4.tgz",
      "integrity": "sha512-sGhTPMuXqZ1rVOk32RylztWkfXTRhuS7vgAKv0zjqk8gbsHkJ7xfFf+jbySxt7tWObEJwyKaHMikV/WGDiQm8g==",
      "license": "MIT"
    },
    "node_modules/@vue/reactivity": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.5.35.tgz",
      "integrity": "sha512-tVc+SsHConvh/Lz64qq1pP3rYArBmK42xonovEcxY74SQtvctZodG/zhq54P5dr38cVuw25d27cPNRdlMidpGQ==",
      "license": "MIT",
      "dependencies": {
        "@vue/shared": "3.5.35"
      }
    },
    "node_modules/@vue/runtime-core": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.5.35.tgz",
      "integrity": "sha512-A/xFNX9loIcWDygeQuNCfKuh0CoYBzxhqEMNah5TSFg9Z53DrFYEN2qi5CU9necjM1OWYegYREUTHmXTmhfXtg==",
      "license": "MIT",
      "dependencies": {
        "@vue/reactivity": "3.5.35",
        "@vue/shared": "3.5.35"
      }
    },
    "node_modules/@vue/runtime-dom": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.5.35.tgz",
      "integrity": "sha512-odrJ1C391dbGnyDRh8U+rnP7J2amIEzfmRk5vXy7xi3aZhEXofTvpi0T4HJb6jlNqQZTNPR5MPHSB3RHNkIORA==",
      "license": "MIT",
      "dependencies": {
        "@vue/reactivity": "3.5.35",
        "@vue/runtime-core": "3.5.35",
        "@vue/shared": "3.5.35",
        "csstype": "^3.2.3"
      }
    },
    "node_modules/@vue/server-renderer": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.5.35.tgz",
      "integrity": "sha512-NkebSOYdB97wi8OQcO3HqzZSlymJi/aWsN/7h74OSVhRTm6qGs3Jp3e0rCXynmWwSlKeRrnlIug+ilYoHBmQDA==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-ssr": "3.5.35",
        "@vue/shared": "3.5.35"
      },
      "peerDependencies": {
        "vue": "3.5.35"
      }
    },
    "node_modules/@vue/shared": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.5.35.tgz",
      "integrity": "sha512-zSbjL7gRXwks2ZQLRGCajBtBXEOXW9Ddhn/HvSdrGkE2dqGnumzW8XtusRrxrE9LvqtiqDXQ+A60Hp6mvdYxfA==",
      "license": "MIT"
    },
    "node_modules/bootstrap": {
      "version": "5.3.8",
      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-5.3.8.tgz",
      "integrity": "sha512-HP1SZDqaLDPwsNiqRqi5NcP0SSXciX2s9E+RyqJIIqGo+vJeN5AJVM98CXmW/Wux0nQ5L7jeWUdplCEf0Ee+tg==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/twbs"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/bootstrap"
        }
      ],
      "license": "MIT",
      "peerDependencies": {
        "@popperjs/core": "^2.11.8"
      }
    },
    "node_modules/bootstrap-icons": {
      "version": "1.13.1",
      "resolved": "https://registry.npmjs.org/bootstrap-icons/-/bootstrap-icons-1.13.1.tgz",
      "integrity": "sha512-ijombt4v6bv5CLeXvRWKy7CuM3TRTuPEuGaGKvTV5cz65rQSY8RQ2JcHt6b90cBBAC7s8fsf2EkQDldzCoXUjw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/twbs"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/bootstrap"
        }
      ],
      "license": "MIT"
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/entities": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/entities/-/entities-7.0.1.tgz",
      "integrity": "sha512-TWrgLOFUQTH994YUyl1yT4uyavY5nNB5muff+RtWaqNVCAK408b5ZnnbNAUEWLTCpum9w6arT70i1XdQ4UeOPA==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.12",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.12.tgz",
      "integrity": "sha512-ZB9RH/39qpq5Vu6Y+NmUaFhQR6pp+M2Xt76XBnEwDaGcVAqhlvxrl3B2bKS5D3NH3QR76v3aSrKaF/Kiy7lEtQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.15",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.15.tgz",
      "integrity": "sha512-FfR8sjd4em2T6fb3I2MwAJU7HWVMr9zba+enmQeeWFfCbm+UOC/0X4DS8XtpUTMwWMGbjKYP7xjfNekzyGmB3A==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.12",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/rolldown": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.0.3.tgz",
      "integrity": "sha512-i00lAJ2ks1BYr7rjNjKC7BcqAS7nVfiT3QX1SI5aY+AFHblCmaUf9OE9dbdzDvW6dJxbi2ZCZiy9v3CcwOiX3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.133.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.0.3",
        "@rolldown/binding-darwin-arm64": "1.0.3",
        "@rolldown/binding-darwin-x64": "1.0.3",
        "@rolldown/binding-freebsd-x64": "1.0.3",
        "@rolldown/binding-linux-arm-gnueabihf": "1.0.3",
        "@rolldown/binding-linux-arm64-gnu": "1.0.3",
        "@rolldown/binding-linux-arm64-musl": "1.0.3",
        "@rolldown/binding-linux-ppc64-gnu": "1.0.3",
        "@rolldown/binding-linux-s390x-gnu": "1.0.3",
        "@rolldown/binding-linux-x64-gnu": "1.0.3",
        "@rolldown/binding-linux-x64-musl": "1.0.3",
        "@rolldown/binding-openharmony-arm64": "1.0.3",
        "@rolldown/binding-wasm32-wasi": "1.0.3",
        "@rolldown/binding-win32-arm64-msvc": "1.0.3",
        "@rolldown/binding-win32-x64-msvc": "1.0.3"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/vite": {
      "version": "8.0.16",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.0.16.tgz",
      "integrity": "sha512-h9bXPmJichP5fLmVQo3PyaGSDE2n3aPuomeAlVRm0JLmt4rY6zmPKd59HYI4LNW8oTK7tlTsuC7l/m7awx9Jcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.32.0",
        "picomatch": "^4.0.4",
        "postcss": "^8.5.15",
        "rolldown": "1.0.3",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.1.18",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vue": {
      "version": "3.5.35",
      "resolved": "https://registry.npmjs.org/vue/-/vue-3.5.35.tgz",
      "integrity": "sha512-cx89fnr+0kVGHiNFG6y6s0bdjypJRFNZn6x3WPstNdQR1bi1mbB7h4v5IBGTsPJU3nK1+0Iqj3Zf+hZWMieR4Q==",
      "license": "MIT",
      "dependencies": {
        "@vue/compiler-dom": "3.5.35",
        "@vue/compiler-sfc": "3.5.35",
        "@vue/runtime-dom": "3.5.35",
        "@vue/server-renderer": "3.5.35",
        "@vue/shared": "3.5.35"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/vue-router": {
      "version": "4.6.4",
      "resolved": "https://registry.npmjs.org/vue-router/-/vue-router-4.6.4.tgz",
      "integrity": "sha512-Hz9q5sa33Yhduglwz6g9skT8OBPii+4bFn88w6J+J4MfEo4KRRpmiNG/hHHkdbRFlLBOqxN8y8gf2Fb0MTUgVg==",
      "license": "MIT",
      "dependencies": {
        "@vue/devtools-api": "^6.6.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/posva"
      },
      "peerDependencies": {
        "vue": "^3.5.0"
      }
    }
  }
}

```

## newApp/package.json

```json
{
  "name": "newapp-vue",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.3.3",
    "bootstrap-icons": "^1.13.1",
    "vue": "^3.5.34",
    "vue-router": "^4.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.6",
    "vite": "^8.0.12"
  }
}

```

## newApp/public/favicon.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
```

## newApp/public/icons.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>

```

## newApp/README.md

```markdown
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


```

## newApp/src/App.vue

```vue
<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import HeaderBar from './layout/HeaderBar.vue'
import SidebarNav from './layout/SidebarNav.vue'
import FooterBar from './layout/FooterBar.vue'

const route = useRoute()

// Les pages publiques (login) s'affichent sans le chrome d'administration
const isBlankLayout = computed(() => route.meta.layout === 'blank')
</script>

<template>
  <RouterView v-if="isBlankLayout" />

  <div v-else class="app-shell d-flex min-vh-100 bg-light">
    <aside class="app-sidebar d-none d-lg-block">
      <SidebarNav />
    </aside>

    <div class="d-flex flex-column flex-grow-1 min-vw-0">
      <HeaderBar />

      <main class="flex-grow-1 p-3 p-lg-4">
        <RouterView />
      </main>

      <FooterBar />
    </div>
  </div>
</template>

<style scoped>
.app-sidebar {
  width: 250px;
  flex-shrink: 0;
}

.min-vw-0 {
  min-width: 0;
}
</style>

```

## newApp/src/assets/hero.png

```png
[Binary file content not included]
```

## newApp/src/assets/vite.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>

```

## newApp/src/assets/vue.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path></svg>
```

## newApp/src/components/auth/LoginForm.vue

```vue
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '../../composables/auth/useAuth'

const router = useRouter()
const route = useRoute()

const {
  login,
  password,
  errorText,
  loading,
  missingConfig,
  signIn,
} = useAuth()

const submit = async () => {
  const ok = await signIn()
  if (ok) {
    const redirect = route.query.redirect
    router.push(typeof redirect === 'string' ? redirect : '/')
  }
}
</script>

<template>
  <form class="d-flex flex-column gap-3" @submit.prevent="submit">
    <div v-if="missingConfig" class="alert alert-warning mb-0">
      .env incomplet : ajoute VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.
    </div>

    <div>
      <label for="login" class="form-label">Identifiant</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-person"></i>
        </span>
        <input
          id="login"
          v-model="login"
          type="text"
          class="form-control"
          placeholder="Nom d'utilisateur GLPI"
          autocomplete="username"
          required
        />
      </div>
    </div>

    <div>
      <label for="password" class="form-label">Mot de passe</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-lock"></i>
        </span>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Mot de passe"
          autocomplete="current-password"
          required
        />
      </div>
    </div>

    <div v-if="errorText" class="alert alert-danger mb-0">{{ errorText }}</div>

    <button class="btn btn-primary w-100" type="submit" :disabled="loading">
      <span
        v-if="loading"
        class="spinner-border spinner-border-sm me-2"
        role="status"
      ></span>
      {{ loading ? 'Connexion...' : 'Se connecter' }}
    </button>
  </form>
</template>

```

## newApp/src/components/dataReset/DataResetPanel.vue

```vue
<script setup>
import { onMounted } from 'vue'
import { useDataReset } from '../../composables/dataReset/useDataReset'

const {
  entities,
  includeSubEntities,
  itemtypeSelection,
  resettableItemtypes,
  confirmChecked,
  loadingEntities,
  running,
  errorText,
  logs,
  summary,
  progress,
  canRun,
  isEntitySelected,
  toggleEntity,
  selectAllEntities,
  clearEntities,
  loadEntities,
  runReset,
} = useDataReset()

const logClass = {
  info: 'text-body-secondary',
  success: 'text-success',
  warning: 'text-warning-emphasis',
  danger: 'text-danger',
}

onMounted(loadEntities)
</script>

<template>
  <div class="row g-4">
    <!-- Colonne de gauche : selection -->
    <div class="col-12 col-lg-6">
      <div class="card shadow-sm h-100">
        <div class="card-body d-flex flex-column gap-3">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <span class="badge rounded-pill text-bg-primary">1</span>
              <h2 class="h5 mb-0">Entites a reinitialiser</h2>
            </div>
            <button
              class="btn btn-sm btn-outline-secondary"
              type="button"
              :disabled="loadingEntities || running"
              @click="loadEntities"
            >
              <i class="bi bi-arrow-clockwise me-1"></i>Recharger
            </button>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <button
              class="btn btn-sm btn-outline-primary"
              type="button"
              :disabled="running || !entities.length"
              @click="selectAllEntities"
            >
              Tout cocher
            </button>
            <button
              class="btn btn-sm btn-outline-secondary"
              type="button"
              :disabled="running"
              @click="clearEntities"
            >
              Tout decocher
            </button>
          </div>

          <div v-if="loadingEntities" class="d-flex align-items-center gap-2">
            <div class="spinner-border spinner-border-sm" role="status"></div>
            <span class="small text-muted">Chargement des entites...</span>
          </div>

          <div
            v-else
            class="border rounded p-2 overflow-auto"
            style="max-height: 280px"
          >
            <p v-if="!entities.length" class="text-muted small mb-0">
              Aucune entite chargee.
            </p>
            <div
              v-for="entity in entities"
              :key="entity.id"
              class="form-check"
            >
              <input
                :id="`entity-${entity.id}`"
                class="form-check-input"
                type="checkbox"
                :checked="isEntitySelected(entity.id)"
                :disabled="running"
                @change="toggleEntity(entity.id)"
              />
              <label class="form-check-label" :for="`entity-${entity.id}`">
                {{ entity.name }}
                <span class="text-muted small">(#{{ entity.id }})</span>
              </label>
            </div>
          </div>

          <div class="form-check form-switch">
            <input
              id="includeSub"
              v-model="includeSubEntities"
              class="form-check-input"
              type="checkbox"
              :disabled="running"
            />
            <label class="form-check-label" for="includeSub">
              Inclure les sous-entites (recursif)
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Colonne de droite : types de donnees -->
    <div class="col-12 col-lg-6">
      <div class="card shadow-sm h-100">
        <div class="card-body d-flex flex-column gap-3">
          <div class="d-flex align-items-center gap-2">
            <span class="badge rounded-pill text-bg-secondary">2</span>
            <h2 class="h5 mb-0">Types de donnees a purger</h2>
          </div>
          <p class="text-muted small mb-0">
            La suppression se fait dans l'ordre des dependances, en plusieurs
            passes, avec purge definitive (force_purge) pour eviter les erreurs
            de liaison.
          </p>

          <div class="row row-cols-1 row-cols-sm-2 g-1">
            <div v-for="item in resettableItemtypes" :key="item.itemtype" class="col">
              <div class="form-check">
                <input
                  :id="`itemtype-${item.itemtype}`"
                  v-model="itemtypeSelection[item.itemtype]"
                  class="form-check-input"
                  type="checkbox"
                  :disabled="running"
                />
                <label class="form-check-label" :for="`itemtype-${item.itemtype}`">
                  {{ item.label }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Zone d'action -->
    <div class="col-12">
      <div class="card border-danger shadow-sm">
        <div class="card-body d-flex flex-column gap-3">
          <div class="d-flex align-items-center gap-2 text-danger">
            <i class="bi bi-exclamation-triangle-fill fs-5"></i>
            <h2 class="h5 mb-0">Zone sensible</h2>
          </div>
          <p class="mb-0 small">
            Cette action supprime <strong>definitivement</strong> les donnees des
            entites cochees. Elle est irreversible.
          </p>

          <div class="form-check">
            <input
              id="confirmReset"
              v-model="confirmChecked"
              class="form-check-input"
              type="checkbox"
              :disabled="running"
            />
            <label class="form-check-label" for="confirmReset">
              Je comprends que cette suppression est definitive.
            </label>
          </div>

          <div class="d-flex flex-wrap align-items-center gap-3">
            <button
              class="btn btn-danger"
              type="button"
              :disabled="!canRun"
              @click="runReset"
            >
              <span
                v-if="running"
                class="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              <i v-else class="bi bi-trash3 me-1"></i>
              {{ running ? 'Suppression en cours...' : 'Lancer la reinitialisation' }}
            </button>

            <div v-if="running && progress.total" class="flex-grow-1" style="min-width: 200px">
              <div class="d-flex justify-content-between small text-muted">
                <span>{{ progress.label }}</span>
                <span>{{ progress.current }}/{{ progress.total }}</span>
              </div>
              <div class="progress" role="progressbar">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  :style="{ width: `${(progress.current / progress.total) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>

          <div v-if="errorText" class="alert alert-danger mb-0">{{ errorText }}</div>

          <div
            v-if="summary"
            class="alert mb-0"
            :class="summary.failed ? 'alert-warning' : 'alert-success'"
          >
            {{ summary.entities }} entite(s) traitee(s) :
            <strong>{{ summary.deleted }}</strong> item(s) supprime(s),
            <strong>{{ summary.failed }}</strong> echec(s).
          </div>
        </div>
      </div>
    </div>

    <!-- Journal -->
    <div v-if="logs.length" class="col-12">
      <div class="card shadow-sm">
        <div class="card-body">
          <h3 class="h6 mb-3">
            <i class="bi bi-list-ul me-1"></i>Journal d'execution
          </h3>
          <div class="border rounded bg-light p-3 overflow-auto" style="max-height: 320px">
            <p
              v-for="(entry, index) in logs"
              :key="index"
              class="mb-1 small font-monospace"
              :class="logClass[entry.level]"
            >
              <span class="text-muted">[{{ entry.time }}]</span> {{ entry.message }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

```

## newApp/src/components/testApi/GlpiTestPanel.vue

```vue
<script setup>
import { useGlpiTest } from '../../composables/testApi/useGlpiTest'

const {
  endpoint,
  method,
  bodyText,
  userToken,
  sessionToken,
  useUserToken,
  useSessionToken,
  responseText,
  errorText,
  loading,
  lastRequest,
  showBody,
  missingConfig,
  runRequest,
  startSession,
  clearSession,
} = useGlpiTest()
</script>

<template>
  <section class="row g-4">
    <div class="col-12 col-lg-5">
      <div class="card shadow-sm h-100">
        <div class="card-body d-flex flex-column gap-3">
          <div class="d-flex align-items-center gap-2">
            <span class="badge rounded-pill text-bg-primary">1</span>
            <h2 class="h5 mb-0">Session GLPI</h2>
          </div>
          <p class="text-muted mb-0">
            Initie une session avec le user token, puis reutilise le Session-Token
            pour les autres endpoints.
          </p>

          <div>
            <label for="userToken" class="form-label">User token</label>
            <input
              id="userToken"
              v-model="userToken"
              type="text"
              class="form-control"
              placeholder="User token GLPI"
              autocomplete="off"
            />
          </div>

          <div>
            <label for="sessionToken" class="form-label">Session token</label>
            <input
              id="sessionToken"
              v-model="sessionToken"
              type="text"
              class="form-control"
              placeholder="Session-Token"
              autocomplete="off"
            />
          </div>

          <div class="d-flex flex-column gap-2">
            <div class="form-check">
              <input
                id="useUserToken"
                v-model="useUserToken"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="useUserToken">
                Utiliser User-Token dans la requete
              </label>
            </div>
            <div class="form-check">
              <input
                id="useSessionToken"
                v-model="useSessionToken"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="useSessionToken">
                Utiliser Session-Token dans la requete
              </label>
            </div>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary" type="button" @click="startSession">
              Initier la session
            </button>
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="clearSession"
            >
              Vider le session token
            </button>
          </div>

          <div v-if="missingConfig" class="alert alert-warning mb-0">
            .env incomplet: ajoute VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-7">
      <div class="card shadow-sm h-100">
        <div class="card-body d-flex flex-column gap-3">
          <div class="d-flex align-items-center gap-2">
            <span class="badge rounded-pill text-bg-secondary">2</span>
            <h2 class="h5 mb-0">Requete</h2>
          </div>

          <div>
            <label for="endpoint" class="form-label">Endpoint</label>
            <input
              id="endpoint"
              v-model="endpoint"
              type="text"
              class="form-control"
              placeholder="/getMyProfiles"
              autocomplete="off"
            />
          </div>

          <div>
            <label for="method" class="form-label">Methode</label>
            <select id="method" v-model="method" class="form-select">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>
          </div>

          <div v-if="showBody">
            <label for="body" class="form-label">Body JSON</label>
            <textarea
              id="body"
              v-model="bodyText"
              class="form-control"
              rows="6"
            ></textarea>
          </div>

          <div class="d-flex flex-wrap align-items-center gap-2">
            <button class="btn btn-success" type="button" @click="runRequest">
              Envoyer la requete
            </button>
            <div v-if="loading" class="d-flex align-items-center gap-2">
              <div class="spinner-border spinner-border-sm" role="status"></div>
              <span class="small text-muted">Chargement...</span>
            </div>
            <span v-else-if="lastRequest" class="badge text-bg-info">
              {{ lastRequest }}
            </span>
          </div>

          <div v-if="errorText" class="alert alert-danger mb-0">
            {{ errorText }}
          </div>

          <div class="border rounded bg-light p-3 overflow-auto" aria-live="polite">
            <pre class="mb-0 small">{{ responseText || 'Aucune reponse pour le moment.' }}</pre>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

```

## newApp/src/components/testBackSqlite/SqliteTestPanel.vue

```vue
<script setup>
import { useSqliteTest } from '../../composables/testBackSqlite/useSqliteTest'

const { responseText, errorText, loading, lastRequest, runTest } = useSqliteTest()
</script>

<template>
  <section class="card shadow-sm">
    <div class="card-body d-flex flex-column gap-3">
      <div class="d-flex align-items-center gap-2">
        <span class="badge rounded-pill text-bg-primary">Test</span>
        <h2 class="h5 mb-0">Connexion locale</h2>
      </div>
      <p class="text-muted mb-0">
        Envoie une requete au backend Spring Boot pour verifier la base SQLite locale.
      </p>

      <div class="d-flex flex-wrap align-items-center gap-2">
        <button class="btn btn-primary" type="button" @click="runTest">
          Tester la connexion
        </button>
        <div v-if="loading" class="d-flex align-items-center gap-2">
          <div class="spinner-border spinner-border-sm" role="status"></div>
          <span class="small text-muted">Test en cours...</span>
        </div>
        <span v-else-if="lastRequest" class="badge text-bg-info">
          {{ lastRequest }}
        </span>
      </div>

      <div v-if="errorText" class="alert alert-danger mb-0">
        {{ errorText }}
      </div>

      <div class="border rounded bg-light p-3 overflow-auto" aria-live="polite">
        <pre class="mb-0 small">{{ responseText || 'Aucun test lance.' }}</pre>
      </div>
    </div>
  </section>
</template>

```

## newApp/src/composables/auth/useAuth.js

```javascript
import { computed, ref } from 'vue'
import { createGlpiApi } from '../../services/testApi/glpiApi'
import {
  authState,
  clearSession,
  isAuthenticated,
  setSession,
} from '../../services/auth/authSession'

export const useAuth = () => {
  const glpi = createGlpiApi()

  const login = ref('')
  const password = ref('')

  const errorText = ref('')
  const loading = ref(false)

  const missingConfig = computed(() => !glpi.baseUrl || !glpi.appToken)

  // Recupere le profil courant pour enrichir la session apres connexion
  const fetchProfile = async (sessionToken) => {
    try {
      const result = await glpi.getFullSession(sessionToken)
      if (result.ok && result.data?.session) {
        const session = result.data.session
        return {
          id: session.glpiID ?? null,
          name: session.glpifriendlyname || session.glpiname || 'Utilisateur',
          activeProfile: session.glpiactiveprofile?.name || '',
          entity: session.glpiactive_entity_name || '',
        }
      }
    } catch (error) {
      // Profil optionnel : en cas d'echec on garde une session minimale
    }
    return null
  }

  const signIn = async () => {
    errorText.value = ''

    if (missingConfig.value) {
      errorText.value =
        'Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.'
      return false
    }

    if (!login.value.trim() || !password.value) {
      errorText.value = 'Renseigne ton identifiant et ton mot de passe.'
      return false
    }

    loading.value = true

    try {
      const result = await glpi.initSessionWithCredentials(
        login.value.trim(),
        password.value
      )

      if (!result.ok || !result.data?.session_token) {
        errorText.value =
          extractGlpiError(result.data) ||
          `Echec de la connexion (${result.status} ${result.statusText}).`
        return false
      }

      const sessionToken = result.data.session_token
      const profile = await fetchProfile(sessionToken)
      setSession(sessionToken, profile)

      password.value = ''
      return true
    } catch (error) {
      errorText.value = error?.message || 'Erreur reseau pendant la connexion.'
      return false
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    const token = authState.sessionToken
    if (token) {
      try {
        await glpi.killSession(token)
      } catch (error) {
        // On force la deconnexion locale meme si killSession echoue
      }
    }
    clearSession()
  }

  return {
    login,
    password,
    errorText,
    loading,
    missingConfig,
    isAuthenticated,
    authState,
    signIn,
    signOut,
  }
}

// GLPI renvoie les erreurs sous la forme ["ERROR_KEY", "message lisible"]
const extractGlpiError = (data) => {
  if (Array.isArray(data) && data.length > 1) {
    return data[1]
  }
  if (data?.message) {
    return data.message
  }
  return ''
}

```

## newApp/src/composables/dataReset/useDataReset.js

```javascript
import { computed, reactive, ref } from 'vue'
import { createResetApi } from '../../services/dataReset/glpiResetApi'
import {
  DELETE_CHUNK_SIZE,
  MAX_PASSES,
  orderedItemtypes,
  resettableItemtypes,
} from '../../services/dataReset/resetConfig'

const chunk = (array, size) => {
  const chunks = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export const useDataReset = () => {
  const api = createResetApi()

  const entities = ref([])
  const selectedEntityIds = reactive(new Set())
  const includeSubEntities = ref(false)

  // Selection des itemtypes : tous coches par defaut
  const itemtypeSelection = reactive(
    Object.fromEntries(resettableItemtypes.map((it) => [it.itemtype, true]))
  )

  const confirmChecked = ref(false)
  const loadingEntities = ref(false)
  const running = ref(false)
  const errorText = ref('')
  const logs = ref([])
  const summary = ref(null)
  const progress = reactive({ current: 0, total: 0, label: '' })

  const selectedItemtypes = computed(() =>
    orderedItemtypes(resettableItemtypes.filter((it) => itemtypeSelection[it.itemtype]))
  )

  const canRun = computed(
    () =>
      !running.value &&
      confirmChecked.value &&
      selectedEntityIds.size > 0 &&
      selectedItemtypes.value.length > 0
  )

  const log = (level, message) => {
    logs.value.push({
      time: new Date().toLocaleTimeString(),
      level,
      message,
    })
  }

  const toggleEntity = (id) => {
    if (selectedEntityIds.has(id)) {
      selectedEntityIds.delete(id)
    } else {
      selectedEntityIds.add(id)
    }
  }

  const isEntitySelected = (id) => selectedEntityIds.has(id)

  const selectAllEntities = () => {
    entities.value.forEach((entity) => selectedEntityIds.add(entity.id))
  }

  const clearEntities = () => selectedEntityIds.clear()

  const loadEntities = async () => {
    errorText.value = ''
    loadingEntities.value = true
    try {
      const list = await api.listEntities()
      entities.value = list
        .map((entity) => ({
          id: entity.id,
          name: entity.completename || entity.name || `Entite ${entity.id}`,
          level: entity.level ?? 1,
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
    } catch (error) {
      errorText.value = error?.message || 'Chargement des entites impossible.'
    } finally {
      loadingEntities.value = false
    }
  }

  // Supprime tous les items d'un itemtype dans l'entite active courante.
  // Retourne le nombre supprime et le nombre en echec sur cette passe.
  const purgeItemtype = async (itemtype, label) => {
    const ids = await api.listItemIds(itemtype)
    if (ids.length === 0) {
      return { deleted: 0, failed: 0, remaining: 0 }
    }

    let deleted = 0
    let failed = 0

    for (const batch of chunk(ids, DELETE_CHUNK_SIZE)) {
      const res = await api.deleteItems(itemtype, batch)
      if (res.ok) {
        deleted += batch.length
      } else {
        failed += batch.length
        log('warning', `${label} : echec d'un lot (${res.status}) ${api.glpiErrorMessage(res.data)}`)
      }
    }

    return { deleted, failed, remaining: ids.length }
  }

  const resetEntity = async (entity, totals) => {
    log('info', `Entite "${entity.name}" : activation du contexte...`)
    const activation = await api.changeActiveEntities(
      entity.id,
      includeSubEntities.value
    )
    if (!activation.ok) {
      log('danger', `Entite "${entity.name}" : activation impossible (${activation.status}).`)
      return
    }

    // Passes successives : une fois les dependants supprimes, les objets
    // references deviennent supprimables a la passe suivante.
    for (let pass = 1; pass <= MAX_PASSES; pass += 1) {
      let removedThisPass = 0

      for (const item of selectedItemtypes.value) {
        progress.label = `${entity.name} - passe ${pass} - ${item.label}`
        const { deleted, failed } = await purgeItemtype(item.itemtype, item.label)
        removedThisPass += deleted
        totals.deleted += deleted
        totals.failed += failed
        if (deleted > 0) {
          log('success', `${item.label} : ${deleted} supprime(s) (passe ${pass}).`)
        }
      }

      if (removedThisPass === 0) {
        // Plus rien a supprimer : on arrete les passes pour cette entite
        break
      }
    }
  }

  const runReset = async () => {
    errorText.value = ''
    logs.value = []
    summary.value = null

    if (!canRun.value) {
      errorText.value =
        'Selectionne au moins une entite, un type de donnees et confirme l\'action.'
      return
    }

    running.value = true
    const totals = { deleted: 0, failed: 0 }
    const targetEntities = entities.value.filter((entity) =>
      selectedEntityIds.has(entity.id)
    )

    progress.current = 0
    progress.total = targetEntities.length

    try {
      log('info', `Demarrage de la reinitialisation (${targetEntities.length} entite(s)).`)
      for (const entity of targetEntities) {
        await resetEntity(entity, totals)
        progress.current += 1
      }

      summary.value = { ...totals, entities: targetEntities.length }
      log(
        'info',
        `Termine : ${totals.deleted} item(s) supprime(s), ${totals.failed} echec(s).`
      )
    } catch (error) {
      errorText.value = error?.message || 'Erreur pendant la reinitialisation.'
      log('danger', errorText.value)
    } finally {
      running.value = false
      progress.label = ''
    }
  }

  return {
    entities,
    selectedEntityIds,
    includeSubEntities,
    itemtypeSelection,
    resettableItemtypes,
    confirmChecked,
    loadingEntities,
    running,
    errorText,
    logs,
    summary,
    progress,
    canRun,
    toggleEntity,
    isEntitySelected,
    selectAllEntities,
    clearEntities,
    loadEntities,
    runReset,
  }
}

```

## newApp/src/composables/testApi/useGlpiTest.js

```javascript
import { computed, ref } from 'vue'
import { createGlpiApi } from '../../services/testApi/glpiApi'
export const useGlpiTest = () => {
  const glpi = createGlpiApi()

  const endpoint = ref('/getMyProfiles')
  const method = ref('GET')
  const bodyText = ref('{"input": {}}')
  const userToken = ref('')
  const sessionToken = ref('')
  const useUserToken = ref(false)
  const useSessionToken = ref(true)

  const responseText = ref('')
  const errorText = ref('')
  const loading = ref(false)
  const lastRequest = ref('')

  const showBody = computed(() => method.value !== 'GET')
  const missingConfig = computed(
    () => !glpi.baseUrl || !glpi.appToken
  )

  const formatOutput = (result) =>
    JSON.stringify(
      {
        url: result.url,
        status: result.status,
        statusText: result.statusText,
        ok: result.ok,
        data: result.data,
      },
      null,
      2
    )

  const parseBody = () => {
    if (!showBody.value) {
      return undefined
    }

    const trimmed = bodyText.value.trim()
    if (!trimmed) {
      return undefined
    }

    try {
      return JSON.parse(trimmed)
    } catch (error) {
      throw new Error('Corps JSON invalide')
    }
  }

  const runRequest = async () => {
    errorText.value = ''
    responseText.value = ''

    if (missingConfig.value) {
      errorText.value =
        'Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.'
      return
    }

    loading.value = true

    try {
      const result = await glpi.request(endpoint.value, {
        method: method.value,
        body: parseBody(),
        sessionToken: useSessionToken.value ? sessionToken.value.trim() : '',
        userToken: useUserToken.value ? userToken.value.trim() : '',
      })

      responseText.value = formatOutput(result)
      lastRequest.value = `${result.status} ${result.statusText}`
    } catch (error) {
      errorText.value = error?.message || 'Erreur reseau'
    } finally {
      loading.value = false
    }
  }

  const startSession = async () => {
    errorText.value = ''
    responseText.value = ''

    if (!userToken.value.trim()) {
      errorText.value = 'Ajoute un user token pour initier la session.'
      return
    }

    loading.value = true

    try {
      const result = await glpi.initSession(userToken.value.trim())
      responseText.value = formatOutput(result)
      lastRequest.value = `${result.status} ${result.statusText}`

      if (result.data?.session_token) {
        sessionToken.value = result.data.session_token
        useSessionToken.value = true
      }
    } catch (error) {
      errorText.value = error?.message || 'Impossible de demarrer la session'
    } finally {
      loading.value = false
    }
  }

  const clearSession = () => {
    sessionToken.value = ''
    useSessionToken.value = false
  }

  return {
    endpoint,
    method,
    bodyText,
    userToken,
    sessionToken,
    useUserToken,
    useSessionToken,
    responseText,
    errorText,
    loading,
    lastRequest,
    showBody,
    missingConfig,
    runRequest,
    startSession,
    clearSession,
  }
}

```

## newApp/src/composables/testBackSqlite/useSqliteTest.js

```javascript
import { ref } from 'vue'
import { createSqliteApi } from '../../services/testBackSqlite/sqliteApi'
export const useSqliteTest = () => {
  const sqliteApi = createSqliteApi()

  const responseText = ref('')
  const errorText = ref('')
  const loading = ref(false)
  const lastRequest = ref('')

  const runTest = async () => {
    errorText.value = ''
    responseText.value = ''
    loading.value = true

    try {
      const result = await sqliteApi.testConnection()
      responseText.value = JSON.stringify(result, null, 2)
      lastRequest.value = `${result.status} ${result.statusText}`
    } catch (error) {
      errorText.value = error?.message || 'Echec de la connexion SQLite'
    } finally {
      loading.value = false
    }
  }

  return {
    baseUrl: sqliteApi.baseUrl,
    responseText,
    errorText,
    loading,
    lastRequest,
    runTest,
  }
}

```

## newApp/src/layout/FooterBar.vue

```vue
<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-top bg-white py-3 px-3 px-lg-4">
    <div
      class="container-fluid p-0 d-flex flex-wrap align-items-center justify-content-between gap-2"
    >
      <span class="text-muted small">
        &copy; {{ year }} AdminGLPI &middot; Interface d'administration
      </span>
      <div class="d-flex align-items-center gap-3 small">
        <a href="#" class="text-decoration-none text-muted">
          <i class="bi bi-question-circle me-1"></i>Aide
        </a>
        <span class="badge text-bg-light border">Version 0.1</span>
      </div>
    </div>
  </footer>
</template>

```

## newApp/src/layout/HeaderBar.vue

```vue
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/auth/useAuth'

const router = useRouter()
const { authState, signOut } = useAuth()

const userName = computed(() => authState.user?.name || 'Utilisateur')
const userProfile = computed(() => authState.user?.activeProfile || 'GLPI')
const initials = computed(() =>
  userName.value
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
)

const logout = async () => {
  await signOut()
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="navbar navbar-expand bg-white border-bottom px-3 px-lg-4 py-2">
    <div class="container-fluid p-0">
      <span class="navbar-brand fw-semibold mb-0 d-none d-md-inline">
        Console d'administration
      </span>

      <div class="d-flex align-items-center gap-3 ms-auto">
       

        <div class="dropdown">
          <button
            class="btn d-flex align-items-center gap-2 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span
              class="avatar d-inline-flex align-items-center justify-content-center"
            >
              {{ initials }}
            </span>
            <span class="text-start d-none d-sm-block lh-sm">
              <span class="d-block fw-semibold small">{{ userName }}</span>
              <span class="d-block text-muted" style="font-size: 0.75rem">
                {{ userProfile }}
              </span>
            </span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li>
              <span class="dropdown-item-text small text-muted">
                Connecte en tant que <strong>{{ userName }}</strong>
              </span>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item text-danger" type="button" @click="logout">
                <i class="bi bi-box-arrow-right me-2"></i>Se deconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>

```

## newApp/src/layout/SidebarNav.vue

```vue
<script setup>
import { useRoute } from 'vue-router'
import { getNavigationSections } from '../services/navigation/navigationService'

const route = useRoute()
const sections = getNavigationSections()

const isActive = (item) => route.path === item.to
</script>

<template>
  <nav class="sidebar d-flex flex-column h-100">
    <div class="sidebar-brand d-flex align-items-center gap-2 px-3 py-3">
      <span class="sidebar-brand-icon d-inline-flex align-items-center justify-content-center">
        <i class="bi bi-shield-lock"></i>
      </span>
      <span class="fw-semibold text-white">AdminGLPI</span>
    </div>

    <div class="flex-grow-1 overflow-auto px-2 pb-3">
      <div v-for="section in sections" :key="section.title" class="mb-3">
        <h6 class="sidebar-heading text-uppercase px-2 mt-2 mb-2">
          {{ section.title }}
        </h6>
        <ul class="nav flex-column gap-1">
          <li v-for="item in section.items" :key="item.key" class="nav-item">
            <router-link
              v-if="!item.disabled"
              :to="item.to"
              class="nav-link sidebar-link d-flex align-items-center gap-2"
              :class="{ active: isActive(item) }"
            >
              <i class="bi" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </router-link>
            <span
              v-else
              class="nav-link sidebar-link disabled d-flex align-items-center gap-2"
            >
              <i class="bi" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  background: #1e293b;
  min-height: 100%;
}

.sidebar-brand {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.sidebar-brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 0.6rem;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: #fff;
}

.sidebar-heading {
  color: #64748b;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
}

.sidebar-link {
  color: #cbd5e1;
  border-radius: 0.5rem;
  padding: 0.55rem 0.75rem;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.sidebar-link:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
}

.sidebar-link.active {
  background: #0d6efd;
  color: #fff;
}

.sidebar-link.disabled {
  color: #64748b;
  pointer-events: none;
}
</style>

```

## newApp/src/main.js

```javascript
import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'
import { router } from './routes'

const app = createApp(App)

app.use(router)
app.mount('#app')

```

## newApp/src/pages/auth/LoginPage.vue

```vue
<script setup>
import LoginForm from '../../components/auth/LoginForm.vue'
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <div class="card border-0 shadow-lg">
          <div class="card-body p-4 p-md-5">
            <div class="text-center mb-4">
              <div
                class="d-inline-flex align-items-center justify-content-center mb-3 rounded-4 bg-primary text-white shadow-sm p-3"
              >
                <i class="bi bi-shield-lock fs-3"></i>
              </div>
              <h1 class="h4 fw-semibold mb-1">Console d'administration</h1>
              <p class="text-muted small mb-0">
                Connexion via le compte GLPI
              </p>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

```

## newApp/src/pages/dataReset/DataResetPage.vue

```vue
<script setup>
import DataResetPanel from '../../components/dataReset/DataResetPanel.vue'
</script>

<template>
  <section class="d-flex flex-column gap-3">
    <header>
      <p class="text-uppercase fw-semibold text-danger small mb-2">Maintenance</p>
      <h1 class="h3 fw-semibold">Reinitialisation des donnees</h1>
      <p class="text-muted mt-2 mb-0">
        Selectionne une ou plusieurs entites GLPI, choisis les types de donnees a
        purger, puis lance la suppression. Seuls les endpoints DELETE de l'API GLPI
        sont utilises, avec une purge ordonnee en plusieurs passes pour resoudre les
        dependances.
      </p>
    </header>

    <DataResetPanel />
  </section>
</template>

```

## newApp/src/pages/testApi/GlpiTestPage.vue

```vue
<script setup>
import { createGlpiApi } from '../../services/testApi/glpiApi.js'
import GlpiTestPanel from '../../components/testApi/GlpiTestPanel.vue'

const glpi = createGlpiApi()
</script>

<template>
  <section class="d-flex flex-column gap-3">
    <header>
      <p class="text-uppercase fw-semibold text-primary small mb-2">GLPI API</p>
      <h1 class="h3 fw-semibold">Test rapide des endpoints</h1>
      <p class="text-muted mt-2">
        Cette page sert uniquement a verifier que l'API repond et que les tokens
        sont corrects avant de demarrer le vrai projet.
      </p>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <span class="badge text-bg-secondary">
          Base: {{ glpi.baseUrl || 'Non configuree' }}
        </span>
        <span class="badge text-bg-success">App-Token actif</span>
      </div>
    </header>

    <GlpiTestPanel />

    <section class="card border-0 shadow-sm">
      <div class="card-body">
        <h3 class="h5 mb-3">Conseils rapides</h3>
        <ul class="mb-0">
          <li>Initie la session avec le user token.</li>
          <li>Utilise le Session-Token pour les requetes suivantes.</li>
          <li>Teste un endpoint simple comme /getMyProfiles.</li>
        </ul>
      </div>
    </section>
  </section>
</template>

```

## newApp/src/pages/testBackSqlite/SqliteTestPage.vue

```vue
<script setup>
import SqliteTestPanel from '../../components/testBackSqlite/SqliteTestPanel.vue'
import { createSqliteApi } from '../../services/testBackSqlite/sqliteApi.js'

const sqliteApi = createSqliteApi()
</script>

<template>
  <section class="d-flex flex-column gap-3">
    <header>
      <p class="text-uppercase fw-semibold text-primary small mb-2">SQLite</p>
      <h1 class="h3 fw-semibold">Test connexion SQLite locale</h1>
      <p class="text-muted mt-2">
        Verifie la connexion du backend Spring Boot sur la base SQLite locale.
      </p>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <span class="badge text-bg-secondary">
          Base: {{ sqliteApi.baseUrl || 'Non configuree' }}
        </span>
        <span class="badge text-bg-success">Endpoint /api/sqlite/test</span>
      </div>
    </header>

    <SqliteTestPanel />
  </section>
</template>

```

## newApp/src/routes/index.js

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import SqliteTestPage from '../pages/testBackSqlite/SqliteTestPage.vue'
import GlpiTestPage from '../pages/testApi/GlpiTestPage.vue'
import DataResetPage from '../pages/dataReset/DataResetPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import { isAuthenticated } from '../services/auth/authSession'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { public: true, layout: 'blank' },
  },
  { path: '/', redirect: '/sqlite' },
  { path: '/sqlite', name: 'sqlite-test', component: SqliteTestPage },
  { path: '/glpi', name: 'glpi-test', component: GlpiTestPage },
  { path: '/reset', name: 'data-reset', component: DataResetPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Garde globale : redirige vers /login si la session GLPI est absente
router.beforeEach((to) => {
  if (to.meta.public) {
    if (to.name === 'login' && isAuthenticated.value) {
      return { path: '/' }
    }
    return true
  }

  if (!isAuthenticated.value) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  return true
})

```

## newApp/src/services/auth/authSession.js

```javascript
import { computed, reactive, readonly } from 'vue'

const STORAGE_KEY = 'glpi.auth.session'

const loadInitialState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return { sessionToken: '', user: null }
    }
    const parsed = JSON.parse(raw)
    return {
      sessionToken: parsed.sessionToken || '',
      user: parsed.user || null,
    }
  } catch (error) {
    // Stockage corrompu ou indisponible : on repart sur un etat vide
    return { sessionToken: '', user: null }
  }
}

// Etat partage par toute l'application (pattern store leger sans Pinia)
const state = reactive(loadInitialState())

const persist = () => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ sessionToken: state.sessionToken, user: state.user })
    )
  } catch (error) {
    // Persistance impossible : la session reste valable pour l'onglet courant
  }
}

export const isAuthenticated = computed(() => Boolean(state.sessionToken))

export const setSession = (sessionToken, user = null) => {
  state.sessionToken = sessionToken || ''
  state.user = user
  persist()
}

export const clearSession = () => {
  state.sessionToken = ''
  state.user = null
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    // Suppression impossible : on ignore, l'etat memoire est deja vide
  }
}

export const authState = readonly(state)

```

## newApp/src/services/dataReset/glpiResetApi.js

```javascript
import { createGlpiApi } from '../testApi/glpiApi'
import { authState } from '../auth/authSession'

const PAGE_SIZE = 200

// Detecte le format d'erreur GLPI : ["ERROR_xxx", "message"]
const isGlpiError = (data) =>
  Array.isArray(data) && typeof data[0] === 'string' && data[0].startsWith('ERROR')

const glpiErrorMessage = (data) =>
  isGlpiError(data) ? data[1] || data[0] : ''

export const createResetApi = () => {
  const glpi = createGlpiApi()

  // Toutes les requetes reutilisent le Session-Token de l'utilisateur connecte
  const withSession = (extra = {}) => ({
    sessionToken: authState.sessionToken,
    ...extra,
  })

  const listEntities = async () => {
    const res = await glpi.request('/Entity?range=0-9999', withSession())
    if (!res.ok || isGlpiError(res.data)) {
      throw new Error(
        glpiErrorMessage(res.data) ||
          `Impossible de charger les entites (${res.status}).`
      )
    }
    return Array.isArray(res.data) ? res.data : []
  }

  // Positionne l'entite active de la session pour cibler precisement les items
  const changeActiveEntities = (entitiesId, isRecursive = false) =>
    glpi.request(
      '/changeActiveEntities',
      withSession({
        method: 'POST',
        body: { entities_id: entitiesId, is_recursive: isRecursive },
      })
    )

  // Recupere tous les identifiants d'un itemtype dans l'entite active (pagine)
  const listItemIds = async (itemtype) => {
    const ids = []
    let start = 0

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const end = start + PAGE_SIZE - 1
      const res = await glpi.request(
        `/${itemtype}?only_id=true&range=${start}-${end}`,
        withSession()
      )

      // GLPI renvoie une erreur quand l'itemtype est vide ou la plage depasse
      if (isGlpiError(res.data)) {
        break
      }
      if (!res.ok && res.status !== 206) {
        break
      }

      const list = Array.isArray(res.data) ? res.data : []
      for (const item of list) {
        if (item && item.id != null) {
          ids.push(item.id)
        }
      }

      let total = null
      const range = res.headers?.['content-range']
      if (range && range.includes('/')) {
        total = Number.parseInt(range.split('/')[1], 10)
      }

      start += PAGE_SIZE
      if (list.length < PAGE_SIZE) break
      if (total != null && start >= total) break
    }

    return ids
  }

  // Suppression definitive (force_purge) d'un lot d'items via l'API DELETE
  const deleteItems = (itemtype, ids, { forcePurge = true } = {}) =>
    glpi.request(
      `/${itemtype}`,
      withSession({
        method: 'DELETE',
        body: {
          input: ids.map((id) => ({ id })),
          force_purge: forcePurge,
        },
      })
    )

  return {
    listEntities,
    changeActiveEntities,
    listItemIds,
    deleteItems,
    glpiErrorMessage,
  }
}

```

## newApp/src/services/dataReset/resetConfig.js

```javascript
// Itemtypes GLPI purgeables lors d'une reinitialisation d'entite.
// `weight` definit l'ordre de suppression : les plus petits sont supprimes
// en premier (objets dependants), les plus grands en dernier (objets references).
// Cet ordre, combine aux passes successives, evite les erreurs de liaison.
export const resettableItemtypes = [
  // Objets ITIL : referencent assets, utilisateurs, fournisseurs
  { itemtype: 'Ticket', label: 'Tickets', weight: 10 },
  { itemtype: 'Problem', label: 'Problemes', weight: 11 },
  { itemtype: 'Change', label: 'Changements', weight: 12 },

  // Actifs (assets)
  { itemtype: 'Computer', label: 'Ordinateurs', weight: 30 },
  { itemtype: 'Monitor', label: 'Ecrans', weight: 31 },
  { itemtype: 'NetworkEquipment', label: 'Equipements reseau', weight: 32 },
  { itemtype: 'Peripheral', label: 'Peripheriques', weight: 33 },
  { itemtype: 'Phone', label: 'Telephones', weight: 34 },
  { itemtype: 'Printer', label: 'Imprimantes', weight: 35 },

  // Logiciels : les licences avant les logiciels
  { itemtype: 'SoftwareLicense', label: 'Licences logicielles', weight: 40 },
  { itemtype: 'Software', label: 'Logiciels', weight: 41 },

  // Gestion / references
  { itemtype: 'Document', label: 'Documents', weight: 50 },
  { itemtype: 'Contract', label: 'Contrats', weight: 51 },
  { itemtype: 'Supplier', label: 'Fournisseurs', weight: 52 },
  { itemtype: 'Contact', label: 'Contacts', weight: 53 },
  { itemtype: 'Budget', label: 'Budgets', weight: 54 },
]

// Nombre maximal de passes pour resoudre les dependances residuelles.
export const MAX_PASSES = 4

// Taille des lots envoyes a l'API DELETE de GLPI.
export const DELETE_CHUNK_SIZE = 100

export const orderedItemtypes = (itemtypes) =>
  [...itemtypes].sort((a, b) => a.weight - b.weight)

```

## newApp/src/services/navigation/navigationService.js

```javascript
const navigationSections = [
  {
    title: 'Tableau de bord',
    items: [
      {
        key: 'glpi',
        label: 'Test GLPI',
        to: '/glpi',
        icon: 'bi-hdd-network',
        disabled: false,
      },
      {
        key: 'sqlite',
        label: 'Test SQLite',
        to: '/sqlite',
        icon: 'bi-database',
        disabled: false,
      },
    ],
  },
  {
    title: 'Maintenance',
    items: [
      {
        key: 'reset',
        label: 'Reinitialisation',
        to: '/reset',
        icon: 'bi-trash3',
        disabled: false,
      },
    ],
  },
]

export const getNavigationSections = () => navigationSections

export const getNavigationItems = () =>
  navigationSections.flatMap((section) => section.items)

```

## newApp/src/services/testApi/glpiApi.js

```javascript
const trimTrailingSlashes = (value) => value.replace(/\/+$/, '')

// Dans glpiApi.js
const baseUrl = trimTrailingSlashes(
  import.meta.env.VITE_GLPI_API_BASE_URL || ''
)
const appToken = import.meta.env.VITE_GLPI_API_KEY || ''

console.log('🔍 Debug env:', {
  baseUrl,
  appToken,
  fullEnv: import.meta.env
})

const buildUrl = (path) => {
  if (!baseUrl) {
    throw new Error('VITE_GLPI_API_BASE_URL manquante dans le fichier .env')
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

const parseResponse = async (response) => {
  const contentType = response.headers.get('content-type') || ''
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text()

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries()),
    data,
  }
}

const encodeBasic = (login, password) => {
  const raw = `${login}:${password}`
  if (typeof btoa === 'function') {
    // btoa attend du Latin1, on encode l'UTF-8 au prealable
    return btoa(unescape(encodeURIComponent(raw)))
  }
  return Buffer.from(raw, 'utf-8').toString('base64')
}

export const createGlpiApi = () => {
  const request = async (
    path,
    { method = 'GET', body, sessionToken, userToken, credentials } = {}
  ) => {
    const url = buildUrl(path)
    const headers = {
      Accept: 'application/json',
    }

    if (appToken) {
      headers['App-Token'] = appToken
    }

    if (sessionToken) {
      headers['Session-Token'] = sessionToken
    }

    if (userToken) {
      headers.Authorization = `user_token ${userToken}`
    }

    if (credentials?.login) {
      headers.Authorization = `Basic ${encodeBasic(
        credentials.login,
        credentials.password || ''
      )}`
    }

    let payload
    if (body !== undefined && method !== 'GET') {
      headers['Content-Type'] = 'application/json'
      payload = JSON.stringify(body)
    }

    const response = await fetch(url, {
      method,
      headers,
      body: payload,
    })

    const parsed = await parseResponse(response)

    return {
      url,
      requestHeaders: headers,
      ...parsed,
    }
  }

  const initSession = (userToken) =>
    request('/initSession', { method: 'GET', userToken })

  const initSessionWithCredentials = (login, password) =>
    request('/initSession', {
      method: 'GET',
      credentials: { login, password },
    })

  const killSession = (sessionToken) =>
    request('/killSession', { method: 'GET', sessionToken })

  const getFullSession = (sessionToken) =>
    request('/getFullSession', { method: 'GET', sessionToken })

  return {
    baseUrl,
    appToken,
    request,
    initSession,
    initSessionWithCredentials,
    killSession,
    getFullSession,
  }
}

```

## newApp/src/services/testBackSqlite/sqliteApi.js

```javascript
const trimTrailingSlashes = (value) => value.replace(/\/+$/, '')

const baseUrl = trimTrailingSlashes(
  import.meta.env.VITE_SQLITE_API_BASE_URL || ''
)

const buildUrl = (path) => {
  if (!baseUrl) {
    throw new Error('VITE_SQLITE_API_BASE_URL manquante dans le fichier .env')
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

const parseResponse = async (response) => {
  const contentType = response.headers.get('content-type') || ''
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text()

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    data,
  }
}

export const createSqliteApi = () => {
  const request = async (path, { method = 'GET', body } = {}) => {
    const url = buildUrl(path)
    const headers = {
      Accept: 'application/json',
    }

    let payload
    if (body !== undefined && method !== 'GET') {
      headers['Content-Type'] = 'application/json'
      payload = JSON.stringify(body)
    }

    const response = await fetch(url, {
      method,
      headers,
      body: payload,
    })

    return {
      url,
      requestHeaders: headers,
      ...(await parseResponse(response)),
    }
  }

  const testConnection = () => request('/sqlite/test')

  return {
    baseUrl,
    request,
    testConnection,
  }
}

```

## newApp/vite.config.js

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/glpi': {
        target:'http://localhost',
        changeOrigin: true,
          // API REST historique de GLPI (initSession/killSession/getFullSession)
        rewrite: (path) => path.replace(/^\/glpi/, '/glpi/apirest.php'),  
      },
      // Proxy pour votre backend SQLite (si nécessaire)
      '/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
      },
    },
  },
})
```

