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
import { Section } from './section';

export interface CategoryVar { 
    /**
     * id unique de l'application
     */
    id?: string;
    /**
     * Libellé qui sera montré sur l'IHM
     */
    label?: string;
    sections?: Array<Section>;
}

