var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
export var VideoStatus;
(function (VideoStatus) {
    VideoStatus["ENABLED"] = "enabled";
    VideoStatus["DISABLED"] = "disabled";
    VideoStatus["UNPUBLISHED"] = "unpublished";
})(VideoStatus || (VideoStatus = {}));
let HowToVideo = class HowToVideo {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], HowToVideo.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], HowToVideo.prototype, "videoUrl", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], HowToVideo.prototype, "title", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], HowToVideo.prototype, "imageUrl", void 0);
__decorate([
    Column({
        type: "enum",
        enum: VideoStatus,
        default: VideoStatus.UNPUBLISHED
    }),
    __metadata("design:type", String)
], HowToVideo.prototype, "status", void 0);
__decorate([
    Column({ default: false }),
    __metadata("design:type", Boolean)
], HowToVideo.prototype, "isPasswordProtected", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], HowToVideo.prototype, "password", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], HowToVideo.prototype, "createdBy", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], HowToVideo.prototype, "updatedBy", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], HowToVideo.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], HowToVideo.prototype, "updatedAt", void 0);
HowToVideo = __decorate([
    Entity()
], HowToVideo);
export { HowToVideo };
//# sourceMappingURL=HowToVideo.js.map