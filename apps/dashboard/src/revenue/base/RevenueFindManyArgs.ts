/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RevenueWhereInput } from "./RevenueWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RevenueOrderByInput } from "./RevenueOrderByInput";

@ArgsType()
class RevenueFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RevenueWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RevenueWhereInput, { nullable: true })
  @Type(() => RevenueWhereInput)
  where?: RevenueWhereInput;

  @ApiProperty({
    required: false,
    type: [RevenueOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RevenueOrderByInput], { nullable: true })
  @Type(() => RevenueOrderByInput)
  orderBy?: Array<RevenueOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RevenueFindManyArgs as RevenueFindManyArgs };
