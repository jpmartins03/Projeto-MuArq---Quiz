self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('muarq-cache').then(cache => {
        return cache.addAll([
          // Arquivos principais
          '/',
          '/app.js',
          '/index.html',
          '/end.html',
          '/page1.html',
          '/quiz.html',
          '/manifest.json',
          '/style.css',
  
          // Diretório .vscode
          '/.vscode/settings.json',
  
          // Assets - Quiz
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/1.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/2.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/3.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/4.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/5.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/6.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/7.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/8.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/9.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/10.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/LOGO-FMIC-E-FOMTEATRO.zip',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/LOGO_Muarq.jpg',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/Perguntas Quizz MuArq 2.docx',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/QUIZ LOGO(1).png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/qUIZ LOGO.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/áudio com as falas.mp3',
  
          // Logos FMIC e FOMTEATRO
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/LOGO-FMIC-E-FOMTEATRO/Logo FMIC.jpg',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/LOGO-FMIC-E-FOMTEATRO/Logo FMIC.png',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/LOGO-FMIC-E-FOMTEATRO/Logo FOMTEATRO.jpg',
          '/assets/assets-quiz/drive-download-20250120T155620Z-001/LOGO-FMIC-E-FOMTEATRO/Logo FOMTEATRO.png',
  
          // CSS
          '/assets/css/end.css',
          '/assets/css/global.css',
          '/assets/css/home.css',
          '/assets/css/page1.css',
          '/assets/css/quiz.css',
  
          // Fonts
          '/assets/fonts/futura extra black font.ttf',
          '/assets/fonts/swiss 721 LT CN BTl.ttf',
          '/assets/fonts/trebuc.ttf',
  
          // Imagens
          '/assets/img/Logo Museu.png',
          '/assets/img/logo-ufms.svg',
          '/assets/img/logo192.png',
          '/assets/img/logo_facom.svg',
          '/assets/img/menu_white_36dp.svg',
  
          // JavaScript
          '/assets/js/home.js',
          '/assets/js/modal.js',
          '/assets/js/quiz.js',
  
          // Logos Museu
          '/assets/logos_museu/drive-download-20250120T164639Z-001.zip',
          '/assets/logos_museu/drive-download-20250120T164639Z-001/Logo Museu Negativo Transp.png',
          '/assets/logos_museu/drive-download-20250120T164639Z-001/Logo Museu Negativo.ai',
          '/assets/logos_museu/drive-download-20250120T164639Z-001/Logo Museu Negativo.eps'
        ]).catch(error => {
          console.error('Erro ao adicionar arquivos ao cache:', error);
        });
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  