# normalize-locale
When dealing with location data, you sometimes want to enter 'Kenya' or 'Ken' or 'KE' and have that normalized for you. Right? Here is a solution!

## Install
npm install --save normalize-locale

## And then have fun :-)

```javascript

var loc = require('normalize-locale');


console.log(loc.normalizeLocale('Kenya'));
console.log(loc.normalizeLocale('KEnyA'));
console.log(loc.normalizeLocale('ke'));
console.log(loc.normalizeLocale('KE'));
console.log(loc.normalizeLocale('KeN'));

//how about normalizing languages
console.log(loc.normalizeLanguage('SW'));
console.log(loc.normalizeLanguage('SWAHILI'));
console.log(loc.normalizeLanguage('SWa'));

//OK, suppose the people of Kenya also speak French too and it is important to capture this data?
console.log(loc.addLanguage('Kenya','French'));

//Cool, But we can also add a locale language in a single line of code
console.log(loc.normalizeLocale('KEnyA','German'));


/*
OUTPUT:

{ locale: 'ke', languages: [ 'en', 'sw' ] }
{ locale: 'ke', languages: [ 'en', 'sw' ] }
{ locale: 'ke', languages: [ 'en', 'sw' ] }
{ locale: 'ke', languages: [ 'en', 'sw' ] }
{ locale: 'ke', languages: [ 'en', 'sw' ] }
sw
sw
sw
{ locale: 'ke', languages: [ 'en', 'sw', 'fr' ] }
{ locale: 'ke', languages: [ 'en', 'sw', 'de' ] }

 */


```
