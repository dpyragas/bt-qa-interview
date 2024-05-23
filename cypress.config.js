const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

const dealsBaseUrl =
	"https://business.bt.com/products/broadband-and-internet/deals/";

module.exports = defineConfig({
	viewportWidth: 1440,
	viewportHeight: 1024,
	defaultCommandTimeout: 60000,
	fileServerFolder: ".",
	fixturesFolder: "./cypress/fixtures",
	modifyObstructiveCode: false,
	video: true,
	videosFolder:
		"../../../dist/cypress/packages/app/broadband-acquisition-e2e/videos",
	screenshotsFolder:
		"../../../dist/cypress/packages/app/broadband-acquisition-e2e/screenshots",
	chromeWebSecurity: false,
	e2e: {
		setupNodeEvents(on) {
			const options = {
				...browserify.defaultOptions,
				typescript: require.resolve("typescript"),
			};

			on("file:preprocessor", cucumber(options));
		},
		specPattern: [
			"./cypress/integration/*.{feature,features}",
			"./cypress/integration/**/*.{feature,features}",
		],
		supportFile: "./cypress/support/index.ts",
		excludeSpecPattern: [
			"./cypress/integration/**/*.ts",
			"./cypress/integration/**/**/*.ts",
		],
	},
	env: {
		apig_api_url: "https://api.business.bt.com",
		availability_checker_endpoint: "/broadband-services/graphql",
		cypress_base_deals_url: dealsBaseUrl,
		postcode_checker_endpoint:
			"/common/geographicAddressManagement/v1/geographicAddress?addressSource=OpenReach&postcode=",
	},
});
