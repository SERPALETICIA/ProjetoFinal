import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateTablesInit1732665138144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO public."u4-factory"(name) VALUES
                ('Esportes'),
                ('Cultura'),
                ('Tecnologia'),
                ('Educação'),
                ('Saúde'),
                ('Lazer'),
                
            INSERT INTO public."u4-type"(name) VALUES
                ('Workshop'),
                ('Palestra'),
                ('Feira'),
                ('Seminário'),
                ('Show');
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public."u4-factory"
            DELETE FROM public."u4-type"
            `);
    }

}
