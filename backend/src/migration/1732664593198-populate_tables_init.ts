import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateTablesInit1732664593198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE "public"."u4-type" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" varchar NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                PRIMARY KEY ("id")
            );

            CREATE TABLE "public"."u4-factory" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" varchar NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                PRIMARY KEY ("id")
            );

            CREATE TABLE "public"."u4-model" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" varchar NOT NULL,
                "factory-id" uuid NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "FK-FACTORY" FOREIGN KEY ("factory-id") REFERENCES "public"."u4-factory"("id"),
                PRIMARY KEY ("id")
            );

            CREATE TABLE "public"."u4-event" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "description" text NOT NULL,
                "year-factory" integer NOT NULL,
                "year-model" integer NOT NULL,
                "type-id" uuid NOT NULL,
                "model-id" uuid NOT NULL,
                "photo" varchar NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "FK-TYPE" FOREIGN KEY ("type-id") REFERENCES "public"."u4-type"("id"),
                CONSTRAINT "FK-MODEL" FOREIGN KEY ("model-id") REFERENCES "public"."u4-model"("id"),
                PRIMARY KEY ("id")
            );

            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE "public"."u4-event";
            DROP TABLE "public"."u4-type";
            DROP TABLE "public"."u4-model";
            DROP TABLE "public"."u4-factory"
            `)
    }

}
