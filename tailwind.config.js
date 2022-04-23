module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			backgroundImage: {
				MovieImg: "url(/src/assets/project-1.png)",
				MovieImgHover: "url(/src/assets/project-1-dark.png)",
				WordleImg: "url(/src/assets/project-2.png)",
				WordleImgHover: "url(/src/assets/project-2-dark.png)",
			},
			screens: {
				betterhover: { raw: "(hover: hover)" },
			},
		},
	},
	plugins: [],
};
