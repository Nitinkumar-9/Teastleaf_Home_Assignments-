function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("opening Chrome browser");
    } else {
        console.log("opening other browser: " + browserName);
    }
}

function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        default:
            console.log("Running Smoke Tests by default");
    }
}


launchBrowser("chrome");
launchBrowser("firefox");

runTests("smoke");
runTests("sanity");
runTests("performance");

