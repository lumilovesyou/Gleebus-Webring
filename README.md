# Gleebus Webring
A very simple webring

## How to use

1. Add `<script src="https://cdn.jsdelivr.net/gh/lumilovesyou/Gleebus-Webring@main/webring.js"></script>` to your website's head

2. Call the function `gleebusOpen`.

## About

### gleebusOpen

The function `gleebusOpen` as two parameters. The first controls how many pages in the ring you'd like to travel. The optional second parameter controls whether the page is opened in a new tab.

**Examples:**
- `gleebusOpen(1, true)` - The next page in the webring is opened in a new tab.
- `gleebusOpen(-4)` - The page four behind in the webring is opened in the current tab.

## Example Integration

```html
<div>
    <button onclick="gleebusOpen(-1)">Previous</button>
    Gleebus Webring
    <button onclick="gleebusOpen(1)">next</button>
</div>
```