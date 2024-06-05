import {Module} from "@nestjs/common";
import {PageElementsController} from "@/models/pageElements/pageElements.controller";
import {ElementsModule} from "@/models/elements/elements.module";
import {PagesModule} from "@/models/pages/pages.module";
import {PageElementsService} from "@/models/pageElements/pageElements.service";

@Module({
    imports:[
        ElementsModule,
        PagesModule,
    ],
    controllers: [PageElementsController],
    providers: [PageElementsService]
})

export class PageElementsModule {}