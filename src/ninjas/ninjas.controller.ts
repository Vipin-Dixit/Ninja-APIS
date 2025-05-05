import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas() {
    return [];
  }

  @Get(':id')
  getNinjaById(@Param('id') id:string, @Query('type') type:string) {
    console.log(`id`);
    console.log(id);
    return {id, type};
  }
}
