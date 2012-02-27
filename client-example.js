var htmlparser = Tautologistics.NodeHtmlParser;

function parse(html, cb) {
    var handler = new htmlparser.DefaultHandler(cb);
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(html);
}


var taSource = document.getElementById('source');
var taOutput = document.getElementById('output');

taSource.innerText = testHTML;

parse(testHTML, function (err, dom) {
    if(err) {
        console.error(err);
        return;
    }
    var links = select(dom, 'a');
    console.log(links);

    var log = ["text\t:\thref", '===================='];
    for(var i = 0; i < links.length; i++) {
        var textNode = links[i].children.length ? links[i].children[0] : {};
        var text = textNode.type === 'text' ? textNode.data : '<'+textNode.name+'>';
        log.push(text + "\t:\t" + links[i].attribs.href);
    }
    taOutput.innerText = log.join('\n');

});