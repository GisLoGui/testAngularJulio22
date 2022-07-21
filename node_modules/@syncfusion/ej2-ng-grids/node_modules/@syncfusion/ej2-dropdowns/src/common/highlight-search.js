define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function highlightSearch(content, query, ignoreCase, type) {
        revert(content);
        if (query === '') {
            return;
        }
        else {
            var ignoreRegex = ignoreCase ? 'gim' : 'gm';
            query = /^[a-zA-Z0-9- ]*$/.test(query) ? query : query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            var replaceQuery = type === 'StartsWith' ? '^(' + query + ')' : type === 'EndsWith' ? '(' + query + ')$' : '(' + query + ')';
            var pattern = new RegExp(replaceQuery, ignoreRegex);
            var li = content.querySelectorAll('ul li');
            for (var i = 0; i < li.length; i++) {
                var element = li[i];
                element.innerHTML = element.innerHTML.replace(pattern, '<span class="e-highlight">$1</span>');
            }
        }
    }
    exports.highlightSearch = highlightSearch;
    function revert(content) {
        var contentElement = content.querySelectorAll('.e-highlight');
        for (var i = contentElement.length - 1; i >= 0; i--) {
            var parent_1 = contentElement[i].parentNode;
            var text = document.createTextNode(contentElement[i].textContent);
            parent_1.replaceChild(text, contentElement[i]);
        }
    }
});
