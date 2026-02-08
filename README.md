<!-- /
├── app/                      # Маршруты и страницы (App Router)
│   ├── layout.tsx            # Главный layout (header/footer)
│   ├── page.tsx              # Главная страница (список объектов)
│   ├── [slug]/               # Динамическая страница объекта
│   │   └── page.tsx
│   ├── not-found.tsx         # 404 страница
│   └── api/                  # Маршруты API (если есть)
│
├── components/               # Повторно используемые компоненты
│   ├── layout/               # Компоненты лэйаута
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── property/             # Компоненты для отображения объектов
│   │   ├── PropertyCard.tsx
│   │   └── PropertyGallery.tsx
│   ├── ui/                   # Общие UI-компоненты (кнопки, инпуты)
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   └── shared/               # Хелперы, которые используются в разных местах
│
├── lib/                      # Утилиты, хелперы, API-клиенты
│   ├── api.ts                # Fetch-функции
│   └── formatters.ts         # Форматирование дат, чисел и т.д.
│
├── public/                   # Статические файлы (изображения, иконки)
│   ├── images/
│   └── favicon.ico
│
├── styles/                   # Глобальные стили, Tailwind, variables
│   ├── globals.css
│   └── property.css
│
├── types/                    # Типы (TypeScript interfaces)
│   └── property.ts
│
├── .env.local                # Переменные окружения
└── next.config.js -->


<!-- ✅ Итого — лучшие практики
Цель	Где хранить
Страницы	app/
Повторные UI-компоненты	components/ui
Компоненты по домену (недвижимость)	components/property
Глобальные лэйауты (header, footer)	components/layout
API-запросы, хелперы	lib/
Типы данных	types/
Статические ресурсы	public/
Глобальные стили	styles/ -->