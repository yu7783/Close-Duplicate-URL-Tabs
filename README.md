# Close-Duplicate-URL-Tabs
This Chrome extension can close duplicate tabs.

#How to use
1. Open the extensions settings page in your Chromium-based browser.
2. Toggle the “Developer mode” switch to “On.”
3. Load the file.
4. Pin this extension and click the icon.
# Close-Duplicate-URL-Tabs
This Chrome extension closes duplicate tabs in Chromium-based browsers.

## How to use
1. Open the extensions settings page in your browser.
2. Enable "Developer mode."
3. Click "Load unpacked" and select the `Close-Duplicate-URL-Tabs` folder.
4. Pin the extension and click the icon.
5. Duplicate tabs in the current window will be closed automatically.

## What it does
- Detects duplicate URLs in each window.
- Keeps the first tab and closes the rest.
- Excludes system URLs like `chrome://`.

## Technical Details
- Uses a two-level `Map` to group tabs by window and URL.
- Implements `async/await` for asynchronous tab queries.
- Developed with AI assistance (Gemini) and manually optimized logic for efficiency.

## Benefits
- Improves browser performance by reducing redundant tabs.
- Helps manage workflow in multi-tab environments.
