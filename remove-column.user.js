// ==UserScript==
// @name         Table column remover
// @description  Remove a given column from an HTML table. Using here to remove the phonetic column from thai-language.com dictionary results.
// @include      http://thai-language.com/*
// @namespace    script
// @require      https://code.jquery.com/jquery-2.1.3.min.js
// @grant        metadata
// @version      0.1
// ==/UserScript==

$('table.gridview tr td:nth-child(3)').remove();

