import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'insert_date'})
  insertDate: Date;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_date'})
  updatedDate: Date;
}
