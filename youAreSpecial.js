//patch for https://thetravelers.online/ engine
//created by slippyice

//apply data
var appdata_str = ENGINE.applyData.toString();
var appdata_rem = 'YOU.char = "<b>" + WORLD.TILES.traveler + "</b>";';
var appdata_add = 'YOU.char = YOU.char;';
appdata_str = appdata_str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'');//remove comments
appdata_str = appdata_str.replace(/\n/g, '');//remove line breaks
appdata_str = appdata_str.replace(/\s\s/g,'');//remove unnessesary whitespace
appdata_str = appdata_str.replace(appdata_rem, appdata_add);
ENGINE.applyData = eval('('+appdata_str+')');

//blink
var blink_str = ENGINE.applyData.toString();
var blink_rem = '"<b>" + YOU.char + "</b>"';
var blink_add = 'YOU.char';
blink_str = blink_str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'');//remove comments
blink_str = blink_str.replace(/\n/g, '');//remove line breaks
blink_str = blink_str.replace(/\s\s/g,'');//remove unnessesary whitespace
blink_str = blink_str.replace(blink_rem, blink_add);
ENGINE.blink = eval('('+blink_str+')');
