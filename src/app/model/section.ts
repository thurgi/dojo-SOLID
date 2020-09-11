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
import { Variable } from './variable';

export interface Section { 
    /**
     * Libellé qui sera montré sur l'IHM
     */
    label?: string;
    variables?: Array<Variable>;
}
