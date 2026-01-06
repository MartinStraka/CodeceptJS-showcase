import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./tests/*_Test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      browser: (process.env.BROWSER as "chromium" | "firefox" | "webkit") || "chromium",
      url: "https://demoqa.com",
      show: true,
      waitForAction: 500, // Delay (ms) after click
      waitForNavigation: "load",
      waitForTimeout: 30000,
      windowSize: "1920x1080",
      restart: "session"
    },
    REST: {
      endpoint: "https://practice.expandtesting.com/notes/api",
    },
    JSONResponse: {},
    RestHelper: {
      require: "./helpers/RestHelper",
    },
    CommonHelper: {
      require: "./helpers/CommonHelper",
    },
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
      retries: 10,
      ignoredSteps: [
        "dontSeeErrorBrowserConsole"
      ],
    },
    screenshotOnFail: {
      enabled: true,
      uniqueScreenshotNames: true,
    },
    stepByStepReport: {
      enabled: false,
      deleteSuccessful: false,
    },
    /*
        tryTo: {
            enabled: true,
        },
        */
  },
  name: "codeceptjs"
};