import { computed, reactive, readonly } from 'vue';

export default {
    install(app, options) {
        const state = reactive({
            selectedLanguage: 'en',
        });

        const languages = [
            { code: 'en', name: 'english', flag: 'gb' },
            { code: 'es', name: 'español', flag: 'es' },
            { code: 'fr', name: 'Français', flag: 'fr' },
            { code: 'zh', name: '中文', flag: 'cn' },
            { code: 'ar', name: 'عربي', flag: 'sa' },
            { code: 'uk', name: 'Українська', flag: 'ua' },
            { code: 'nl', name: 'Nederlands', flag: 'nl' },
            { code: 'cs', name: 'Čeština', flag: 'cz' },
            { code: 'id', name: 'Bahasa', flag: 'id' },
            { code: 'hu', name: 'Magyar', flag: 'hu' },
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
