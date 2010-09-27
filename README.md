post location.href
==================

Description
===========
test app for cross-domain XML HTTP Request.


Make Chrome Extension
=====================

    % gem install crxmake
    % rake -T
    % rake

Install
=======

Drag and Drop ./package/post_location_href.crx to Chrome.

or

    % open package/post_location_href.crx

How it work?
============
It POST document.location.href to http://localhost:8888/page