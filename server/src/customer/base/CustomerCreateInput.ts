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
import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";
@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => AddressCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => AddressCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  addresses?: AddressCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
    type: () => InvoiceCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => InvoiceCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => InvoiceCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  invoice?: InvoiceCreateNestedManyWithoutCustomersInput;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;
}
export { CustomerCreateInput };
