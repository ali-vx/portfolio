module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			backgroundImage: {
				MovieImg: "url(/src/assets/project-1.webp)",
				MovieImgHover: "url(/src/assets/project-1-dark.webp)",
				WordleImg: "url(/src/assets/project-2.webp)",
				WordleImgHover: "url(/src/assets/project-2-dark.webp)",
				WikiImg: "url(/src/assets/project-3.webp)",
				WikiImgHover: "url(/src/assets/project-3-dark.webp)",
				ChatImg: "url(/src/assets/project-4.webp)",
				ChatImgHover: "url(/src/assets/project-4-dark.webp)",
				QrImg: "url(/src/assets/project-5.webp)",
				QrImgHover: "url(/src/assets/project-5-dark.webp)",
			},
			screens: {
				betterhover: { raw: "(hover: hover)" },
				max: { max: "768px" },
			},
		},
	},
	plugins: [],
};
