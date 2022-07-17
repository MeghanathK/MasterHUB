"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RahulSteps2 = void 0;
const protractor_1 = require("protractor");
class RahulSteps2 {
    captureText() {
        return __awaiter(this, void 0, void 0, function* () {
            var num = (yield Math.floor(Math.random() * 100)) + 1;
            RahulSteps2.text = (yield (0, protractor_1.element)(protractor_1.by.css("label[for='exampleCheck1']")).getText()) + num;
            console.log(RahulSteps2.text);
            //var num = await Math.floor(Math.random() * 100) + 1;
            console.log(yield num);
        });
    }
}
exports.RahulSteps2 = RahulSteps2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFodWxTdGVwczIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwbWV0aG9kcy9SYWh1bFN0ZXBzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBZ0Q7QUFHaEQsTUFBYSxXQUFXO0lBRWQsV0FBVzs7WUFFYixJQUFJLEdBQUcsR0FBRyxDQUFBLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUcsQ0FBQyxDQUFDO1lBQ3BELFdBQVcsQ0FBQyxJQUFJLEdBQUUsQ0FBQSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBQyxHQUFHLENBQUM7WUFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsc0RBQXNEO1lBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUd4QixDQUFDO0tBQUE7Q0FDSjtBQWJELGtDQWFDIn0=