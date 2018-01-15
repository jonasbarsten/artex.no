// http://realfavicongenerator.net/

// TITLE

var title = "ArtEx";
DocHead.setTitle(title);


// META

var metaInfo = {name: "description", content: "Programme of Excellence in Performing Arts and Film"};
DocHead.addMeta(metaInfo);

var metaOne = {name: "msapplication-config", content: "/favicon/browserconfig.xml"};
DocHead.addMeta(metaOne);

var metaTwo = {name: "theme-color", content: "#ffffff"};
DocHead.addMeta(metaTwo);

// LINKS

var linkOne = {rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"};
DocHead.addLink(linkOne);

var linkTwo = {rel: "icon", type: "image/png", href: "/favicon/favicon-32x32.png", sizes: "32x32"};
DocHead.addLink(linkTwo);

var linkThree = {rel: "icon", type: "image/png", href: "/favicon/favicon-16x16.png", sizes: "16x16"};
DocHead.addLink(linkThree);

var linkFour = {rel: "manifest", href: "/favicon/manifest.json"};
DocHead.addLink(linkFour);

var linkFive = {rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5"};
DocHead.addLink(linkFive);

var linkSix = {rel: "shortcut icon", href:"/favicon/favicon.ico"};
DocHead.addLink(linkSix);
