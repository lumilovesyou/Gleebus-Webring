let webringSites;
let positionInList;

async function loadWebring() {
    webringSites = (await (await fetch("https://raw.githubusercontent.com/lumilovesyou/Gleebus-Webring/refs/heads/main/webring.json")).json())["sites"];
    positionInList = webringSites.indexOf(window.location.hostname);
}

function gleebusOpen(offset, newTab) {
    if (offset) {
        window.open(`https://${getWrapped(webringSites, positionInList + offset)}/`, newTab ? "_blank" : "_self");
    }
}

function getWrapped(array, index) {
  return array[((index % array.length) + array.length) % array.length];
}

loadWebring();