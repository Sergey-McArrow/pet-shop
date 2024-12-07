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
const prisma = new PrismaClient();
dotenv.config();
const app = express();
const PORT = process.env.PORT;
if (!PORT)
    throw new Error('Cannot get .env variable');
app.use(cors({ origin: '*' }));
app.use(express.urlencoded());
app.use(express.json());
app.get('/categories/all', (_req, res) => {
    function all() {
        return __awaiter(this, void 0, void 0, function* () {
            const all = yield prisma.categories.findMany();
            res.json(all);
        });
    }
    all();
});
app.listen(PORT, () => {
    console.log(`\nServer started on ${PORT} port...`);
});
// const start = async () => {
//   try {
//   } catch (err) {
//     console.log(err)
//   }
// }
// start()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQTtBQUM3QixPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFDdkIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUU3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUVmLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFBO0FBQ3JCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO0FBRTdCLElBQUksQ0FBQyxJQUFJO0lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0FBRXRELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN2QyxTQUFlLEdBQUc7O1lBQ2hCLE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsQ0FBQztLQUFBO0lBQ0QsR0FBRyxFQUFFLENBQUE7QUFDUCxDQUFDLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixJQUFJLFVBQVUsQ0FBQyxDQUFBO0FBQ3BELENBQUMsQ0FBQyxDQUFBO0FBQ0YsOEJBQThCO0FBQzlCLFVBQVU7QUFDVixvQkFBb0I7QUFDcEIsdUJBQXVCO0FBQ3ZCLE1BQU07QUFDTixJQUFJO0FBQ0osVUFBVSJ9