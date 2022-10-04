/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateInvoiceArgs } from "./CreateInvoiceArgs";
import { UpdateInvoiceArgs } from "./UpdateInvoiceArgs";
import { DeleteInvoiceArgs } from "./DeleteInvoiceArgs";
import { InvoiceFindManyArgs } from "./InvoiceFindManyArgs";
import { InvoiceFindUniqueArgs } from "./InvoiceFindUniqueArgs";
import { Invoice } from "./Invoice";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { User } from "../../user/base/User";
import { InvoiceService } from "../invoice.service";

@graphql.Resolver(() => Invoice)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InvoiceResolverBase {
  constructor(
    protected readonly service: InvoiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "any",
  })
  async _invoicesMeta(
    @graphql.Args() args: InvoiceFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Invoice])
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "any",
  })
  async invoices(
    @graphql.Args() args: InvoiceFindManyArgs
  ): Promise<Invoice[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Invoice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "own",
  })
  async invoice(
    @graphql.Args() args: InvoiceFindUniqueArgs
  ): Promise<Invoice | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Invoice)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "create",
    possession: "any",
  })
  async createInvoice(
    @graphql.Args() args: CreateInvoiceArgs
  ): Promise<Invoice> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Invoice)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  async updateInvoice(
    @graphql.Args() args: UpdateInvoiceArgs
  ): Promise<Invoice | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Invoice)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "delete",
    possession: "any",
  })
  async deleteInvoice(
    @graphql.Args() args: DeleteInvoiceArgs
  ): Promise<Invoice | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Customer])
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async customers(
    @graphql.Parent() parent: Invoice,
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    const results = await this.service.findCustomers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Item])
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async items(
    @graphql.Parent() parent: Invoice,
    @graphql.Args() args: ItemFindManyArgs
  ): Promise<Item[]> {
    const results = await this.service.findItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: Invoice): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}