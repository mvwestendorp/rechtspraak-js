import {
    mustHaveTextAndAttributes, unexpectedUri
} from "../../util/validations";
import {getResourceId} from "../convert-to-typed";
import {idResource} from "./standard-resource-object";
import {makeLabel} from "./label";

export type Procedure =
    "procedure#eersteAanlegMeervoudig"
    | "procedure#eersteAanlegEnkelvoudig"
    | "procedure#verzet"
    | "procedure#bodemzaak"
    | "procedure#eersteEnEnigeAanleg"
    | "procedure#voorlopigeVoorziening"
    | "procedure#herziening"
    | "procedure#hogerBeroep"
    | "procedure#voorlopigeVoorzieningbodemzaak"
    | "procedure#vereenvoudigdeBehandeling"
    | "procedure#procesverbaal"
    | "procedure#proceskostenveroordeling"
    | "procedure#versneldeBehandeling"
    | "procedure#schadevergoedingsuitspraak"
    | "procedure#cassatie"
    | "procedure#mondelingeUitspraak"
    | "procedure#hogerBeroepKortGeding"
    | "procedure#wraking"
    ;
// todo check if label in context is correct ;)
export function getSingleProcedure(proc: any, id?: string): Procedure {
    mustHaveTextAndAttributes(proc, true, "rdf:language", "rdfs:label", "resourceIdentifier");
    const language: string = proc["@attributes"]["rdf:language"];
    if (!language) throw new Error("Expected language: " + JSON.stringify(proc));
    const resourceId = getResourceId(proc["@attributes"], id + ": procedure");
    switch (resourceId) {
        case "http://psi.rechtspraak.nl/procedure#eersteAanlegMeervoudig":
            return "procedure#eersteAanlegMeervoudig";
        case "http://psi.rechtspraak.nl/procedure#eersteAanlegEnkelvoudig":
            return "procedure#eersteAanlegEnkelvoudig";
        case "http://psi.rechtspraak.nl/procedure#voorlopigeVoorziening":
            return "procedure#voorlopigeVoorziening";
        case "http://psi.rechtspraak.nl/procedure#verzet":
            return "procedure#verzet";
        case "http://psi.rechtspraak.nl/procedure#bodemzaak":
            return "procedure#bodemzaak";
        case "http://psi.rechtspraak.nl/procedure#eersteEnEnigeAanleg":
            return "procedure#eersteEnEnigeAanleg";
        case "http://psi.rechtspraak.nl/procedure#herziening":
            return "procedure#herziening";
        case "http://psi.rechtspraak.nl/procedure#hogerBeroep":
            return "procedure#hogerBeroep";
        case "http://psi.rechtspraak.nl/procedure#voorlopigeVoorzieningbodemzaak":
            return "procedure#voorlopigeVoorzieningbodemzaak";
        case "http://psi.rechtspraak.nl/procedure#vereenvoudigdeBehandeling":
            return "procedure#vereenvoudigdeBehandeling";
        case "http://psi.rechtspraak.nl/procedure#procesverbaal":
            return "procedure#procesverbaal";
        case "http://psi.rechtspraak.nl/procedure#proceskostenveroordeling":
            return "procedure#proceskostenveroordeling";
        case "http://psi.rechtspraak.nl/procedure#versneldeBehandeling":
            return "procedure#versneldeBehandeling";
        case "http://psi.rechtspraak.nl/procedure#schadevergoedingsuitspraak":
            return "procedure#schadevergoedingsuitspraak";
        case "http://psi.rechtspraak.nl/procedure#cassatie":
            return "procedure#cassatie";
        case "http://psi.rechtspraak.nl/procedure#mondelingeUitspraak":
            return "procedure#mondelingeUitspraak";
        case "http://psi.rechtspraak.nl/procedure#hogerBeroepKortGeding":
            return "procedure#hogerBeroepKortGeding";
        case "http://psi.rechtspraak.nl/procedure#wraking":
            return "procedure#wraking";
        default:
            throw new Error(unexpectedUri("procedure", resourceId, proc["#text"].trim(), id));
    }
}

export function getProcedure(procedure: any[], id?: string): Procedure[] | undefined {
    if (!procedure) return undefined;
    else return procedure.map(p => getSingleProcedure(p, id));
}