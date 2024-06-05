import {ElementsService} from "./elements.service";
import {Controller} from "@nestjs/common";

@Controller('elements')
export class ElementsController {
    constructor(private readonly elementsService: ElementsService) {
    }
}