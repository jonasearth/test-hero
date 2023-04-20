import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { HeroService } from './hero.service';
import { Hero } from './schema/hero.schema';

@Controller('api/hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  get(@Param('id') id: string, @Res() resp: Response) {
    const hero = this.heroService.getHero(id);
    if (!hero) {
      return resp.status(404).send();
    }
    return resp.status(200).send(hero);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  list() {
    return this.heroService.listHero();
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body('name') name: string,
    @Res() resp: Response,
  ) {
    const hero = this.heroService.updateHero(id, name);
    if (!hero) {
      return resp.status(404);
    }
    return resp.status(200).send(hero);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() hero: Hero) {
    return this.heroService.createHero(hero);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string, @Res() resp: Response) {
    const hero = this.heroService.getHero(id);
    if (!hero) {
      return resp.status(404);
    }
    return resp.status(200).send(hero);
  }
}
