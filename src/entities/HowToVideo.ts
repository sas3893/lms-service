import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum VideoStatus {
  ENABLED = "enabled",
  DISABLED = "disabled",
  UNPUBLISHED = "unpublished",
}

@Entity()
export class HowToVideo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  videoUrl!: string;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'varchar', length: 255 }) // <-- fix here
  imageUrl!: string;

  @Column({
    type: "enum",
    enum: VideoStatus,
    default: VideoStatus.UNPUBLISHED
  })
  status!: VideoStatus;

  @Column({ default: false })
  isPasswordProtected!: boolean;

  @Column({ nullable: true })
  password?: string;

  @Column()
  createdBy!: string;

  @Column()
  updatedBy!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}