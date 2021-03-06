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

export interface ApplicationDef { 
    /**
     * id unique de l'application. Est utilisé dans le path lors des appels.
     */
    id?: string;
    categories?: Array<CategoryDef>;
}

