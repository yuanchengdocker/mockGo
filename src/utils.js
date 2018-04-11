const firstNames = ['张','李','王','袁','郭','易','罗','马','朱','贺']
const numNames =   ['一','二','三','四','五','六','七','八','九','十']

module.exports = {
    randomText (length) {
        var _len = length||5;
        var i=0;
        var _str = "";
        var _base = 20000;
        var _range = 1000;
        while(i < _len){
            i++;
            var _lower = parseInt(Math.random() * _range);
            _str += String.fromCharCode(_base + _lower);
        }
        return _str;
    },
    randomName () {
        let ran1 = parseInt(Math.random()*10);
        let ran2 = parseInt(Math.random()*10);
        return firstNames[ran1]+numNames[ran2]
    }
}