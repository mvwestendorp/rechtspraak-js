export const _context = {
    "@base": "https://rechtspraak.lawreader.nl/vocab/",
    "schema": "http://schema.org/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "frbr": "http://purl.org/vocab/frbr/core#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "dcterms": "http://purl.org/dc/terms/",
    "psi": "http://psi.rechtspraak.nl/",
    "ecli": "https://e-justice.europa.eu/ecli",
    "cvdr": "http://decentrale.regelgeving.overheid.nl/cvdr/",
    "eu": "http://publications.europa.eu/celex/",
    "tr": "http://tuchtrecht.overheid.nl/",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "lawly": "https://rechtspraak.lawreader.nl/vocab/",
    "ECLI": "https://rechtspraak.lawreader.nl/ecli/ECLI:",
    "_id": "@id",
    "abstract": "dcterms:abstract",

    "muhAccessRights": "lawly:accessRights/",
    "muhCoverage": "lawly:coverage/",
    "muhHasVersion": "lawly:hasVersion/",
    "muhSpatial": "lawly:spatial/",

    "accessRights": {
        "@id": "dcterms:accessRights",
        "@type": "@id"
    },
    "contentModified": {
        "@id": "dcterms:modified",
        "@type": "xsd:dateTime"
    },
    "metadataModified": {
        "@id": "lawly:metadataModified",
        "@type": "xsd:dateTime"
    },

    "coverage": {
        "@id": "dcterms:coverage",
        "@type": "@vocab"
    },
    "nl": {
        "@id": "http://dbpedia.org/resource/Netherlands",
        "rdfs:label": [{"@value": "Nederland", "@language": "nl"}]
    },

    "creator": {
        "@id": "dcterms:creator"
    },
    "date": {
        "@id": "dcterms:date",
        "@type": "xsd:date"
    },
    "htmlIssued": {
        "@id": "lawly:htmlIssued",
        "@type": "xsd:date"
    },
    "hasVersion": "dcterms:hasVersion",
    "issued": {
        "@id": "dcterms:issued",
        "@type": "xsd:date"
    },
    "language": {
        "@id": "dcterms:language",
        "@type": "@id"
    },
    "procedure": {
        "@id": "psi:procedure",
        "@type": "@vocab"
    },
    "eersteAanlegMeervoudig": {
        "@id": "procedure/eersteAanlegMeervoudig",
        "owl:sameAs": "http://psi.rechtspraak.nl/procedure#eersteAanlegMeervoudig",
        "rdfs:label": [{"@value": "Eerste aanleg - meervoudig", "@language": "nl"}]
    },
    "eersteAanlegEnkelvoudig": {
        "@id": "procedure/eersteAanlegEnkelvoudig",
        "owl:sameAs": "http://psi.rechtspraak.nl/procedure#eersteAanlegEnkelvoudig",
        "rdfs:label": [{"@value": "Eerste aanleg - enkelvoudig", "@language": "nl"}]
    },
    "voorlopigeVoorziening": {
        "@id": "procedure/voorlopigeVoorziening",
        "owl:sameAs": "http://psi.rechtspraak.nl/procedure#voorlopigeVoorziening",
        "rdfs:label": [{"@value": "Voorlopige voorziening", "@language": "nl"}]
    },
    "references": "dcterms:references",
    "replaces": {
        "@id": "dcterms:replaces",
        "@type": "@id"
    },
    "spatial": "dcterms:spatial",
    "subject": {
        "@id": "dcterms:subject",
        "@type": "@vocab"
    },
    "bestuursrecht_belastingrecht": {
        "@id": "rechtsgebied#bestuursrecht_belastingrecht",
        "owl:sameAs": "http://psi.rechtspraak.nl/rechtsgebied#bestuursrecht_belastingrecht",
        "rdfs:label": [{"@value": "Bestuursrecht; Belastingrecht", "@language": "nl"}]
    },
    "bestuursrecht": {
        "@id": "rechtsgebied#bestuursrecht_belastingrecht",
        "owl:sameAs": "http://psi.rechtspraak.nl/rechtsgebied#bestuursrecht",
        "rdfs:label": [{"@value": "Bestuursrecht", "@language": "nl"}]
    },

    "title": "dcterms:title",

    "type": {
        "@id": "dcterms:type",
        "@type": "@vocab"
    },
    "uitspraak": {
        "@id": "type/uitspraak",
        "owl:sameAs": "http://psi.rechtspraak.nl/uitspraak",
        "rdfs:label": [{"@value": "Uitspraak", "@language": "nl"}]
    },
    "conclusie": {
        "@id": "type/conclusie",
        "owl:sameAs": "http://psi.rechtspraak.nl/conclusie",
        "rdfs:label": [{"@value": "Conclusie", "@language": "nl"}]
    },


    "zaaknummer": "psi:zaaknummer",
    "dcterms:source": {
        "@type": "@id"
    },
    "dcterms:isReferencedBy": {
        "@type": "@id"
    },
    "dcterms:modified": {
        "@id": "dcterms:modified",
        "@type": "xsd:dateTime"
    },
    "dcterms:issued": {
        "@id": "dcterms:issued",
        "@type": "xsd:date"
    },
    "dcterms:date": {
        "@id": "dcterms:date",
        "@type": "xsd:date"
    },
    "owl:sameAs": {
        "@type": "@id"
    },
    "psi:aanleg": {
        "@type": "@id"
    },

    "psi:gevolg": {
        "@type": "@vocab"
    },

    "bekrachtiging/bevestiging": {
        "@id": "gevolg/bekrachtiging%2Fbevestiging",
        "owl:sameAs": "http://psi.rechtspraak.nl/gevolg#bekrachtiging/bevestiging",
        "rdfs:label": [{"@value": "Bekrachtiging / bevestiging", "@language": "nl"}]
    },


    "psi:typeRelatie": {
        "@type": "@id"
    },
    "cassatie": {
        "@id": "relation/cassatie",
        "owl:sameAs": "http://psi.rechtspraak.nl/cassatie",
        "rdfs:label": [{"@value": "Cassatie", "@language": "nl"}]
    },
    "hogerBeroep": {
        "@id": "relation/hogerBeroep",
        "owl:sameAs": "http://psi.rechtspraak.nl/hogerBeroep",
        "rdfs:label": [{"@value": "Hoger beroep", "@language": "nl"}]
    },

    "Vervangt": "http://purl.org/dc/terms/replaces",
    "Procedure": "http://psi.rechtspraak.nl/procedure",
    "Instantie": "http://purl.org/dc/terms/creator",
    "Zaaknr": "http://psi.rechtspraak.nl/zaaknummer"
};

export default _context;