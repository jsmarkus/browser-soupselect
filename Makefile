SRC = ./lib/soupselect.js
CLIENT = ./browser-soupselect.js
CLIENT_MIN = ./browser-soupselect.min.js
HTMLPARSER = ./deps/htmlparser/lib/node-htmlparser.js

INTRO = ./build/intro.js
OUTRO = ./build/outro.js

$(CLIENT_MIN): $(CLIENT)
	uglifyjs $(CLIENT) > $@

$(CLIENT): $(INTRO) $(SRC) $(OUTRO) $(INTRO) $(OUTRO) $(HTMLPARSER)
	cat $(HTMLPARSER) $(INTRO) $(SRC) $(OUTRO) > $@

clean:
	rm $(CLIENT) $(CLIENT_MIN) 

.PHONY: clean