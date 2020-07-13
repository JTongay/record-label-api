import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Genre } from '../genre/genre.entity';

@Entity('band')
export class Band {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column()
  country: string;

  @Column({ name: 'date_formed' })
  dateFormed: Date;

  @ManyToMany(type => Genre)
  @JoinTable()
  genres: Genre[];
}
