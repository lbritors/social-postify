import { MediasService } from './medias.service';
import { Controller } from '@nestjs/common';

@Controller('medias')
export class MediasController {

  constructor(private readonly MediasService: MediasService) { }
