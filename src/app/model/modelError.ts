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

export interface ModelError { 
    /**
     * Message à caractère informatif pour le developpeur.
     */
    message?: string;
    /**
     * 
     */
    type?: string;
    /**
     * Id du wording pour le message d'erreur.
     */
    wordingCode?: string;
    parameters?: { [key: string]: string; };
}

