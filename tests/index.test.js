"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../src/app"));
const supertest_1 = __importDefault(require("supertest"));
describe('index', () => {
    it('should return hello response', async () => {
        await (0, supertest_1.default)(app_1.default)
            .get('/')
            .expect(200)
            .expect({ message: 'Hello, world!' });
    });
});
//# sourceMappingURL=index.test.js.map