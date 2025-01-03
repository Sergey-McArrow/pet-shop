"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHeaders = exports.corsOptions = void 0;
const cors_1 = __importDefault(require("cors"));
const ALLOWED_ORIGIN = "https://pet-shop-ivory-alpha.vercel.app";
const LOCAL_ORIGIN = "http://localhost:5173";
exports.corsOptions = (0, cors_1.default)({
    origin: [ALLOWED_ORIGIN, LOCAL_ORIGIN],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
});
const corsHeaders = (req, res, next) => {
    const origin = req.headers.origin;
    if (origin === ALLOWED_ORIGIN || origin === LOCAL_ORIGIN) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
};
exports.corsHeaders = corsHeaders;
//# sourceMappingURL=cors.js.map