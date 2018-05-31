// app/translate/translation.ts

import { InjectionToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from '../../lang/lang-en';
import { LANG_HE_NAME, LANG_HE_TRANS } from '../../lang/lang-he';

// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all translations
const dictionary = {
     'en': LANG_EN_TRANS,
     'he': LANG_HE_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
