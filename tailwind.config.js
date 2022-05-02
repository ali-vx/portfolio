module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			backgroundImage: {
				MovieImg: "url(/src/assets/project-1.png)",
				MovieImgHover: "url(/src/assets/project-1-dark.png)",
				WordleImg: "url(/src/assets/project-2.png)",
				WordleImgHover: "url(/src/assets/project-2-dark.png)",
				WikiImg: "url(/src/assets/project-3.png)",
				WikiImgHover: "url(/src/assets/project-3-dark.png)",
				ChatImg: "url(/src/assets/project-4.png)",
				ChatImgHover: "url(/src/assets/project-4-dark.png)",
				QrImg: "url(/src/assets/project-5.png)",
				QrImgHover: "url(/src/assets/project-5-dark.png)",
			},
			screens: {
				betterhover: { raw: "(hover: hover)" },
			},
		},
	},
	plugins: [],
};
