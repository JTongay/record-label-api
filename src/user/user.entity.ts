import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';
import { Exclude } from 'class-transformer';
import { compareSync, compare } from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'insert_date',
  })
  insertDate: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_date',
  })
  updatedDate: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  public validatePassword(requestedPassword: string): Promise<boolean> {
    if (!requestedPassword || this.password) {
      return Promise.resolve(false);
    }
    return compare(requestedPassword, this.password);
  }
}
