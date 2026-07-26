import { computed, reactive, readonly } from 'vue';

export default {
    install(app, options) {
        const state = reactive({
            selectedLanguage: 'en',
        });

        const languages = [
            { code: 'en', name: 'english' },
            { code: 'es', name: 'español' },
            { code: 'fr', name: 'Français' },
            { code: 'zh', name: '中文' },
            { code: 'ar', name: 'عربي' },
            { code: 'uk', name: 'Українська' },
            { code: 'nl', name: 'Nederlands' },
            { code: 'cs', name: 'Čeština' },
            { code: 'id', name: 'Bahasa' },
            { code: 'hu', name: 'Magyar' },
        ];

        const rtlLanguages = ['ar'];

        const languageKeys = languages.map((l) => l.code);

        app.config.globalProperties.$languages = readonly(languages);

        app.config.globalProperties.$selectedLanguage = computed(() => state.selectedLanguage);

        const translations = options.translations;

        // 1. Add a global property or method
        app.config.globalProperties.$t = function (codeOrEnglish) {
            if (state.selectedLanguage === undefined) {
                throw new Error('Language not set');
            }

            const translation = translations.find((t) => t.en === codeOrEnglish || t.code === codeOrEnglish);
            if (translation) {
                const localTranslation = translation[state.selectedLanguage];
                if (localTranslation) {
                    return localTranslation;
                }

                return translation.en;
            }

            return codeOrEnglish;
        };

        app.config.globalProperties.$setLanguage = function (languageCode) {
            if (languageKeys.includes(languageCode) === false) {
                throw new Error('Language not supported');
            }

            state.selectedLanguage = languageCode;
            document.documentElement.lang = languageCode;
            document.documentElement.dir = rtlLanguages.includes(languageCode) ? 'rtl' : 'ltr';
        };
    },
};
