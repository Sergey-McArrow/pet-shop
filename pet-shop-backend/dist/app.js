var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { getAllCategoriies } from './src/controllers/catgories';
const prisma = new PrismaClient();
dotenv.config();
const app = express();
const PORT = process.env.PORT;
if (!PORT)
    throw new Error('Cannot get .env variable');
app.use(cors({ origin: '*' }));
app.use(express.urlencoded());
app.use(express.json());
app.get('/categories/all', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    getAllCategoriies(_req, res);
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(PORT, () => {
            console.log(`\nServer started on ${PORT} port...`);
        });
    }
    catch (err) {
        console.log(err);
    }
});
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQTtBQUM3QixPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFDdkIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUUvRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUVmLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFBO0FBQ3JCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO0FBRTdCLElBQUksQ0FBQyxJQUFJO0lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0FBRXRELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM3QyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLE1BQU0sS0FBSyxHQUFHLEdBQVMsRUFBRTtJQUN2QixJQUFJLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsSUFBSSxVQUFVLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUE7QUFDRCxLQUFLLEVBQUUsQ0FBQSJ9