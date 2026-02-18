/**
 * i18n.js — Общая система переводов для всех страниц сайта
 * Поддерживаемые языки: RU (по умолчанию), EN, ZH (CN)
 */
(function(){
'use strict';

const T = {
/* ════════════════════════════════════════════════════
   РУССКИЙ (базовый язык, совпадает с HTML)
   ════════════════════════════════════════════════════ */
ru: {
    // ── Nav ──
    nav_about:'Обо мне', nav_activities:'Деятельность', nav_services:'Услуги', nav_cases:'Кейсы', nav_contact:'Контакт', nav_cta:'СВЯЗАТЬСЯ',
    mnav_about:'ОБО МНЕ', mnav_activities:'ДЕЯТЕЛЬНОСТЬ', mnav_services:'УСЛУГИ', mnav_cases:'КЕЙСЫ', mnav_contact:'КОНТАКТ',
    bnav_home:'Главная', bnav_about:'Обо мне', bnav_activities:'Дело', bnav_services:'Услуги', bnav_contact:'Контакт',
    sticky_open:'Открыт',
    // ── Intro ──
    intro_name:'ЧИМИТДОРЖИ', intro_skip:'нажмите для пропуска',
    // ── Hero ──
    hero_prefix:'ДАРИЖАПОВ', hero_location:'ЧИТА · РОССИЯ', hero_subtitle:'&amp; ВИЗИОНЕР',
    hero_desc:'Предприниматель, <span class="text-white font-semibold">AI/ML инженер</span>, преподаватель, организатор <span class="text-white font-semibold">50+ мероприятий</span> федерального и международного уровня. Строю системы, обучаю людей, создаю события.',
    hero_cta:'СВЯЗАТЬСЯ', hero_cta2:'ДЕЯТЕЛЬНОСТЬ', hero_scroll:'Скролл',
    hero_role_ai:'🤖 AI/ML Эксперт', hero_role_teacher:'🎓 Преподаватель', hero_role_event:'🎪 Event-организатор', hero_role_entrepreneur:'💼 Предприниматель', hero_role_producer:'🎵 Продюсер',
    stat_exp:'Лет опыта', stat_events:'Ивентов', stat_views:'Просмотров', stat_podcasts:'Подкастов',
    // ── About ──
    about_label:'// 01 ОБО МНЕ', about_title:'Кто такой <span class="text-primary">Чимитдоржи</span>',
    about_name:'Дарижапов Чимитдоржи', about_location:'📍 Забайкальский край, Россия', about_country:'🇷🇺 Россия', about_remote:'🌐 Удалённо',
    about_bio1:'Высококвалифицированный IT-специалист с 16+ годами опыта в разработке, AI/ML и предпринимательстве. Уникальное сочетание глубокой технической экспертизы с педагогическими и бизнес-компетенциями.',
    about_bio2:'Специализируюсь на создании AI-решений на основе LLM, автоматизации процессов и обучении нового поколения IT-специалистов. Организатор 50+ мероприятий федерального и международного уровня — от блокчейн-саммитов до киберспортивных турниров.',
    about_lang_ru:'Русский', about_lang_ru_level:'Родной', about_lang_bu:'Бурятский', about_lang_bu_level:'Родной', about_lang_en:'Английский',
    about_path_label:'// ПУТЬ',
    about_path_zabgu:'Преподаватель ЗабГУ', about_path_zabgu_desc:'AI, нейросети, администрирование БД',
    about_path_studio:'AI-архитектор &amp; Студия', about_path_studio_desc:'Собственная практика, LLM-решения',
    about_path_rakib:'Рук. представительства ДФО', about_path_rakib_desc:'РАКИБ — блокчейн и криптовалюты',
    about_path_college:'Преподаватель, колледж', about_path_college_desc:'Системное администрирование',
    about_path_freelance:'Фриланс &amp; Предпринимательство', about_path_freelance_desc:'AI-решения, разработка, события',
    about_skills_label:'// ТЕХНИЧЕСКИЕ НАВЫКИ', about_skill_programming:'Программирование', about_skill_infra:'Инфраструктура',
    about_cert_label:'// ГОСУДАРСТВЕННАЯ ВЕРИФИКАЦИЯ', about_cert_title:'Сертификаты Госуслуги РФ',
    about_cert_desc:'gosuslugi.ru — официальная государственная верификация навыков · Действительны до марта 2027',
    about_cert_count_label:'Сертификатов', about_cert_more:'+ другие',
    about_cert_hh:'Также верифицирован на HeadHunter (hh.ru) — Advanced/Intermediate навыки до марта 2027',
    about_cert_valid:'● Действительны',
    // ── Activities ──
    act_label:'// 02 ДЕЯТЕЛЬНОСТЬ', act_title:'Чем я <span class="text-primary">занимаюсь</span>',
    tab_teaching:'🎓 Преподавание', tab_esports:'🎮 Киберспорт', tab_media:'🎵 Медиа', tab_blockchain:'₿ Блокчейн',
    // AI tab
    ai_title:'AI/ML Разработка',
    ai_desc:'Разработка AI-решений: интеграция LLM (GPT, Claude, Gemini, DeepSeek, QWEN, Mistral), создание чат-ботов и виртуальных ассистентов. Работа с векторными БД — Pinecone, Weaviate.',
    ai_item1:'Системы обработки документов с AI', ai_item2:'Голосовые ассистенты', ai_item3:'Платформы генерации контента', ai_item4:'Обучение моделей на кастомных датасетах',
    ai_status:'● Статус: Открыт к проектам',
    ai_voice_title:'Голосовые ассистенты', ai_voice_desc:'Разработка голосовых AI-ассистентов под бизнес-задачи. Распознавание речи, диалоговые системы, интеграция с корпоративными сервисами.',
    ai_certs_title:'Сертификаты 2026', ai_certs_desc:'Свежие сертификаты Vanderbilt University (Coursera) и MongoDB Inc. по AI агентам и векторному поиску.',
    // Teaching tab
    teach_zabgu_title:'ЗабГУ · Март 2024 — Март 2025',
    teach_zabgu_desc1:'Лекции и мастер-классы по нейронным сетям. Администрирование БД. Применение AI для проверки научных работ. Подкасты и онлайн-трансляции.',
    teach_zabgu_desc2:'Организация киберспортивных мероприятий и IT-решений для партнёров вуза.',
    teach_disciplines_title:'Дисциплины',
    teach_disc_ai:'AI и машинное обучение', teach_disc_db:'БД: SQL, PostgreSQL, MongoDB', teach_disc_web:'Веб-разработка и API', teach_disc_algo:'Алгоритмы и структуры данных', teach_disc_sysanalysis:'Системный анализ',
    teach_edu_title:'Образование',
    teach_edu_masters:'ЗабГУ — Магистратура', teach_edu_masters_desc:'Педагогическое образование',
    teach_edu_bachelors:'ЗабГУ — Бакалавриат', teach_edu_bachelors_desc:'Социально-культурная деятельность',
    teach_edu_dpo:'ЗабГУ — ДПО', teach_edu_dpo_desc:'Педагог профессионального обучения',
    teach_edu_phoenix:'АНО ДПО «Феникс»', teach_edu_phoenix_desc:'Преподаватель информатики и ВТ',
    teach_certs_label:'// УДОСТОВЕРЕНИЯ О ПОВЫШЕНИИ КВАЛИФИКАЦИИ',
    teach_cert_finuni:'Финансовый университет при Правительстве РФ', teach_cert_finuni_desc:'Карьера и бизнес в киберспорте · 2021',
    teach_cert_swsu:'Юго-Западный государственный университет, Курск', teach_cert_swsu_desc:'Event-менеджмент · Судья по киберспорту · 2022',
    teach_cert_dstu:'Донской государственный технический университет, Ростов-на-Дону', teach_cert_dstu_desc:'Тренер по киберспорту · 2023',
    teach_cert_reu:'Российский экономический университет им. Г.В. Плеханова', teach_cert_reu_desc:'Цифровая экономика · 2019',
    // Events tab
    events_headline:'50+ мероприятий федерального и международного уровня',
    events_counter_events:'Ивентов', events_counter_intl:'Международные', events_counter_federal:'Федеральный', events_counter_since:'С этого года',
    events_conf_title:'Конференции и саммиты',
    events_conf_crypto:'Крипто Саммит РФ', events_conf_crypto_desc:'2022, Москва — крупнейший блокчейн-саммит в стране',
    events_conf_intl_desc:'2022 — международная конференция',
    events_conf_mining:'Майнинг Конференция РФ', events_conf_mining_desc:'2022, Иркутск — первая конференция легальных майнеров в России',
    events_conf_expo:'Майнинг Экспо РФ', events_conf_expo_desc:'2022 — единственное специализированное мероприятие в РФ',
    events_conf_mediabiz:'МедиаБиз.рф · RWAT.ru · Forum Mining.ru', events_conf_mediabiz_desc:'2024–2025 — серия деловых форумов',
    events_conf_invest_desc:'2019 — инвестиционный саммит',
    events_sports_title:'Техническая поддержка спортивных мероприятий',
    events_sports_boxing:'Чемпионат России по боксу', events_sports_boxing_desc:'2022, Чита',
    events_sports_wrestling:'Первенство России по вольной борьбе', events_sports_wrestling_desc:'2022, Чита',
    events_sports_nomad:'«Дух кочевника» — боевое самбо', events_sports_nomad_desc:'2023, международный турнир',
    events_sports_altargana:'Алтаргана', events_sports_altargana_desc:'2022, международный бурятский фестиваль',
    // Esports tab
    esports_tournaments_title:'Киберспортивные турниры',
    esports_tournament_vdp:'«Все для победы!»', esports_tournament_vdp_desc:'2023, Чита — первый в России киберспортивный благотворительный турнир',
    esports_tournament_mlbb:'Чемпионат и Кубок Забайкальского края по MLBB',
    esports_tournament_kaliningrad:'Чемпионат по киберспорту в Калининградской области',
    esports_tournament_cups:'Кубки городов Забайкальского края', esports_tournament_cups_desc:'Кубок Читы в кинотеатре «Удокан» — серия турниров',
    esports_edu_title:'Образование в киберспорте',
    esports_edu_trainer:'🏋️ Тренер по киберспорту', esports_edu_trainer_desc:'ДГТУ, Ростов-на-Дону — 2022',
    esports_edu_judge:'⚖️ Судья по киберспорту', esports_edu_judge_desc:'ЮЗГУ, Курск — 2022–2023',
    esports_edu_career:'💼 Карьера в киберспорте', esports_edu_career_desc:'Финансовый университет РФ — 2021',
    esports_roles:'● Организатор · Тренер · Судья',
    // Media tab
    media_title:'Музыкальный лейбл AREY',
    media_desc:'Основатель и продюсер лейбла Arey. Представлен на международной платформе Beatport. Синтез традиционных бурятских мотивов и современной электронной музыки.',
    media_total_label:'Суммарно', media_podcasts_label:'Подкастов',
    media_tag_podcasts:'Подкасты', media_tag_streams:'Стримы',
    media_meta_title:'Метавселенная', media_meta_desc:'Концерт в метавселенной — театр «Амар сайн» (2022). Первопроходец в виртуальных культурных пространствах.',
    media_medal_title:'Медаль за содействие СВО', media_medal_desc:'Благотворительный фонд «Крымская Весна» — гражданская и социальная ответственность.',
    media_activity_title:'Медиаактивность', media_activity_desc:'Регулярные подкасты, трансляции, образовательные стримы для IT-сообщества.',
    // Blockchain tab
    blockchain_title:'РАКИБ · ДФО',
    blockchain_desc1:'Руководитель представительства Российской ассоциации криптовалют и блокчейна в Дальневосточном федеральном округе (2019–2022).',
    blockchain_desc2:'Развитие блокчейн-экосистемы в регионе. Работа с предпринимателями, регуляторами и сообществом.',
    blockchain_events_title:'Ключевые мероприятия',
    blockchain_event_crypto:'Крипто Саммит РФ, Москва', blockchain_event_crypto_desc:'2022 — крупнейший блокчейн-саммит России',
    blockchain_event_mining:'Майнинг Конференция РФ', blockchain_event_mining_desc:'2022, Иркутск — первая конференция легальных майнеров',
    blockchain_event_expo:'Майнинг Экспо РФ', blockchain_event_expo_desc:'2022 — единственное специализированное мероприятие в РФ',
    blockchain_event_online_desc:'2022–2023 — онлайн-конференции',
    // ── Services ──
    svc_label:'// 03 УСЛУГИ', svc_title:'Чем могу <span class="text-primary">помочь</span>',
    svc_web_title:'Сайты и веб-приложения', svc_web_desc:'Разработка корпоративных сайтов, лендингов, веб-приложений и порталов. Адаптивный дизайн, быстрая загрузка, SEO-оптимизация.',
    svc_mobile_title:'Мобильные приложения', svc_mobile_desc:'Разработка мобильных приложений под iOS и Android. От MVP до полноценного продукта с интеграцией AI и backend.',
    svc_bots_title:'Чат-боты и телеграм-боты', svc_bots_desc:'Боты для Telegram, WhatsApp, VK. Автоответы, воронки продаж, интеграция с CRM и AI. Работают 24/7 без вашего участия.',
    svc_ai_title:'AI-агенты и LLM-решения', svc_ai_desc:'RAG-системы, автономные AI-агенты, интеграция GPT / Claude / Gemini / DeepSeek. Умная автоматизация бизнес-процессов.',
    svc_automation_title:'Автоматизация бизнеса', svc_automation_desc:'Воронки продаж, рассылки, генерация документов, интеграции между сервисами, синхронизация данных. Меньше рутины — больше прибыли.',
    svc_infra_title:'ИТ-инфраструктура', svc_infra_desc:'Хостинг, SSL, CRM, облачное хранилище, мониторинг, кибербезопасность. Полный ИТ-стек для стабильной работы бизнеса.',
    svc_teaching_title:'Обучение и менторинг', svc_teaching_desc:'Курсы и индивидуальные занятия по Python, AI/ML, веб-разработке, DevOps. Практико-ориентированный подход с реальными проектами.',
    svc_tag_mentoring:'Менторинг',
    svc_events_title:'Event-менеджмент', svc_events_desc:'Организация конференций, хакатонов, киберспортивных турниров. Онлайн-трансляции, техническая поддержка мероприятий.',
    svc_tag_conferences:'Конференции', svc_tag_esports:'Киберспорт', svc_tag_streams:'Стримы',
    svc_marketing_title:'Цифровой маркетинг', svc_marketing_desc:'SMM, контент-план, AI-генерация видео/фото/музыки, репурпозинг контента, аналитика трафика и конверсий.',
    svc_tag_content:'Контент', svc_tag_aicontent:'AI-контент',
    // ── Cases ──
    cases_label:'// 04 КЕЙСЫ', cases_title:'Избранные <span class="text-primary">проекты</span>',
    case1_title:'Корпоративный RAG-ассистент', case1_desc:'AI-ассистент для компании 500+ сотрудников. Обработка 10 000+ внутренних документов. Сократил время поиска информации на 70%.',
    case1_metric1:'экономия времени', case1_metric2:'документов', case1_metric3:'сотрудников',
    case2_title:'Крипто Саммит РФ', case2_desc:'Организация крупнейшего блокчейн-саммита России в Москве. Сотни участников, международные спикеры, медиаохват по всей стране.',
    case2_metric1:'в стране', case2_metric2:'международный', case2_metric3:'федеральный',
    case3_title:'Платформа обработки документов', case3_desc:'AI-система автоматической обработки входящих документов: классификация, извлечение данных, маршрутизация. Сократила ручную работу на 80%.',
    case3_metric1:'меньше ручной работы', case3_metric2:'классификация', case3_metric3:'автоматически',
    case4_title:'Первый киберспортивный турнир «Все для победы!»', case4_desc:'Организация первого в России благотворительного киберспортивного турнира. Полная техническая инфраструктура, онлайн-трансляция, медиаподдержка.',
    case4_metric1:'в России', case4_metric2:'благотворительный', case4_metric3:'трансляция',
    // Stats bar
    stats_exp:'Лет опыта', stats_events:'Мероприятий', stats_views:'Просмотров', stats_podcasts:'Подкастов',
    // ── Contact ──
    contact_label:'// 05 КОНТАКТ',
    contact_title:'ЕСТЬ ЗАДАЧА?<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">ДАВАЙТЕ РЕШИМ.</span>',
    contact_desc:'AI-решения, автоматизация, event-организация, обучение — пишите, обсудим вашу задачу.',
    contact_terminal_whoami:'Дарижапов Чимитдоржи — AI/ML_Expert',
    contact_terminal_location:'Забайкальский край, Россия 📍',
    contact_terminal_status:'ОТКРЫТ К ПРОЕКТАМ',
    // ── Footer / Cookie ──
    footer_copy:'© 2026 Студия Чимитдоржи. Бескомпромиссная инженерия из Читы.',
    footer_teaching:'Обучение', footer_privacy:'Политика конфиденциальности',
    cookie_text:'Мы используем файлы cookie, чтобы сайт работал лучше. Оставаясь на сайте, вы соглашаетесь с <a href="privacy-policy.html" style="color:#0d59f2;text-decoration:none;">Политикой конфиденциальности</a>.',
    cookie_accept:'Принять',
    typing_roles:['Предприниматель','AI/ML Инженер','Преподаватель','Event-организатор','Продюсер'],
    intro_lines:['>_ ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ...','>_ ЗАГРУЗКА ПРОФИЛЯ..........','>_ ИДЕНТИФИКАЦИЯ: ДАРИЖАПОВ ЧИМИТДОРЖИ','>_ РОЛЬ: AI / ЭКСПЕРТ / ПРЕДПРИНИМАТЕЛЬ','>_ СТАТУС: АКТИВЕН  ✓'],

    // ── Links page ──
    lnk_bio_role:'Предприниматель · AI/ML инженер', lnk_bio_desc:'Преподаватель · Организатор 50+ мероприятий', lnk_bio_prod:'Продюсер лейбла AREY',
    lnk_s_years:'лет', lnk_s_events:'ивентов', lnk_s_views:'просмотров', lnk_s_pods:'подкастов',
    lnk_sec_contact:'Связаться', lnk_sec_social:'Соцсети', lnk_sec_music:'Музыка и портфолио',
    lnk_btn_call:'Позвонить', lnk_btn_vk:'ВКонтакте', lnk_btn_portfolio:'Портфолио сайт',
    lnk_yt_sub:'1M+ просмотров · Подкасты и стримы', lnk_bp_sub:'Музыкальный лейбл · International', lnk_portfolio_sub:'Студия Чимитдоржи · AI &amp; Events',
    lnk_tag_teacher:'🎓 Преподаватель', lnk_tag_remote:'🌐 Удалённо', lnk_tag_region:'📍 Забайкалье',
    lnk_footer:'Дарижапов Чимитдоржи · 2026',
    lnk_skip:'нажмите для пропуска',
    lnk_intro_lines:['>_ ИНИЦИАЛИЗАЦИЯ...','>_ ЗАГРУЗКА ПРОФИЛЯ...','>_ ДАРИЖАПОВ ЧИМИТДОРЖИ','>_ ГОТОВО ✓'],

    // ── Privacy policy page ──
    pp_back:'СТУДИЯ ЧИМИТДОРЖИ', pp_label:'// ПРАВОВАЯ ИНФОРМАЦИЯ',
    pp_title:'ПОЛИТИКА<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">КОНФИДЕНЦИАЛЬНОСТИ</span>',
    pp_subtitle:'Политика в отношении обработки персональных данных',
    pp_footer:'&copy; 2026 Студия Чимитдоржи. Бескомпромиссная инженерия из Читы.',
    pp_home:'На главную'
},

/* ════════════════════════════════════════════════════
   ENGLISH
   ════════════════════════════════════════════════════ */
en: {
    // ── Nav ──
    nav_about:'About', nav_activities:'Activities', nav_services:'Services', nav_cases:'Cases', nav_contact:'Contact', nav_cta:'GET IN TOUCH',
    mnav_about:'ABOUT', mnav_activities:'ACTIVITIES', mnav_services:'SERVICES', mnav_cases:'CASES', mnav_contact:'CONTACT',
    bnav_home:'Home', bnav_about:'About', bnav_activities:'Work', bnav_services:'Services', bnav_contact:'Contact',
    sticky_open:'Open',
    // ── Intro ──
    intro_name:'CHIMITDORZHI', intro_skip:'click to skip',
    // ── Hero ──
    hero_prefix:'DARIZHAPOV', hero_location:'CHITA · RUSSIA', hero_subtitle:'&amp; VISIONARY',
    hero_desc:'Entrepreneur, <span class="text-white font-semibold">AI/ML engineer</span>, educator, organizer of <span class="text-white font-semibold">50+ events</span> at federal and international level. Building systems, teaching people, creating events.',
    hero_cta:'GET IN TOUCH', hero_cta2:'ACTIVITIES', hero_scroll:'Scroll',
    hero_role_ai:'🤖 AI/ML Expert', hero_role_teacher:'🎓 Educator', hero_role_event:'🎪 Event Organizer', hero_role_entrepreneur:'💼 Entrepreneur', hero_role_producer:'🎵 Producer',
    stat_exp:'Years exp.', stat_events:'Events', stat_views:'Views', stat_podcasts:'Podcasts',
    // ── About ──
    about_label:'// 01 ABOUT', about_title:'Who is <span class="text-primary">Chimitdorzhi</span>',
    about_name:'Darizhapov Chimitdorzhi', about_location:'📍 Transbaikal Region, Russia', about_country:'🇷🇺 Russia', about_remote:'🌐 Remote',
    about_bio1:'Highly skilled IT professional with 16+ years of experience in development, AI/ML and entrepreneurship. A unique combination of deep technical expertise with pedagogical and business competencies.',
    about_bio2:'Specializing in building AI solutions based on LLMs, process automation and training the next generation of IT professionals. Organizer of 50+ federal and international events — from blockchain summits to esports tournaments.',
    about_lang_ru:'Russian', about_lang_ru_level:'Native', about_lang_bu:'Buryat', about_lang_bu_level:'Native', about_lang_en:'English',
    about_path_label:'// CAREER PATH',
    about_path_zabgu:'Lecturer at ZabGU', about_path_zabgu_desc:'AI, neural networks, database administration',
    about_path_studio:'AI Architect &amp; Studio', about_path_studio_desc:'Private practice, LLM solutions',
    about_path_rakib:'Head of FEFD Office', about_path_rakib_desc:'RACIB — blockchain and cryptocurrencies',
    about_path_college:'College Lecturer', about_path_college_desc:'System administration',
    about_path_freelance:'Freelance &amp; Entrepreneurship', about_path_freelance_desc:'AI solutions, development, events',
    about_skills_label:'// TECHNICAL SKILLS', about_skill_programming:'Programming', about_skill_infra:'Infrastructure',
    about_cert_label:'// GOVERNMENT VERIFICATION', about_cert_title:'Gosuslugi RF Certificates',
    about_cert_desc:'gosuslugi.ru — official government skills verification · Valid until March 2027',
    about_cert_count_label:'Certificates', about_cert_more:'+ others',
    about_cert_hh:'Also verified on HeadHunter (hh.ru) — Advanced/Intermediate skills until March 2027',
    about_cert_valid:'● Valid',
    // ── Activities ──
    act_label:'// 02 ACTIVITIES', act_title:'What I <span class="text-primary">do</span>',
    tab_teaching:'🎓 Teaching', tab_esports:'🎮 Esports', tab_media:'🎵 Media', tab_blockchain:'₿ Blockchain',
    // AI tab
    ai_title:'AI/ML Development',
    ai_desc:'AI solutions development: LLM integration (GPT, Claude, Gemini, DeepSeek, QWEN, Mistral), chatbot and virtual assistant creation. Vector DB experience — Pinecone, Weaviate.',
    ai_item1:'AI document processing systems', ai_item2:'Voice assistants', ai_item3:'Content generation platforms', ai_item4:'Custom dataset model training',
    ai_status:'● Status: Open for projects',
    ai_voice_title:'Voice Assistants', ai_voice_desc:'Development of voice AI assistants for business needs. Speech recognition, dialog systems, corporate service integration.',
    ai_certs_title:'Certificates 2026', ai_certs_desc:'Recent certificates from Vanderbilt University (Coursera) and MongoDB Inc. on AI agents and vector search.',
    // Teaching tab
    teach_zabgu_title:'ZabGU · March 2024 — March 2025',
    teach_zabgu_desc1:'Lectures and workshops on neural networks. Database administration. AI application for academic paper review. Podcasts and online streams.',
    teach_zabgu_desc2:'Organization of esports events and IT solutions for university partners.',
    teach_disciplines_title:'Disciplines',
    teach_disc_ai:'AI and Machine Learning', teach_disc_db:'DB: SQL, PostgreSQL, MongoDB', teach_disc_web:'Web Development and API', teach_disc_algo:'Algorithms and Data Structures', teach_disc_sysanalysis:'Systems Analysis',
    teach_edu_title:'Education',
    teach_edu_masters:'ZabGU — Master\'s Degree', teach_edu_masters_desc:'Pedagogical Education',
    teach_edu_bachelors:'ZabGU — Bachelor\'s Degree', teach_edu_bachelors_desc:'Socio-Cultural Activities',
    teach_edu_dpo:'ZabGU — Professional Development', teach_edu_dpo_desc:'Professional Education Instructor',
    teach_edu_phoenix:'ANO DPO "Phoenix"', teach_edu_phoenix_desc:'Computer Science & IT Instructor',
    teach_certs_label:'// PROFESSIONAL DEVELOPMENT CERTIFICATES',
    teach_cert_finuni:'Financial University under the Government of RF', teach_cert_finuni_desc:'Career and business in esports · 2021',
    teach_cert_swsu:'Southwestern State University, Kursk', teach_cert_swsu_desc:'Event management · Esports referee · 2022',
    teach_cert_dstu:'Don State Technical University, Rostov-on-Don', teach_cert_dstu_desc:'Esports coach · 2023',
    teach_cert_reu:'Plekhanov Russian University of Economics', teach_cert_reu_desc:'Digital Economy · 2019',
    // Events tab
    events_headline:'50+ federal and international level events',
    events_counter_events:'Events', events_counter_intl:'International', events_counter_federal:'Federal', events_counter_since:'This year',
    events_conf_title:'Conferences and Summits',
    events_conf_crypto:'Crypto Summit RF', events_conf_crypto_desc:'2022, Moscow — the largest blockchain summit in the country',
    events_conf_intl_desc:'2022 — international conference',
    events_conf_mining:'Mining Conference RF', events_conf_mining_desc:'2022, Irkutsk — first legal miners conference in Russia',
    events_conf_expo:'Mining Expo RF', events_conf_expo_desc:'2022 — the only specialized event in Russia',
    events_conf_mediabiz:'MediaBiz.rf · RWAT.ru · Forum Mining.ru', events_conf_mediabiz_desc:'2024–2025 — series of business forums',
    events_conf_invest_desc:'2019 — investment summit',
    events_sports_title:'Technical support for sports events',
    events_sports_boxing:'Russian Boxing Championship', events_sports_boxing_desc:'2022, Chita',
    events_sports_wrestling:'Russian Freestyle Wrestling Championship', events_sports_wrestling_desc:'2022, Chita',
    events_sports_nomad:'"Spirit of the Nomad" — combat sambo', events_sports_nomad_desc:'2023, international tournament',
    events_sports_altargana:'Altargana', events_sports_altargana_desc:'2022, international Buryat festival',
    // Esports tab
    esports_tournaments_title:'Esports Tournaments',
    esports_tournament_vdp:'"All for Victory!"', esports_tournament_vdp_desc:'2023, Chita — first charity esports tournament in Russia',
    esports_tournament_mlbb:'Transbaikal Region MLBB Championship & Cup',
    esports_tournament_kaliningrad:'Kaliningrad Region Esports Championship',
    esports_tournament_cups:'Transbaikal Region City Cups', esports_tournament_cups_desc:'Chita Cup at "Udokan" cinema — tournament series',
    esports_edu_title:'Education in Esports',
    esports_edu_trainer:'🏋️ Esports Coach', esports_edu_trainer_desc:'DSTU, Rostov-on-Don — 2022',
    esports_edu_judge:'⚖️ Esports Referee', esports_edu_judge_desc:'SWSU, Kursk — 2022–2023',
    esports_edu_career:'💼 Career in Esports', esports_edu_career_desc:'Financial University RF — 2021',
    esports_roles:'● Organizer · Coach · Referee',
    // Media tab
    media_title:'AREY Music Label',
    media_desc:'Founder and producer of the Arey label. Featured on the international platform Beatport. A fusion of traditional Buryat motifs and modern electronic music.',
    media_total_label:'Total', media_podcasts_label:'Podcasts',
    media_tag_podcasts:'Podcasts', media_tag_streams:'Streams',
    media_meta_title:'Metaverse', media_meta_desc:'Metaverse concert — "Amar Sain" theater (2022). Pioneer in virtual cultural spaces.',
    media_medal_title:'Medal for SVO Assistance', media_medal_desc:'"Crimean Spring" charitable foundation — civic and social responsibility.',
    media_activity_title:'Media Activity', media_activity_desc:'Regular podcasts, streams, educational broadcasts for the IT community.',
    // Blockchain tab
    blockchain_title:'RACIB · FEFD',
    blockchain_desc1:'Head of the Russian Association of Cryptocurrencies and Blockchain representation in the Far Eastern Federal District (2019–2022).',
    blockchain_desc2:'Developing the blockchain ecosystem in the region. Working with entrepreneurs, regulators and the community.',
    blockchain_events_title:'Key Events',
    blockchain_event_crypto:'Crypto Summit RF, Moscow', blockchain_event_crypto_desc:'2022 — the largest blockchain summit in Russia',
    blockchain_event_mining:'Mining Conference RF', blockchain_event_mining_desc:'2022, Irkutsk — first legal miners conference',
    blockchain_event_expo:'Mining Expo RF', blockchain_event_expo_desc:'2022 — the only specialized event in Russia',
    blockchain_event_online_desc:'2022–2023 — online conferences',
    // ── Services ──
    svc_label:'// 03 SERVICES', svc_title:'How I can <span class="text-primary">help</span>',
    svc_web_title:'Websites & Web Apps', svc_web_desc:'Corporate websites, landing pages, web applications and portals. Responsive design, fast loading, SEO optimization.',
    svc_mobile_title:'Mobile Applications', svc_mobile_desc:'Mobile app development for iOS and Android. From MVP to full product with AI and backend integration.',
    svc_bots_title:'Chatbots & Telegram Bots', svc_bots_desc:'Bots for Telegram, WhatsApp, VK. Auto-replies, sales funnels, CRM & AI integration. Work 24/7 without your involvement.',
    svc_ai_title:'AI Agents & LLM Solutions', svc_ai_desc:'RAG systems, autonomous AI agents, GPT / Claude / Gemini / DeepSeek integration. Smart business process automation.',
    svc_automation_title:'Business Automation', svc_automation_desc:'Sales funnels, newsletters, document generation, service integrations, data sync. Less routine — more profit.',
    svc_infra_title:'IT Infrastructure', svc_infra_desc:'Hosting, SSL, CRM, cloud storage, monitoring, cybersecurity. Full IT stack for stable business operations.',
    svc_teaching_title:'Training & Mentoring', svc_teaching_desc:'Courses and private lessons on Python, AI/ML, web development, DevOps. Practice-oriented approach with real projects.',
    svc_tag_mentoring:'Mentoring',
    svc_events_title:'Event Management', svc_events_desc:'Organizing conferences, hackathons, esports tournaments. Live streams, technical event support.',
    svc_tag_conferences:'Conferences', svc_tag_esports:'Esports', svc_tag_streams:'Streams',
    svc_marketing_title:'Digital Marketing', svc_marketing_desc:'SMM, content planning, AI-generated video/photo/music, content repurposing, traffic and conversion analytics.',
    svc_tag_content:'Content', svc_tag_aicontent:'AI Content',
    // ── Cases ──
    cases_label:'// 04 CASES', cases_title:'Featured <span class="text-primary">projects</span>',
    case1_title:'Corporate RAG Assistant', case1_desc:'AI assistant for a 500+ employee company. Processing 10,000+ internal documents. Reduced information search time by 70%.',
    case1_metric1:'time saved', case1_metric2:'documents', case1_metric3:'employees',
    case2_title:'Crypto Summit RF', case2_desc:'Organization of Russia\'s largest blockchain summit in Moscow. Hundreds of participants, international speakers, nationwide media coverage.',
    case2_metric1:'in country', case2_metric2:'international', case2_metric3:'federal',
    case3_title:'Document Processing Platform', case3_desc:'AI system for automatic incoming document processing: classification, data extraction, routing. Reduced manual work by 80%.',
    case3_metric1:'less manual work', case3_metric2:'classification', case3_metric3:'automatically',
    case4_title:'First Charity Esports Tournament "All for Victory!"', case4_desc:'Organization of Russia\'s first charity esports tournament. Full technical infrastructure, live broadcast, media support.',
    case4_metric1:'in Russia', case4_metric2:'charity', case4_metric3:'broadcast',
    // Stats bar
    stats_exp:'Years of exp.', stats_events:'Events', stats_views:'Views', stats_podcasts:'Podcasts',
    // ── Contact ──
    contact_label:'// 05 CONTACT',
    contact_title:'GOT A TASK?<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">LET\'S SOLVE IT.</span>',
    contact_desc:'AI solutions, automation, event management, education — reach out, let\'s discuss your project.',
    contact_terminal_whoami:'Darizhapov Chimitdorzhi — AI/ML_Expert',
    contact_terminal_location:'Transbaikal Region, Russia 📍',
    contact_terminal_status:'OPEN FOR PROJECTS',
    // ── Footer / Cookie ──
    footer_copy:'© 2026 Chimitdorzhi Studio. Uncompromising engineering from Chita.',
    footer_teaching:'Education', footer_privacy:'Privacy Policy',
    cookie_text:'We use cookies to improve our website. By staying, you agree to our <a href="privacy-policy.html" style="color:#0d59f2;text-decoration:none;">Privacy Policy</a>.',
    cookie_accept:'Accept',
    typing_roles:['Entrepreneur','AI/ML Engineer','Educator','Event Organizer','Producer'],
    intro_lines:['>_ SYSTEM INITIALIZATION...','>_ LOADING PROFILE..........','>_ IDENTIFICATION: DARIZHAPOV CHIMITDORZHI','>_ ROLE: AI / EXPERT / ENTREPRENEUR','>_ STATUS: ACTIVE  ✓'],

    // ── Links page ──
    lnk_bio_role:'Entrepreneur · AI/ML Engineer', lnk_bio_desc:'Educator · Organizer of 50+ events', lnk_bio_prod:'AREY Label Producer',
    lnk_s_years:'years', lnk_s_events:'events', lnk_s_views:'views', lnk_s_pods:'podcasts',
    lnk_sec_contact:'Contact', lnk_sec_social:'Social', lnk_sec_music:'Music & Portfolio',
    lnk_btn_call:'Call', lnk_btn_vk:'VKontakte', lnk_btn_portfolio:'Portfolio site',
    lnk_yt_sub:'1M+ views · Podcasts and streams', lnk_bp_sub:'Music label · International', lnk_portfolio_sub:'Chimitdorzhi Studio · AI &amp; Events',
    lnk_tag_teacher:'🎓 Educator', lnk_tag_remote:'🌐 Remote', lnk_tag_region:'📍 Transbaikal',
    lnk_footer:'Darizhapov Chimitdorzhi · 2026',
    lnk_skip:'click to skip',
    lnk_intro_lines:['>_ INITIALIZATION...','>_ LOADING PROFILE...','>_ DARIZHAPOV CHIMITDORZHI','>_ READY ✓'],

    // ── Privacy policy page ──
    pp_back:'CHIMITDORZHI STUDIO', pp_label:'// LEGAL INFORMATION',
    pp_title:'PRIVACY<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">POLICY</span>',
    pp_subtitle:'Personal data processing policy',
    pp_footer:'&copy; 2026 Chimitdorzhi Studio. Uncompromising engineering from Chita.',
    pp_home:'Back to home'
},

/* ════════════════════════════════════════════════════
   中文 (CHINESE)
   ════════════════════════════════════════════════════ */
zh: {
    // ── Nav ──
    nav_about:'关于我', nav_activities:'活动', nav_services:'服务', nav_cases:'案例', nav_contact:'联系', nav_cta:'联系我',
    mnav_about:'关于我', mnav_activities:'活动', mnav_services:'服务', mnav_cases:'案例', mnav_contact:'联系',
    bnav_home:'首页', bnav_about:'关于', bnav_activities:'工作', bnav_services:'服务', bnav_contact:'联系',
    sticky_open:'接单中',
    // ── Intro ──
    intro_name:'奇米特多尔日', intro_skip:'点击跳过',
    // ── Hero ──
    hero_prefix:'达里扎波夫', hero_location:'赤塔 · 俄罗斯', hero_subtitle:'&amp; 远见者',
    hero_desc:'企业家、<span class="text-white font-semibold">AI/ML工程师</span>、教育者、组织了<span class="text-white font-semibold">50多场</span>联邦和国际级活动。构建系统，培养人才，创造活动。',
    hero_cta:'联系我', hero_cta2:'活动', hero_scroll:'滚动',
    hero_role_ai:'🤖 AI/ML专家', hero_role_teacher:'🎓 教育者', hero_role_event:'🎪 活动组织者', hero_role_entrepreneur:'💼 企业家', hero_role_producer:'🎵 制作人',
    stat_exp:'年经验', stat_events:'活动', stat_views:'浏览量', stat_podcasts:'播客',
    // ── About ──
    about_label:'// 01 关于我', about_title:'谁是 <span class="text-primary">奇米特多尔日</span>',
    about_name:'达里扎波夫·奇米特多尔日', about_location:'📍 外贝加尔边疆区，俄罗斯', about_country:'🇷🇺 俄罗斯', about_remote:'🌐 远程办公',
    about_bio1:'拥有16年以上开发、AI/ML和创业经验的高级IT专家。深厚的技术专长与教育和商业能力的独特结合。',
    about_bio2:'专注于基于LLM的AI解决方案、流程自动化和培训新一代IT专业人员。组织了50多场联邦和国际活动——从区块链峰会到电竞锦标赛。',
    about_lang_ru:'俄语', about_lang_ru_level:'母语', about_lang_bu:'布里亚特语', about_lang_bu_level:'母语', about_lang_en:'英语',
    about_path_label:'// 职业道路',
    about_path_zabgu:'外贝加尔国立大学讲师', about_path_zabgu_desc:'AI、神经网络、数据库管理',
    about_path_studio:'AI架构师 &amp; 工作室', about_path_studio_desc:'独立实践，LLM解决方案',
    about_path_rakib:'远东联邦区办公室主任', about_path_rakib_desc:'RACIB — 区块链和加密货币',
    about_path_college:'学院讲师', about_path_college_desc:'系统管理',
    about_path_freelance:'自由职业 &amp; 创业', about_path_freelance_desc:'AI解决方案、开发、活动',
    about_skills_label:'// 技术技能', about_skill_programming:'编程', about_skill_infra:'基础设施',
    about_cert_label:'// 政府认证', about_cert_title:'俄罗斯国家服务证书',
    about_cert_desc:'gosuslugi.ru — 官方政府技能认证 · 有效期至2027年3月',
    about_cert_count_label:'证书', about_cert_more:'+ 其他',
    about_cert_hh:'也在HeadHunter (hh.ru) 上获得认证 — Advanced/Intermediate技能至2027年3月',
    about_cert_valid:'● 有效',
    // ── Activities ──
    act_label:'// 02 活动', act_title:'我的 <span class="text-primary">工作</span>',
    tab_teaching:'🎓 教学', tab_esports:'🎮 电竞', tab_media:'🎵 媒体', tab_blockchain:'₿ 区块链',
    // AI tab
    ai_title:'AI/ML开发',
    ai_desc:'AI解决方案开发：LLM集成（GPT、Claude、Gemini、DeepSeek、QWEN、Mistral），聊天机器人和虚拟助手创建。向量数据库经验 — Pinecone、Weaviate。',
    ai_item1:'AI文档处理系统', ai_item2:'语音助手', ai_item3:'内容生成平台', ai_item4:'自定义数据集模型训练',
    ai_status:'● 状态：接受项目',
    ai_voice_title:'语音助手', ai_voice_desc:'为商业需求开发语音AI助手。语音识别、对话系统、企业服务集成。',
    ai_certs_title:'2026年证书', ai_certs_desc:'范德堡大学（Coursera）和MongoDB Inc.的AI代理和向量搜索最新证书。',
    // Teaching tab
    teach_zabgu_title:'外贝加尔国立大学 · 2024年3月 — 2025年3月',
    teach_zabgu_desc1:'神经网络讲座和研讨会。数据库管理。AI在学术论文审查中的应用。播客和在线直播。',
    teach_zabgu_desc2:'组织电竞活动和大学合作伙伴的IT解决方案。',
    teach_disciplines_title:'学科',
    teach_disc_ai:'AI和机器学习', teach_disc_db:'数据库：SQL、PostgreSQL、MongoDB', teach_disc_web:'Web开发和API', teach_disc_algo:'算法和数据结构', teach_disc_sysanalysis:'系统分析',
    teach_edu_title:'教育背景',
    teach_edu_masters:'外贝加尔国立大学 — 硕士', teach_edu_masters_desc:'教育学',
    teach_edu_bachelors:'外贝加尔国立大学 — 学士', teach_edu_bachelors_desc:'社会文化活动',
    teach_edu_dpo:'外贝加尔国立大学 — 进修', teach_edu_dpo_desc:'职业教育讲师',
    teach_edu_phoenix:'ANO DPO "凤凰"', teach_edu_phoenix_desc:'计算机科学与IT讲师',
    teach_certs_label:'// 进修证书',
    teach_cert_finuni:'俄罗斯联邦政府金融大学', teach_cert_finuni_desc:'电竞职业和商业 · 2021',
    teach_cert_swsu:'西南国立大学，库尔斯克', teach_cert_swsu_desc:'活动管理 · 电竞裁判 · 2022',
    teach_cert_dstu:'顿河国立技术大学，罗斯托夫', teach_cert_dstu_desc:'电竞教练 · 2023',
    teach_cert_reu:'普列汉诺夫俄罗斯经济大学', teach_cert_reu_desc:'数字经济 · 2019',
    // Events tab
    events_headline:'50多场联邦和国际级活动',
    events_counter_events:'活动', events_counter_intl:'国际', events_counter_federal:'联邦', events_counter_since:'今年',
    events_conf_title:'会议和峰会',
    events_conf_crypto:'俄罗斯加密峰会', events_conf_crypto_desc:'2022年，莫斯科——全国最大的区块链峰会',
    events_conf_intl_desc:'2022年——国际会议',
    events_conf_mining:'俄罗斯挖矿会议', events_conf_mining_desc:'2022年，伊尔库茨克——俄罗斯首次合法矿工会议',
    events_conf_expo:'俄罗斯挖矿博览会', events_conf_expo_desc:'2022年——俄罗斯唯一的专业活动',
    events_conf_mediabiz:'MediaBiz.rf · RWAT.ru · Forum Mining.ru', events_conf_mediabiz_desc:'2024–2025——系列商业论坛',
    events_conf_invest_desc:'2019年——投资峰会',
    events_sports_title:'体育赛事技术支持',
    events_sports_boxing:'俄罗斯拳击锦标赛', events_sports_boxing_desc:'2022年，赤塔',
    events_sports_wrestling:'俄罗斯自由式摔跤锦标赛', events_sports_wrestling_desc:'2022年，赤塔',
    events_sports_nomad:'"游牧精神"——格斗桑博', events_sports_nomad_desc:'2023年，国际锦标赛',
    events_sports_altargana:'阿尔塔尔甘纳', events_sports_altargana_desc:'2022年，国际布里亚特节',
    // Esports tab
    esports_tournaments_title:'电竞锦标赛',
    esports_tournament_vdp:'"一切为了胜利！"', esports_tournament_vdp_desc:'2023年，赤塔——俄罗斯首次慈善电竞锦标赛',
    esports_tournament_mlbb:'外贝加尔边疆区MLBB锦标赛和杯赛',
    esports_tournament_kaliningrad:'加里宁格勒州电竞锦标赛',
    esports_tournament_cups:'外贝加尔边疆区城市杯', esports_tournament_cups_desc:'赤塔杯在"乌多坎"影院——系列锦标赛',
    esports_edu_title:'电竞教育',
    esports_edu_trainer:'🏋️ 电竞教练', esports_edu_trainer_desc:'顿河国立技术大学，罗斯托夫——2022',
    esports_edu_judge:'⚖️ 电竞裁判', esports_edu_judge_desc:'西南国立大学，库尔斯克——2022–2023',
    esports_edu_career:'💼 电竞职业', esports_edu_career_desc:'俄罗斯金融大学——2021',
    esports_roles:'● 组织者 · 教练 · 裁判',
    // Media tab
    media_title:'AREY音乐厂牌',
    media_desc:'Arey厂牌的创始人和制作人。在国际平台Beatport上亮相。传统布里亚特元素与现代电子音乐的融合。',
    media_total_label:'总计', media_podcasts_label:'播客',
    media_tag_podcasts:'播客', media_tag_streams:'直播',
    media_meta_title:'元宇宙', media_meta_desc:'元宇宙音乐会——"阿玛尔赛恩"剧院（2022年）。虚拟文化空间的先驱。',
    media_medal_title:'特别军事行动援助奖章', media_medal_desc:'"克里米亚之春"慈善基金会——公民和社会责任。',
    media_activity_title:'媒体活动', media_activity_desc:'定期播客、直播、IT社区教育节目。',
    // Blockchain tab
    blockchain_title:'RACIB · 远东联邦区',
    blockchain_desc1:'俄罗斯加密货币和区块链协会远东联邦区代表处负责人（2019–2022年）。',
    blockchain_desc2:'发展该地区的区块链生态系统。与企业家、监管机构和社区合作。',
    blockchain_events_title:'重要活动',
    blockchain_event_crypto:'俄罗斯加密峰会，莫斯科', blockchain_event_crypto_desc:'2022年——俄罗斯最大的区块链峰会',
    blockchain_event_mining:'俄罗斯挖矿会议', blockchain_event_mining_desc:'2022年，伊尔库茨克——首次合法矿工会议',
    blockchain_event_expo:'俄罗斯挖矿博览会', blockchain_event_expo_desc:'2022年——俄罗斯唯一的专业活动',
    blockchain_event_online_desc:'2022–2023年——在线会议',
    // ── Services ──
    svc_label:'// 03 服务', svc_title:'我能 <span class="text-primary">帮助</span>什么',
    svc_web_title:'网站和Web应用', svc_web_desc:'企业网站、着陆页、Web应用和门户开发。响应式设计、快速加载、SEO优化。',
    svc_mobile_title:'移动应用', svc_mobile_desc:'iOS和Android移动应用开发。从MVP到集成AI和后端的完整产品。',
    svc_bots_title:'聊天机器人和Telegram机器人', svc_bots_desc:'Telegram、WhatsApp、VK机器人。自动回复、销售漏斗、CRM和AI集成。24/7全天候工作。',
    svc_ai_title:'AI代理和LLM解决方案', svc_ai_desc:'RAG系统、自主AI代理、GPT / Claude / Gemini / DeepSeek集成。智能业务流程自动化。',
    svc_automation_title:'业务自动化', svc_automation_desc:'销售漏斗、邮件群发、文档生成、服务集成、数据同步。更少常规——更多利润。',
    svc_infra_title:'IT基础设施', svc_infra_desc:'托管、SSL、CRM、云存储、监控、网络安全。完整的IT堆栈，确保业务稳定运行。',
    svc_teaching_title:'培训和指导', svc_teaching_desc:'Python、AI/ML、Web开发、DevOps课程和私人课程。以实际项目为导向的实践方法。',
    svc_tag_mentoring:'指导',
    svc_events_title:'活动管理', svc_events_desc:'组织会议、黑客马拉松、电竞锦标赛。在线直播、活动技术支持。',
    svc_tag_conferences:'会议', svc_tag_esports:'电竞', svc_tag_streams:'直播',
    svc_marketing_title:'数字营销', svc_marketing_desc:'SMM、内容规划、AI生成视频/照片/音乐、内容复用、流量和转化分析。',
    svc_tag_content:'内容', svc_tag_aicontent:'AI内容',
    // ── Cases ──
    cases_label:'// 04 案例', cases_title:'精选 <span class="text-primary">项目</span>',
    case1_title:'企业RAG助手', case1_desc:'为500多名员工的公司开发AI助手。处理10000多份内部文档。将信息搜索时间缩短70%。',
    case1_metric1:'节省时间', case1_metric2:'文档', case1_metric3:'员工',
    case2_title:'俄罗斯加密峰会', case2_desc:'在莫斯科组织俄罗斯最大的区块链峰会。数百名参与者、国际演讲者、全国媒体覆盖。',
    case2_metric1:'全国', case2_metric2:'国际', case2_metric3:'联邦',
    case3_title:'文档处理平台', case3_desc:'AI自动处理传入文档系统：分类、数据提取、路由。减少80%的手动工作。',
    case3_metric1:'减少手动工作', case3_metric2:'分类', case3_metric3:'自动',
    case4_title:'首届慈善电竞锦标赛"一切为了胜利！"', case4_desc:'组织俄罗斯首次慈善电竞锦标赛。完整的技术基础设施、在线直播、媒体支持。',
    case4_metric1:'在俄罗斯', case4_metric2:'慈善', case4_metric3:'直播',
    // Stats bar
    stats_exp:'年经验', stats_events:'活动', stats_views:'浏览量', stats_podcasts:'播客',
    // ── Contact ──
    contact_label:'// 05 联系',
    contact_title:'有任务？<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">让我们解决它。</span>',
    contact_desc:'AI解决方案、自动化、活动组织、教育——联系我们，讨论您的项目。',
    contact_terminal_whoami:'达里扎波夫·奇米特多尔日 — AI/ML_Expert',
    contact_terminal_location:'外贝加尔边疆区，俄罗斯 📍',
    contact_terminal_status:'接受项目',
    // ── Footer / Cookie ──
    footer_copy:'© 2026 奇米特多尔日工作室。来自赤塔的卓越工程。',
    footer_teaching:'教育', footer_privacy:'隐私政策',
    cookie_text:'我们使用cookie来改善网站体验。继续浏览即表示您同意我们的<a href="privacy-policy.html" style="color:#0d59f2;text-decoration:none;">隐私政策</a>。',
    cookie_accept:'接受',
    typing_roles:['企业家','AI/ML工程师','教育者','活动组织者','制作人'],
    intro_lines:['>_ 系统初始化...','>_ 加载个人资料..........','>_ 身份识别：达里扎波夫·奇米特多尔日','>_ 角色：AI / 专家 / 企业家','>_ 状态：在线  ✓'],

    // ── Links page ──
    lnk_bio_role:'企业家 · AI/ML工程师', lnk_bio_desc:'教育者 · 50多场活动组织者', lnk_bio_prod:'AREY厂牌制作人',
    lnk_s_years:'年', lnk_s_events:'活动', lnk_s_views:'浏览量', lnk_s_pods:'播客',
    lnk_sec_contact:'联系', lnk_sec_social:'社交媒体', lnk_sec_music:'音乐与作品集',
    lnk_btn_call:'打电话', lnk_btn_vk:'VKontakte', lnk_btn_portfolio:'作品集网站',
    lnk_yt_sub:'100万+ 浏览量 · 播客和直播', lnk_bp_sub:'音乐厂牌 · International', lnk_portfolio_sub:'奇米特多尔日工作室 · AI &amp; Events',
    lnk_tag_teacher:'🎓 教育者', lnk_tag_remote:'🌐 远程', lnk_tag_region:'📍 外贝加尔',
    lnk_footer:'达里扎波夫·奇米特多尔日 · 2026',
    lnk_skip:'点击跳过',
    lnk_intro_lines:['>_ 初始化...','>_ 加载资料...','>_ 达里扎波夫·奇米特多尔日','>_ 就绪 ✓'],

    // ── Privacy policy page ──
    pp_back:'奇米特多尔日工作室', pp_label:'// 法律信息',
    pp_title:'隐私<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">政策</span>',
    pp_subtitle:'个人数据处理政策',
    pp_footer:'&copy; 2026 奇米特多尔日工作室。来自赤塔的卓越工程。',
    pp_home:'返回首页'
}
};

/* ── Theme Toggle ── */
(function(){
    var html = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-icon');
    if (!btn) return;
    var saved = localStorage.getItem('theme');
    if (saved === 'light') {
        html.classList.remove('dark');
        html.classList.add('light');
        icon.textContent = 'dark_mode';
    }
    btn.addEventListener('click', function(){
        var isDark = html.classList.contains('dark');
        if (isDark) {
            html.classList.remove('dark');
            html.classList.add('light');
            icon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.remove('light');
            html.classList.add('dark');
            icon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        }
    });
})();

/* ── Language Switcher ── */
var currentLang = localStorage.getItem('siteLang') || 'ru';
var langLabel = document.getElementById('lang-label');
var langToggle = document.getElementById('lang-toggle');
var langMenu = document.getElementById('lang-menu');
var langOptions = document.querySelectorAll('.lang-option');

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    if (langLabel) langLabel.textContent = lang === 'zh' ? 'CN' : lang.toUpperCase();
    langOptions.forEach(function(o){ o.classList.toggle('active', o.dataset.lang === lang); });

    // Apply text translations
    var dict = T[lang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
        var key = el.dataset.i18n;
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Update typing roles
    if (dict.typing_roles) window._typingRoles = dict.typing_roles;

    // Update intro lines
    if (dict.intro_lines) window._introLines = dict.intro_lines;
    if (dict.lnk_intro_lines) window._introLines = dict.lnk_intro_lines;

    // Update dynamic SEO meta tags
    updateSEOMeta(lang);
}

function updateSEOMeta(lang) {
    var descEl = document.querySelector('meta[name="description"]');
    var ogTitleEl = document.querySelector('meta[property="og:title"]');
    var ogDescEl = document.querySelector('meta[property="og:description"]');
    var titleEl = document.querySelector('title');

    // Determine which page we're on
    var path = window.location.pathname;
    var isLinks = path.indexOf('links') !== -1;
    var isPrivacy = path.indexOf('privacy') !== -1;

    var descriptions = {
        ru: isLinks ? 'Дарижапов Чимитдоржи — AI/ML инженер, предприниматель, event-организатор'
           : isPrivacy ? 'Политика в отношении обработки персональных данных — Студия Чимитдоржи'
           : 'Дарижапов Чимитдоржи — предприниматель, AI/ML инженер, преподаватель, организатор 50+ мероприятий федерального и международного уровня.',
        en: isLinks ? 'Darizhapov Chimitdorzhi — AI/ML Engineer, Entrepreneur, Event Organizer'
           : isPrivacy ? 'Personal Data Processing Policy — Chimitdorzhi Studio'
           : 'Darizhapov Chimitdorzhi — Entrepreneur, AI/ML Engineer, Educator, Organizer of 50+ federal and international events.',
        zh: isLinks ? '达里扎波夫·奇米特多尔日 — AI/ML工程师、企业家、活动组织者'
           : isPrivacy ? '个人数据处理政策 — 奇米特多尔日工作室'
           : '达里扎波夫·奇米特多尔日 — 企业家、AI/ML工程师、教育者、组织了50多场联邦和国际级活动。'
    };

    var titles = {
        ru: isLinks ? 'Чимитдоржи — Ссылки'
           : isPrivacy ? 'Политика конфиденциальности | СТУДИЯ ЧИМИТДОРЖИ'
           : 'СТУДИЯ ЧИМИТДОРЖИ | AI Эксперт · Преподаватель · Предприниматель',
        en: isLinks ? 'Chimitdorzhi — Links'
           : isPrivacy ? 'Privacy Policy | CHIMITDORZHI STUDIO'
           : 'CHIMITDORZHI STUDIO | AI Expert · Educator · Entrepreneur',
        zh: isLinks ? '奇米特多尔日 — 链接'
           : isPrivacy ? '隐私政策 | 奇米特多尔日工作室'
           : '奇米特多尔日工作室 | AI专家 · 教育者 · 企业家'
    };

    if (descEl && descriptions[lang]) descEl.setAttribute('content', descriptions[lang]);
    if (ogDescEl && descriptions[lang]) ogDescEl.setAttribute('content', descriptions[lang]);
    if (ogTitleEl && titles[lang]) ogTitleEl.setAttribute('content', titles[lang]);
    if (titleEl && titles[lang]) titleEl.textContent = titles[lang];
}

if (langToggle) {
    langToggle.addEventListener('click', function(e){ e.stopPropagation(); langMenu.classList.toggle('open'); });
}
langOptions.forEach(function(o){
    o.addEventListener('click', function(){ applyLang(this.dataset.lang); langMenu.classList.remove('open'); });
});
document.addEventListener('click', function(){ if (langMenu) langMenu.classList.remove('open'); });

// Apply saved language on load
if (currentLang !== 'ru') applyLang(currentLang);

// Export for external use
window._applyLang = applyLang;
window._i18n = T;
window._typingRoles = T[currentLang].typing_roles;
window._introLines = T[currentLang].intro_lines || T[currentLang].lnk_intro_lines;

})();
