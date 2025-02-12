import { Car } from '../src/Car';
import { describe, beforeEach, expect, test } from '@jest/globals';

describe('Car class', () => {
    let car;

    beforeEach(() => {
        car = new Car(); // Reset car object before each test
    });

    test('should start with a speed of 0', () => {
        expect(car.getSpeed()).toBe(0); // Verify initial speed is 0
    });

    test('should accelerate the car', () => {
        car.accelerate(); // Call accelerate method
        expect(car.getSpeed()).toBe(1); // Speed should be 1 after accelerating
    });

    test('should decelerate the car', () => {
        car.accelerate(); // Start by accelerating once
        car.decelerate(); // Then decelerate once
        expect(car.getSpeed()).toBe(0); // Speed should be 0 after decelerating
    });

    test('should not decelerate below 0 speed', () => {
        car.decelerate(); // Try decelerating when speed is 0
        expect(car.getSpeed()).toBe(0); // Speed should stay at 0
    });
});
