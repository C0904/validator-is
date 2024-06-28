import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { IsType } from './is-type.type';

export function Is(
  type: IsType,
  required: boolean,
  description: string,
): PropertyDecorator {
  return applyDecorators(
    required ? IsNotEmpty() : IsOptional(),
    getValidatorByType(type),
    ApiProperty({
      description,
      required,
    }),
  );
}

function getValidatorByType(
  type: IsType,
): PropertyDecorator {
  if (type === 'number') {
    return IsNumber();
  } else if (type === 'string') {
    return IsString();
  } else if (type === 'boolean') {
    return IsBoolean();
  } else if (type === 'numberString') {
    return IsNumberString();
  } else if(type === 'array') {
    return IsArray();
  } else {
    throw new Error(`Type ${type} is not supported`)
  }
}