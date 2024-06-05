import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Elements} from "./models/elements.model";
import {Texts} from "./models/texts.model";
import {Headers} from "./models/headers.model";
import {ElementsService} from "./elements.service";
import {ElementsController} from "./elements.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Elements, Texts, Headers
        ])
    ],
    providers: [ElementsService],
    controllers: [ElementsController],
    exports: [ElementsService]
})

export class ElementsModule {
}