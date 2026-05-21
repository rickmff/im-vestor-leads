"use client";

import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

// Supported languages
export type Language = "en-US" | "pt-PT";

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
		if (savedLanguage && ["en-US", "pt-PT"].includes(savedLanguage)) {
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
