function consoleStyler (color, background, fontSize, txt){
    var message = "%c" + txt;
    style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};` 
    console.log(message, style);
}

function celebrateStyler(reason){
    var fontStyle = "color: tomato; font-size: 50px";
    if(reason == 'birthday'){
        console.log(`%cHappy birthday`, fontStyle)
    } else if ( reason == "champions"){
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(reason, style);
    }
}
console.log(consoleStyler('#1d5c63','#ede6db','40px','Congrats!'));
celebrateStyler(`'birthday'`);


function styleAndCelebrate(){
    consoleStyler('color', 'background', 'fontSize', 'txt');
    celebrateStyler('reason');
}
console.log(styleAndCelebrate(`'ef7c8e'`, `'fae8e0'`, `'30px'`, `'You made it!'`, `'champions'`));