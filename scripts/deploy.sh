yarn build && rm build/static/js/*.map && git add build && git commit -m"Update gh pages" && git subtree push --prefix build origin gh-pages