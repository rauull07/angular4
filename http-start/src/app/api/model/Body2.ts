/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Body2 {
    id?: number;

    petId?: number;

    quantity?: number;

    shipDate?: Date;

    /**
     * Order Status
     */
    status?: Body2.StatusEnum;

    complete?: boolean;

}
export namespace Body2 {
    export enum StatusEnum {
        Placed = <any> 'placed',
        Approved = <any> 'approved',
        Delivered = <any> 'delivered'
    }
}
