# Rechtspraak.js
[![Build Status](https://travis-ci.org/digitalheir/rechtspraak-js.svg?branch=master)](https://travis-ci.org/digitalheir/rechtspraak-js)[![npm version](https://badge.fury.io/js/rechtspraak-nl.svg)](https://badge.fury.io/js/rechtspraak-nl)![License](https://img.shields.io/npm/l/rechtspraak-nl.svg)

A bunch of utility functions to work with the open data in [Rechtspraak.nl](http://www.rechtspraak.nl/) and create well-formed JSON-LD.

## Why?
Rechtspraak.nl publishes information about a lot of Dutch court judgments. Although the source XML suggests that the data is distributed as an [RDF](https://www.w3.org/2001/sw/wiki/RDF) graph, it is rife with syntactical errors. Furthermore, Rechtspraak.nl provides no schema for its documents other than an incomplete PDF in natural language. So it's hard to know what to expect, especially for some of the more esoteric metadata fields.

The purpose of this project is to formalize the data model of Rechtspraak.nl. I have done this by analyzing all existing documents (~2 million) on Rechtspraak.nl to generate a [JSON Schema](https://spacetelescope.github.io/understanding-json-schema/) and [Typescript typings](https://www.typescriptlang.org/) for the metadata associated with the court judgments. I have corrected some common errors in the source files (mostly to do with not properly encoding URIs) and generate valid [JSON-LD](http://json-ld.org/) (which is compatible with RDF) from them. 

## Data
A dump of the metadata in sanitized JSON-LD is available at https://rechtspraak.lawreader.nl/_all. This URL will load the complete knowledge graph of Rechtspraak.nl. Be warned that it is multiple gigabyes in size. 

For accessing subsets of the knowledge graph, you can use most of the API from [CouchDB views](http://guide.couchdb.org/draft/views.html), ie: https://rechtspraak.lawreader.nl/_all?limit=100&skip=50 will limit your request to 100 docs after the first 50. Mind that you can also use `startkey` to paginate faster: https://rechtspraak.lawreader.nl/_all?startkey=%22ECLI:NL:CBB:2015:5%22&limit=50 will fetch the first 50 docs starting at [ECLI:NL:CBB:2015:5](https://rechtspraak.lawreader.nl/ecli/ECLI:NL:CBB:2015:5). Note that the documents are ordered alphabetically by their ids.

I try to stick to the vocabularies used in the source documents (`dcterms`, and some from the Dutch government), and also introduce fields from [schema.org]. I've invented my own URIs where appropriate. In time I'm planning to make all of my own URIs resolvable as well.

## Types
Code is written in Typescript, [compiled project](https://www.npmjs.com/package/rechtspraak-nl) supplies `d.ts` typing files.

## JSON Schema
~ ~ TODO ~ ~ (for the impatient, look for source files to generate the JSON-LD document)

## Rechtspraak.nl metadata gotchas

Here is a list of some of the syntactical errors I encountered in the data offering for Rechtspraak.nl, which are sanitized in this work.

* Some `dcterms:type` triples don't have a resourceIdentifier, e.g. [ECLI:NL:RBMNE:2016:1637](http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RBMNE:2016:1637): `<dcterms:type rdf:language="nl" resourceIdentifier="">Uitspraak</dcterms:type>`
* Some docs miss .nl in the URI; eg [ECLI:NL:CBB:2002:AD9059](http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:CBB:2002:AD9059): `psi:type="http://psi.rechtspraak/conclusie"`
* Many URIs aren't encoded properly, most notably the "gevolg" URIs: eg. `http://psi.rechtspraak.nl/gevolg#(Gedeeltelijke) vernietiging en zelf afgedaan`. Considering [the official URI specification](https://tools.ietf.org/rfc/rfc3986.txt), spaces are illegal in URIs.
  * This also applies to some references, eg. in http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:HR:1992:AA2957: `1.0:v:BWB:BWBV0001506&artikel=7 (oud)&g=1992-12-23`
  * Most dramatically, the URI `http://psi.rechtspraak.nl/procedure#&#xA;tussenbeschikking&#xA` contains line feeds (see [ECLI:NL:RBMNE:2016:1780](http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RBMNE:2016:1780))

Some issues derived from [an earlier report](http://leibniz-internship-report.herokuapp.com/rechtspraak.nl#rechtspraak-problems):
* In general, [the W3C RDF validator](http://www.w3.org/RDF/Validator/rdfval?URI=data.rechtspraak.nl%2Fuitspraken%2Fcontent%3Fid%3DECLI%3ANL%3ACBB%3A2010%3ABN1294&PARSE=Parse+URI%3A+&TRIPLES_AND_GRAPH=PRINT_TRIPLES&FORMAT=PNG_EMBED) crashes on input documents
* The subject of a triple is not always clear. There are two dcterms:modified properties described, and it is unclear which one refers to the date on which the document was modified and which one to the date on which the metadata was modified.
* Values are usually not typed, for example in the case of dates.
* Resource identifiers are not always used, when they easily can be. An example is the `dcterms:coverage` property. This might not seem important, such as in the case of dcterms:accessRights, which is fixed to the string literal public. But RDF processors typically do not treat two equal strings literals as the same concept: URIs are used for that. (Also, properties in the Dublin Core normally define a range which usually imply URIs.)
* There are some ECLI identifiers that turn up when searching for documents that have a body, but actually do not have a body. Encountered are:
  * [ECLI:NL:RBNHO:2014:347](http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RBNHO:2014:347)
  * [ECLI:NL:RBAMS:2014:2748](http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RBAMS:2014:2748)
  * [ECLI:NL:GHDHA:2014:1688](http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:GHDHA:2014:1688)
  * [ECLI:NL:RBOVE:2014:2747](http://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RBOVE:2014:2747)

* Property-specific issues:
  * `dcterms:references` prefixes the resourceIdentifier attribute with the namespace of the corpus that the referent is in. This is not properly formed RDF.
  * `dcterms:subject`: when a judgment is about multiple fields, a resource identifier is given that contains both subjects concatenated. An example is http://psi.rechtspraak.nl/rechtsgebied#bestuursrecht_socialezekerheidsrecht. It makes more sense to have one URI for 'bestuursrecht' and one URI for 'socialezekerheidsrecht'.
  * `psi:zaaknummer` doesn't seem to split lists of identifiers correctly. A string like 97/8236 TW, 97/8241 TW is probably two case numbers, not one.
* The XML defines a prefix that refers to the relative URI `bwb-dl`. Prefixing to relative URIs is a practice that has been deprecated by W3C.

## License

[GPL v3](https://www.gnu.org/licenses/gpl.html). Note that this is a viral open source license. If you create derivatives, 
you **must** publish your code under compatible license terms. 
Please support free software. 
