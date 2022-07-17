"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const RahulSteps_1 = require("../Stepmethods/RahulSteps");
const RahulSteps2_1 = require("../Stepmethods/RahulSteps2");
const r1 = new RahulSteps_1.RahulSteps();
const r2 = new RahulSteps2_1.RahulSteps2();
(0, cucumber_1.Then)('Submit it in password section', function () {
    r1.submitpass(RahulSteps2_1.RahulSteps2.text);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFodWxkZWZpbmF0aW9uMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBkZWZpbmF0aW9uL1JhaHVsZGVmaW5hdGlvbjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBdUQ7QUFHdkQsMERBQW9EO0FBQ3BELDREQUFxRDtBQUVyRCxNQUFNLEVBQUUsR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixNQUFNLEVBQUUsR0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUUzQixJQUFBLGVBQUksRUFBQywrQkFBK0IsRUFBRTtJQUNsQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHaEMsQ0FBQyxDQUFDLENBQUMifQ==