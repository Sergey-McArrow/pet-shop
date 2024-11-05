import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
export const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: 'pet-shop-backend',
    user: 'mcarrow',
    password: '12345',
    host: 'localhost',
    port: 3333,
    ssl: true,
    clientMinMessages: 'notice',
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUVyRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7SUFDckMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixJQUFJLEVBQUUsU0FBUztJQUNmLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxJQUFJO0lBQ1YsR0FBRyxFQUFFLElBQUk7SUFDVCxpQkFBaUIsRUFBRSxRQUFRO0NBQzVCLENBQUMsQ0FBQSJ9