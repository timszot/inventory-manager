import { registerSettings } from "./settings.js";

Hooks.on("ready", async function () {
    registerSettings();
});
