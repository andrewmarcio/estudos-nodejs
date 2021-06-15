import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('products')
class Product {

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    slug: string;
    
    @Column()
    description: string;
    
    @Column('decimal')
    value: number;
    
    @Column('int')
    quantity: number;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}

export default Product;