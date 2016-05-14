var lookup = require('country-data').lookup;
var langs = require('langs');

module.exports = {   normalizeLanguage, normalizeLocale, addLanguage };



function normalizeLanguage(language){
  language = language.toLowerCase() || 'en';

  //add language code if any
  lookupObj = [];
  if(language.length == 3){
    lookupObj = ['2', language.toLowerCase()];
  }
  else if(language.length > 3){
    lookupObj = ['name', language[0].toUpperCase() + language.substr(1).toLowerCase()];
  }

  if(lookupObj.length && (lang = langs.where(lookupObj[0], lookupObj[1]))){
    language = lang[1];
  }

  return language;

}


function addLanguage(locale, language){
  var locale = normalizeLocale(locale);

  if(locale){
    locale.languages.push(normalizeLanguage(language));
    //ensure unique
    locale.languages = locale.languages.filter( function(value, index, self) {
      return self.indexOf(value) === index;
    })
  }

  return locale;

}

function normalizeLocale(locale, language){

  var lookupObj = {alpha2: locale.toUpperCase()};

  if(locale.length == 3){
    lookupObj = {alpha3: locale.toUpperCase()};
  }
  else if(locale.length > 3){
    lookupObj = {name: locale[0].toUpperCase()+locale.substr(1).toLowerCase()};
  }

  var languages = ['eng'];
  if(!lookupObj.name || lookupObj.name !== 'Global' ){
    // console.log(lookupObj)
    if( (data = lookup.countries(lookupObj)) ){
      // console.log(data);
      locale = data[0].alpha2.toLowerCase();
      languages = data[0].languages.map(function(lang){
        return normalizeLanguage(lang)
      });
    }
  }


  if(language){
    languages.push(normalizeLanguage(language));
    //ensure unique
    languages = languages.filter( function(value, index, self) {
      return self.indexOf(value) === index;
    })
  }

  var obj = {
    locale,
    languages
  };

  return obj;

}
