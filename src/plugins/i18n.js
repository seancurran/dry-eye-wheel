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
        ];

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

                console.log(`Translation not found for key: ${codeOrEnglish} in Language: ${state.selectedLanguage}`);
                return translation.en;
            }

            console.log(`Translation not found for key: ${codeOrEnglish}`);
            return codeOrEnglish;
        };

        app.config.globalProperties.$setLanguage = function (languageCode) {
            if (languageKeys.includes(languageCode) === false) {
                throw new Error('Language not supported');
            }

            state.selectedLanguage = languageCode;
            console.log('toggled language to:', languageCode);
        };
    },
};
