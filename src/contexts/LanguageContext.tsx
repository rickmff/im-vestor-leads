"use client";

import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

// Supported languages
export type Language =
	| "en-US"
	| "pt-PT"
	| "es-ES"
	| "fr-FR"
	| "it-IT"
	| "de-DE";

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
	{ code: "en-US", name: "English (US)", flag: "us" },
	{ code: "pt-PT", name: "Português (PT)", flag: "pt" },
	{ code: "es-ES", name: "Español (ES)", flag: "es" },
	{ code: "fr-FR", name: "Français (FR)", flag: "fr" },
	{ code: "it-IT", name: "Italiano (IT)", flag: "it" },
	{ code: "de-DE", name: "Deutsch (DE)", flag: "de" },
];

type LanguageContextType = {
	language: Language;
	setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
	language: "en-US",
	setLanguage: (_: Language) => {
		// Overridden by the provider
	},
});

export const useLanguage = () => useContext(LanguageContext);

type LanguageProviderProps = {
	children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [language, setLanguage] = useState<Language>("en-US");

	// Load saved language on mount
	useEffect(() => {
		const savedLanguage = localStorage.getItem("language") as Language;
		if (savedLanguage && LANGUAGES.some((l) => l.code === savedLanguage)) {
			setLanguage(savedLanguage);
		}
	}, []);

	// Persist language on change
	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
