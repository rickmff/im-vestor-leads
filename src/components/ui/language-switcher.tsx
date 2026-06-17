"use client";

import Image from "next/image";

import {
	LANGUAGES,
	type Language,
	useLanguage,
} from "@/contexts/LanguageContext";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";

const languages = LANGUAGES;

const LanguageFlag = ({
	countryCode,
	countryName,
}: {
	countryCode: string;
	countryName: string;
}) => {
	return (
		<Image
			src={`https://flagcdn.com/h60/${countryCode.toLowerCase()}.png`}
			alt={countryName}
			title={countryName}
			width={14}
			height={10}
		/>
	);
};

export const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguage();

	return (
		<Select
			value={language}
			onValueChange={(value) => setLanguage(value as Language)}
		>
			<SelectTrigger className="w-auto px-3">
				<SelectValue>
					<div className="pr-2">
						{language && (
							<LanguageFlag
								countryCode={
									languages.find((l) => l.code === language)?.flag ?? "US"
								}
								countryName={
									languages.find((l) => l.code === language)?.name ??
									"English (US)"
								}
							/>
						)}
					</div>
				</SelectValue>
			</SelectTrigger>
			<SelectContent align="end" alignItemWithTrigger={false}>
				{languages.map((lang) => (
					<SelectItem
						key={lang.code}
						value={lang.code}
						className="flex items-center gap-2"
					>
						<div className="flex items-center gap-2">
							<LanguageFlag countryCode={lang.flag} countryName={lang.name} />
							<span>{lang.name}</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
