# Language System Documentation

## Overview
The Best Property Group website now supports both Thai and English languages using a custom i18n (internationalization) system.

## Structure

```
lib/i18n/
├── locales/
│   ├── en.ts          # English translations
│   └── th.ts          # Thai translations
├── config.ts          # Language configuration
└── LanguageContext.tsx # React context for language state
```

## How to Use Translations in Components

### 1. Import the useLanguage hook

```tsx
import { useLanguage } from "@/lib/i18n/LanguageContext";
```

### 2. Use the hook in your component

```tsx
const MyComponent = () => {
  const { t, locale, setLocale } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
    </div>
  );
};
```

### 3. Available Properties

- `t`: Object containing all translations for the current language
- `locale`: Current language code ("en" or "th")
- `setLocale`: Function to change language

## Translation Keys

All translations are organized by section:

- `common`: General UI elements (buttons, labels, etc.)
- `nav`: Navigation menu items
- `hero`: Hero section content
- `about`: About section content
- `features`: Features section content
- `projects`: Projects section content
- `news`: News section content
- `contact`: Contact section content
- `footer`: Footer content

## Adding New Translations

1. Add the English translation in `lib/i18n/locales/en.ts`:
```tsx
export const en = {
  mySection: {
    title: "My Title",
    description: "My Description",
  },
};
```

2. Add the Thai translation in `lib/i18n/locales/th.ts`:
```tsx
export const th: Translations = {
  mySection: {
    title: "หัวข้อของฉัน",
    description: "คำอธิบายของฉัน",
  },
};
```

3. Use in your component:
```tsx
const MyComponent = () => {
  const { t } = useLanguage();
  return <h1>{t.mySection.title}</h1>;
};
```

## Language Switcher

The `LanguageSwitcher` component is already included in the Navbar. Users can switch between Thai and English by clicking the language buttons.

The selected language is persisted in localStorage, so it will be remembered across page reloads.

## Default Language

The default language is set to Thai (`th`) in `lib/i18n/config.ts`:

```tsx
export const defaultLocale: Locale = "th";
```

To change the default, simply update this value to "en".

## TypeScript Support

All translations are fully typed! TypeScript will autocomplete translation keys and show errors if you try to access a key that doesn't exist.

## Example: Complete Component

```tsx
"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ExampleComponent: React.FC = () => {
  const { t, locale } = useLanguage();

  return (
    <section>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
      <button>{t.common.getStarted}</button>
      <p>Current language: {locale}</p>
    </section>
  );
};

export default ExampleComponent;
```

## Notes

- Always use the "use client" directive for components that use the language context
- The LanguageProvider wraps the entire app in layout.tsx
- Translations are loaded synchronously, so there's no loading state to handle
- All text content should use translations for consistency
