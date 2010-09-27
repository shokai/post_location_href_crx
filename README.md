post location.href
==================

Description
===========
this is test app for cross-domain XML HTTP Request.


Make Chrome Extension
=====================

    % gem install crxmake
    % rake -T
    % rake

Install
=======

Drag and Drop ./package/test.crx to Chrome.

or

    % open package/test.crx

How it work?
============
It POST document.location.href to http://localhost:8888/page