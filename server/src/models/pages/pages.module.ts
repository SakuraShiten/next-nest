import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PagesService} from "./pages.service";
import {Pages} from "./models/pages.model";
import {PagesController} from "./pages.controller";
import {ElementsModule} from "@/models/elements/elements.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Pages]),
        ElementsModule
    ],
    providers: [
        PagesService
    ],
    exports: [PagesService],
    controllers: [PagesController],
})
export class PagesModule {
}