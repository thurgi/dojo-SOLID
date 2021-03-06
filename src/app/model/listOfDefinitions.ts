/**
 * Centralized configuration
 * Cette API permet de définir les services relatif à la configuration
 *
 * OpenAPI spec version: 0.0.17
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CategoryDef } from './categoryDef';

export interface ListOfDefinitions { 
    /**
     * Token représentant l'application. Il sera utilisé en tant qu'identifiant lors des appels applicatif X-Archemed-Server-Token.
     */
    serverToken?: string;
    categories?: Array<CategoryDef>;
}

