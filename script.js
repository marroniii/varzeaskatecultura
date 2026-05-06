// Translations
const translations = {
    'pt': {
        'title': 'Varzea Skate Cultura | Compre e venda mídias de skate',
        'description': 'Encontre fotos e vídeos da sua sessão ou venda seu trampo como filmer ou fotógrafo de skate.',
        'hero_h1': 'Compre e venda mídias de skate da sua sessão',
        'hero_p': 'Fotos e vídeos reais, feitos na rua — encontre suas manobras ou venda seu trampo.',
        'hero_btn_find': 'Encontrar minhas mídias',
        'hero_btn_sell': 'Vender minhas mídias',
        'skaters_h2': 'Pra quem anda de skate',
        'skaters_p': 'Já acertou uma manobra e nunca viu o registro?',
        'skaters_li1': 'Encontrar fotos e vídeos da sua sessão',
        'skaters_li2': 'Comprar sua própria imagem em alta qualidade',
        'skaters_li3': 'Guardar ou postar onde quiser',
        'skaters_btn': 'Ver mídias disponíveis',
        'creators_h2': 'Pra quem filma e fotografa',
        'creators_p': 'Seu trampo não precisa ficar parado no HD.',
        'creators_li1': 'Publicar suas fotos e vídeos',
        'creators_li2': 'Definir seu próprio preço',
        'creators_li3': 'Vender direto pra quem aparece nas sessões',
        'creators_btn': 'Começar a vender',
        'how_h2': 'Como funciona',
        'step1_h3': 'Upload',
        'step1_p': 'Criadores sobem mídias de sessões reais capturadas nas ruas ou pistas.',
        'step2_h3': 'Busca',
        'step2_p': 'Skatistas encontram suas manobras através de data, local ou tags.',
        'step3_h3': 'Download',
        'step3_p': 'Compram com segurança e fazem o download instantâneo em alta resolução.',
        'why_h2': 'Por que isso existe?',
        'why_p': 'Porque muita sessão boa se perde. E muito trampo de quem filma nunca vira retorno.',
        'purpose1_h3': 'Evolução',
        'purpose1_p': 'Quem anda registra sua evolução e garante o registro daquela manobra histórica.',
        'purpose2_h3': 'Valorização',
        'purpose2_p': 'Quem cria é pago pelo seu trabalho, incentivando a cena e a produção de conteúdo.',
        'final_h2': 'Comece agora',
        'final_btn_find': 'Quero encontrar minhas mídias',
        'final_btn_sell': 'Quero vender minhas mídias',
        'trust_h2': 'Seguro e transparente',
        'trust_li1': 'Pagamento protegido',
        'trust_li2': 'Download liberado após compra',
        'trust_li3': 'Seus dados respeitados (LGPD)',
        'teaser_h2': 'Em breve',
        'teaser_p': 'Mapa interativo com picos de rua, pistas e sessões acontecendo em tempo real.',
        'teaser_map': 'MAPA',
        'footer_made_by': 'Feito por quem vive o skate',
        'footer_terms': 'Termos de uso',
        'footer_privacy': 'Política de privacidade'
    },
    'en': {
        'title': 'Varzea Skate Cultura | Buy and sell skate media',
        'description': 'Find photos and videos of your session or sell your work as a skate filmer or photographer.',
        'hero_h1': 'Buy and sell skate media from your sessions',
        'hero_p': 'Real photos and videos, shot on the streets — find your tricks or sell your work.',
        'hero_btn_find': 'Find my media',
        'hero_btn_sell': 'Sell my media',
        'skaters_h2': 'For those who skate',
        'skaters_p': 'Ever landed a trick and never saw the footage?',
        'skaters_li1': 'Find photos and videos of your sessions',
        'skaters_li2': 'Buy your own high-quality images',
        'skaters_li3': 'Save or post wherever you want',
        'skaters_btn': 'View available media',
        'creators_h2': 'For those who film and shoot',
        'creators_p': 'Your work doesn\'t have to stay stuck on your hard drive.',
        'creators_li1': 'Publish your photos and videos',
        'creators_li2': 'Set your own price',
        'creators_li3': 'Sell directly to those appearing in the sessions',
        'creators_btn': 'Start selling',
        'how_h2': 'How it works',
        'step1_h3': 'Upload',
        'step1_p': 'Creators upload media from real sessions captured on streets or parks.',
        'step2_h3': 'Search',
        'step2_p': 'Skaters find their tricks through date, location, or tags.',
        'step3_h3': 'Download',
        'step3_p': 'Buy securely and download instantly in high resolution.',
        'why_h2': 'Why does this exist?',
        'why_p': 'Because many great sessions are lost. And many filmers\' work never sees a return.',
        'purpose1_h3': 'Evolution',
        'purpose1_p': 'Skaters record their progress and secure the footage of that historic trick.',
        'purpose2_h3': 'Appreciation',
        'purpose2_p': 'Creators get paid for their work, boosting the scene and content production.',
        'final_h2': 'Get started now',
        'final_btn_find': 'I want to find my media',
        'final_btn_sell': 'I want to sell my media',
        'trust_h2': 'Secure and transparent',
        'trust_li1': 'Protected payment',
        'trust_li2': 'Download available after purchase',
        'trust_li3': 'Your data respected (GDPR)',
        'teaser_h2': 'Coming soon',
        'teaser_p': 'Interactive map with street spots, parks, and sessions happening in real-time.',
        'teaser_map': 'MAP',
        'footer_made_by': 'Made by those who live skate',
        'footer_terms': 'Terms of use',
        'footer_privacy': 'Privacy policy'
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'pt';

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const attr = el.getAttribute('data-i18n-attr');
        if (translations[currentLang][attr]) {
             el.setAttribute(attr, translations[currentLang][attr]);
        }
    });

    // Special case for description meta tag
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', translations[currentLang]['description']);
    }

    // Update active state in selector
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update html lang attribute
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

// Language Picker Events
document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang !== currentLang) {
            currentLang = selectedLang;
            localStorage.setItem('preferredLang', currentLang);
            updateLanguage();
        }
    });
});

// Initial Language Load
updateLanguage();

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect on hero background
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
        const scrolled = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});

// Initial load animation for hero
window.addEventListener('load', () => {
    document.querySelector('.hero-content').classList.add('active');
});

// Header scroll effect
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

