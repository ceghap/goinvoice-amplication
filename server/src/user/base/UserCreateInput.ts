/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsJSON } from "class-validator";
import { InvoiceCreateNestedManyWithoutUsersInput } from "./InvoiceCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InvoiceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InvoiceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  invoices?: InvoiceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
